import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SecondPage = () => {
  return (
    <section className="w-full h-screen mt-5 lg:mt-0">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 flex justify-start lg:justify-start items-center h-full ">
          <div className="w-12/12 sm:w-9/12 md:w-8/12 lg:w-full">
            <img src="./Frame.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center lg:justify-start h-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
          <div className="space-y-6 lg:space-y-10 w-full">
            <h1 className="text-brand-secondary text-4xl sm:text-6xl md:text-6xl lg:text-[3rem] font-semibold leading-snug ">
              Grow online, Sales growth, Increase Profit

            </h1>
            <div className="space-y-3 lg:space-y-5">
              <ul className=" text-white text-xl lg:text-2xl">
                <li className="flex items-center gap-6"><FaCheckCircle  />Google Ads</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Linkedin Ads</li>
                <li className="flex items-center gap-6"><FaCheckCircle />SEO Services</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Email Marketing</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Digital Consulting</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Social Media Marketing</li>
                <li className="flex items-center gap-6"><FaCheckCircle /> Web Design & Development</li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
