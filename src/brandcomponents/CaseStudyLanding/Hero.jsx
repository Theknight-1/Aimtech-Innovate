import React from "react";

const Hero = () => {
  return (
    <section className="h-screen md:h-[calc(100vh-10vh)] w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col md:w-[60%] w-full md:pr-8 space-y-5">
          <h3 className="text-[#FCCF40] text-4xl md:text-5xl">
            EXPLORE OUR CASE STUDIES
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[130%]">
            Experience our expertise <br /> based projects
          </h1>
          <p className="font-normal text-lg md:text-xl leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing.
          </p>
        </div>
        <div className="w-full md:w-[40%] h-auto overflow-hidden flex items-center justify-center mt-8 md:mt-0">
          <div className="w-[80%] md:w-[600px] h-[300px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
