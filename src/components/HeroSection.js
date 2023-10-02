import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsAndroid2 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  const carouselSlider = [
    {
      imageURL:
        "https://www.startech.com.bd/image/cache/catalog/home/banner/free-delivery-on-app-may-home-banner-982x500.webp",
    },
    {
      imageURL:
        "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp",
    },
    {
      imageURL:
        "https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp",
    },
  ];

  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const slidText = `${today} , our all outlets are open excpet Chattogram, Agrabad, Khulna, Rangpur, Rajshahi outlets. Additionally, our online activities are open.`;

  return (
    <div className={` bg-white mx-auto my-5 max-w-7xl z-0`}>
      <div className="max-w-screen-2xl mx-3 lg:mx-auto lg:flex gap-4 ">
        <div className="w-full rounded-md overflow-hidden">
          <Carousel
            className="z-0"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            emulateTouch={true}
            showThumbs={false}
          >
            {carouselSlider.map((item, index) => (
              <Image
                src={item?.imageURL}
                alt={`banar-${index + 1}`}
                key={index}
                height={100}
                width={100}
                layout="responsive"
              />
            ))}
          </Carousel>
        </div>

        {/* right  */}
        <div className=" xl:w-2/5  border-[var(--clr-red)] rounded-md hover:border-[var(--clr-primary)] hidden xl:inline-block overflow-auto scrollbar-hide">
          <div className="">
            <div className="w-full text-center">
              <Image
                src={
                  "https://www.startech.com.bd/image/catalog/home/banner/budget-desktop-pc.webp"
                }
                height={100}
                width={100}
                layout="responsive"
                alt="budget-pc"
              />
            </div>

            <div>
              <Link href={"/"}>
                <button className="px-6 py-3 w-full bg-black text-white font-bold">
                  PC Build Now
                </button>
              </Link>
            </div>

            <div className="text-center my-10 text-xl font-bold">
              <p>
                Download Mobile App <span>Get Offer</span>
              </p>

              <button className="text-white py-3 w-full rounded-md bg-black flex justify-center items-center">
                <BsAndroid2 />
                <span className="mx-2"> Download Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-100 lg:p-1 rounded-full m-2 lg:my-6 lg:mx-0">
        <div className="flex justify-between items-center text-black lg:mx-4 z-10">
          <Marquee>
            {slidText.split(" ").map((text, i) => (
              <p key={i} className="pl-1">
                {text}
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
