import { supabase } from "@/lib/supabaseClient";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";


function ProductDetail({ productDetail }) {
  const [heroImg, setHeroImg] = useState(productDetail.thumbnail);

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
          {Object.values(productDetail.subimages).map((subImage, index) => (
            <Box
              key={index}
              sx={{
                border: heroImg == subImage && "1px solid black",
                marginBottom: "12px",
                height: "80px",
              }}
            >
              <Image
                onClick={() => setHeroImg(subImage)}
                alt="Alt image"
                src={subImage}
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
          name={productDetail.name}
          discount={productDetail.discount}
          price={productDetail.price}
          currentprice={productDetail.currentprice}
          description={productDetail.description}
          id={productDetail.id}
        />
      </Box>
    </Box>
  );
}

const ProductDetailInfo = ({
  name,
  discount,
  currentprice,
  price,
  description,
  id,
}) => {
  const router = useRouter()
  const sizes = ["S", "M", "L"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const [open, setOpen] = React.useState(false);

  const handleBuy = async () => {
    const body = {
      quantity,
      size: selectedSize,
      productid: id,
    };
    const {data} = await supabase.from("checkoutorders").insert(body).select();
    router.push(`../checkouts/${data[0].id}`)
    
  };
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
          {discount}%
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#ff0000",
            fontWeight: "bold",
            "&::after": {
              content: currentprice && `'đ'`,
              position: "absolute",
              textDecoration: "underline",
              fontSize: "12px",
              marginBottom: "5px",
            },
          }}
        >
          {currentprice}
        </Typography>
        <Typography
          sx={{
            color: "#777a7b",
            fontSize: "18px",
            textDecorationLine: "line-through",
            "&::after": {
              content: price && `'đ'`,
              position: "absolute",
              textDecoration: "underline",
              fontSize: "12px",
              marginBottom: "5px",
              textDecorationLine: "line-through",
            },
          }}
        >
          {price}
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
        onClick={handleBuy}
      >
        Mua hàng
      </Button>
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
