import React from "react";

const Hero = () => {
  return (
    <section className="h-auto md:h-[calc(100vh-10vh)] w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col md:w-[60%] w-full md:pr-8 space-y-5">
          <h3 className="text-[#FCCF40] text-4xl md:text-5xl">
            EXPLORE OUR CASE STUDIES
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[130%]">
            Experience our expertise <br /> based projects
          </h1>
          <p className="font-normal text-lg md:text-xl leading-relaxed text-gray-400">
            Aimtech helps you grow. Reach us to bring you business to the wolrd.
          </p>
        </div>
        <div className="w-full md:w-[40%] h-auto overflow-hidden flex items-center justify-center mt-8 md:mt-0">
          <div className="w-[80%] md:w-[600px] h-[300px] md:h-[500px]">
            <img
              src="/png/revenue.png"
              alt="img"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
