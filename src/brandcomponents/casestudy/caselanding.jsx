"use client";
import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import Hcta from '@/brandcomponents/landing/cta'
export default function CaseLanding({casedata}) {
  const cdata = casedata;
  return (
    <>
      <section className="w-full  text-white">
        <article>
          <header className="h-auto w-full   text-center">
            <img
              className="mt-2 w-full  object-cover sm:h-[34rem]"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Featured Image"
            />

            <div className="p-2 space-y-10 mt-4">
              <p className="text-2xl"><span className="">Published Date:</span> {cdata.pubdate}</p>
              <h1 className=" text-3xl font-bold sm:text-5xl">
              {cdata.title}
              </h1>
              <div className=" text-center  flex items-center justify-center mt-6 block w-full text-xl text-wrap lg:text-2xl  ">
                <p className="lg:px-24 lg:w-1/2">
                 {cdata.description}
                </p>
              </div>
              {/* <p className=" text-lg">R & D on SEO</p> */}
            </div>
            <div className=" flex flex-wrap justify-center gap-2 p-2 mt-6 " aria-label="Tags">
            {cdata.keywords.map((keyword, index) => (
              <spna key={index} className="rounded-lg bg-brand-secondary text-brand-primary px-4 py-2 text-xl font-bold hover:bg-yellow-600">
                  {keyword}
              </spna>
              ))}
              
            </div>
            <h1 className="text-2xl lg:text-5xl font-bold mt-24">Our Achievements</h1>
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

        <div className="grid gap-5 p-2  sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm ">
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
            <h3 className=" text-2xl  font-bold md:text-xl">
              ROAS (Google ads spend)
            </h3>
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

      <section className="flex w-full flex-col p-2 px-10 md:flex-row ">
        <div className="flex aspect-square h-auto w-full flex-col items-start justify-center gap-y-4 p-2 lg:w-1/2">
          <h2 className="mb-4 pl-2 text-4xl lg:text-8xl font-bold text-brand-secondary">
            Client Goals
          </h2>
          <p className=" text-2xl lg:text-3xl pl-2 font-bold text-white">
            Reach more customers with ads and Branding.
          </p>
          <div className="w-full">
            <ol className="flex h-full list-inside list-decimal flex-col gap-4 text-2xl lg:text-2xl  text-white">
            {cdata.goal.points.map((point, index) => ( 
               <li key={index} className="rounded  p-2">
                 {point}
              </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="aspect-square h-auto flex-1">
          <img
            className="h-full w-full object-contain"
            src="https://nrtimes.co.uk/wp-content/uploads/2021/02/19199739-scaled.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="flex w-full flex-col p-2 px-10 md:flex-row">
        <div className="aspect-square h-auto flex-1">
          <img
            className="h-full w-full object-contain"
            src="https://nrtimes.co.uk/wp-content/uploads/2021/02/19199739-scaled.jpg"
            alt=""
          />
        </div>
        <div className="flex lg:space-x-6 aspect-square h-auto w-full flex-col items-start justify-center gap-y-4 p-2 md:w-1/2">
          <h2 className="mb-4 pl-2 text-center md:text-left text-6xl font-bold text-brand-secondary ">
            How We Helped
          </h2>
          <p className="text-xl md:text-2xl leading-normal text-white">
           {cdata.help}
          </p>
        </div>
      </section>
      
      <section className="">
        <Cards
          heading={"Recent Case studies"}
          getStartedButton={"Get started"}
        />
      </section>
      <Hcta/>

    </>
  );
}
