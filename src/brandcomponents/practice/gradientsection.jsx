"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import SpringModal from "@/brandcomponents/Modal/SpringModal";

export default function GradientSection() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-screen min-h-screen flex flex-col lg:flex-row justify-between items-center bg-[url('/vector/Waves.svg')] xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div className="grid max-w-screen  py-8  xl:gap-0 lg:py-16 lg:grid-cols-12 gap-14 lg:gap-8">
          <div className="mr-auto place-self-center lg:col-span-7 h-full space-y-5 ">
            <h3 className="max-w-4xl uppercase text-white tracking-tight text-sm md:text-lg xl:text-lg 2xl:text-xl dark:text-white bg-gradient-to-r from-blue-500 to-blue-700  bg-clip-text">
              The most cost-effective digital marketing agency of{" "}
              <span className="text-yellow-300">USA</span> and{" "}
              <span className="text-green-300">Canada</span>
            </h3>
            <h1 className="max-w-7xl text-white font-semibold tracking-wide text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl">
              Explode Your Sales In The Next 90 Days Or We Work For Free
            </h1>
            <div className="flex justify-end items-center my-5 ">
              <svg
                className="md:w-[70%] w-[60%]"
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
            <p className="max-w-2xl mb-6 font-semibold text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Don't believe it? Request a free quotation today
            </p>
            <div className="flex  items-center justify-start">
              <div className="w-auto md:w-auto border">
                <div className="flex w-full md:w-auto">
                  <motion.div
                    animate={open ? "open" : "closed"}
                    className="relative w-full md:w-auto"
                  >
                    <button
                      onClick={() => setOpen((pv) => !pv)}
                      className="flex items-center justify-between px-4 py-4 w-full md:w-auto text-xl text-black bg-white hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-sm">
                        Select Digital Presece Service
                      </span>
                      <motion.span variants={iconVariants}>
                        <FiChevronDown />
                      </motion.span>
                    </button>

                    <motion.ul
                      initial={wrapperVariants.closed}
                      variants={wrapperVariants}
                      style={{ originY: "top", translateX: "-50%" }}
                      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-full md:w-auto overflow-hidden"
                    >
                      <Option
                        setOpen={setOpen}
                        text="Web Design and Development"
                      />
                      <Option
                        setOpen={setOpen}
                        text="Search Engine Optimization"
                        className="text-lg"
                      />
                      <Option
                        setOpen={setOpen}
                        text="Social Media Management"
                      />
                      <Option setOpen={setOpen} text="PPC Advertisement" />
                      <Option setOpen={setOpen} text="Email Marketing" />
                    </motion.ul>
                  </motion.div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 md:py-3.5 py-4 md:text-lg  text-sm font-medium text-center text-gray-900 bg-[#FFB700] dark:text-white dark:border-gray-700 dark:hover:bg-[#ffb700d3]"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-10 flex flex-col md:flex-row  gap-5">
              <ul className="flex gap-2 text-xl text-white">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <span className="text-white">
                4.8/5 based on 6,873 reviews | GDPR Compliant
              </span>
            </div>
          </div>
          <div className=" relative lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
            <div className="absolute -z-0 w-full h-auto aspect-square rounded-full border bg-[#15BEE3]/30 blur-3xl"></div>
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
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
}

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full text-[15px] font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}></motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
