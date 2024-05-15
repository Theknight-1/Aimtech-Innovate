"use client";
import React, { useState } from "react";

const Accordion = ({
  title,
  content,
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  const isOpen = index === selectedIndex;

  return (
    <div
      className={`bg-[#1B1B1B] group  rounded-xl ${
        isOpen ? " text-white " : "text-white"
      }`}
    >
      <div
        className="flex justify-between items-center p-4 px-6 cursor-pointer"
        onClick={() => setSelectedIndex(isOpen ? null : index)}
      >
        <div className="flex gap-x-4 items-center ">
          <h2 className=" text-sm sm:text-lg md:text-xl xl:text-2xl">
            {title}
          </h2>
        </div>
        <svg
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className="px-6"
        style={{
          maxHeight: isOpen ? "1000px" : "0", // Set max height based on open/close state
          overflow: "hidden", // Hide overflow when closed
          transition: `max-height 0.6s ease-in-out`, // Adding transition with different duration based on open/close state
        }}
      >
        <div className="flex items-start flex-col justify-center">
          <article className="text-sm sm:text-lg md:text-xl xl:text-2xl py-3">
            {content}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
