import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Breadcrumb({ pathType }) {
  const router = useRouter();
  const [pathName, setPathName] = useState([]);
  useEffect(() => {
    const paths = router.asPath.split("/");
    setPathName(paths.slice(1, paths.length - 1));
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          padding: "10px 40px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/collections/tee"
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "black",
            }}
          >
            Trang chủ
          </Link>
          {pathName.map((path,index) => (
            <Link
              underline="hover"
              color="inherit"
              href="/collections/tee"
              style={{
                textDecoration: "none",
                fontSize: "13px",
                color: "black",
              }}
              key={index}
            >
              {path}
            </Link>
          ))}

          <Typography
            sx={{
              color: "#777",
              fontSize: "13px",
              textTransform: "uppercase",
            }}
          >
            {pathType}
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}

export default Breadcrumb;
