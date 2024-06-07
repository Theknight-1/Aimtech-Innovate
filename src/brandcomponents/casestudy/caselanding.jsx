"use client";
import {React,useEffect} from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import Hcta from "@/brandcomponents/landing/cta";
export default function CaseLanding({ casedata }) {
  const cdata = casedata;
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }, []);
  return (
    <>
      <section className="w-full  text-white font-satoshi">
        <article>
          <header className="h-auto w-full   text-center">
            <div className="w-full h-[40vh] xl:h-[45vh] overflow-hidden object-contain">
              <img
                className="mt-2 w-full  object-cover object-center h-full "
                src={cdata.image}
                alt="Featured Image"
              />
            </div>

            <div className="p-2 space-y-5 md:space-y-10 mt-4 md:w-1/2 mx-auto block">
              <p className="text-base md:text-lg xl:text-2xl">
                <span className="">Published Date:</span> {cdata.pubdate}
              </p>
              <h1 className=" text-3xl font-bold sm:text-5xl">{cdata.title}</h1>
              <div className=" md:text-center  flex items-center justify-center mt-6  w-full  text-wrap   text-base sm:text-lg md:text-lg xl:text-xl text-justify px-4 sm:px-0">
                <p className="lg:px-4  md:px-8 tracking-tight text-center  ">
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

        <div className="grid  p-2  sm:grid-cols-2 lg:grid-cols-4 space-y-12 sm:space-y-6 lg:space-y-0 text-center">
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm ">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">{cdata.achievements[0].h1}</h3>
            </div>
            <h3 className="text-2xl font-bold md:text-xl">{cdata.achievements[0].h2}</h3>
            <p className="">{cdata.achievements[0].h3}</p>
          </div>
          <div className="flex text-center flex-col items-center justify-center rounded-md  shadow-sm ">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">{cdata.achievements[1].h1}</h3>
            </div>
            <h3 className=" text-2xl  font-bold md:text-xl">
            {cdata.achievements[1].h2}
            </h3>
            <p className="">{cdata.achievements[1].h3}</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">{cdata.achievements[2].h1}</h3>
            </div>
            <h3 className="text-2xl font-bold">{cdata.achievements[2].h2}</h3>
            <p className="">{cdata.achievements[2].h3}</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md  shadow-sm">
            <div className=" flex items-center">
              <h3 className="text-6xl font-bold">{cdata.achievements[3].h1}</h3>
            </div>
            <h3 className="text-2xl font-bold">{cdata.achievements[3].h2}</h3>
            <p className="">{cdata.achievements[3].h3}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col-reverse  md:flex-row  items-center justify-center px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi ">
        <div className="flex   flex-col items-start justify-center gap-y-4  md:w-full">
          <h2 className="mb-4  text-4xl lg:text-6xl font-bold text-brand-secondary">
            Client Goals
          </h2>
          <p className=" text-2xl lg:text-3xl  font-bold text-white">
            Reach more customers with ads and Branding.
          </p>
          <div className="w-full">
            <ol className="flex  h-full list-inside list-decimal flex-col  text-base sm:text-lg md:text-lg 2xl:text-xl text-justify  text-white">
              {cdata.goal.points.map((point, index) => (
                <li key={index} className="rounded p-1">
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="aspect-square md:w-[40%]  flex items-center justify-center">
          <div className="">
            <img
              className="h-full w-full object-cover "
              src="/CaseStudy/client-goals.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col   md:flex-row  px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi ">
        <div className="aspect-square h-[50vh]  flex-1 ">
          <img
            className="h-full w-full object-contain"
            src="/CaseStudy/how-we-helped.png"
            alt=""
          />
        </div>
        <div className="flex lg:space-x-6   h-auto w-full flex-col items-start justify-center gap-y-4  md:w-1/2">
          <h2 className="mb-4 lg:ml-5 text-4xl lg:text-6xl font-bold text-brand-secondary  tracking-tight ">
            How We Helped
          </h2>
          <p className="space-y-2 text-base sm:text-lg md:text-lg 2xl:text-xl text-justify leading-normal text-white">
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
