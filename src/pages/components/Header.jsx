import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";

const headerHero = [
  {
    iconImg:
      "https://theme.hstatic.net/200000312481/1000699457/14/policy_icon_1.png?v=231",
    title: "Hotline mua hàng",
    subTitle: "Gọi ngay: 111-111-111",
  },
  {
    iconImg:
      "	https://theme.hstatic.net/200000312481/1000699457/14/policy_icon_2.png?v=231",
    title: "Giao hàng tận nơi",
    subTitle: "Miễn phí từ 5 sản phẩm",
  },
  {
    iconImg:
      "https://theme.hstatic.net/200000312481/1000699457/14/policy_icon_3.png?v=231",
    title: "1 Đổi 1 nếu lỗi hàng",
    subTitle: "Trong vòng 7 ngày",
  },
];

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        justifyContent: "space-between",
        padding: "20px 40px",
      }}
    >
      <Box>
        <Image
          src="https://file.hstatic.net/200000312481/file/newlogoort_5ffe29c58c414ccebc2120bed119c8c0.png"
          width={200}
          height={40}
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        columns={{ xs: 0, sm: 0, md: 9 }}
      >
        {headerHero.map((item) => (
          <Grid
            key={item}
            item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              display: { sm: "none", lg: "flex",
              xs: "none"},
            }}
            xs={4}
            sm={4}
            md={3}
          >
            <Image src={item.iconImg} width={25} height={25} />
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#5f5d5d",
                }}
              >
                {item.subTitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        display={"flex"}
        sx={{
          alignItems: "center",
          gap: "12px",
          minWidth: '200px'
        }}
      >
        <AccountCircleIcon
          sx={{
            fontSize: "30px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <Box
            display="flex"
            sx={{
              gap: "6px",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "#252a2b",
              }}
            >
              Đăng nhập
            </Link>
            <Typography>/</Typography>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "#252a2b",
              }}
            >
              Đăng ký
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Tài khoản của tôi
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minWidth: '100px'
        }}
      >
        <LocalMallIcon
          sx={{
            fontSize: "30px",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          Giỏ hàng
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
