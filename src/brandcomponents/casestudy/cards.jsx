import React from "react";
import Link from "next/link";
import { PaginationNav1Presentation } from "@/uicomponent/PagiNation";
const cards = ({ heading, getStartedButton }) => {
  return (
    <section className="w-screen h-screen xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4">
      <h1 className="text-center text-[56px] font-bold text-white ">
        {heading}
      </h1>

      <div className="">
        <div className="grid h-[60vh] justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-5">
          {/* Card 1 */}

          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="relative  h-[50%] flex justify-center items-center">
              <div className="space-y-5">
                <h4 className="font-semibold text-2xl leading-6 text-gray-700 my-2 px-3 ">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h4>
                <p className="paragraph-normal text-gray-600 text-[1rem] px-3">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <div className="absolute flex items-center justify-between  h-20 w-full p-3 ">
                  <span className="text-sm text-primary">
                    November 19, 2022
                  </span>
                  <a
                    className="px-4 py-2  text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59]"
                    href="#"
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="relative  h-[50%] flex justify-center items-center">
              <div className="space-y-5">
                <h4 className="font-semibold text-2xl leading-6 text-gray-700 my-2 px-3 ">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h4>
                <p className="paragraph-normal text-gray-600 text-[1rem] px-3">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <div className="absolute flex items-center justify-between  h-20 w-full p-3 ">
                  <span className="text-sm text-primary">
                    November 19, 2022
                  </span>
                  <a
                    className="px-4 py-2  text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59]"
                    href="#"
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="relative  h-[50%] flex justify-center items-center">
              <div className="space-y-5">
                <h4 className="font-semibold text-2xl leading-6 text-gray-700 my-2 px-3 ">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h4>
                <p className="paragraph-normal text-gray-600 text-[1rem] px-3">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <div className="absolute flex items-center justify-between  h-20 w-full p-3 ">
                  <span className="text-sm text-primary">
                    November 19, 2022
                  </span>
                  <a
                    className="px-4 py-2  text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59]"
                    href="#"
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getStartedButton ? (
        <div className="flex  flex-col justify-center items-center">
          <h4 className="text-center text-[32px] font-bold text-white w-[40%]">
            Have a project in mind? <br /> Let’s get to work.
          </h4>
          <Link href='/contact' className=" mt-5">
          <span className="px-10 py-3 rounded-lg text-lg  bg-[#FFB700]">
            {getStartedButton}
          </span>
          </Link>
        </div>
      ) : (
        <div className="flex  justify-center items-center">
          <PaginationNav1Presentation />
        </div>
      )}
    </section>
  );
};

export default cards;
