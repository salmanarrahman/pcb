import { Inter } from "next/font/google";
import FeaturedProducts from "@/components/FeaturedProducts";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productsRes }) {
  console.log(productsRes);
  return (
    <>
      <Head>
        <title>PC Builder | Build Your Dream PC</title>
      </Head>
      <main className={`${inter.className}`}>
        <FeaturedProducts products={productsRes} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.URL}`);
    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    console.log(res.message);
    const productsRes = await res.json();

    return {
      props: {
        productsRes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
