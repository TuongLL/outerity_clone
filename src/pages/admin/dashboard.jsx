import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import DropZone from "@/components/DropZone";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { isEmpty } from "lodash";

function createData(props) {
  return {
    ...props,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
          {row.type}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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
                      Amount
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
                  <TableRow>
                    <TableCell component="th" scope="row" width={50}>
                      <Box>
                        <Image src={row.image} width={50} height={50} />
                      </Box>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
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
                        {row.description}
                      </Typography>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      width={150}
                      align="right"
                    >
                      {row.amount}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      width={150}
                      align="right"
                    >
                      {row.price}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      width={150}
                      align="right"
                    >
                      {row.discount}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData({
    type: "polo",
    image:
      "https://product.hstatic.net/200000312481/product/caac735618d7db8982c6_0806a6f9da1045fc93f88b0343bc7f23_grande.jpg",
    name: "CROSS CUT POLO / Black-Grey Color",
    price: "275,000₫",
    path: "cross-cut-polo-black-grey-color",
    discount: "-18%",
    description:
      "🔹 Bảng size OuterityS : Dài 69 Rộng 52.5 | 1m50 - 1m65, 45 - 55KgM : Dài 73 Rộng 55 | 1m60 - 1m75, 50 - 65KgL: Dài : 76.5 Rộng: 57.5 | 1m7 - 1m8, 65Kg - 80Kg👉 Nếu chưa biết lựa size bạn có thể inbox để được chúng mình tư vấn.🔹 Chính sách đổi trả Outerity.– Miễn phí đổi hàng cho khách mua ở Outerity trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, nhầm size.- Quay video mở sản phẩm khi nhận hàng, nếu không có video unbox, khi phát hiện lỗi phải báo ngay cho Outerity trong 1 ngày tính từ ngày giao hàng thành công. Qua 1 ngày chúng mình không giải quyết khi không có video unbox.– Sản phẩm đổi trong thời gian 3 ngày kể từ ngày nhận hàng– Sản phẩm còn mới nguyên tem, tags, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.👉 Đặc biệt:– Tất cả sản phẩm ver 3.0 sẽ được hỗ trợ trả hàng hoàn tiền trong vòng 05 ngày kể từ ngày nhận hàng nếu có trải nghiệm không tốt, không hài lòng về sản phẩm– Chấp nhận trả hàng hoàn tiền với sản phẩm đã qua sử dụng, không còn nguyên tag tuy nhiên sản phẩm phải còn nguyên vẹn, không bị rách, bung chỉ, bạc màu do quá trình sử dụng🔹Liên hệ: 0862642568/ Web / Outerity.com/ IG / @Outerity.sg/ FB / Outerity",
  }),
];

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
export default function CollapsibleTable() {
  return (
    <Box sx={{ padding: "0 40px" }}>
      <CreateProduct />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell width={50} />
              <TableCell>Type</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function CreateProduct() {
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
      productName &&
      description &&
      price &&
      !isEmpty(thumbnail) &&
      !isEmpty(subImage)
    )
      return true;
    return false;
  };

  const handleSave = async () => {
    console.log("Saved");
    const fileName = thumbnail[0].name;
    const filePath = `images/${fileName}`;

    console.log(type, productName, description, price, discount);
    const { data, error } = await supabase.storage
      .from("outerity_store_image")
      .upload(filePath, thumbnail[0]);

    if (error) {
      console.error(error);
    } else {
      const { data: getPublicUrl } = await supabase.storage
        .from("outerity_store_image")
        .getPublicUrl(filePath);
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
                  content: `'*'`,
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
                  content: `'*'`,
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
          <Button
            variant="contained"
            onClick={() => fillFullInfo() && handleSave()}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
}
