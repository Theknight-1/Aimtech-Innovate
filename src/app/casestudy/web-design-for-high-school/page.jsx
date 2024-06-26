"use client";
import { NextSeo } from "next-seo";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import CaseLanding from "@/brandcomponents/casestudy/caselanding";
import Footer from "@/brandcomponents/global/footer";
export default function page() {
  const casedata = {
    image: "/CaseStudy/high-school.jpg",
    pubdate: "Feb 12, 2024",
    title: "Web Design For High School",
    description:
      "We helped create a best-in-class website for a high school, achieving remarkable results.",
    keywords: [
      "Education",
      "Website Design",
      "Marketing, Branding",
      "SEO",
      "Modern UI",
    ],
    achievements: [
      { h1: "4x", h2: "Enrollment", h3: "Course enrollment increased by 4X" },
      {
        h1: "95%",
        h2: "Satisfaction",
        h3: "Attained a 95% student satisfaction rate",
      },
      {
        h1: "45",
        h2: "Weeks Development",
        h3: "Completed project within 45 days timeframe.",
      },
      {
        h1: "50%",
        h2: "Bounce Rate Reduction",
        h3: "Decrease bounce rate by 50%",
      },
    ],
    goal: {
      title: "",
      image: "",
      points: [
        "Create a modern, responsive website representing the high school's brand and values.",
        "Improve the school's online presence and accessibility for students, parents, and the community.",
        "Provide a platform to showcase the school's academic programs, extracurricular activities, and achievements.",
        "Enhance communication and engagement with stakeholders through the website's features and content.",
      ],
    },
    help: "Aimtech Innovate's web design experts collaborated with the high school to develop a clean, intuitive interface aligned with the school's branding and optimized for mobile devices. The website features a soft scroll design and ongoing support ensures it remains up-to-date and secure. The partnership has resulted in a modern, engaging website that effectively communicates the school's brand and provides valuable information, as evidenced by the low bounce rate.",
  };

  return (
    <>
      <title>Web Design For High School | Aimtech Innovate</title>
      <NextSeo
        title="Web Design For High School | Aimtech Innovate"
        description="Helped our client to get new customers & skyrocket sales! We craft stunning, user-friendly websites designed to grow their business."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Education,Website Design, Marketing,Branding,SEO,Canada,US,Modern UI",
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
