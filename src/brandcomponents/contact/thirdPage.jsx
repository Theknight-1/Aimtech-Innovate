import Link from "next/link";
import React from "react";

const ThirdPage = () => {
  return (
    <section className="relative lg:h-[80vh] w-screen px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi">
      <div className="flex items-center justify-center w-full h-full py-4 xl:p-0">
        <div className=" flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 bg-brand-secondary flex justify-center items-center lg:rounded-l-3xl">
            <div className="p-5 sm:p-10 lg:p-8 xl:p-5 space-y-6">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                Still confused how a digital marketing agency can help your
                business?{" "}
              </span>
              <p className="text-lg lg:text-2xl font-medium ">
                <span>
                  We have industry experts to crack the code and take your
                  online presence to the next level.{" "}
                </span>{" "}
                <br />
                <span className="text-lg lg:text-2xl font-medium ">
                  Schedule a meeting with our Digital Marketing Expert to
                  discuss your goals and unlock the possibilities.
                </span>
              </p>
              <div className="w-full">
                <a href="https://calendly.com/himanshusaxena5500/30min">
                  <button className="bg-brand-primary px-8 lg:px-12 py-3 text-white rounded-lg font-bold">
                    LET’S SCHEDULE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full hidden  lg:block lg:w-[40%]  lg:h-auto object-cover border lg:rounded-r-3xl overflow-hidden">
            <img
              src="/Contacts.png"
              alt=""
              className=" w-full object-cover h-[100%] object-center "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
