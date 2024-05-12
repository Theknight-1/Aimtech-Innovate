"use client";
import React, { useState, useEffect } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "We can count on them to bring new ideas to the table consistently",
      author: "Hari Rai",
      company: "CEO-ABC company",
      image:
        "https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-880_wkaciBt.jpg",
    },
    {
      quote:
        "The team is productive and creative , they help us get to market within our deadline.",
      author: "Ramkumar",
      company: "Software Engineer",
      image: "https://rkmahato.com.np/images/Profile.png",
    },
    {
      quote:
        "We were thrilled to use aimtech services, they are highly skilled and are the one we can trust",
      author: "Sailesh rokaya",
      company: "CEO -SBRC Infosys",
      image: "https://broadwayinfosys.com/uploads/testimonials/1521784284.jpg",
    },
    // Add more testimonials as needed
  ];
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonialIndex, testimonials.length]);

  const showNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const bgimg = {};

  return (
    <>
      <section className="  mt-20 py-20 h-auto flex flex-col items-center justify-center w-full  overflow-x-hidden  xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div className="flex relative h-full   w-full flex-col gap-10 lg:gap-0 lg:flex-row py-6  sm:p-10 lg:p-0 ">
          {/* <div className="absolute -top-80 -left-20 -z-0 w-96 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>             */}
          
          <div className="flex  space-y-20  h-auto gap-y-2 w-full flex-col items-center justify-center  lg:w-1/2 ">
            <div className="h-auto w-full  flex items-center justify-center  ">

              <span className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-left lg:text-[4rem]  text-white leading-normal">
                We Drive Innovative Marketing for Great Companies
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center   mt-2 h-auto w-full text-center lg:text-left">
              <span className=" text-gray-100 ">
                More than ever, you need to drive{" "}
                <a href="#">
                  <span className="font-bold text-white underline">
                    RESULTS.
                  </span>
                </a>
              </span>
              <span className=" text-gray-100 text-lg lg:text-2xl">
                We increase revenue and lower <span className="font-semibold">CAC</span>  with <span className="font-bold text-brand-secondary">strategic marketing.</span>
              </span>
            </div>
            <div className="w-full flex-1 p-2 border hidden">
              <button className="w-auto flex items-center justify-center gap-x-4 border bg-yellow-400 p-4 px-8  shadow-lg">
                <span className="font-bold">Work With Us</span>
                <img
                  src="/arrow-double-end.svg"
                  className="w-8 h-8 lg:w-6 lg:h-6 animate-fade-right animate-infinite animate-alternate"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="relative flex h-auto flex-1 flex-col items-center justify-center space-y-5">
            <div class="absolute inset-0 z-0 p-8  flex items-center justify-center">
              <div class="h-full w-auto aspect-square rounded-full bg-blue-400/40 blur-3xl"></div>
            </div>
            <div className="  px-32 space-y-8 relative z-10 w-full h-full flex flex-col items-center justify-center ">
              <div className="flex flex-row h-auto gap-x-24 min-h-16 w-full items-center justify-center">
                <button onClick={showPreviousTestimonial}>
                  <img
                    src="/arrow-double-start.svg"
                    className="w-8 h-8 lg:w-6 lg:h-6"
                    alt="arrow"
                  />
                </button>
                <img
                  key={currentTestimonialIndex}
                  src={currentTestimonial.image}
                  className="h-48 w-48 border animate-fade-left   rounded-full bg-white object-cover"
                  alt=""
                />
                <button onClick={showNextTestimonial}>
                  <img
                    src="/arrow-double-end.svg"
                    className="w-8 h-8 lg:w-6 lg:h-6"
                    alt="arrow"
                  />
                </button>
              </div>
              <div className="flex h-auto min-h-16 w-full items-center justify-center  ">
                <span
                  key={currentTestimonialIndex}
                  className="text-center animate-fade-left text-2xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-white"
                >
                  “{currentTestimonial.quote}”
                </span>
              </div>
              <div
                key={currentTestimonialIndex}
                className="flex animate-fade-left h-auto min-h-16 w-full flex-col items-center justify-center "
              >
                <span className="text-gray-200 text-2xl lg:text-3xl">
                  {currentTestimonial.author}
                </span>
                <span className="font-bold text-gray-100 ">
                  {currentTestimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
