import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/ProductDetail";
import { supabase } from "@/lib/supabaseClient";
export default function Product({productDetail}) {
  const router = useRouter();
  const product = router.query.product;
  return (
    <>
      <Breadcrumb pathType={product} />
      <ProductDetail productDetail={productDetail} />
    </>
  );
}


export async function getServerSideProps(context) {
  const { product } = context.query;
  let { data } = await supabase.from('products').select().eq('id', product)
  return {
    props: {
      productDetail: data[0]
    },
  }
}
