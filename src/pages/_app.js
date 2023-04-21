import "@/styles/globals.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Box>
  );
}
