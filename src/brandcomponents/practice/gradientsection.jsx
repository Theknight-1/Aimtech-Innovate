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
      <section className="w-screen min-h-screen flex flex-col lg:flex-row justify-between items-center bg-[url('/vector/Waves.svg')] px-4 md:px-8 lg:px-24 xl:px-28">
        <div className="grid max-w-screen py-8 lg:py-16 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 h-full space-y-5">
            <h3 className="max-w-4xl uppercase text-white tracking-tight text-sm md:text-lg xl:text-lg 2xl:text-xl bg-gradient-to-r bg-clip-text">
              The most cost-effective digital marketing agency of{" "}
              <span >USA</span> and{" "}
              <span >Canada</span>
            </h3>
            <h1 className="max-w-7xl text-white font-semibold tracking-wide text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl">
              Explode Your Sales In The Next 90 Days Or We Work For Free
            </h1>
            <div className="flex justify-end items-center my-5 ">
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
            </div>
            <p className="max-w-2xl mb-6 font-semibold text-white">
              Don't believe it? Request a free quotation today
            </p>
            <div className="flex items-center justify-start ">
              <div className="relative w-full md:w-96 rounded-lg">
                <div className="relative">
                  <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 text-xl py-4 px-4 pr-8  leading-tight "
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
                    <option value="PPC Advertisement">PPC Advertisement</option>
                    <option value="Email Marketing">Email Marketing</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FiChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <button
                onClick={()=>{setIsOpen(true)}}
                className="inline-flex w-max items-center justify-center px-5 lg:py-4 lg:text-lg md:py-4 sm:py-3 py-2.5 md:text-lg text-sm font-medium text-center text-gray-900 bg-[#FFB700] hover:bg-[#ffb700d3] dark:text-white dark:bg-[#FFB700] dark:hover:bg-[#ffb700d3] dark:border-gray-700"
              >
                Get Started
              </button>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-5">
              <ul className="flex gap-2 text-xl text-white">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <FaStar className="text-brand-secondary" />
                  </li>
                ))}
              </ul>
              <span className="text-white">
              4.8/5 based on 6,873 reviews | GDPR Compliant
              </span>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:flex items-center justify-center">
            <div className="absolute -z-0 w-full h-auto aspect-square rounded-full border bg-blue-300/30 blur-3xl"></div>
            <img
              src="./landingPage/Mockup.png"
              alt="mockup"
              className="absolute z-0"
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
