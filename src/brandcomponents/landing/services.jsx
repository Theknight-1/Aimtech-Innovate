"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 xl:px-12 2xl:p-14 lg:px-10 md:p-24 sm:p-12  p-4 ">
              <h1 className="xl:text-4xl lg:text-3xl md:text-4xl  text-2xl  font-bold">Design a Website That Converts Visitors into Leads</h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Attract, engage, and convert visitors with a stunning, user-friendly website designed to achieve your business goals.

              </h2>
              <br />
              <Link href="/services/web-development" className=" text-base sm:text-lg lg:text-lg text-brand-primary font-bold  text-center rounded-xl bg-brand-secondary  hover:bg-yellow-400 lg:px-6 lg:py-2 p-2">
                Learn More
              </Link>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
              <img
                src="/landingPage/web-service.png"
                alt=""
                className="h-full w-full object-cover  "
              />
            </div>
          </div>
        );

      case "contentMarketing":
        return (
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] flex items-center justify-center ">

            <div className="absolute text-white z-20 text-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 xl:px-12 2xl:p-14 lg:px-10 md:p-24 sm:p-12  p-4">
              <h1 className="xl:text-4xl lg:text-3xl md:text-4xl  text-2xl  font-bold">Target Your Ideal Customers to Maximize Your Sales</h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Reach the right audience at the right time with strategic PPC campaigns that deliver measurable results.
              </h2>
              <br />
              <Link href="/services/ppc-advertisement" className=" text-base sm:text-lg lg:text-lg text-brand-primary font-bold  text-center rounded-xl bg-brand-secondary  hover:bg-yellow-400 lg:px-6 lg:py-2 p-2">
                Learn More
              </Link>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
              <img
                src="/landingPage/smm-service.png"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        );

      case "ecommerceDevelopment":
        return (
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 xl:px-12 2xl:p-14 lg:px-10 md:p-24 sm:p-12  p-4">
              <h1 className="xl:text-4xl lg:text-3xl md:text-4xl  text-2xl  font-bold">Dominate Search Results to Drive Organic Traffic</h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Unleash the power of SEO to maximize search rankings that attract qualified leads, and grow your online presence organically.
              </h2>
              <br />
              <Link href="/services/seo-service" className=" text-base sm:text-lg lg:text-lg text-brand-primary font-bold  text-center rounded-xl bg-brand-secondary  hover:bg-yellow-400 lg:px-6 lg:py-2 p-2">
                Learn More
              </Link>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
              <img
                src="/landingPage/seo-service.jpg"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        );

      case "webDesign":
        return (
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 xl:px-12 2xl:p-14 lg:px-10 md:p-24 sm:p-12  p-4">
              <h1 className="xl:text-4xl lg:text-3xl md:text-4xl  text-2xl  font-bold">Build Trust to Drive Engagement and Customer Interaction</h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Building social media presence with engaging content, community management, and targeted social media advertising.
              </h2>
              <br />
              <Link href="/services/social-media-marketing" className=" text-base sm:text-lg lg:text-lg text-brand-primary font-bold  text-center rounded-xl bg-brand-secondary  hover:bg-yellow-400 lg:px-6 lg:py-2 p-2">
                Learn More
              </Link>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
              <img
                src="/landingPage/smm-service.png"
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        );

      case "seoService":
        return (
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[35rem] flex items-center justify-center ">
            <div className="absolute text-white z-20 text-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 xl:px-12 2xl:p-14 lg:px-10 md:p-24 sm:p-12  p-4">
              <h1 className="xl:text-4xl lg:text-3xl md:text-4xl  text-2xl  font-bold">Personalized Emails that build Customer Base</h1>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Targeted email campaigns that nurture leads, build brand loyalty, and drive sales through powerful email marketing strategies.
              </h2>
              <br />
              <Link href="/services/email-marketing" className=" text-base sm:text-lg lg:text-lg text-brand-primary font-bold  text-center rounded-xl bg-brand-secondary  hover:bg-yellow-400 lg:px-6 lg:py-2 p-2">
                Learn More
              </Link>
            </div>
            <div className="absolute w-full h-full rounded-xl overflow-hidden ">
              <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
              <img
                src="/landingPage/email-service.png"
                alt=""
                className="h-full w-full object-cover "
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
          <span className="text-2xl leading-snug sm:text-[4rem] font-semibold text-brand-secondary">
            What We Provide
          </span>
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
                  className={`flex h-12 sm:h-14 lg:h-20 w-full items-center text-wrap tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl py-8 pl-4 rounded-md service-btn ${
                    currentContent === contentId
                      ? "bg-brand-secondary hover:bg-yellow-400 text-brand-primary font-semibold"
                      : "text-white"
                  }`}
                >
                  {contentId === "businessImpact" && "Web Design and Development"}
                  {contentId === "contentMarketing" && "Pay-Per-Click Advertisement"}
                  {contentId === "ecommerceDevelopment" &&
                    "Search Engine Optimization"}
                  {contentId === "webDesign" && "Social Media Management"}
                  {contentId === "seoService" && "Email Marketing"}
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
