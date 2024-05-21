"use client";
import React, { useState, useRef, useEffect } from "react";

const Accordion = ({
  title,
  content,
  index,
  selectedIndex,
  setSelectedIndex,
  style = "bg-[#1B1B1B] group rounded-xl",
  textcolor = "text-white",
}) => {
  const isOpen = index === selectedIndex;
  const [maxHeight, setMaxHeight] = useState("0");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0");
    }
  }, [isOpen]);

  const handleClick = () => {
    setSelectedIndex(isOpen ? null : index);
  };

  return (
    <div className={`${style} ${isOpen ? textcolor : "text-white"}`}>
      <div
        className="flex justify-between items-center p-4 px-6 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex gap-x-4 items-center">
          <h2 className="text-sm sm:text-lg md:text-xl xl:text-2xl">{title}</h2>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
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
        ref={contentRef}
        className="px-6 overflow-hidden transition-max-height"
        style={{
          maxHeight: maxHeight,
          transition: `max-height ${isOpen ? "0.3s" : "0.1s"} ease-in`,
        }}
      >
        <div className="flex items-start flex-col justify-center">
          <article className="text-sm sm:text-sm md:text-lg py-3">
            {content}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
