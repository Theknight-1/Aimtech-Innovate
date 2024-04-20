'use client'
import React, { useState } from 'react';

const Accordion = ({ title, content, index, selectedIndex, setSelectedIndex }) => {
  const isOpen = index === selectedIndex;

  return (
    // className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'
    <div className="border bg-[#1B1B1B] text-white  text-sm md:text-xl border-gray-300 rounded">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setSelectedIndex(isOpen ? null : index)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
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
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;