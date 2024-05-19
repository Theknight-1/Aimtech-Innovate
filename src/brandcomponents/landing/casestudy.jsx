import React from "react";
import "@/brandcomponents/landing/css/style.css";
import Link from "next/link";

const caseStudiesData = [
  {
    
    image:
      "/png/seo-first.png",
      title: "SEO For Fintech",
      link: "/casestudy/seo-for-fintech",
      description:
        "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company...",
  },
  {
    
    image:
      "/png/ppc-ads.png",
      title: "Fultime service for automobiles",
      link: "/casestudy/full-time-operatonal-services-for-automobile",
      description:
        "Aimtech Innovate provided comprehensive IT infrastructure ..",
  },
  {
    
    image:
      "/png/smm-first.png",
      title: "CRM For Fintech",
      link: "/casestudy/crm-for-fintech",
      description:
        "Aimtech Innovate created an AI-enabled CRM for a fintech company...",
  },
  {
    
    image:
      "/png/web-first.png",
      title: "Highschool web design",
      link: "/casestudy/web-design-for-high-school",
      description:
        "Aimtech Innovate helped create a best-in-class website for a high school...",
  },
  {
    
    image:
      "/png/smm-second.png",
      title: "SMM for ai startup",
      link: "/casestudy/social-media-marketing-for-ai-startup",
      description:
        "Aimtech Innovate resolved many problems for AI startups..",
  },
  {
  
    image:
      "/landingPage/questionmark.jpg",
    title: "This can be you",
    description:
      "Contact us for your case study",
    link: "/contact",
  },
  // Add more case study data objects as needed
];

export default function CaseStudies() {
  return (
    <section className="flex flex-col w-full items-center justify-center  h-auto xl:min-h-screen   gap-y-8 space-y-5">
      <div class="flex h-full flex-col items-center justify-center text-center text-4xl font-bold text-white md:flex-row">
        <div class="w-1/10 h-full"></div>
        <div class="flex-1 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl  gap-x-4 capitalize ">
          <svg
            className="w-10 h-auto md:w-20 lg:w-32 md:h-12 lg:h-16 scale-x-[-1]"
            viewBox="0 0 129 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348"
              stroke="#FFB700"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <span>Learn More About</span> <br />
            <span>the Work We've Done</span>
          </div>
          <svg
            className="w-10 h-auto md:w-20 lg:w-32 md:h-12 lg:h-16"
            viewBox="0 0 129 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348"
              stroke="#FFB700"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="w-1/10"></div>
      </div>
      <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-8 px-10 lg:px-64">
        {caseStudiesData.map((study,index) => (
          <div key={index} className="flip-card aspect-square h-auto w-full  ">
            <div className="flip-card-inner w-full h-full p-2">
              <div className="flip-card-front overflow-hidden">
                <img
                  className="w-full h-full object-fit "
                  src={study.image}
                  alt=""
                />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center px-8  font-bold">
                <h1 className="text-4xl border-b-2 border-brand-primary">{study.title}</h1>
                <br />
                <p>{study.description}</p>
                <br />
                <Link
                  href={study.link}
                  className="bg-brand-secondary hover:bg-yellow-400 w-1/2 text-center p-3 rounded-lg text-brand-primary"
                >
                  <p>Learn more...</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link
          href="/casestudy"
          className="rounded-lg bg-brand-secondary hover:bg-yellow-400 text-brand-primary p-4 text-xl shadow-lg font-bold "
        >
          Explore More Case studies
        </Link>
      </div>
    </section>
  );
}
