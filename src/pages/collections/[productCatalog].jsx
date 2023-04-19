import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/Header";
export default function productCatalog() {
    const router = useRouter()
    const productCatalogType = router.query.productCatalog
    return <Box>
        <Header />
    </Box>
}