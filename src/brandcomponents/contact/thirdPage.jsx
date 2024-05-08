import Link from "next/link";
import React from "react";

const ThirdPage = () => {
  return (
    <section className="relative h-screen w-screen  ">
      <div className="flex items-center justify-center w-full h-full">
        <div className="mx-4 lg:mx-28 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] bg-[#FAC954] flex justify-center items-center rounded-tl-[3rem] lg:rounded-tl-none lg:rounded-bl-[3rem]">
            <div className="p-8 sm:p-10 lg:p-12 xl:p-20 space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold ">
                Let’s get acquainted{" "}
              </h1>
              <p className="text-lg lg:text-2xl font-medium leading-relaxed">
                Aimtech Innovate offers premier digital marketing services at
                unbeatable rates in the US and Canada, thanks to our partnership
                with Nepal's Next Coach Incubator Program. Access top-quality
                work at a fraction of the cost.
              </p>
              <div className=" w-full">
                <Link href="/about">
                  <button className="bg-[#11225F] px-8 lg:px-12 py-3 text-white rounded-lg">
                    Know More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] md:h-96 lg:h-auto">
            <img
              src="./Maskgroup.png"
              alt=""
              className=" sm:w-11/12 md:w-full md:h-[96] h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
