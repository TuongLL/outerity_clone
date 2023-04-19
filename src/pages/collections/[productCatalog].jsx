import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Layout from "../components/Layout";
export default function productCatalog() {
    const router = useRouter()
    const productCatalogType = router.query.productCatalog
    console.log(productCatalogType)
    return <Layout productCatalogType={productCatalogType}/>
}