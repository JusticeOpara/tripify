"use client"
// import trans from "../assets/transportation.svg";
// import attractions from "../assets/attractions.svg";
// import resturant from "../assets/resturant.svg";
// import business from "../assets/business.svg"
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";


const ServiceItem = ({ title, imageSrc }) => (
  <div className="font-medium text-start flex items-center basis-[33.3333%] pb-[15px] text-[0.7rem] bg-lime-200 h-full gap-2">
    <Image src={imageSrc} className="mt-[3px]" width={30} height={30} alt="" />
    <div className="flex flex-col leading-5 text-start">
      <dt className="text-xs leading-[16px] font-bold uppercase font-satoshi">
        {title}
      </dt>
      <dl className="text-sm font-normal">Operation</dl>
    </div>
  </div>
);
ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const Card = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

  const services = [
    { title: "Public Transportation", imageSrc: "/transportation.svg" },
    { title: "Attraction", imageSrc: "/attractions.svg" },
    { title: "Business", imageSrc: "/business.svg" },
    { title: "Church", imageSrc: "/transportation.svg"  },
    { title: "Resturant", imageSrc: "/resturant.svg" },
  ];

  return (
    <div className="min-h-[20rem] bg-blue-500 w-full transition shadow hover:shadow-2xl sha rounded-3xl ">
      <div className="flex bg-slate-500 flex-col justify-start p-[1.5px] w-full rounded-[20px]">
        <div className="flex justify-between items-center cursor-pointer my-[8px] mx-[10px] mb-[9.5px] bg-sky-700 ">
          <div className="flex items-center gap-3">
            <Image src="/bahamas-flag.svg" className="" width={57} height={39} alt="places" />
            <p className="font-bold font-clashDisplay text-2xl">Australia</p>
          </div>
          <div>
            <p className="font-normal text-sm font-satoshi ">
              based on your search
            </p>
            <p className="font-semibold font-clashDisplay"> open for you</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between bg-red-400 h-8 flex-1 rounded-b-[20px] border-blue-500 text-center overflow-hidden relative py-[12px] px-[14px]  ">
          <div className="text-base font-medium flex items-center pb-[15px] basis-[33.3333%] gap-1">
            <Image src="/security.svg" className="" width={30} height={31} alt="security" />
            <div className=" flex flex-col leading-5 text-start ">
              <dt>Test</dt>
              <dl className="text-sm font-normal">Required before return</dl>
            </div>
          </div>

          <div className="text-base font-medium flex items-center pb-[15px] basis-[33.3333%] gap-1">
            <Image src="/security.svg" className="" width={30} height={31} alt="security" />

            <div className=" flex flex-col leading-5 text-start ">
              <dt>Qurantine</dt>
              <dl className="text-sm font-normal">none</dl>
            </div>
          </div>
          <a className="min-w-[112px] w-[130px] bg-white inline-block text-[12px] font-semibold text-center overflow-hidden pt-[1.8rem] leading-[12px] ml-[0.4rem] underline">
            Details and Expections
          </a>
        </div>
      </div>

      <div className="py-[14px] px-[15.5px] w-full flex flex-wrap justify-start bg-inherit rounded-b-3xl bg-white">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            imageSrc={service.imageSrc}
          />
        ))}


        <div className="font-medium text-xs leading-4 antialiased mt-2">
          <p className="">
            Australia is open for all international travellers, while domestic
            restrictions vary between regions.
          </p>
          <a href="" className="text-[.8rem] underline ">
            {" "}
            Read More
          </a>

          <h4 className="text-sm font-satoshi font-normal mt-4">
            {formattedDate}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
