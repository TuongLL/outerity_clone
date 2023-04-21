import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ProductCard from "./ProductCard";
import { isEmpty } from "lodash";


function ProductList({ products }) {
  const path = useRouter().asPath.split("/");
  const title = path[path.length - 1];
  return (
    <Box
      sx={{
        flex: "8",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          {title}
        </Typography>
      </Box>
      {isEmpty(products) ? (
        <Typography>Chưa có sản phẩm nào trong danh mục này</Typography>
      ) : (
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((item, index) => (
            <Grid key={index} item xs={2} sm={4} md={3}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ProductList;
