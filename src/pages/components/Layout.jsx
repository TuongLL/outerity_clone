import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import { Box } from "@mui/material";
import Content from "./Content";

function Layout({children }) {
  return (
    <Box>
      {children}
    </Box>
  );
}

export default Layout;
