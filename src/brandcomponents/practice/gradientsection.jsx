import React from "react";

export default function GradientSection() {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="grid max-w-screen px-4 py-8 lg:mx-28 md:mx-20 mx-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7  h-full space-y-10">
            <h3 className="max-w-4xl mb-4 text-3xl uppercase tracking-tight  md:text-1xl xl:text-xl dark:text-white">
              The most cost-effective digital marketing agency of USA and Canada
            </h3>
            <h1 className="max-w-7xl leading-relaxed text-4xl font-semibold tracking-wider  md:text-5xl xl:text-6xl dark:text-white">
              Enhance your Digital Presence and gain Market excellence
            </h1>
            <div className="flex justify-end items-center my-5 mr-20">
              <svg
                width="529"
                height="36"
                viewBox="0 0 529 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 32C79.7361 10.8706 289.967 -18.7107 525 32"
                  stroke="#FFB700"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Don't believe it? Request a free quotation today
            </p>
            <div className="flex justify-start items-center">
              <div className="w-96 ">
                <form class="w-full">
                  <select
                    id="countries"
                    class="border  text-gray-900 text-sm  block w-full p-4 dark:placeholder-gray-400 dark:text-black font-bold  "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 bg-[#FFB700]  dark:text-white dark:border-gray-700 dark:hover:bg-[#ffb700d3]"
              >
                Speak to Sales
              </a>
            </div>
            <div className="mt-10">
              <span>

              </span>
              <span className="text-white ">
                4.8/5 based on 6,873 reviews | GDPR Compliant
              </span>
            </div>
          </div>
          <div className="hidden relative lg:mt-0 lg:col-span-5 lg:flex  items-center justify-center">
          <div className='absolute -z-0 w-full  h-auto aspect-square rounded-full border bg-[#15BEE3]/30 blur-3xl'></div>
            <img
              src="./landingPage/Mockup.png"
              alt="mockup"
              className="absolute z-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
