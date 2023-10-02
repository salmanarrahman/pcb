import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { id, Price, images, name, rating } = product || {};

  const roundedRating = Math.round(rating);

  return (
    <div className="relative">
      <div className="group relative border px-3 lg:h-[400px]">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 p-6 ">
          <Image
            src={images}
            alt={name}
            height={100}
            width={100}
            layout="responsive"
          />
        </div>
        <div className="border-t py-2">
          <h3 className=" text-gray-500 hover:text-black duration-300">
            <Link href={`/products/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>

          <div className="flex lg:hidden justify-between w-full items-center">
            <p className="text-xl font-bold text-[#EE4B23]">{Price}</p>

            <div className="text-yellow-400 flex items-center">
              {[...Array(roundedRating)].map((_, index) => (
                <AiFillStar key={index} />
              ))}
              {[...Array(Math.max(5 - roundedRating, 0))].map((_, index) => (
                <AiOutlineStar key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-3 w-full ">
          <div className="hidden lg:flex justify-between w-full items-center px-3">
            <p className="text-xl font-bold text-[#EE4B23]">{Price}</p>
            <div className="text-yellow-400 flex items-center">
              {[...Array(roundedRating)].map((_, index) => (
                <AiFillStar key={index} />
              ))}
              {[...Array(Math.max(5 - roundedRating, 0))].map((_, index) => (
                <AiOutlineStar key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
