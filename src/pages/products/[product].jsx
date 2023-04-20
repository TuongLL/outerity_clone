import { useRouter } from "next/router";
import Layout from "../components/Layout";
export default function ProductDetail() {
    const router = useRouter()
    const product = router.query.product
    return <>{product}</>
}