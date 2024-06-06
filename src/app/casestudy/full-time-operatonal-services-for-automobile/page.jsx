"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/landingPage/automotive.jpg",
    pubdate: "May 18, 2024",
    title: "Full Time Operational Services for Automobile",
    description:
      "We provided comprehensive IT infrastructure and digital marketing services to an automotive company, enabling them to streamline operations and enhance their online presence.",
    keywords: [
      "Automotive",
      " IT Infrastructure",
      "Web Development",
      "Digital Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
    achievements: [
      { h1: "4X", h2: "Serviced Vehicles", h3: "Increased by 4 times" },
      { h1: "12%", h2: "Repair Time", h3: "Reduced by 12%" },
      { h1: "95%", h2: "Customer Satisfaction", h3: "Achieved 95% satisfaction rate" },
      { h1: "6%", h2: "Preventive Maintenance", h3: "Increased by 6%" },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Establish a robust IT infrastructure to support the company's marketing and sales operations",
        "Improve the company's online presence and reach potential customers effectively",
        "Streamline digital marketing efforts across various channels",
        "Provide ongoing maintenance and support for the IT systems and digital assets",
      ],
    },
    help: "We provided comprehensive services to an automotive client, including web development, digital marketing, content marketing, and IT infrastructure support, leading to a strong online presence, streamlined marketing, and a 3-year contract.",
  };

  return (
    <>
      <NextSeo
        title="Full Time Operational Services for Automobile"
        description="We help streamline operations and boost customer satisfaction to grow auto repair shops with powerful operational software services."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Automotive,IT Infrastructure,Web Development,Digital Marketing,Content Marketing,,Email Marketing,Canada,US",
          },
          {
            name: "author",
            content: "Aimtech Innovate",
          },
        ]}
      />
      <Navbar />
      <CaseLanding casedata={casedata} />
      <Footer />
    </>
  );
}
