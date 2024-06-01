"use client";
import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import Hcta from "@/brandcomponents/landing/cta";
export default function CaseLanding({ casedata }) {
  const cdata = casedata;
  return (
    <>
      <section className="w-full  text-white font-satoshi">
        <article>
          <header className="h-auto w-full   text-center">
            <img
              className="mt-2 w-full  object-cover object-center  h-[40vh] md:h-[80vh]"
              src={cdata.image}
              alt="Featured Image"
            />

            <div className="p-2 space-y-10 mt-4">
              <p className="text-2xl">
                <span className="">Published Date:</span> {cdata.pubdate}
              </p>
              <h1 className=" text-3xl font-bold sm:text-5xl">{cdata.title}</h1>
              <div className=" md:text-center  flex items-center justify-center mt-6 block w-full  text-wrap   text-base sm:text-lg md:text-lg xl:text-xl text-justify px-4 sm:px-0">
                <p className="lg:px-24 lg:w-1/2 tracking-tight text-justify">
                  {cdata.description}
                </p>
              </div>
              {/* <p className=" text-lg">R & D on SEO</p> */}
            </div>
            <div
              className=" flex flex-wrap justify-center gap-2 p-2 mt-6 mb-8 "
              aria-label="Tags"
            >
              {cdata.keywords.map((keyword, index) => (
                <spna
                  key={index}
                  className="rounded-lg bg-brand-secondary text-brand-primary px-2 py-1 sm:px-4 sm:py-2 sm:text-xl font-bold hover:bg-yellow-600"
                >
                  {keyword}
                </spna>
              ))}
            </div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-24">
              Our Achievements
            </span>
          </header>
        </article>
      </section>
      <section className=" p-6 text-white ">
        {/* <div className=" mb-16 mt-20 block px-6 text-center"> */}
        {/* <h2 className="text-4xl font-bold uppercase md:text-5xl underline">Used Platforms</h2> */}

        {/* <div className="mt-8 text-center">
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Facebook</span>
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Google</span>
            <span className="mx-2 mb-2 inline-block rounded bg-brand-secondary px-6 py-2 text-xl font-medium text-white shadow hover:scale-105 hover:shadow-md md:mx-4 md:mt-2 md:text-lg" href="#" target="_blank">Instagram</span>
          </div> */}
        {/* </div> */}

        <div className="grid  p-2  sm:grid-cols-2 lg:grid-cols-4 space-y-12 sm:space-y-6 lg:space-y-0 ">
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm ">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">7.5X</h3>
            </div>
            <h3 className="text-2xl font-bold md:text-xl">ROAS (Facebook)</h3>
            <p className="">Increase of 20% in profit sale</p>
          </div>
          <div className="flex text-center flex-col items-center justify-center rounded-md  shadow-sm ">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">20X</h3>
            </div>
            <h3 className=" text-2xl  font-bold md:text-xl">
              ROAS (Google ads spend)
            </h3>
            <p className="">Increased 36% website traffic in one month.</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">49%</h3>
            </div>
            <h3 className="text-2xl font-bold">ROI (Facebook)</h3>
            <p className="">Increase in Attributed Sales</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">1.8%</h3>
            </div>
            <h3 className="text-2xl font-bold">CTR</h3>
            <p className="">on mobile and website</p>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col-reverse  md:flex-row  items-center justify-center px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi">
        <div className="flex   flex-col items-start justify-center gap-y-4  md:w-[50%] ">
          <h2 className="mb-4  text-4xl lg:text-6xl font-bold text-brand-secondary">
            Client Goals
          </h2>
          <p className=" text-2xl lg:text-3xl  font-bold text-white">
            Reach more customers with ads and Branding.
          </p>
          <div className="w-full">
            <ol className="flex  h-full list-inside list-decimal flex-col  text-base sm:text-lg md:text-lg xl:text-xl text-justify  text-white">
              {cdata.goal.points.map((point, index) => (
                <li key={index} className="rounded p-1">
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="aspect-square md:w-[50%]  flex items-center justify-center">
          <div className="">
            <img
              className="h-full w-full object-cover "
              src="/CaseStudy/case-one.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col   md:flex-row  px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi">
        <div className="aspect-square h-[60vh]  flex-1 ">
          <img
            className="h-full w-full object-contain"
            src="/CaseStudy/case-two.svg"
            alt=""
          />
        </div>
        <div className="flex lg:space-x-6   h-auto w-full flex-col items-start justify-center gap-y-4  md:w-1/2">
          <h2 className="mb-4  text-4xl lg:text-6xl font-bold text-brand-secondary ">
            How We Helped
          </h2>
          <p className="space-y-2 text-base sm:text-lg md:text-lg xl:text-xl text-justify leading-normal text-white">
            {cdata.help}
          </p>
        </div>
      </section>

      {/* <Recentcase/> */}
      <section className="">
        <Cards
          heading={"Recent Case studies"}
          getStartedButton={"Get started"}
        />
      </section>
      <Hcta />
    </>
  );
}
