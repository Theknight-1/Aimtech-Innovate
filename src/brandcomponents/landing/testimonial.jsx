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
        "We can count on them to bring new ideas to the table consistently",
      author: "Mark Henry",
      company: "CEO - Alpha & company",
      image:
        "https://w7.pngwing.com/pngs/214/506/png-transparent-company-chief-executive-business-finance-goal-lorm-ipsum.png",
    },
    {
      quote:
        "We can count on them to bring new ideas to the table consistently",
      author: "Bill willow",
      company: "CEO -SBRC Infosys",
      image:
        "https://toppng.com/uploads/preview/osco-daewoo-ceo-kim-young-sang-young-sang-kim-posco-daewoo-11563201738ixvi9ad3ey.png",
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
      <section className="font-satoshi  mt-20 lg:py-20 h-auto flex flex-col items-center justify-center w-full  overflow-x-hidden  xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div className="flex relative h-full   w-full flex-col gap-10 lg:gap-0 lg:flex-row py-6  sm:p-10 lg:p-0 ">
          {/* <div className="absolute -top-80 -left-20 -z-0 w-96 h-auto aspect-square   rounded-full  bg-[#15BEE3]/20 blur-3xl"></div>             */}

          <div className="flex  lg:space-y-20 space-y-8  h-auto  w-full flex-col items-center justify-center  lg:w-1/2 ">
            <div className="h-auto w-full  flex items-center justify-center ">
              <span className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-6x text-center lg:text-start  text-white font-bold">
                We helped businesses achieve massive <br />{" "}
                <span className="border-b-4 text-brand-secondary border-brand-secondary">
                  profitable
                </span>{" "}
                results
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center mt-2 h-auto w-full text-center lg:text-left">
              <span className=" text-gray-100 lg:text-2xl">
                More than ever, We help you drive{" "}
                <a href="#">
                  <span className="text-white ">results.</span>
                </a>
              </span>
              <span className=" text-gray-100 text-lg lg:text-2xl">
                We increase revenue and lower{" "}
                <span className="font-semibold">CAC</span> with{" "}
                <span className="font-bold text-brand-secondary">
                  innovative marketing
                </span>
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
            {/* <div class="absolute inset-0 z-0 p-8  flex items-center justify-center">
              <div class="h-full w-auto aspect-square rounded-full bg-blue-400/40 blur-3xl"></div>
            </div> */}
            <div className="  space-y-4 lg:space-y-6 relative z-10 w-full h-full flex flex-col items-center justify-center">
              <div className="flex flex-row space-x-6  w-full items-center justify-center">
                <button onClick={showPreviousTestimonial}>
                  <img
                    src="/arrow-double-start.svg"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    alt="arrow"
                  />
                </button>
                <img
                  key={currentTestimonialIndex}
                  src={currentTestimonial.image}
                  className="md:h-48 h-28  md:w-48 w-28 border animate-fade-left rounded-full bg-white object-cover"
                  alt=""
                />
                <button onClick={showNextTestimonial}>
                  <img
                    src="/arrow-double-start.svg"
                    className="w-5 h-5 lg:w-6 lg:h-6 rotate-180"
                    alt="arrow"
                  />
                </button>
              </div>
              <div className="flex h-auto min-h-16 w-full items-center justify-center  ">
                <span
                  key={currentTestimonialIndex}
                  className="text-center animate-fade-left text-2xl sm:text-4xl md:text-3xl lg:text-3xl  text-white"
                >
                  “{currentTestimonial.quote}”
                </span>
              </div>
              <div
                key={currentTestimonialIndex}
                className="flex animate-fade-left h-auto min-h-16 w-full flex-col items-center justify-center"
              >
                <span className="text-gray-200 text-2xl lg:text-3xl">
                  {currentTestimonial.author}
                </span>
                <span className="text-gray-100 ">
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
