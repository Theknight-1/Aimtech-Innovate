import React from "react";
import Link from "next/link";
import { PaginationNav1Presentation } from "@/uicomponent/PagiNation";

const Card = ({ imageUrl, title, description, date }) => (
  <div className="bg-white w-full h-auto rounded-lg shadow-md overflow-hidden ">
    <img
      className=" h-auto aspect-video w-full object-cover"
      src={imageUrl}
      alt={title}
    />
    <div className=" h-full   flex border">
      <div className="space-y-5  pt-4">
        <h4 className="font-semibold text-2xl leading-6 text-gray-700 my-2 px-3">
          {title}
        </h4>
        <p className="paragraph-normal text-gray-600 text-[1rem] px-3">
          {description}
        </p>
        <div className=" flex items-center justify-between h-20 w-full p-3">
          <span className="text-sm text-primary">{date}</span>
          <a
            className="px-4 py-2 text-white rounded-lg bg-[#122b59ec] hover:bg-[#122B59]"
            href="#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Cards = ({ heading, getStartedButton }) => (
  <section className="w-screen h-screen xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex flex-col justify-center items-center">
    <h1 className="text-center text-5xl font-bold text-white">{heading}</h1>
    <div className="grid h-[60vh] justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-5">
      <Card
        imageUrl="/Maskgroup.png"
        title="Tools, Resources, and Education"
        description="Happy Women's Day 2022: Read on to know all about the history and significance..."
        date="November 19, 2022"
      />
      <Card
        imageUrl="/Maskgroup.png"
        title="Tools, Resources, and Education"
        description="Happy Women's Day 2022: Read on to know all about the history and significance..."
        date="November 19, 2022"
      />
      <Card
        imageUrl="/Maskgroup.png"
        title="Tools, Resources, and Education"
        description="Happy Women's Day 2022: Read on to know all about the history and significance..."
        date="November 19, 2022"
      />
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
