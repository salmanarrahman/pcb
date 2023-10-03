import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/products?category=CPU/Processor",
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/products?category=Motherboard",
    },
    {
      id: 3,
      name: "RAM",
      link: "/products?category=RAM",
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/products?category=Power Supply Unit",
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/products?category=Storage Device",
    },
    {
      id: 6,
      name: "Monitor",
      link: "/products?category=Monitor",
    },
    {
      id: 7,
      name: "Other",
      link: "/products?category=Other",
    },
  ];

  return (
    <header className="bg-white relative  z-50">
      <nav className="mx-auto  max-w-7xl">
        <div
          className=" hidden lg:flex mx-2 items-center justify-between pt-4"
          aria-label="Global"
        >
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative mr-6 rounded-md shadow-sm"></div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between pb-3 ">
          <div className="hidden lg:flex mx-2 lg:gap-x-12">
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseOver={() => setOpenCategory(true)}
              onMouseOut={() => setOpenCategory(false)}
            >
              <button
                type="button"
                className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex justify-center items-center"
              >
                Categories
                <svg
                  className="h-5 w-5 flex-none text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`${
                  openCategory ? " absolute" : "hidden"
                } -left-12 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
              >
                <div className="p-4">
                  {categories?.map((category) => {
                    const { id, name, link } = category || {};
                    return (
                      <div
                        key={id}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <Link
                            href={link}
                            className="block font-semibold text-gray-900"
                          >
                            {name}
                            <span className="absolute inset-0"></span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Products
            </Link>
          </div>

          <div>
            <Link href={"/pcb"}>
              <button className="hidden lg:block px-6 py-3 bg-black rounded-md text-white font-bold">
                PC Builder
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="lg:hidden">
        <div
          className={`${
            openMenu && "fixed"
          } w-full overflow-y-auto bg-white -mt-3 shadow-md`}
        >
          <div className="flex items-center justify-between px-6 py-3 h-[10vh] ">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <GrClose size={30} /> : <AiOutlineBars size={30} />}
            </button>
          </div>

          <div
            className={`${
              openMenu ? "fixed" : "hidden"
            } left-0 top-[10vh] border-t-2 w-full h-screen bg-white z-50`}
          >
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col items-center">
                  <Link
                    href="/"
                    onClick={() => setOpenMenu(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setOpenCategory(!openCategory)}
                    >
                      Categories
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      className={`mt-2 space-y-2 ${!openCategory && "hidden"} `}
                    >
                      {categories?.map((category) => {
                        const { id, name, link, logo } = category || {};

                        return (
                          <Link
                            key={id}
                            href={link}
                            onClick={() => setOpenMenu(false)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <button className="flex justify-center items-center">
                              <span>{logo}</span>
                              <span className="px-2">{name}</span>
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <Link
                    href="/products"
                    onClick={() => setOpenMenu(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </Link>

                  <div>
                    <Link href={"/pcb"} onClick={() => setOpenMenu(false)}>
                      <button className="px-4 py-2 bg-red-500 rounded-md text-white font-bold">
                        PC Builder
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
