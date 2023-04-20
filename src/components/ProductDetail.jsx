import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
const sideImgs = [
  "https://product.hstatic.net/200000312481/product/2_455d9e3b637c4c7bb8e54e816d3fe812_master.jpg",
  "https://product.hstatic.net/200000312481/product/ato1021_1_25ab666b4c6241f7ac7f8cb889e334ac_master.jpg",
  "https://product.hstatic.net/200000312481/product/ato1021_2_942b09fb670d46e5beb997c6700407f2_master.jpg",
  "https://product.hstatic.net/200000312481/product/ato1021_3_9a64751fa5954649ae2e6ba0fa879ba8_master.jpg",
  "https://product.hstatic.net/200000312481/product/ato1021_4_669b4be8f6394e359573f09b61dcbcc0_master.jpg",
];

function ProductDetail() {
  const [heroImg, setHeroImg] = useState(sideImgs[0]);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: "7",
        }}
      >
        <Box
          sx={{
            padding: "0 20px",
          }}
        >
          {sideImgs.map((sideImage, index) => (
            <Box
              key={index}
              sx={{
                border: heroImg == sideImage && "1px solid black",
                marginBottom: "12px",
                height: "80px",
              }}
            >
              <Image
                onClick={() => setHeroImg(sideImage)}
                alt="Alt image"
                src={sideImage}
                width={80}
                height={80}
              />
            </Box>
          ))}
        </Box>
        <Box>
          <Image alt="Alt image" src={heroImg} width={700} height={700} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: "3",
        }}
      >
        <ProductDetailInfo
          name="Outerity Double Tee Collection - DJ Bear / Whitecap Gray"
          current_price={"198,000"}
          discount={"-32%"}
          origin_price={"290,000"}
        />
      </Box>
    </Box>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductDetailInfo = ({
  name,
  discount,
  current_price,
  origin_price,
  description,
}) => {
  const sizes = ["S", "M", "L"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        {name}
      </Typography>
      <Divider
        sx={{
          borderStyle: "dashed",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "15px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#f94c43",
            background: "#ededed",
            padding: "8px 15px",
          }}
        >
          {discount}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#ff0000",
            fontWeight: "bold",
            "&::after": {
              content: current_price && `'đ'`,
              position: "absolute",
              textDecoration: "underline",
              fontSize: "12px",
              marginBottom: "5px",
            },
          }}
        >
          {current_price}
        </Typography>
        <Typography
          sx={{
            color: "#777a7b",
            fontSize: "18px",
            textDecorationLine: "line-through",
            "&::after": {
              content: origin_price && `'đ'`,
              position: "absolute",
              textDecoration: "underline",
              fontSize: "12px",
              marginBottom: "5px",
              textDecorationLine: "line-through",
            },
          }}
        >
          {origin_price}
        </Typography>
      </Box>
      <Divider
        sx={{
          borderStyle: "dashed",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "15px 0",
        }}
      >
        {sizes.map((size, index) => (
          <Typography
            key={index}
            sx={{
              color: selectedSize == size ? "white" : "black",
              background: selectedSize == size ? "black" : "white",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #D1D1D1",
              cursor: "pointer",
            }}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Typography>
        ))}
      </Box>
      <Divider
        sx={{
          borderStyle: "dashed",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0",
        }}
      >
        <IconButton
          onClick={() =>
            setQuantity((quantity > 1 && quantity - 1) || quantity)
          }
        >
          <MinimizeIcon />
        </IconButton>
        <TextField
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            width: "100px",
            textAlign: "center",
          }}
          size="small"
          value={quantity}
        />
        <IconButton onClick={() => setQuantity(quantity + 1)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          padding: "10px 0",
        }}
        onClick={handleOpen}
      >
        Mua hàng
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          marginTop: "24px",
        }}
      >
        Mô tả
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ProductDetail;
