import Description from "@/components/Description";
import RelatedProduct from "@/components/RelatedProduct";
import Specification from "@/components/Specification";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetails = ({ product }) => {
  const {
    id,
    Brand,
    Price,
    "Product Code": productCode,
    "Regular Price": regularPrice,
    Status,
    category,
    description,
    images,
    keyFeatures,
    name,
    rating,
    specification,
    related,
  } = product || {};

  const roundedRating = Math.round(rating);

  return (
    <>
      <Head>
        <title>Product Details | PC Builder</title>
      </Head>
      <main className=" mx-3 lg:mx-auto  max-w-7xl ">
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="p-28">
              <Image
                src={images}
                height={100}
                width={100}
                alt={name}
                layout="responsive"
              />
            </div>
          </div>

          <div>
            <div className="lg:my-14">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <div className="flex justify-start items-center my-2 text-sm flex-wrap">
                <p className="bg-gray-100 py-1 px-3 m-1 ">Price: {Price}</p>
                <p className="bg-gray-100 py-1 px-3 m-1 "></p>
                <p className="bg-gray-100 py-1 px-3 m-1 ">Status: {Status}</p>
                <p className="bg-gray-100 py-1 px-3 m-1 ">
                  Product Code: {productCode}
                </p>
                <p className="bg-gray-100 py-1 px-3 m-1 ">Brand: {Brand}</p>
              </div>

              <div className="flex justify-start items-center font-bold">
                <h2 className="text-xl font-semibold my-1">{"Category: "}</h2>
                <p className="mx-2 p-2">{category}</p>
              </div>

              <h2 className="text-xl font-semibold my-3 lg:my-6">
                Key Features
              </h2>
              <div className="flex justify-start items-start my-2 text-sm flex-wrap flex-col">
                {keyFeatures?.map((feature) => (
                  <p key={feature} className=" pb-2 ">
                    {feature}
                  </p>
                ))}
              </div>

              <div className="flex items-center">
                <p>Rating </p>
                <div className="text-yellow-400 ml-2 flex items-center">
                  {[...Array(roundedRating)]?.map((_, index) => (
                    <AiFillStar key={index} />
                  ))}
                  {[...Array(Math.max(5 - roundedRating, 0))].map(
                    (_, index) => (
                      <AiOutlineStar key={index} />
                    )
                  )}
                </div>
              </div>

              <div className="lg:my-10  my-5">
                <button className="py-3 px-10 rounded-md bg-black text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-6 ">
            <Specification specification={specification} />

            <Description description={description} />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.URL}`);
    const productsRes = await res.json();

    const productIds = productsRes?.map((product) => ({
      params: { productId: product.id.toString() },
    }));

    return {
      paths: productIds,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const { productId } = params;

  try {
    const res = await fetch(`${process.env.URL}/${productId.toString()}`);

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const product = await res.json();

    return {
      props: {
        product: product,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
