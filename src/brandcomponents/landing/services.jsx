"use client";
import React, { useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://images.unsplash.com/photo-1594384448519-1e9529be29f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1680468710443-c5d3929403ad?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560807707-6a5f2291a2c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544083098-76551842b5fc?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544083098-76551842b5fc?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="relative w-full h-[25rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-2xl font-bold">Demo Brand Name</h1>
              <h1 className="text-[2rem] font-bold">SEO Case Study</h1>
              <button className="text-black  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
              <img
                src={currentImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );

      case "contentMarketing":
        return (
          <div className="relative w-full h-[25rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-2xl font-bold">Content Marketing</h1>
              <p>This is the content for Content Marketing.</p>
              <button className="text-black  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
              <img
                src={currentImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );

      case "ecommerceDevelopment":
        return (
          <div className="relative w-full h-[25rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-2xl font-bold">Ecommerce Development</h1>
              <p>This is the content for Ecommerce Development.</p>
              <button className="text-black  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
              <img
                src={currentImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );

      case "webDesign":
        return (
          <div className="relative w-full h-[25rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-2xl font-bold">Website Design</h1>
              <p>This is the content for Website Design.</p>
              <button className="text-black  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
              <img
                src={currentImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );

      case "seoService":
        return (
          <div className="relative w-full h-[25rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center">
              <h1 className="text-2xl font-bold">SEO Service</h1>
              <p>This is the content for SEO Service.</p>
              <button className="text-black  text-center rounded-xl bg-[#FFB700] px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
              <img
                src={currentImage}
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
      className="w-full min-h-screen  flex justify-center items-center"
    >
      <section className="flex items-center  w-full h-full  md:mx-28">
        {/* Service Buttons */}
        <div className="flex-1 flex flex-col justify-start items-start w-full pl-8 py-12 space-y-5 ">
          <h1 className="text-[4.5rem] font-semibold text-[#FFB700]">
            What we provide
          </h1>
          <div className="w-full pr-14">
            <button
              onClick={() => handleButtonClick("businessImpact")}
              className={`flex h-20 w-full items-center text-wrap pl-4 text-3xl py-8  service-btn ${
                currentContent === "businessImpact"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => handleButtonClick("contentMarketing")}
              className={`flex h-20 w-full items-center text-wrap pl-4 text-3xl py-8  service-btn ${
                currentContent === "contentMarketing"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Content Marketing
            </button>
            <button
              onClick={() => handleButtonClick("ecommerceDevelopment")}
              className={`flex h-20 w-full items-center text-wrap pl-4 text-3xl py-8  service-btn ${
                currentContent === "ecommerceDevelopment"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Ecommerce Development
            </button>
            <button
              onClick={() => handleButtonClick("webDesign")}
              className={`flex h-20 w-full items-center text-wrap pl-4 text-3xl py-8  service-btn ${
                currentContent === "webDesign"
                  ? "bg-[#FFB700] text-[#122F5D] font-normal"
                  : "text-white"
              }`}
            >
              Website Design
            </button>
            <button
              onClick={() => handleButtonClick("seoService")}
              className={`flex h-20 w-full items-center text-wrap pl-4 text-3xl py-8  service-btn ${
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
        <div className="flex-1 flex justify-center  mt-16 ">
          <div className="w-full h-full flex items-center justify-center ">
            {/* Render content based on currentContent */}
            {getContent()}
          </div>
        </div>
      </section>
    </section>
  );
}
