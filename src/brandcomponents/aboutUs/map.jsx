import React from "react";

const Map = () => {
  return (
    <section className="overflow-hidden text-white xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4  h-full w-full flex flex-col justify-center items-center font-satoshi">
      <div className="w-full h-auto flex flex-col items-center justify-center p-2">
        <article className="text-3xl md:text-4xl lg:text-6xl font-medium text-center">
          We’re here for you
        </article>
        <span className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-normal text-center text-[#FCBD40] mt-3">
          no matter where you are
          <div className="border-4 w-full mt-3"></div>
        </span>
      </div>
      <div className="flex items-center justify-center mt-10 md:mt-16 lg:mt-20">
        <div className=" w-full ">
          <img src="./WorldMap.png" alt="World Map" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Map;
