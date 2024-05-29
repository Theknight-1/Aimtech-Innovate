import Link from "next/link";
import React from "react";

export default function Hcta({title="Get a Free Audit Report",d1="Get your free consultation today.",d2="Learn how we can boost your ROI."}) {
  return (
    // <section className="py-10 w-full border flex flex-col items-center justify-center text-gray-800 sm:py-16 md:py-20 overflow-hidden  xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
    <section className="font-satoshi w-full mx-auto lg:overflow-visible overflow-hidden container flex flex-col items-center justify-center p-10">
      <div className="relative  z-10  flex items-center justify-center aspect-video w-full sm:w-[80%] md:w-[80%] lg:w-[60%]   rounded-xl   ">
        <div className="absolute top-0 -left-2/4 -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/30 blur-3xl hidden lg:block"></div>
        <div className="absolute top-0 -right-2/4 -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/30 blur-3xl hidden lg:block"></div>
        <div className="absolute  flex items-center justify-center w-full h-full">
          <img className="h-full w-auto" src="/brand/logo/ctaimage.svg" alt="CTA image" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-2 p-2 sm:px-6 md:flex lg:px-8">
        <div className="relative mx-auto my-auto flex flex-col items-center text-center text-white">
          <h2 className=" font-semibold leading-tight text-2xl sm:text-5xl lg:text-6xl">
            {title}

          </h2>
          <p className="mt-1 font-medium md:text-2xl sm:text-xl text-sm">
            <span>{d1}
              <br />
               {d2}
              </span>{" "}
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0">
            <Link href="/contact" className="relative mt-4 rounded-lg p-2 md:p-3 md:text-lg lg:text-xl  text-brand-primary font-bold  shadow transition bg-brand-secondary hover:bg-yellow-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
