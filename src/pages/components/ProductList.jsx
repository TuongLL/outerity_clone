import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function ProductList() {
  const path = useRouter().asPath.split("/");
  const title = path[path.length - 1];
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
      </Grid>
    </Box>
  );
}

export default ProductList;
