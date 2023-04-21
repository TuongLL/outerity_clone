import DropZone from "@/components/DropZone";
import { v4 as uuidv4 } from "uuid";

import LoadingComp from "@/components/LoadingComp";
import { supabase } from "@/lib/supabaseClient";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Row(props) {
  const { collection } = props;
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    console.log(collection);
    setQuantity(() =>
      collection.products.reduce(
        (prev, cur) =>
          prev +
          (cur.sizes?.l || 0) +
          (cur.sizes?.m || 0) +
          (cur.sizes?.s || 0),
        0
      )
    );
  });

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography
            sx={{
              textTransform: "uppercase",
            }}
          >
            {collection.type}
          </Typography>
        </TableCell>
        <TableCell align="right" component="th" scope="row">
          {quantity}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Product List
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell component="th" scope="row" width={150}>
                      Name
                    </TableCell>
                    <TableCell component="th" scope="row" width={300}>
                      Description
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      width={150}
                      align="right"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      width={150}
                      align="right"
                    >
                      Discount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {collection.products.map((product) => {
                    return (
                      <TableRow key={product.id}>
                        <TableCell component="th" scope="row" width={50}>
                          <Box>
                            <img
                              src={product.thumbnail}
                              width={50}
                              height={50}
                              blurDataURL="URL"
                              placeholder="blur"
                            />
                          </Box>
                        </TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          width={300}
                          align="right"
                        >
                          <Typography
                            scope="row"
                            width={300}
                            component="div"
                            noWrap={true}
                          >
                            {product.description}
                          </Typography>
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          width={150}
                          align="right"
                        >
                          {product.price}
                        </TableCell>

                        <TableCell
                          component="th"
                          scope="row"
                          width={150}
                          align="right"
                        >
                          {product.discount}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};
export default function CollapsibleTable({ defaultCollection }) {
  return (
    <Box sx={{ padding: "0 40px" }}>
      <CreateProduct />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell width={"10%"} />
              <TableCell width={"40%"}>Type</TableCell>
              <TableCell width={"50%"} align="right">
                Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {defaultCollection.map((collection) => (
              <Row key={collection.type} collection={collection} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function CreateProduct() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setType("tee");
    setProductName("");
    setDescription("");
    setPrice(0);
    setDiscount(0);
    setThumbnail([]);
    setSubImage([]);
    setOpen(false);
  };
  const [loading, setLoading] = React.useState(false);
  const [type, setType] = React.useState("tee");
  const [productName, setProductName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [subImage, setSubImage] = React.useState([]);

  const fillFullInfo = () => {
    if (
      type &&
      productName != "" &&
      description != "" &&
      price != 0 &&
      !isEmpty(thumbnail) &&
      !isEmpty(subImage)
    ) {
      return true;
    }
    return false;
  };

  const handleSave = async () => {
    if (fillFullInfo() == false) {
      toast.warning("🦄 Hãy điền đầy đủ thông tin!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const thumbnailFileName = uuidv4() + thumbnail[0].name;
      const thumbnailFilePath = `images/${thumbnailFileName}`;
      try {
        setLoading(true);
        const { data, error } = await supabase.storage
          .from("outerity_store_image")
          .upload(thumbnailFilePath, thumbnail[0]);
        const publicThumbnailUrl = `https://${process.env.NEXT_PUBLIC_PROJECTREF}.supabase.co/storage/v1/object/public/outerity_store_image/images/${thumbnailFileName}`;

        const publicSubImageUrls = await Promise.all(
          subImage.map(async (file) => {
            const subImageName = uuidv4() + file.name;
            const subImagePath = `images/${subImageName}`;
            const { data, error } = await supabase.storage
              .from("outerity_store_image")
              .upload(subImagePath, file);
            const publicSubImageUrl = `https://${process.env.NEXT_PUBLIC_PROJECTREF}.supabase.co/storage/v1/object/public/outerity_store_image/images/${subImageName}`;
            return publicSubImageUrl;
          })
        );

        const body = {
          name: productName,
          description,
          discount: discount,
          price,
          type,
          thumbnail: publicThumbnailUrl,
          subimages: {
            sub_1: publicSubImageUrls[0],
            sub_2: publicSubImageUrls[1],
            sub_3: publicSubImageUrls[2],
            sub_4: publicSubImageUrls[3],
          },
        };

        await supabase.from("products").insert(body);
        toast.success("🦄 Thêm sản phẩm thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
        handleClose();
        router.push("/admin/products");
      } catch (err) {
        console.log(err);
        toast.error("🦄 Thêm sản phẩm thất bại!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Thêm sản phẩm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeigt: "bold",
            }}
          >
            Thêm sản phẩm
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value={"tee"}>Tee</MenuItem>
              <MenuItem value={"polo"}>Polo</MenuItem>
              <MenuItem value={"croptop"}>Croptop</MenuItem>
              <MenuItem value={"hoodie-sweater"}>Hoodie-sweater</MenuItem>
              <MenuItem value={"short"}>Short</MenuItem>
              <MenuItem value={"tote-bag"}>Tote bag</MenuItem>
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => setProductName(e.target.value)}
            required
            id="outlined-required"
            label="Tên sản phẩm"
          />
          <TextField
            id="outlined-required"
            label="Mô tả"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <TextField
              label="Giá bán"
              id="outlined-start-adornment"
              // sx={{ m: 1, width: "25ch" }}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">VNĐ</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Discount"
              id="outlined-start-adornment"
              // sx={{ m: 1, width: "25ch" }}
              value={discount}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                "&::after": {
                  content: `'*[1]'`,
                  color: "red",
                },
              }}
            >
              Thumbnail
            </Typography>
            <Box
              sx={{
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dotted #bdbdbd",
              }}
            >
              <DropZone
                files={thumbnail}
                setFiles={setThumbnail}
                maxFiles={1}
                title="Drag 'n' drop one image file here, or click to select files"
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                "&::after": {
                  content: `'*[4]'`,
                  color: "red",
                },
              }}
            >
              Sub Images
            </Typography>
            <Box
              sx={{
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dotted #bdbdbd",
              }}
            >
              <DropZone
                files={subImage}
                setFiles={setSubImage}
                maxFiles={4}
                title="Drag 'n' drop 4 image files here, or click to select files"
              />
            </Box>
          </Box>
          <Button variant="contained" onClick={() => handleSave()}>
            Save
          </Button>
        </Box>
      </Modal>
      {loading && <LoadingComp />}
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await supabase.from("products").select(`*`);
  let defaultCollection = [
    {
      type: "polo",
      products: [],
    },
    {
      type: "tee",
      products: [],
    },
    {
      type: "croptop",
      products: [],
    },
    {
      type: "hoodie-sweater",
      products: [],
    },
    {
      type: "short",
      products: [],
    },
    {
      type: "tote-bag",
      products: [],
    },
  ];
  defaultCollection = defaultCollection.map((collection) => {
    return {
      type: collection.type,
      products: data.filter((product) => product.type == collection.type),
    };
  });
  return {
    props: { defaultCollection: defaultCollection },
  };
}
