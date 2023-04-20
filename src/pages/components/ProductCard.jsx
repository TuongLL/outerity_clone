import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function ProductCard({ name, current_price, origin_price, image, discount }) {
    console.log(image)
  return (
    <Card
      sx={{
        boxShadow: "none",
        "&::before": {
          content: discount && `"${discount}"`,
          position: "absolute",
          background: "white",
          padding: "6px 12px",
          fontSize: "12px",
          color: "#f94c43",
          fontWeight: "bold",
          margin: "12px",
        },
      }}
    >
      <CardMedia component="img" alt="green iguana" height="100%" src={image} />
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
            {current_price}
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
            {origin_price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
