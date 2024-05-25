import React from "react";
import file from "@/Data.json";
import Link from "next/link";

export default function BrandService({ data }) {
  const dataOBJ = data;

  return (
    <section className="overflow-x-hidden h-auto text-white gap-y-8 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-28 ">
      <section className="w-full h-auto flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <div className="md:w-2/4 w-full flex items-center justify-center">
          <img
            src={dataOBJ.image}
            alt="Product screenshot"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-start">
          <div className="w-full h-auto space-y-3 lg:space-y-4 xl:space-y-6 2xl:space-y-8 ">
            <h1 className="text-brand-secondary text-xl md:text-2xl font-semibold uppercase tracking-wide ">
              {dataOBJ.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide">
              {dataOBJ.tagLine}
            </p>
            <p className="text-white text-lg md:text-base lg:text-lg xl:text-xl tracking-wide ">
              {dataOBJ.desciption}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-brand-secondary font-semibold gap-2 text-lg md:text-xl lg:text-xl ">
              {dataOBJ.benifits.map((ben, index) => (
                <span key={index}>{ben}</span>
              ))}
            </div>
            <div className="hidden">
              <Link
                href={dataOBJ.link}
                className="p-4 bg-brand-secondary text-center text-brand-primary font-bold text-sm md:text-lg rounded-xl"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-5 sm:mt-10 h-auto flex justify-between items-center p-4">
        <div className="h-full flex flex-col-reverse md:flex-row items-center justify-between gap-2">
          <div className="w-full lg:w-3/5 h-full lg:pr-8 overflow-hidden flex flex-col items-center justify-center ">
            <div className="w-full space-y-5">
              <p className="mt-2 text-[28px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  text-white tracking-wide">
                {dataOBJ.second.title}
              </p>
              <div>
                <span className="text-xl md:text-xl">
                  Does this sound like your Business?
                </span>
              </div>
              <dl className="max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                <ul className="pl-4 font-satoshi list-inside list-disc space-y-2 text-base sm:text-lg md:text-lg xl:text-xl">
                  {dataOBJ.second.points.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dl>
            </div>
            <div className="font-satoshi w-full space-y-2 text-base sm:text-lg md:text-lg xl:text-xl mt-5 flex flex-col items-start justify-start tracking-wide">
              {dataOBJ.second.short.map((dn, index) => (
                <span key={index}>{dn}</span>
              ))}
            </div>
          </div>
          <div className=" h-full w-full sm:w-[80%] md:w-[40%] flex items-center justify-center  ">
            <img
              src={dataOBJ.second.image}
              alt="Product screenshot"
              className="w-full  h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-5 sm:mt-10 h-auto flex justify-center items-center p-4 ">
        <div className="h-full flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-5">
          <div className="w-full lg:w-3/5 h-full lg:pr-8 overflow-hidden flex flex-col items-start justify-center">
            <div className="w-full  lg:p-4">
              <p className="mt-2 text-[28px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-wide ">
                {dataOBJ.third.title}
              </p>
              <dl className="max-w-xl space-y-4 text-base leading-7 lg:max-w-none">
                <div className="w-full space-y-3 text-base sm:text-lg md:text-lg xl:text-xl mt-5 flex flex-col items-start justify-start tracking-wide">
                  {dataOBJ.third.short.map((dn, index) => (
                    <span key={index}>{dn}</span>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 list-inside list-disc text-base sm:text-lg md:text-lg xl:text-xl">
                  {dataOBJ.third.points.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </dl>
            </div>
            <div className=" min-h-12 bg-brand-secondary rounded hover:bg-yellow-400 space-y-5 text-lg md:text-xl mt-5 p-2 px-6 flex items-center justify-center">
              <Link
                href={dataOBJ.fourth.ctalink}
                className="font-bold text-brand-primary"
              >
                {dataOBJ.fourth.ctatext}
              </Link>
            </div>
          </div>
          <div className=" h-full flex items-center justify-center">
            <img
              src={dataOBJ.third.image}
              alt="Product screenshot"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
