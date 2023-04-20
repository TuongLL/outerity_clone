import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
export default function ProductDetail() {
  const router = useRouter();
  const product = router.query.product;
  return (
    <>
      <Breadcrumb pathType={product} />
    </>
  );
}
