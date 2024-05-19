"use client";
import React, { useState } from "react";
import Accordion from "@/uicomponent/accordian";
import Link from "next/link";

export default function Pland({faqdata = []}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const faqs = faqdata;
 
  return (
    <>
      {/* <div class="h-[calc(100vh-10vh)] w-full p-10 bg-[#185493]">
                <div className='border w-full h-full '></div>
            </div> */}
      <section class=" lg:min-h-[calc(100vh-30vh)] mt-8 w-full flex  items-center justify-center xl:px-28 lg:px-24 md:px-20 sm:px-8 px-4  ">
        <div class=" h-auto w-full ">
          <div className="  w-full h-auto ">
            <div className="w-full h-auto flex flex-col lg:flex-row   bg-[#050505e1]  lg:p-5 rounded-xl">
              <div className="flex  h-full space-y-2 lg:space-y-8 flex-col justify-between w-full lg:w-1/3  p-4 sm:px-7 md:p-6 lg:p-4 xl:p-5 ">
                <div className="text-center md:text-left">
                  <p className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold flex flex-col items-start justify-start lg:gap-y-4 gap-y-2  text-white leading-normal">
                    <span>Frequently</span>
                    <span>Asked</span>
                    <span>Questions</span>
                  </p>
                  <br />
                </div>
                <div className="text-center md:text-left md:block hidden lg:py-4  space-y-8">
                  <div>
                  <span className="  text-2xl text-white lg:mt-10">
                    Still have some Questions?{" "}
                  </span>
                  <br />
                  <span className="text-2xl text-white">
                    Contact us! We will be happy to help you
                  </span>{" "}
                  <br />
                  </div>
                  <div className="  w-full h-full ">
                    <Link
                      href="tel:+1905-399-6642"
                      className="bg-brand-secondary hover:bg-yellow-400 w-max h-full xl:p-4 xl:px-3 2xl:p-5 lg:p-2 lg:py-4 md:p-4  xl:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-brand-primary rounded mt-4 "
                    >
                      {" "}
                      +1 905-399-6642
                    </Link>
                  </div>
                </div>
              </div>
              {/* Accordion */}
              {/* accordian End */}

              <div className="flex flex-col gap-y-4 p-4 sm:p-7 md:p-8 xl:p-6 h-auto overflow-hidden flex-1 ">
                {faqs.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    index={index}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
 />
                ))}
                {/* <div className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'>
                                    <span>Where is aimtech located ?</span>
                                    <button>+</button>
                                </div> */}
                <div className="text-center md:text-left md:hidden mb-2">
                  <span className="font-bold  text-xl text-white ">
                    Still have some Questions?
                  </span>
                  <br />
                  <span className="text-xl text-white">
                    Contact us , we will help you.
                  </span>{" "}
                  <br />
                  <div className=" mt-4 w-full h-full p-4">
                    <Link
                      href="tel:+1905-399-6642"
                      className="bg-brand-secondary hover:bg-yellow-400 w-max h-full xl:p-5 lg:p-3 md:p-4 p-4 xl:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-[#141F39] rounded mt-4 "
                    >
                      {" "}
                      +1 905-399-6642
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="h-auto hidden w-full lg:flex flex-col items-center justify-center bg-[#FFB700] p-10">
                    <div className='p-10 w-full h-full flex flex-col items-center justify-start '>
                        <span className='text-4xl font-bold bg-blue-500 text-white p-2 text-left'>Start</span>
                        <span className='text-[100px] font-bold'>Growing</span>
                        <br />
                        <div className='flex flex-col items-center justify-center text-4xl font-bold'>

                            <span>Levelup your Marketing Without</span>
                            <span> increasing your headcount</span>
                        </div>
                    </div>

                </div> */}
      </section>
    </>
  );
}
