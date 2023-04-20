import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/ProductDetail";
export default function Product() {
  const router = useRouter();
  const product = router.query.product;
  return (
    <>
      <Breadcrumb pathType={product} />
      <ProductDetail />
    </>
  );
}
