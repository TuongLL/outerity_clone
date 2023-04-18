import { useRouter } from "next/router";
export default function productCatalog() {
    const router = useRouter()
    const productCatalogType = router.query.productCatalog
    return <h1>{productCatalogType}</h1>
}