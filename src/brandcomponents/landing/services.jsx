"use client";
import React, { useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://blog.4psa.com/wp-content/uploads/Reasons-worth-colaborating-with-your-teammates-1024x536.jpg",
];




export default function Services() {
  const [currentContent, setCurrentContent] = useState("businessImpact");
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleButtonClick = (targetId) => {
    const contentContainer = document.querySelector(".content-container");

    if (targetId !== currentContent) {
      gsap.to(contentContainer, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentContent(targetId);
          // Change image for new content
          const randomIndex = Math.floor(Math.random() * images.length);
          setCurrentImage(images[randomIndex]);
          gsap.to(contentContainer, { opacity: 1, duration: 0.5 });
        },
      });
    }
  };

  const getContent = () => {
    switch (currentContent) {
      case "businessImpact":
        return (
          <div className="relative w-full h-[35rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Demo Brand Name</h1>
              <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold">SEO Case Study</h1>
              <button className=" text-xl sm:text-2xl lg:text-3xl text-[#122B59] font-bold  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden opacity-50">
              {/* <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div> */}
              <img
                src={currentImage}
                
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        );

        case "contentMarketing":
          return (
            <div className="relative w-full h-[35rem] flex items-center justify-center ">
              <div className="absolute text-white z-20 text-center">
                <h1 className="text-3xl font-bold">Content Marketing</h1>
                <h1 className="text-[3rem] font-bold">This is the content for Content Marketing.</h1>
                <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                  Get Started
                </button>
              </div>
              <div className="absolute w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <img
                  src={currentImage}
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
  
        case "ecommerceDevelopment":
          return (
            <div className="relative w-full h-[35rem] flex items-center justify-center ">
              <div className="absolute text-white z-20 text-center">
                <h1 className="text-2xl font-bold">Ecommerce Development</h1>
                <h1 className="text-[3rem] font-bold">This is the content for Ecommerce Development.</h1>
                <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                  Get Started
                </button>
              </div>
              <div className="absolute w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <img
                  src={currentImage}
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
  
        case "webDesign":
          return (
            <div className="relative w-full h-[35rem] flex items-center justify-center ">
              <div className="absolute text-white z-20 text-center">
                <h1 className="text-2xl font-bold">Website Design</h1>
                <h1 className="text-[3rem] font-bold">This is the content for Website Design.</h1>
                <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                  Get Started
                </button>
              </div>
              <div className="absolute w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <img
                  src={currentImage}
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
  
        case "seoService":
          return (
            <div className="relative w-full h-[35rem] flex items-center justify-center ">
              <div className="absolute text-white z-20 text-center">
                <h1 className="text-2xl font-bold">SEO Service</h1>
                <h1 className="text-[3rem] font-bold">This is the content for SEO Service.</h1>
                <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                  Get Started
                </button>
              </div>
              <div className="absolute w-full h-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <img
                  src={currentImage}
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
  
        default:
          return null;
  
    }
  };

  return (
    <section
      id="services"
      className="w-full h-auto flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 mb-10"
    >
      <section className="flex flex-col lg:flex-row items-center  w-full h-full">
        {/* Service Buttons */}
        <div className="flex-1 flex flex-col justify-start items-start w-full py-12 md:space-y-5 space-y-2 ">
          <h1 className="text-[2.5rem] leading-snug sm:text-[4rem] font-semibold text-[#FFB700]">
            What we provide ?
          </h1>
          <div className="w-full  space-y-5 lg:pr-20 pr-0">
            <button
              onClick={() => handleButtonClick("businessImpact")}
              className={`flex h-12 sm:h-16 lg:h-20 w-full items-center text-wrap tracking-tight text-3xl sm:text-3xl lg:text-4xl py-8  service-btn ${
                currentContent === "businessImpact"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => handleButtonClick("contentMarketing")}
              className={`flex h-12 sm:h-16 lg:h-20 w-full items-center text-wrap tracking-tight text-3xl sm:text-3xl lg:text-4xl py-8  service-btn ${
                currentContent === "contentMarketing"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Content Marketing
            </button>
            <button
              onClick={() => handleButtonClick("ecommerceDevelopment")}
              className={`flex h-12 sm:h-16 lg:h-20 w-full items-center  text-wrap tracking-tight text-3xl sm:text-3xl lg:text-4xl py-8  service-btn ${
                currentContent === "ecommerceDevelopment"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Ecommerce Development
            </button>
            <button
              onClick={() => handleButtonClick("webDesign")}
              className={`flex h-12 sm:h-16 lg:h-20 w-full items-center text-wrap tracking-tight text-3xl sm:text-3xl lg:text-4xl py-8  service-btn ${
                currentContent === "webDesign"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Website Design
            </button>
            <button
              onClick={() => handleButtonClick("seoService")}
              className={`flex h-12 sm:h-16 lg:h-20 w-full items-center text-wrap tracking-tight text-3xl sm:text-3xl lg:text-4xl py-8  service-btn ${
                currentContent === "seoService"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              SEO Service
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex   md:mt-16 mt-4 w-full">
          <div className="w-full h-full flex items-center justify-center ">
            {/* Render content based on currentContent */}
            {getContent()}
          </div>
        </div>
      </section>
    </section>
  );
}
