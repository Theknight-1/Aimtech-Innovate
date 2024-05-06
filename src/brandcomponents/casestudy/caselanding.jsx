"use client";
import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function CaseLanding() {

  return (
    <>
      <section className="text-white w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <header className="text-center">
          <div className="relative w-full h-[calc(100vh-35vh)] flex items-center justify-center">
            <div className="absolute text-white z-20">
            <h1 className="text-4xl font-bold">
              Demo Brand Name <br />
              <span className="text-[4rem] font-bold">SEO Case Study</span>
            </h1>

            </div>
            <div className="absolute w-screen h-full">
              <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Featured Image"
              />
            </div>
          </div>
        </header>
        <div className="mt-10">
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-center">
              published on : 2024-05-02 
            </span>
           
            <span className="text-xl font-bold text-center">
              Author : Aimtech Reserch lab
            </span>
          </div>
          <div className="flex flex-1 w-full">
            <div className="w-[50%] flex flex-col">
              <div>
                <h1 className="text-[3.5rem] font-bold uppercase mb-3">
                  Used Platform
                </h1>
                <ul>
                  <li className="text-3xl">Facebook</li>
                  <li className="text-3xl">Google</li>
                  <li className="text-3xl">Ads</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 w-[50%]">
              <ul className="flex justify-center gap-10">
                <li>
                  <h1 className="text-[3rem] font-bold">7.5X</h1>
                  <p className="text-2xl">
                    ROAS (Return on Ad Spend) on Facebook
                  </p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">10.1X</h1>
                  <p className="text-2xl">
                    ROAS (Return on Ad Spend) on Google Ads
                  </p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">49%</h1>
                  <p className="text-2xl">Increase in Attributed Sales</p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">1.8%</h1>
                  <p className="text-2xl">CTR</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="h-screen w-full flex items-center justify-center">
          <div className="h-[70%] flex items-center justify-center gap-10 gap-y-4 ">
            <div className="relative z-0 flex-1">
              <div className="absolute -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>
              <h1 className="text-[3.5rem] font-bold uppercase mb-3 text-[#FFB700]">
                Client Goals
              </h1>
              <ul className="space-y-5 p-2 tracking-normal">
                <li className="text-4xl">
                  1. Increase brand awareness and reach within the target
                  audience.
                </li>
                <li className="text-4xl">
                  2. Drive website traffic and boost sales of fitness equipment
                  and accessories.
                </li>
                <li className="text-4xl">
                  3. Improve return on investment (ROI) and return on ad spend
                  (ROAS) from advertising efforts.
                </li>
                <li className="text-4xl">
                  4. Enhance engagement metrics such as click-through rate (CTR)
                  and conversion rate.
                </li>
              </ul>
            </div>
            <div className="flex-1 h-full ">
              <img
                src="/case-study-1.png"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="h-screen w-full flex items-center justify-center">
          <div className="h-[70%] flex items-center justify-center gap-10 gap-y-4 ">
            <div className="flex-1 h-full">
              <img
                src="/case-study-2.png"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative flex-1 p-5">
              <div className="absolute -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>
              <h1 className="text-[3.5rem] font-bold uppercase mb-3 text-[#FFB700]">
                How We Helped
              </h1>
              <p className="text-4xl leading-normal">
                Our strategy involved the creation of new creative assets that
                would inform and educate the audience about the solutions and
                expertise that Kintec offers. For this, we created campaigns for
                every step of the funnel, using the most relevant interest
                targeting and also leveraging custom and lookalike audiences for
                maximum reach and engagement of our target audience.
              </p>
            </div>
          </div>
        </section>
      </section>
      
      <section className="">
        <Cards heading={"Recent Case studies"} getStartedButton={"Get started"} />
      </section>
    </>
  );
}
