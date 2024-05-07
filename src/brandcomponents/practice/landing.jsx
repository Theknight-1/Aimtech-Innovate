"use client";
import React, { useState } from "react";
import Accordion from "@/uicomponent/accordian";

export default function Pland() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const accordionData = [
    {
      title: "Where is your office located?",
      content:
        "Aimtech is the leading Digital marketting agency based in Canada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores quo tempora expedita porro, doloremque, facilis amet adipisci laboriosam nisi dolore optio magnam magni! Aliquam optio ipsa excepturi sed distinctio? Placeat in laudantium sunt magni nam voluptates veritatis vero optio, maiores accusamus quisquam labore consequatur nobis quod. Accusantium, alias facilis.",
    },
    {
      title: "Do you serve in US ?",
      content:
        "Yes , we do serve in US. Aimtech is the Aimtech is the leading Digital marketting agency based in Canada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores quo tempora expedita porro, doloremque, facilis amet adipisci laboriosam nisi dolore optio magnam magni! Aliquam optio ipsa excepturi sed distinctio? Placeat in laudantium sunt magni nam voluptates veritatis vero optio, maiores accusamus quisquam labore consequatur nobis quod. Accusantium, alias facilis. leading Digital marketting agency based in Canada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores quo tempora expedita porro, doloremque, facilis amet adipisci laboriosam nisi dolore optio magnam magni! Aliquam optio ipsa excepturi sed distinctio? Placeat in laudantium sunt magni nam voluptates veritatis vero optio, maiores accusamus quisquam labore consequatur nobis quod. Accusantium, alias facilis.",
    },
    {
      title: "Do you serve in Caneda ?",
      content: "Yes , we do serve in Caneda.",
    },
    {
      title: "What is you tech domain ?",
      content: "Yes , we do serve in Caneda.",
    },
    {
      title: "Do you build only websites or full software?",
      content: "Yes , we do serve in Caneda.",
    },
    {
      title: "How big is your team ?",
      content: "Yes , we do serve in Caneda.",
    },
  ];
  return (
    <>
      {/* <div class="h-[calc(100vh-10vh)] w-full p-10 bg-[#185493]">
                <div className='border w-full h-full '></div>
            </div> */}
      <section class="  min-h-screen mt-8 w-full flex  items-center justify-center xl:px-28 lg:px-24  sm:px-8 px-4  ">
        <div class=" h-auto w-full  bg-[#162F5C]  ">
          <div className="  w-full h-auto">
            <div className="w-full h-auto  flex flex-col lg:flex-row   bg-[#050505e1]  md:p-6">
              <div className="flex flex-col justify-between w-full lg:w-1/3 h-full md:p-10 sm:p-7 p-5">
                <div className="mb-3 text-center md:text-left">
                  <span className="font-bold  text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-white leading-normal">
                    Frequently Asked Questions?
                  </span>
                  <br />
                </div>
                <hr />
                <br />
                <div className="text-center md:text-left md:block hidden">
                  <span className="font-bold  text-2xl text-white mt-16">
                    Still have some Questions?
                  </span>
                  <br />
                  <span className="text-xl text-white">
                    Contact us , we will help you.
                  </span>{" "}
                  <br />
                  <button className="bg-[#FFB700] w-max p-5 md:text-3xl sm:text-2xl text-xl font-bold text-[#141F39] rounded mt-4 ">
                    {" "}
                    +979846135461
                  </button>
                </div>
              </div>
              {/* Accordion */}
              {/* accordian End */}

              <div className="flex flex-col gap-y-4 md:p-10 p-4 h-auto overflow-hidden flex-1 ">
                {accordionData.map((item, index) => (
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
                  <button className="bg-[#FFB700] w-max p-5 md:text-3xl sm:text-2xl text-xl font-bold text-[#141F39] rounded mt-4 ">
                    {" "}
                    +979846135461
                  </button>
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
