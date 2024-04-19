'use client'
import React, { useState } from "react";

export default function Carousel() {
  const testimonials = [
    {
      quote: "Testimonial 1",
      author: "Hari Rai",
      company: "CEO-ABC company",
      image: "https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-880_wkaciBt.jpg",
    },
    {
      quote: "Testimonial 2",
      author: "Ramkumar",
      company: "Engineer",
      image: "https://m.foolcdn.com/media/dubs/images/original_imageshttpsg.foolcdn.comeditorialimag.width-880_wkaciBt.jpg",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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

  return (
    <>
      <section className="mt-8 h-auto w-screen bg-[#185493] px-96 py-24">
        <div className="flex min-h-96 w-full flex-col-reverse md:flex-row">
          {/* Testimonial Content */}
          <div className="flex w-full flex-col items-center justify-start md:w-1/2">
            <div className="h-2/4 w-full p-2">
              <span className="text-5xl font-bold text-white">
                {currentTestimonial.quote}
              </span>
            </div>
            <div className="flex h-auto w-full flex-col p-2">
              <span className="font-bold text-gray-100">
                {currentTestimonial.author}
              </span>
              <span className="font-bold text-gray-100">
                {currentTestimonial.company}
              </span>
            </div>
          </div>
          {/* Testimonial Image */}
          <div className="flex h-auto flex-1 flex-col items-center justify-center p-8">
            <img
              src={currentTestimonial.image}
              className="h-24 w-24 rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button onClick={showPreviousTestimonial}>
            <img src="/arrow-double-start.svg" className="w-4 h-4" alt="arrow" />
          </button>
          <button onClick={showNextTestimonial}>
            <img src="/arrow-double-end.svg" className="w-4 h-4" alt="arrow" />
          </button>
        </div>
      </section>
    </>
  );
}
