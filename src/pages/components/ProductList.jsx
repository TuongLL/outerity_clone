import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
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
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <ProductCard discount={'-18%'}/>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductList;
