import Link from "next/link";
import React from "react";

export default function Hcta() {
  return (
    <section className="py-10 text-gray-800 sm:py-16 md:py-20 overflow-hidden w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
      <div className="relative mx-auto z-10   aspect-video sm:w-[80%] md:w-[70%] lg:w-[60%]   rounded-xl  shadow-lg ">
        <div className="absolute top-0 -left-2/4 -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/30 blur-3xl"></div>
        <div className="absolute top-0 -right-2/4 -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/30 blur-3xl"></div>
        <div className="absolute  flex items-center justify-center w-full h-full">
          <img className="h-full w-full" src="/Frame1.png" alt="image" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-2 p-2 sm:px-6 md:flex lg:px-8">
        <div className="relative mx-auto my-auto flex flex-col items-center text-center text-white">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Get a Free Audit Report

          </h2>
          <p className="mt-4 font-medium md:text-2xl sm:text-xl text-lg">
            <span>Get you free consultation today.
              <br />
               Learn how we can boost your ROI.
              </span>{" "}
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0">
            <Link href="/contact" className="relative mt-4 rounded-full bg-brand-secondary px-4 py-2 text-brand-primary font-bold text-2xl shadow transition hover:bg-yellow-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
