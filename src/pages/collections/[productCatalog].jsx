import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Content from "../components/Content";
export default function productCatalog() {
  const router = useRouter();
  const productCatalogType = router.query.productCatalog;
  return (
    <>
      <Breadcrumb productCatalogType={productCatalogType} />
      <Content />
    </>
  );
}
