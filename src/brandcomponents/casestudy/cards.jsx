import React from "react";
import Link from "next/link";
import { PaginationNav1Presentation } from "@/uicomponent/PagiNation";

const caseStudiesData = [
  {
    date: "Sep 10, 2023",
    image: "/CaseStudy/seo-for-fintech.jpg",
    title: "SEO For Fintech",
    link: "/casestudy/seo-for-fintech",
    description:
      "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company, addressing their primary challenge of low backlinking within a month.",
  },
  {
    date: "May 18, 2024",
    image: "/landingPage/automotive.jpg",
    title: "Fulltime service for automobiles",
    link: "/casestudy/full-time-operatonal-services-for-automobile",
    description:
      "Aimtech Innovate provided comprehensive IT infrastructure and digital marketing services to an automotive company, enabling them to streamline operations and enhance their online presence.",
  },
  {
    date: "Dec 21, 2023",
    image: "/CaseStudy/crm.jpg",
    title: "CRM For Fintech",
    link: "/casestudy/crm-for-fintech",
    description:
      "Aimtech Innovate created an AI-enabled CRM for a fintech company, enabling smart decisions based on accurate and real-time data. ",
  },
  {
    date: "Feb 12, 2024",
    image: "/CaseStudy/education.jpg",
    title: "highschool web design",
    link: "/casestudy/web-design-for-high-school",
    description:
      "Aimtech Innovate helped create a best-in-class website for a high school, achieving remarkable results , better ROI and CTR value.",
  },
  {
    date: "May 12, 2024",
    image: "/CaseStudy/social-media-ai.jpg",
    title: "SMM For AI Startup",
    link: "/casestudy/social-media-marketing-for-ai-startup",
    description: "Aimtech Innovate resolved many problems for AI startups and provided them with the best target audience and regional market research to create the most effective marketing campaigns.",
  },
  {
    date: "May 12, 2024",
    image: "/CaseStudy/fulltime-service.jpg",
    title: "Boosting E-Commerce Sales with Targeted Facebook Ads",
    link: "/casestudy/boosting-ecommerce-with-targeted-faceboook-ads",
    description: "We launched a successful Facebook ads campaign for an e-commerce store, resulting in a significant increase in sales and a positive return on investment.",
  },
];

const extracase = [
  {
    date: "Feb 12, 2024",
    image: "/png/web-first.png",
    title: "highschool web design",
    link: "/casestudy/web-design-for-high-school",
    description:
      "Aimtech Innovate helped create a best-in-class website for a high school...",
  },
  {
    date: "May 12, 2024",
    image: "/png/smm-second.png",
    title: "SMM For Ai startup",
    link: "/casestudy/social-media-marketing-for-ai-startup",
    description: "Aimtech Innovate resolved many problems for AI startups..",
  },
  {
    date: "May 12, 2024",
    image: "/png/smm-second.png",
    title: "SMM for AI startup",
    link: "/casestudy/social-media-marketing-for-ai-startup",
    description: "Aimtech Innovate resolved many problems for AI startups..",
  },
];
const Cards = ({ heading, getStartedButton }) => (
  <section className="w-screen h-autoxl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex flex-col justify-center items-center font-satoshi">
    <span className="text-center text-3xl md:text-5xl font-bold text-white mt-10 mb-2">
      {heading}
    </span>

    <div class="grid  h-auto justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-5 lg:px-16">
    {caseStudiesData.map((casestudy, index) => (
      <div key={index} class="flex h-full flex-col overflow-hidden rounded-lg  bg-white shadow-md md:flex">
        <div class="aspect-video min-h-64 w-full ">
          <img src={casestudy.image} alt="Blog Image" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-1 flex-col justify-between   p-6">
          <div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-black capitalize">{casestudy.title}</h2>
            <p class="mb-4 font-normal text-black">{casestudy.description}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-black">{casestudy.date}</p>
            <Link
                  href={casestudy.link}
                  className="px-4 py-2 text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59] flex items-center"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
    <div className="grid hidden h-auto justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-5">
      {caseStudiesData.map((casestudy, index) => (
        <>




          <div key={index} className="max-w-lg  bg-white  rounded-lg shadow   ">
            <div className=" w-full h-auto aspect-video">
              <img className="rounded-t-lg 2xl:max-h-[18rem]  2xl:min-h-[18rem] xl:max-h-[15rem]  xl:min-h-[15rem] lg:max-h-[12rem]  lg:min-h-[12rem] md:max-h-[15rem]  md:min-h-[15rem] w-full" src={casestudy.image} alt="" />
            </div>

            <div className="p-5   border">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black capitalize">
                {casestudy.title}
              </h5>

              <p className="mb-3 font-normal text-black ">
                {casestudy.description}
              </p>
              <div className=" flex items-center justify-between h-20 w-full ">
                <span className="text-sm text-primary">{casestudy.date}</span>
                <Link
                  href={casestudy.link}
                  className="px-4 py-2 text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59] flex items-center"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
    {getStartedButton ? (
      <div className="flex hidden w-full h-64 flex-col justify-center items-center ">
        <h4 className="text-center text-2xl font-bold text-white w-1/2">
          Have a project in mind? <br /> Let’s get to work.
        </h4>
        <Link href="/contact" className="mt-5">
          <span className="px-10 py-3 rounded-lg text-lg bg-[#FFB700]">
            {getStartedButton}
          </span>
        </Link>
      </div>
    ) : (
      <div className="flex justify-center items-center">
        {/* <PaginationNav1Presentation /> */}
      </div>
    )}
  </section>
);

export default Cards;
