"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import SpringModal from "@/brandcomponents/Modal/SpringModal";

export default function GradientSection() {
  const [selectedOption, setSelectedOption] = useState(
    "Web Design and Development"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (e) => {
    const newValue = e.target.value;

    setSelectedOption(newValue);
    // Open modal only when a different value is selected
  };

  return (
    <>
      <section className="w-screen font-satoshi pt-20 overflow-hidden lg:overflow-visible  h-auto   flex flex-col lg:flex-row justify-between items-center  px-4 md:px-8 lg:px-24 xl:px-28">
        <div className="grid  max-w-screen py-8 lg:py-16 lg:grid-cols-12 gap-8  ">
          <div className="lg:col-span-6 h-full space-y-8 ">
            <h1 className=" max-w-7xl text-white font-semibold tracking-wide text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl  ">
            Enhance your digital presence and gain market excellence
            </h1>
            <h3 className="max-w-4xl  text-white  text-sm md:text-lg xl:text-lg 2xl:text-2xl bg-gradient-to-r bg-clip-text tracking-wider">
              Most cost-effective digital marketing agency of{" "}
              <span>USA</span> and <span>Canada</span>
            </h3>
            {/* <div className="flex justify-end items-center my-5 ">
              <svg
                className="w-[60%] md:w-[70%]"
                viewBox="0 0 529 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 32C79.7361 10.8706 289.967 -18.7107 525 32"
                  stroke="#FFB700"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div> */}

            <div className="flex flex-col  justify-start space-y-6">
              <p className="max-w-2xl text-2xl  text-white">
                Don't believe it? Request a free quotation today
              </p>
              <div className=" flex justify-start ">
                <div className="relative w-full md:w-[50%] rounded-lg ">
                  <div className="relative ">
                    <select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className="block font-bold appearance-none w-full bg-white  border-gray-300 text-gray-800 text-xl py-5 px-4 pr-8  leading-tight rounded-tl-lg rounded-bl-lg"
                    >
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
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="inline-flex font-semibold w-max items-center justify-center px-8 lg:py-4 lg:text-lg md:py-4 sm:py-3 py-2.5 md:text-lg text-sm text-center text-gray-900 bg-brand-secondary hover:bg-yellow-400] dark:text-black/80  dark:bg-[#FFB700] dark:hover:bg-[#ffb700d3] dark:border-gray-700 rounded-tr-lg rounded-br-lg "
                >
                  Get Started
                </button>
              </div>
              <div className=" flex flex-col md:flex-row gap-5 ">
              <ul className="flex gap-2 text-xl text-white">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <FaStar className="text-brand-secondary" />
                  </li>
                ))}
              </ul>
              <span className="text-white font-bold">
                4.8/5 based on 6,873 reviews | GDPR Compliant
              </span>
            </div>
            </div>
          </div>
          <div className="relative lg:col-span-6 lg:flex items-center justify-end  ">
            <div className="absolute left-10 -z-0 w-full h-auto aspect-square justify-end rounded-full  bg-[#15BEE3]/25 blur-3xl "></div>
            <img
              src="/landingPage/HeroSection.png"
              alt="mockup"
              className="absolute z-0 w-[80%] object-cover"
            />
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
