import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AboutContact = () => {
  return (
    <section className="w-full relative h-auto p-1 sm:p-3 md:p-6 lg:p-10">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row md:items-center justify-center lg:gap-8 gap-0">
          <div className=" w-full  mx-auto flex justify-center items-center p-2 sm:p-0">
            <img className="md:w-9/12 lg:w-11/12 /2 sm:w-1/2 w-80" src="/about/aboutLast.png" alt="" />
          </div>
          <div className="flex flex-col lg:gap-4 gap-2 max-w-md md:max-w-lg p-2 md:p-6 lg:p-4 xl:p-2 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFB700] font-bold leading-normal">
              Infuse Your Brand with Excellence
            </h1>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <div className="text-white text-sm md:text-lg lg:text-xl space-y-2">
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Adipiscing eli sed eiusmod</p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Tempor incididunt</p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Labore et dolore magna</p>
              </span>
            </div>
            <Link href="/contact" className="px-4 py-3 md:py-4 w-max bg-[#ffb700ea] hover:bg-[#FFB700] rounded-lg text-[#122B59] text-lg md:text-xl font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
