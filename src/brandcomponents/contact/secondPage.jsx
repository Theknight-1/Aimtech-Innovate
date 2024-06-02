import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SecondPage = () => {
  return (
    <section className="w-full h-auto  mt-5 lg:my-10 2xl:my-5 font-satoshi">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="flex-1 flex justify-start lg:justify-start items-center h-full ">
          <div className="w-12/12 sm:w-9/12 md:w-8/12 lg:w-full">
            <img src="./Frame.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center lg:justify-start h-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
          <div className="space-y-6 lg:space-y-10 w-full  p-4 sm:p-0">
            <span className="text-brand-secondary text-4xl sm:text-6xl md:text-5xl lg:text-[2.7rem] font-semibold leading-snug ">
            Ready to Take Your Digital Marketing to the Next Level?

            </span>
            <div className="space-y-3 lg:space-y-5 ">
              <ul className=" text-white text-xl lg:text-xl 2xl:text-2xl space-y-2">
                <li className="flex items-center gap-6"><FaCheckCircle  />Customized Strategies</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Dedicated Account Manager</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Cutting-Edge Tactics</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Data Driven Results</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Conversions that Convert</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Transparent Pricing</li>
                <li className="flex items-center gap-6"><FaCheckCircle />Ongoing Support</li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
