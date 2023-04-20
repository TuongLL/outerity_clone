import { useRouter } from "next/router";
import Layout from "../components/Layout";
export default function productCatalog() {
    const router = useRouter()
    const product = router.query.product
    return <>{product}</>
}