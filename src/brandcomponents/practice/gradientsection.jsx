import React from "react";

export default function GradientSection() {
  return (
    <>
      <section class="relative flex h-screen w-screen flex-col bg-[#162F5C] text-white md:flex-row">
        <div className="absolute z-0 w-full h-full">
          <img src="/vector/Waves.svg" alt="" />
        </div>
        <div className=" w-full flex">
          <div class="w-full p-2 md:w-1/2 ">
            <div class="flex flex-col  aspect-square h-full w-full items-center justify-center">
              <div className="flex  w-full h-full items-center justify-center">
                <div class=" pl-10 py-10 flex flex-col items-start justify-center w-full h-full">
                  <div class="">
                    <p class="flex text-sm uppercase text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-1 inline h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      The most cost-effective digital marketing agency of USA
                      and Canada
                    </p>
                    <h2 class="mb-6 text-sm lg:text-5xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                      <span>
                        Enhance your Digital Presence and gain Market excellence
                      </span>
                      <span class="my-1 inline-block border-b-8 border-white  px-4 font-bold text-white">
                        different
                      </span>
                    </h2>
                    <p class="text-base text-gray-100">
                      Don't believe it? Request a free quotation today
                    </p>
                  </div>
                  <div class="mt-10 w-3/4 h-auto flex flex-col items-center md:flex-row ">
                    <div className="w-full h-10 flex items-center justify-start ">
                      <select
                        name="SRV"
                        className="w-1/2  text-center text-black  rounded-l-lg py-4"
                        id=""
                      >
                        <option value="Digital">Digital Marketting</option>
                        <option value="">SEO </option>
                        <option value="">Branding </option>
                        <option value="">Web development</option>
                      </select>
                      <button className="w-48  px-4 py-4 bg-yellow-400 rounded-r-lg cursor-pointer hover:bg-yellow-500">
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full bg-transparent p-2 md:w-1/2">
            <div class="flex aspect-square h-full  w-full items-center justify-center ">
              <div class="flex  aspect-square h-full w-full items-center justify-center  ">
                <img src="/Herobg.png" className="w-full h-full " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
