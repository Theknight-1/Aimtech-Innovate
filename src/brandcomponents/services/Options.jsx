import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Options = () => {
  return (
    <section className="w-full h-auto">
      <div className="h-full w-full">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center tracking-wide">
            You also might be interested in
          </h1>
          <div className="flex flex-col md:flex-row justify-around gap-14 py-20 w-[90%] ">
           
            <div className="space-y-8">
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                Instagram Management Services
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
            </div>
            <div className="space-y-8">
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                Instagram Management Services
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
            </div>
            <div className="space-y-8">
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                Instagram Management Services
              </p>
              <p className="flex items-center gap-6 text-white text-xl lg:text-2xl">
                <span className="text-blue-500">
                  <FaCheckCircle />
                </span>{" "}
                B2B Podcast Agency
              </p>
            </div>
           
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
