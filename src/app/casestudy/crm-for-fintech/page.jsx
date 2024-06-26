"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/landingPage/crm.jpg",
    pubdate: "Dec 21, 2023",
    title: "CRM For Fintech",
    description:
      "We have created an AI-enabled CRM for a fintech company, enabling smart decisions based on accurate and real-time data. The CRM provides deep insights into sales metrics, revenue forecasts, team performance analysis, and custom dashboards.",
    keywords: ["Finance", "CRM", "AI", "Data Analytics", "Fintech"],
    achievements: [
      {
        h1: "28%",
        h2: "Conversion Rate (Payment Gateway)",
        h3: "Boosted conversion rate by 28%",
      },
      {
        h1: "34%",
        h2: "Transaction Volume (Digital Wallet)",
        h3: "Increased transaction volume by 34%",
      },
      {
        h1: "15%",
        h2: "Customer Retention (Mobile Banking)",
        h3: "Improved customer retention by 15%",
      },
      {
        h1: "0%",
        h2: "Fraud Detection (Security)",
        h3: "Enhanced fraud detection by 0%",
      },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Develop an AI-powered CRM system to streamline sales processes and improve ",
        "decision-making",
        "Gain deeper insights into sales data to optimize revenue forecasting and team performance",
        "Provide a user-friendly platform for managing customer relationships and interactions",
        "Integrate the CRM with existing fintech systems and tools",
      ],
    },
    help: "Aimtech Innovate's experts developed an AI-powered CRM for the fintech company, using machine learning to analyze real-time sales data for accurate forecasts and performance insights. Integrated seamlessly with existing systems, the CRM offers custom dashboards for informed decision-making, streamlining data flow and enhancing user experience for efficient customer relationship management.",
  };

  return (
    <>
      <title>CRM for Fintech Company | Aimtech Innovate</title>
      <NextSeo
        title="CRM for Fintech Company | Aimtech Innovate"
        description="Provided custom CRM software that builds customer relationships and drives business success."
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Finance,CRM,AI,Data Analytics",
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
