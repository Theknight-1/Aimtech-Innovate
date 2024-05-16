import Link from "next/link";
import React from "react";

const ThirdPage = () => {
  return (
    <section className="relative h-screen w-screen  ">
      <div className="flex items-center justify-center w-full h-full">
        <div className="mx-4 lg:mx-28 flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 bg-brand-secondary flex justify-center items-center lg:rounded-l-3xl">
            <div className="p-8 sm:p-10 lg:p-12 xl:p-20 space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              Still confused how a digital marketing agency can help your business?
                {" "}
              </h1>
              <p className="text-lg lg:text-2xl font-medium ">
              <span>We have industry experts to crack the code and take your online presence to the next level. </span> <br /><br />
              <span className="text-lg lg:text-2xl font-medium ">Schedule a meeting with our Digital Marketing Expert to discuss your goals and unlock the possibilities.</span>
              </p>
              <div className=" w-full">
                <Link href="/contact">
                  <button className="bg-brand-primary px-8 lg:px-12 py-3 text-white rounded-lg">
                  LET’S SCHEDULE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] md:h-96 lg:h-auto rounded-r-3xl ">
            <img
              src="/Maskgroup.png"
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
