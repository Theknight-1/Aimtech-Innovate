import React from "react";

export default function Hcta() {
  return (
    <section className="py-10 text-gray-800  sm:py-16 md:py-20 md:pb-16">
      <div className="mx-auto mb-10 hidden aspect-video h-auto w-full max-w-5xl overflow-hidden rounded-xl  shadow-lg md:block">
        <img className="h-full w-full" src="./Frame1.png" alt="" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
        <div className="relative mx-auto my-auto flex flex-col items-center text-center text-white">
          <h2 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Keep every one{" "}
            <span className="whitespace-nowrap">in the loop</span>
          </h2>
          <p className="mt-4 font-medium md:text-2xl">
            <span>All good things starts with a homepage.</span> <br />{" "}
            <span>Get inspired without breaking your wallet.</span>{" "}
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0 ">
            <button className="relative mt-4 rounded-full bg-[#FFB700] px-6 py-2  text-blue-800 font-bold text-xl shadow transition hover:bg-yellow-400">
              <div className=""></div>
              Start for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
