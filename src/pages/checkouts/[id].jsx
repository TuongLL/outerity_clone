import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [phoneValidated, setPhoneValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const validateEmail = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setEmailValidated(!regex.test(email));
  };
  const validatePhone = () => {
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    console.log(regex.test(phone));
    setPhoneValidated(!regex.test(phone));
  };
  const router = useRouter();
  const orderId = router.query.id;
  return (
    <Box
      display={"flex"}
      sx={{
        minHeight: "calc(100vh - 100px)",
      }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        validateEmail();
        validatePhone();
      }}
    >
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "46px",
            fontWeight: "bold",
          }}
        >
          Outerity
        </Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Họ và tên"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <Box
          display={"flex"}
          sx={{
            gap: "12px",
          }}
        >
          <TextField
            fullWidth
            error={emailValidated}
            helperText={emailValidated && "Incorrect entry."}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            error={phoneValidated}
            helperText={
              phoneValidated && "Incorrect entry. Example: 123-456-7890"
            }
            id="outlined-basic"
            label="Số điện thoại"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Địa chỉ"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Box
          sx={{
            marginLeft: "auto",
          }}
        >
          <Button
            sx={{
              padding: "10px 20px",
            }}
            variant="contained"
            type="submit"
          >
            Hoàn tất đơn hàng
          </Button>
        </Box>
      </Box>
      <Box
        flex={1}
        padding={"40px"}
        sx={{
          backgroundColor: "#fafafa",
          borderLeft: "1px solid #e1e1e1",
        }}
      >
        <Box
          display="flex"
          gap="12px"
          marginBottom={"12px"}
          alignItems={"center"}
        >
          <Box display="flex" flex={8} gap="12px" alignItems={"center"}>
            <Box
              width="100px"
              sx={{
                border: "1px solid #e1e1e1",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  src="https://product.hstatic.net/200000312481/product/ato1021_1_25ab666b4c6241f7ac7f8cb889e334ac_master.jpg"
                  alt="Alt image"
                  height="100px"
                />
              </Card>
            </Box>
            <Typography>
              Outerity Double Tee Collection - DJ Bear / Dark Slate
            </Typography>
          </Box>
          <Box flex={3} width="100%" display="flex">
            <Typography
              sx={{
                textAlign: "end",
                width: "100%",
                fontSize: "16px",
                "&::after": {
                  content: `'đ'`,
                  position: "absolute",
                  textDecoration: "underline",
                  fontSize: "16px",
                  marginBottom: "5px",
                },
              }}
            >
              9,500,000
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box display="flex" gap="12px" margin={"12px 0"}>
          <Box flex={7}>
            <TextField label="Mã giảm giá" variant="outlined" fullWidth />
          </Box>
          <Button variant="contained">Sử dụng</Button>
        </Box>
        <Box></Box>
        <Divider />
        <Box margin={"24px 0"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#e1e1e1",
              }}
            >
              Tạm tính
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                "&::after": {
                  content: `'đ'`,
                  position: "absolute",
                  textDecoration: "underline",
                  fontSize: "16px",
                  marginBottom: "5px",
                },
              }}
            >
              9,500,000
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#e1e1e1",
              }}
            >
              Phí vận chuyển
            </Typography>
            <Typography>_</Typography>
          </Box>
        </Box>
        <Divider />

        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          margin={"12px 0"}
        >
          <Typography>Tổng cộng</Typography>
          <Typography
            sx={{
              fontSize: "24px",
              "&::after": {
                content: `'đ'`,
                position: "absolute",
                textDecoration: "underline",
                fontSize: "16px",
                marginBottom: "5px",
              },
            }}
          >
            9,500,000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
