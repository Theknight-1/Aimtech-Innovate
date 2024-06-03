"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SpringModal from "@/brandcomponents/Modal/SpringModal";

export default function GradientSection() {
  const [selectedOption, setSelectedOption] = useState(
    "Select Digital Presence Services"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [newValue, setNewValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setNewValue(e.target.value);
    // Open modal only when a different value is selected
  };

  return (
    <>
      <section className="w-screen  font-satoshi 2xl:pt-20  h-auto  px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 ">
        <div className="flex gap-x-4 gap-y-6  flex-col-reverse justify-between md:flex-row items-center  ">
          <div className=" lg:col-span-6 h-full xl:space-y-8 lg:space-y-4 md:space-y-6 lg:p-2  space-y-4  sm:mt-0">
            <div className=" lg:space-y-4 space-y-2 ">
              <div className="space-y-4">
                <h1 className=" max-w-7xl text-white  font-semibold md:tracking-wide text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight sm:leading-normal ">
                  Enhance your digital presence and gain market excellence
                </h1>
                <h3 className="max-w-4xl  text-white  text-[18px] md:text-[18px] lg:text-xl 2xl:text-2xl bg-gradient-to-r bg-clip-text md:tracking-wider leading-tight sm:leading-normal">
                  Most cost-effective digital marketing agency of{" "}
                  <span>US</span> and <span>Canada</span>
                </h3>
              </div>

              <div className="flex flex-col  justify-start xl:space-y-6 lg:space-y-4 space-y-2">
                <p className="max-w-2xl text-[14px] md:text-[16px] lg:text-lg 2xl:text-xl  text-white leading-tight sm:leading-normal">
                  Don't believe it? Request a free quotation today
                </p>
                <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-0 py-2 sm:py-0">
                  <div className="relative lg:w-full w-full md:w-80">
                    <div className="relative ">
                      <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="block font-bold appearance-none w-full bg-white lg:rounded-l-lg border-gray-300 text-gray-800 xl:text-xl lg:text-lg md:text-base sm:text-sm py-4 sm:py-5 px-4 pr-8 leading-tight rounded-md md:rounded-none"
                      >
                        <option
                          value="Select Digital Presence Services"
                          disabled={true}
                        >
                          Select Digital Presence Services
                        </option>
                        <option value="Web Design and Development">
                          Web Design and Development
                        </option>
                        <option value="Search Engine Optimization">
                          Search Engine Optimization
                        </option>
                        <option value="Social Media Management">
                          Social Media Management
                        </option>
                        <option value="PPC Advertisement">
                          PPC Advertisement
                        </option>
                        <option value="Email Marketing">Email Marketing</option>
                        <option value="others">Others</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <FiChevronDown className="h-6 w-6 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => newValue && setIsOpen(true)}
                    disabled={selectedOption === "Select Digital Presence Services"}
                    className={`w-full md:w-1/3 lg:w-1/2 p-3 sm:p-4 lg:px-4 md:text-lg lg:text-xl font-bold text-xl lg:rounded-r-lg rounded-md md:rounded-none ${
                      selectedOption === "Select Digital Presence Services"
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-brand-secondary text-brand-primary hover:bg-yellow-400"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
                <div className=" flex items-baseline gap-5 ">
                  <ul className="flex gap-2 lg:gap-1 xl:text-xl lg:text-base md:text-base text-sm text-white">
                    {[...Array(4)].map((_, index) => (
                      <li key={index}>
                        <FaStar className="text-brand-secondary" />
                      </li>
                    ))}
                    <li>
                      <FaStarHalfAlt className="text-brand-secondary" />
                    </li>
                  </ul>
                  <span className="text-white font-semibold xl:text-[18px]  text-xs">
                    4.8/5 based on 220 reviews | GDPR Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full   lg:col-span-6 lg:flex items-center justify-end    lg:justify-end  ">
            <div className="w-auto h-full  lg:col-span-6 lg:flex items-center justify-end -my-4 sm:-my-0  lg:justify-end">
              <div className=" w-full h-full flex items-center justify-center lg:justify-end relative  ">
                <img
                  src="/landingPage/hero-image.svg"
                  alt="mockup"
                  className="w-auto min-h-96 max-h-[500px] aspect-square  object-fit "
                />
                <div className="absolute -z-10  w-auto min-h-96 max-h-[500px] aspect-square    bg-blue-300/50 blur-3xl rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div className={``}>
          <SpringModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedOption={selectedOption}
          />
        </div>
      )}
    </>
  );
}
