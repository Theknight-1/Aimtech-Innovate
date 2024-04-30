'use client'
import React, { useState } from 'react';

const Accordion = ({ title, content, index, selectedIndex, setSelectedIndex }) => {
  const isOpen = index === selectedIndex;

  return (
    // className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'
    <div className={`border  group  text-sm md:text-xl border-[#FFB700] rounded-xl ${isOpen ? "bg-[#FFB700] text-[#122B59]" : "text-white"}`}>
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setSelectedIndex(isOpen ? null : index)}
      >
        <div className='flex gap-x-4 items-center pl-8'>
        <img src="/arrow-double-end.svg" className={` w-4 h-4  group-hover:animate-fade-right group-hover:animate-infinite group-hover:animate-alternate ${isOpen ? "hidden" :""}`} alt="" />

        <h2 className="text-lg font-semibold">{title}</h2>
        </div>
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
      <div className='pl-8'>

      {isOpen && <div className="p-4 flex items-start flex-col justify-center">
        <article>{content}</article>
        
        </div>}

      </div>
    </div>
  );
};

export default Accordion;