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
      <section class="  min-h-screen mt-8 w-full flex  items-center justify-center xl:px-28 lg:px-24 md:px-20 sm:px-8 px-4  ">
        <div class=" h-auto w-full ">
          <div className="  w-full h-auto">
            <div className="w-full h-auto  flex flex-col lg:flex-row   bg-[#050505e1]  lg:p-5 rounded-xl">
              <div className="flex flex-col justify-between w-full lg:w-1/3 h-full p-4 sm:p-7 md:p-6 xl:p-5">
                <div className="mb-3 text-center md:text-left">
                  <span className="font-bold  text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-normal">
                    Frequently Asked Questions?
                  </span>
                  <br />
                </div>
                <div className="text-center md:text-left md:block hidden">
                  <span className="font-bold  text-2xl text-white mt-16">
                    Still have some Questions?{" "}
                  </span>
                  <br />
                  <span className="text-xl text-white">
                    Contact us , we will help you.
                  </span>{" "}
                  <br />
                  <div className=" mt-8 w-full h-full ">
                    <Link
                      href="tel:+1905-399-6642"
                      className="bg-brand-secondary w-max h-full xl:p-5 lg:p-3 md:p-4  xl:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-brand-primary rounded mt-4 "
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
                      className="bg-[#FFB700] w-max h-full xl:p-5 lg:p-3 md:p-4 p-4 xl:text-3xl md:text-2xl sm:text-2xl text-xl font-bold text-[#141F39] rounded mt-4 "
                    >
                      {" "}
                      +979846135461
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
