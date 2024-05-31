import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AboutContact = () => {
  return (
    <section className="w-full relative h-auto p-1 sm:p-3 md:p-6 lg:p-10 font-satoshi">
      <div className="w-full h-full flex justify-center items-center p-4 md:p-0">
        <div className="flex flex-col md:flex-row md:items-center justify-center lg:gap-8 gap-0 mt-3 md:mt-0">
          <div className=" w-full  mx-auto flex justify-center items-center p-2 sm:p-0">
            <img
              className="md:w-9/12 lg:w-11/12 /2 sm:w-1/2 w-80"
              src="/png/about-last.png"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:gap-4 gap-2 max-w-md md:max-w-lg p-2 md:p-6 lg:p-4 xl:p-2 ">
            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-brand-secondary font-bold leading-normal">
              Ready to Elevate Your Digital Game?
            </span>
            <p className=" text-white text-lg md:text-xl lg:text-2xl">
              Contact us today to schedule a free consultation and learn how our
              team of digital marketing experts can help you
            </p>
            <div className="text-white text-sm md:text-lg lg:text-xl space-y-2">
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Develop a winning strategy for business goals</p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>
                  Increase brand awareness, website traffic leads, and sales
                  through proven tactics
                </p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>
                  Stay ahead of the curve with cutting-edge digital marketing
                  techniques
                </p>
              </span>
            </div>
            <div className=" w-full h-full flex items-center justify-center sm:justify-start mt-1">
              <Link
                href="/contact"
                className="px-4 py-2 md:py-4 w-max bg-brand-secondary rounded-lg text-[#122B59] text-lg md:text-xl font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
