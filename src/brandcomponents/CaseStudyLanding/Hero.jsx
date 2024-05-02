import React from "react";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-10vh)] w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4">
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex justify-center items-center  w-full">
          <div className="flex  w-[60%] ">
            <div className="">
              <h3 className="text-[#FCCF40] text-[42px]">
                EXPLORE OUR CASE STUDIES
              </h3>
              <h1 className="text-[64px] font-bold text-white leading-[130%]">
                Experience our expertise <br /> based projects
              </h1>
              <p className="font-normal text-[1.5rem] leading-[1.5] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-auto  overflow-hidden flex items-center justify-end ">
            <div className="w-[600px] h-[500px]  ">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
