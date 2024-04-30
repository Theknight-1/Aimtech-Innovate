"use client";
import React from "react";
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import Link from "next/link";

export default function GradientSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="w-full h-[calc(100vh-20vh)] flex justify-center items-center bg-[url('/vector/Waves.svg')]">
        <div className="grid max-w-screen px-4 py-8 lg:mx-28 md:mx-20 mx-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7  h-full space-y-8">
            <h3 className="max-w-4xl mb-4 text-3xl uppercase tracking-tight md:text-1xl xl:text-xl dark:text-white bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
              The most cost-effective digital marketing agency of{" "}
              <span className="text-yellow-300">USA</span> and{" "}
              <span className="text-green-300"> Canada</span>
            </h3>
            <h1 className="max-w-7xl leading-relaxed text-4xl font-semibold tracking-wider  md:text-5xl xl:text-6xl dark:text-white">
              Enhance your Digital Presence and gain Market excellence
            </h1>
            <div className="flex justify-end items-center my-5 mr-20">
              <svg
                width="529"
                height="36"
                viewBox="0 0 529 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 32C79.7361 10.8706 289.967 -18.7107 525 32"
                  stroke="#FFB700"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Don't believe it? Request a free quotation today
            </p>
            <div className="flex justify-start items-center">
              <div className="w-96">
                <div className="flex w-96 ">
                  <motion.div
                    animate={open ? "open" : "closed"}
                    className="relative w-96"
                  >
                    <button
                      onClick={() => setOpen((pv) => !pv)}
                      className="flex items-center justify-between px-4 py-4 w-96  text-xl text-black bg-white hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-sm">Select Digital Presece Service</span>
                      <motion.span variants={iconVariants}>
                        <FiChevronDown />
                      </motion.span>
                    </button>

                    <motion.ul
                      initial={wrapperVariants.closed}
                      variants={wrapperVariants}
                      style={{ originY: "top", translateX: "-50%" }}
                      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-96 overflow-hidden"
                    >
                      <Option setOpen={setOpen} Icon={"FiEdit"} text="Web Design and Development"  className="text-lg"/>
                      <Option
                        setOpen={setOpen}
                        Icon={"FiPlusSquare"}
                        text="Search Engine Optimization"
                        className="text-lg"
                      />
                      <Option setOpen={setOpen} Icon={"FiShare"} text="Social Media Management" className="text-lg"/>
                      <Option setOpen={setOpen} Icon={"FiTrash"} text="PPC Advertisement" className="text-lg"/>
                      <Option setOpen={setOpen} Icon={"FiTrash"} text="Email Marketing" className="text-lg"/>
                    </motion.ul>
                  </motion.div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3.5 text-base font-medium text-center text-gray-900 bg-[#FFB700]  dark:text-white dark:border-gray-700 dark:hover:bg-[#ffb700d3]"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-10">
              <span></span>
              <span className="text-white ">
                4.8/5 based on 6,873 reviews | GDPR Compliant
              </span>
            </div>
          </div>
          <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex  items-center justify-center">
            <div className="absolute -z-0 w-full  h-auto aspect-square rounded-full border bg-[#15BEE3]/30 blur-3xl"></div>
            <img
              src="./landingPage/Mockup.png"
              alt="mockup"
              className="absolute z-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
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
