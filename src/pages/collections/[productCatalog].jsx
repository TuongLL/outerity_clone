import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "../../components/Content";
import { supabase } from "@/lib/supabaseClient";
import { ContactSupport } from "@mui/icons-material";
import LoadingComp from "@/components/LoadingComp";
import { indexOf } from "lodash";
import { useEffect } from "react";
export default function productCatalog({ products }) {
  const router = useRouter();
  const productCatalogType = router.query.productCatalog;

  return (
    <>
      <Breadcrumb pathType={productCatalogType} />
      <Content products={products} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { productCatalog } = context.query;
  const defaultCatalog = [
    "tee",
    "polo",
    "croptop",
    "hoodie-sweater",
    "short",
    "tote-bag",
  ];
  if (indexOf(defaultCatalog, productCatalog) == -1) {
    console.log(productCatalog)
    return {
      redirect: {
        permanent: false,
        destination: "./tee",
      },
      props:{},
    }
  } 
  let { data } = await supabase
    .from("products")
    .select()
    .eq("type", productCatalog);
  return {
    props: {
      products: data,
    },
  };
}
