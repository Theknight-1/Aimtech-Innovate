import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="w-full h-[90vh]  flex flex-col lg:flex-row  justify-evenly items-center bg-[url('/vector/Waves.svg')] ">
      <div className=" flex items-center justify-center">
        <div className="">
          <img
            src="/service/Img2-about-section.png"
            alt="Product screenshot"
            class="w-80 sm:w-96 lg:w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" flex items-center  justify-start">
        <div className="w-full lg:w-[40vw] h-[60vh] space-y-8  ">
          <span className="text-brand-secondary text-xl uppercase text-center lg:text-left">
            ABOUT OUR <span className="uppercase"> Services</span>
          </span>
          <span className="text-[1rem] sm:text-[2rem]  lg:text-[4rem] text-white font-semibold text-center lg:text-left">
            SERVICE TAGLINE
          </span>
          <p className="text-gray-200 text-lg text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            officiis dolores sapiente assumenda amet nihil ea temporibus fugiat
            tempore.
          </p>
          <div className="grid grid-cols-2 text-[#FCCF40] gap-4 text-2xl text-center lg:text-left">
            <span>Feature one</span>
            <span>Feature two</span>
            <span>Feature Three</span>
            <span>Feature Four</span>
          </div>
         
        </div>
      </div>
    </section>
  );
}
