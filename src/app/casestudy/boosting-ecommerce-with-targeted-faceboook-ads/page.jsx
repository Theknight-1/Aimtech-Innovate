"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/CaseStudy/boosting_banner.png",
    pubdate: "May 20, 2024",
    title: "Boosting E-Commerce Sales with Targeted Facebook Ads",
    description:
      "We launched a successful Facebook ads campaign for an e-commerce store, resulting in a significant increase in sales and a positive return on investment.",
    keywords: ["Finance","E-Commerce", "Digital Marketing", "Facebook Advertising", "Sales Campaign", "PPC"],
    achievements: [
      { h1: "", h2: "", h3: "" },
      { h1: "", h2: "", h3: "" },
      { h1: "", h2: "", h3: "" },
      { h1: "", h2: "", h3: "" },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Increase online sales for an e-commerce store selling home decor products",
        "Reach a targeted audience interested in home decor and interior design",
        "Maximize return on investment (ROI) from Facebook advertising",
        "Gather valuable data and insights to optimize future campaigns",
      ],
    },
    help: "We successfully ran a Facebook ads campaign that helped the e-commerce store reach its target audience, increase sales, and achieve a positive ROI. By leveraging targeted advertising and continuous optimization, we were able to deliver measurable results for the client.",
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
