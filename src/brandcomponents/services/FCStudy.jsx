import React from "react";

export default function FCStudy({ featured = {} }) {
  const fcase = featured;

  return (
    <section class="overflow-hidden p-4 lg:mt-20 text-white h-auto  lg:mb-16  xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 py-8 sm:py-6 2xl:py-0 font-satoshi">
      <div className="w-full h-auto  flex flex-col items-center justify-center ">
        <p className="text-[28px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl  font-semibold tracking-wider text-start sm:text-center text-brand-secondary">
          <span>Featured Case Study</span>
        </p>
        <span className=" text-[20px] sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
          {fcase.title}
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-4">
        <div className="flex-1 md:mr-10">
          <div className="space-y-3">
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl md:text-2xl font-medium text-brand-secondary ">
                Objectives
              </span>
              <p className="text-base sm:text-xl md:text-sm lg:text-lg 2xl:text-xl tracking-wide text-white lg:leading-relaxed text-justify">
                {fcase.objective}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl md:text-2xl font-medium text-brand-secondary">
                Challenges
              </span>
              <p className="text-base sm:text-xl md:text-sm lg:text-lg 2xl:text-xl tracking-wide text-white lg:leading-relaxed text-justify">
                {fcase.challenge}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl md:text-2xl font-medium text-brand-secondary">
                Process
              </span>
              <p className="text-base sm:text-xl md:text-sm lg:text-lg 2xl:text-xl tracking-wide text-white lg:leading-relaxed text-justify">
                {fcase.Process}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl md:text-2xl font-medium text-brand-secondary">
                Results
              </span>
              <p className="text-base sm:text-xl md:text-sm lg:text-lg 2xl:text-xl tracking-wide text-white lg:leading-relaxed text-justify">
                {fcase.Results}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <img src={fcase.img} alt="" />
            </div>
            <div className="space-y-3 mt-8">
              <span className="text-xl sm:text-2xl md:text-2xl font-medium text-brand-secondary">
                Learnings
              </span>
              <p className="text-base sm:text-xl md:text-sm lg:text-lg 2xl:text-xl tracking-wide text-white leading-normal text-justify">
                {fcase.learnings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
