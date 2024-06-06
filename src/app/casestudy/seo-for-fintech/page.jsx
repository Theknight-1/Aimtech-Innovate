"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/landingPage/fintech.jpg",
    pubdate: "Sep 10, 2023",
    title: "SEO For Fintech",
    description:
      "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company, addressing their primary challenge of low backlinking within a month.",
    keywords: ["Finance","On Page","Off Page","Technical SEO","SEO Strategies"],
    achievements: [
      { h1: "200%", h2: "Search Engine Rankings", h3: "Boosted search engine rankings by 200%" },
      { h1: "800%", h2: "Website Traffic", h3: "Increased website traffic by 800%" },
      { h1: "80%", h2: "Conversion Rate", h3: "Improved conversion rate by 80%" },
      { h1: "16%", h2: "Bounce Rate", h3: "Decreased bounce rate by 16%" },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Enhance the finance company's online visibility and search engine ranking.",
        "Improve organic traffic and lead generation through effective SEO strategies.",
        "Address the issue of low backlinking to boost the company's authority and credibility in the industry.",
        "Finding broken links on relevant websites and suggesting the company's website as a replacement, creating valuable backlinks.",
      ],
    },
    help: "We have audited a finance company's website, identifying SEO improvements. Their recommendations enhanced backlinking and SEO performance. Through strategic link-building and on-page optimization, Aimtech Innovate improved the company's search engine ranking, resulting in significant organic traffic and lead generation. This showcases Aimtech Innovate's SEO expertise in the competitive fintech industry.",
  };

  return (
    <>
      <NextSeo
        title="SEO For Fintech"
        description="Aimtech Innovate successfully implemented a strategic SEO plan for a finance company, addressing their primary challenge of low backlinking within a month."
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Finance,SEO,Canada,US",
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
