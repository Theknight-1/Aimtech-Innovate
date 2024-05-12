"use client";
import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function CaseLanding() {

  return (
    <>
      <section className="w-full  text-white">
        <article>
          <header className="h-auto w-full   text-center">
          <img className="mt-2 w-full  object-cover sm:h-[34rem]" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Featured Image" />

            <div className="p-2 space-y-4">

              <p className="">Published April 4, 2024</p>
              <h1 className=" text-3xl font-bold sm:text-5xl">Case study on Aimtech Innovate</h1>
              <p className=" text-lg">R & D on SEO</p>
            </div>
            <div className=" flex flex-wrap justify-center gap-2 p-2 " aria-label="Tags">
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">Marketing</button>
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">Branding</button>
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">Digital</button>
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">Identity</button>
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">SEO</button>
              <button className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 font-bold hover:bg-gray-200">Fintech</button>
            </div>
          </header>
        </article>
      </section>
      <section className=" p-6 text-white ">
        <div className=" mb-16 mt-20 block px-6 text-center">
          <h2 className="text-4xl font-bold uppercase md:text-5xl underline">Used Platforms</h2>
          <div className=" text-center  mt-6 block w-full text-xl text-wrap lg:text-3xl font-bold leading-9 ">
            <p className="lg:px-24">We helped aimtech get best of their possible thorough our expertise and professionals supports and wide range of services.</p>
          </div>
          <div className="mt-8 text-center">
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Facebook</span>
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Google</span>
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Instagram</span>
          </div>
        </div>

        <div className="grid gap-5 p-2  sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col items-center justify-center rounded-md p-8 shadow-sm ">
            <div className="my-4 flex items-center">
              <h3 className="text-6xl font-bold">7.5X</h3>
              <br />
            </div>
            <h3 className="text-2xl font-bold md:text-xl">ROAS (Facebook)</h3>
            <p className="">Increase of 20% in profit sale</p>
          </div>
          <div className="flex text-center flex-col items-center justify-center rounded-md p-8 shadow-sm ">
            <div className="my-4 flex items-center">
              <h3 className="text-6xl font-bold">20X</h3>
              <br />
            </div>
            <h3 className=" text-2xl  font-bold md:text-xl">ROAS (Google ads spend)</h3>
            <p className="">Increased 36% website traffic in one month.</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md p-8 shadow-sm">
            <div className="my-4 flex items-center">
              <h3 className="text-6xl font-bold">49%</h3>
              <br />
            </div>
            <h3 className="text-2xl font-bold">ROI (Facebook)</h3>
            <p className="">Increase in Attributed Sales</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md p-8 shadow-sm">
            <div className="my-4 flex items-center">
              <h3 className="text-6xl font-bold">1.8%</h3>
              <br />
            </div>
            <h3 className="text-2xl font-bold">CTR</h3>
            <p className="">on mobile and website</p>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col p-2 px-10 md:flex-row">
        <div className="flex aspect-square h-auto w-full flex-col items-start justify-center gap-y-4 p-2 lg:w-1/2">
          <h2 className="mb-4 pl-2 text-4xl lg:text-8xl font-bold text-brand-secondary">Client Goals</h2>
          <p className=" text-2xl lg:text-4xl pl-2 font-bold text-white">Reach more customers with ads and Branding.</p>
          <div className="w-full">
            <ol className="flex h-full list-inside list-decimal flex-col gap-4 text-2xl lg:text-4xl  text-white">
              <li className="rounded  p-2">Increase brand awareness and reach within the target audience.</li>
              <li className="rounded p-2">Drive website traffic and boost sales of fitness equipment and accessories.</li>
              <li className="rounded p-2">Improve return on investment (ROI) and return on ad spend (ROAS) from advertising efforts</li>
              <li className="rounded  p-2">Enhance engagement metrics such as click-through rate (CTR) and conversion rate.</li>
            </ol>
          </div>
        </div>
        <div className="aspect-square h-auto flex-1">
          <img className="h-full w-full object-contain" src="https://nrtimes.co.uk/wp-content/uploads/2021/02/19199739-scaled.jpg" alt="" />
        </div>
      </section>
      <section className="flex w-full flex-col p-2 px-10 md:flex-row">
        <div className="aspect-square h-auto flex-1">
          <img className="h-full w-full object-contain" src="https://nrtimes.co.uk/wp-content/uploads/2021/02/19199739-scaled.jpg" alt="" />
        </div>
        <div className="flex lg:space-x-6 aspect-square h-auto w-full flex-col items-start justify-center gap-y-4 p-2 md:w-1/2">
          <h2 className="mb-4 pl-2 text-center md:text-left text-6xl font-bold text-brand-secondary ">How We Helped</h2>
          <p className="text-xl md:text-4xl leading-normal text-white">
            Our strategy involved the creation of new creative assets that
            would inform and educate the audience about the solutions and
            expertise that Kintec offers. For this, we created campaigns for
            every step of the funnel, using the most relevant interest
            targeting and also leveraging custom and lookalike audiences for
            maximum reach and engagement of our target audience.
          </p>

        </div>
      </section>



      <section className="text-white hidden w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <header className="text-center">
          <div className="relative w-full h-[calc(100vh-35vh)] flex items-center justify-center">
            <div className="absolute text-white z-20">
              <h1 className="text-4xl font-bold">
                Aimtech Innovate <br />
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
          <div className="flex flex-col flex-1 w-full border overflow-hidden">
            <div className="w-full flex flex-col border">
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
            <div className="flex-1 w-full border">
              <ul className="flex flex-col  justify-center gap-10">
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
        <section className="h-screen w-full flex  items-center justify-center border overflow-hidden">
          <div className="h-[70%] flex flex-col items-center justify-center gap-10 gap-y-4 ">
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
          <div className="h-[70%] flex flex-col items-center justify-center gap-10 gap-y-4 ">
            <div className="flex-1 h-full">
              <img
                src="/case-study-2.png"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative flex-1 p-5 border overflow-hidden">
              <div className="absolute -z-0 w-3/4 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>
              <h1 className="text-[3.5rem] font-bold uppercase mb-3 text-[#FFB700]">
                How We Helped
              </h1>
              <p className="text-sm md:text-4xl leading-normal">
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
