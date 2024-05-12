"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const images = [
  "https://blog.4psa.com/wp-content/uploads/Reasons-worth-colaborating-with-your-teammates-1024x536.jpg",
];

export default function Services() {
  const [currentContent, setCurrentContent] = useState("businessImpact");
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (targetId) => {
    if (targetId !== currentContent) {
      gsap.to(".content-container", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentContent(targetId);
          setCurrentImage(images[Math.floor(Math.random() * images.length)]);
          gsap.to(".content-container", { opacity: 1, duration: 0.5 });
        },
      });
    }
  };

  const getContent = () => {
    switch (currentContent) {
      case "businessImpact":
        return (
          <div className="relative w-full h-[35rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center space-y-10 px-32">
              <h1 className="text-4xl  font-bold">Push your product to next level.</h1>
              <h1 className="text-sm sm:text-xl lg:text-xl ">
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
              </h1>
              <button className=" text-xl sm:text-2xl lg:text-3xl text-[#122B59] font-bold  text-center rounded-xl bg-brand-secondary px-3 py-2">
                Get Started
              </button>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
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
              <h1 className="text-[3rem] font-bold">
                This is the content for Content Marketing.
              </h1>
              <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-brand-secondary px-3 py-2">
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
              <h1 className="text-[3rem] font-bold">
                This is the content for Ecommerce Development.
              </h1>
              <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-brand-secondary px-3 py-2">
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
              <h1 className="text-[3rem] font-bold">
                This is the content for Website Design.
              </h1>
              <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-brand-secondary px-3 py-2">
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
              <h1 className="text-[3rem] font-bold">
                This is the content for SEO Service.
              </h1>
              <button className="text-xl text-[#122B59] font-bold  text-center rounded-xl bg-brand-secondary px-3 py-2">
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
      <section className="flex flex-col lg:flex-row items-center w-full h-full">
        {/* Service Buttons */}
        <div className="flex-1 flex flex-col justify-start items-start w-full py-12 md:space-y-5 space-y-2">
          <h1 className="text-[2.5rem] leading-snug sm:text-[4rem] font-semibold text-[#FFB700]">
            What we provide?
          </h1>
          <div className="w-full md:space-y-5 lg:pr-16 pr-0">
            {[
              "businessImpact",
              "contentMarketing",
              "ecommerceDevelopment",
              "webDesign",
              "seoService",
            ].map((contentId) => (
              <React.Fragment key={contentId}>
                <button
                  onClick={() => handleButtonClick(contentId)}
                  className={`flex h-12 sm:h-14 lg:h-20 w-full items-center text-wrap tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl py-8 pl-2 rounded-md service-btn ${
                    currentContent === contentId
                      ? "bg-brand-secondary text-brand-primary font-semibold"
                      : "text-white"
                  }`}
                >
                  {contentId === "businessImpact" && "Digital Marketing"}
                  {contentId === "contentMarketing" && "Content Marketing"}
                  {contentId === "ecommerceDevelopment" &&
                    "Ecommerce Development"}
                  {contentId === "webDesign" && "Website Design"}
                  {contentId === "seoService" && "SEO Service"}
                </button>
                {isSmallScreen && currentContent === contentId && (
                  <div className="pt-4">{getContent()}</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Container for larger screens */}
        {!isSmallScreen && (
          <div className="flex-1 lg:flex hidden md:mt-16 mt-4 w-full">
            <div className="w-full h-full flex items-center justify-center">
              {/* Render content based on currentContent */}
              {getContent()}
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
