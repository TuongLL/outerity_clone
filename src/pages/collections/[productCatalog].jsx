import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "../../components/Content";
import { supabase } from "@/lib/supabaseClient";
import { ContactSupport } from "@mui/icons-material";
export default function productCatalog({products}) {
  console.log(products)
  const router = useRouter();
  const productCatalogType = router.query.productCatalog;
  return (
    <>
      <Breadcrumb pathType={productCatalogType} />
      <Content products={products}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const { productCatalog } = context.query;
  console.log(productCatalog)
  let { data } = await supabase.from('products').select().eq('type', productCatalog)
  return {
    props: {
     products: data
    },
  }
}
