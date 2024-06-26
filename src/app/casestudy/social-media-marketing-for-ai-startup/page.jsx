"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/CaseStudy/AI.jpg",
    pubdate: "May 12, 2024",
    title: "Social Media Marketing for AI Startup",
    description:
      "Aimtech Innovate resolved many problems for AI startups and provided them with the best target audience and regional market research to create the most effective marketing campaigns.",
    keywords: [
      "Social Media Marketing",
      "AI Solutions",
      "Market Research",
      "Digital Marketing",
      "Startup Consulting",
    ],
    achievements: [
      {
        h1: "25%",
        h2: "Engagement Rate (Social Media)",
        h3: "Boosted social media engagement by 28%",
      },
      {
        h1: "15%",
        h2: "Conversion Rate (AI Solution)",
        h3: "Increased conversions by 8x",
      },
      {
        h1: "34%",
        h2: "Click-Through Rate (Ad Campaign)",
        h3: "Increase in attributed clicks",
      },
      {
        h1: "5%",
        h2: "Unsubscribe Rate (Newsletter)",
        h3: "Decrease in newsletter unsubscribes",
      },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Develop a comprehensive social media marketing strategy for the AI startup",
        "Identify the most relevant target audience and platforms for the startup's products and services",
        "Create engaging and informative content to showcase the startup's expertise and offerings",
        "Increase brand awareness, website traffic, and lead generation through social media channels",
        "Achieve a positive return on investment (ROI) from the social media marketing efforts",
      ],
    },
    help: "Our social media marketing experts collaborated closely with the AI startup to understand their unique challenges, target audience, and business goals. We conducted in-depth market research to identify the most promising platforms and target segments for the startup's offerings.",
  };

  return (
    <>
      <title>Social Media Marketing for AI Startup | Aimtech Innovate</title>
      <NextSeo
        title="Social Media Marketing for AI Startup | Aimtech Innovate"
        description="Learn how we help our client with social media marketing that helps them achieve their growth target to reach the right audience with engaging content."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Social Media Marketing,AI Solutions,Market Research,Digital Marketing,Startup Consulting",
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
