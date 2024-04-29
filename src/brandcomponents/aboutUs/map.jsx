import React from "react";

const map = () => {
  return (
    <section class="overflow-hidden text-white   px-2 md:px-56">
      <div className="w-full h-auto  flex flex-col items-center justify-center p-2 ">
        <article className="text-[4rem] font-medium">
          We’re here for you
        </article>
        <span className="text-[4rem] font-semibold tracking-normal text-center text-[#FCBD40]">
          no matter where you are
          <div className="border-4 w-full mt-3"></div>
        </span>
      </div>
      <div className="flex items-center justify-between lg:mt-20 md:mt-16">
        <div className="p-6">
          <img src="./WorldMap.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default map;
