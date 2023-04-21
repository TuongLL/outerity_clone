import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "collections/tee",
    },
    props: {},
  };
}
