import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function ProductCard({
  thumbnail,
  name,
  price,
  currentprice,
  id,
  discount,
}) {
  const router = useRouter();
  const handleCardClick = async () => {
    router.push(`../products/${id}`);
  };
  return (
    <Card
      sx={{
        boxShadow: "none",
        cursor: "pointer",
        "&::before": {
          content: discount != 0 && `'${discount}%'`,
          position: "absolute",
          background: "white",
          padding: "6px 12px",
          fontSize: "12px",
          color: "#f94c43",
          fontWeight: "bold",
          margin: "12px",
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia component="img" alt="green iguana" height="100%" src={thumbnail} />
      <CardContent
        sx={{
          padding: "12px 0",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
          component="div"
          noWrap={true}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#f94c43",
              "&::after": {
                content: `'đ'`,
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
              color: "#939393",
              fontSize: "14px",
              textDecorationLine: "line-through",
              "&::after": {
                content: `'đ'`,
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
      </CardContent>
    </Card>
  );
}

export default ProductCard;
