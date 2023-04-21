import "@/styles/globals.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
    </Box>
  );
}

