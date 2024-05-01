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
      <section className=" min-h-[calc(100vh-10vh)] flex flex-col items-center justify-center w-screen mt-8 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4">
        <div className="flex relative h-full   w-full flex-col-reverse md:flex-row   ">
          <div className="absolute -top-80 -left-20 -z-0 w-96 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>            
          
          <div className="flex   h-auto gap-y-2 w-full flex-col items-start justify-start md:w-1/2 ">
            <div className="h-auto w-full  ">

              <span className="text-[5rem] font-bold text-white leading-normal">
                We Drive Innovative Marketing for Great Companies
              </span>
            </div>
            <div className="flex h-auto w-full flex-col  mt-2 p-2 ">
              <span className="font-bold text-gray-100 text-2xl">
                More than ever, you need to drive{" "}
                <a href="#">
                  <span className="font-bold text-white underline">
                    RESULTS.
                  </span>
                </a>
              </span>
              <span className="font-bold text-gray-100">
                We increase revenue and lower CAC with strategic marketing.
              </span>
            </div>
            <div className="w-full flex-1 p-2 border hidden">
              <button className="w-auto flex items-center justify-center gap-x-4 border bg-yellow-400 p-4 px-8  shadow-lg">
                <span className="font-bold">Work With Us</span>
                <img
                  src="/arrow-double-end.svg"
                  className="w-4 h-4 animate-fade-right animate-infinite animate-alternate"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="relative flex h-auto flex-1 flex-col items-center justify-center">
            <div class="absolute inset-0 z-0 p-8  flex items-center justify-center">
              <div class="h-full w-auto aspect-square rounded-full bg-blue-400/40 blur-3xl"></div>
            </div>
            <div className=" relative z-10 w-full h-full flex flex-col items-center justify-center ">
              <div className="flex flex-row h-auto gap-x-24 min-h-16 w-full items-center justify-center">
                <button onClick={showPreviousTestimonial}>
                  <img
                    src="/arrow-double-start.svg"
                    className="w-4 h-4"
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
                    className="w-4 h-4"
                    alt="arrow"
                  />
                </button>
              </div>
              <div className="flex h-auto min-h-16 w-full items-center justify-center">
                <span
                  key={currentTestimonialIndex}
                  className="text-center animate-fade-left text-3xl font-bold text-white"
                >
                  “{currentTestimonial.quote}”
                </span>
              </div>
              <div
                key={currentTestimonialIndex}
                className="flex animate-fade-left h-auto min-h-16 w-full flex-col items-center justify-center"
              >
                <span className="text-gray-200">
                  {currentTestimonial.author}
                </span>
                <span className="font-bold text-gray-100">
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
