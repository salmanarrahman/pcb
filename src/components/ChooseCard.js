import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseCard = () => {
  return (
    <div className="flex justify-between items-center border shadow-md rounded-md my-4">
      <div className="flex items-center">
        <Image
          src={
            "https://www.startech.com.bd/image/cache/catalog/cpu-cooler/cryorig/str4/cryorig-socket-str4-kit-228x228.jpg"
          }
          width={150}
          height={150}
          alt=""
        />

        <div className="ml-3">
          <Link href={"/"}>
            <h2 className="font-bold p-1">
              CRYORIG Socket sTR4 (AMD Threadripper) Upgrade Kit
            </h2>
          </Link>
          <ul className="text-sm text-gray-500 p-1">
            <li> * Compatible R1, C1,H5 series, H7 Quad Lumi</li>
            <li> * Compatible R1, C1,H5 series, H7 Quad Lumi</li>
            <li> * Compatible R1, C1,H5 series, H7 Quad Lumi</li>
            <li> * Compatible R1, C1,H5 series, H7 Quad Lumi</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-11">
        <p className="text-xl font-bold">600tk</p>
        <button className="py-2 px-6 bg-black text-white font-bold rounded-md">
          Add
        </button>
      </div>
    </div>
  );
};

export default ChooseCard;
