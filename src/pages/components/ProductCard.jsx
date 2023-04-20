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

function ProductCard({ discount }) {
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
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        src="https://product.hstatic.net/200000312481/product/1_f5c33d47cc1444899e9beda476ce76c7_grande.jpg"
      />
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
          ACUTE COLOR TEE / WHITE COLOR
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
            188,000
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
            230,000
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
