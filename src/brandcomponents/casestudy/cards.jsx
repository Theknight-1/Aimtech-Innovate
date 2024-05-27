import React from "react";
import Link from "next/link";
import { PaginationNav1Presentation } from "@/uicomponent/PagiNation";




const caseStudiesData = [

      {
        date: "Sep 10, 2023",
        image:"/png/seo-first.png",
        title: "SEO For Fintech",
        link: "/casestudy/seo-for-fintech",
        description:
          "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company...",
      },
      {
        date: "May 18, 2024",
        image:"/png/ppc-ads.png",
        title: "fultime service for automobiles",
        link: "/casestudy/full-time-operatonal-services-for-automobile",
        description:
          "Aimtech Innovate provided comprehensive IT infrastructure ..",
      },
      {
        date: "Dec 21, 2023",
        image:"/png/smm-first.png",
        title: "CRM For Fintech",
        link: "/casestudy/crm-for-fintech",
        description:
          "Aimtech Innovate created an AI-enabled CRM for a fintech company...",
      },
];

const extracase =[
  {
    date: "Feb 12, 2024",
    image:"/png/web-first.png",
    title: "highschool web design",
    link: "/casestudy/web-design-for-high-school",
    description:
      "Aimtech Innovate helped create a best-in-class website for a high school...",
  },
  {
    date: "May 12, 2024",
    image:"/png/smm-second.png",
    title: "SMM for ai startup",
    link: "/casestudy/social-media-marketing-for-ai-startup",
    description:
      "Aimtech Innovate resolved many problems for AI startups..",
  },
  {
    date: "May 12, 2024",
    image:"/png/smm-second.png",
    title: "SMM for ai startup",
    link: "/casestudy/social-media-marketing-for-ai-startup",
    description:
      "Aimtech Innovate resolved many problems for AI startups..",
  },
]
const Cards = ({ heading, getStartedButton }) => (
  <section className="w-screen h-autoxl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex flex-col justify-center items-center">
    <span className="text-center text-5xl font-bold text-white my-8">{heading}</span>
    <div className="grid h-auto justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-5">

    {caseStudiesData.map((casestudy,index)=>(

  

      <div key={index} className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden lg:p-8 ">
        <img
          className=" h-auto aspect-video w-full object-contain"
          src={casestudy.image}
          alt={casestudy.title}
        />
        <div className=" h-full   flex ">
          <div className="space-y-5  pt-4">
            <h4 className="font-semibold text-2xl leading-6 text-gray-700 my-2 px-3">
            {casestudy.title}
            </h4>
            <p className="paragraph-normal text-gray-600 text-[1rem] px-3">
            {casestudy.description}
            </p>
            <div className="  flex items-center justify-between h-20 w-full p-3">
              <span className="text-sm text-primary">{casestudy.date}</span>
              <Link href={casestudy.link} className="px-4 py-2 text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59]">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
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
        <PaginationNav1Presentation />
      </div>
    )}
  </section>
);

export default Cards;
