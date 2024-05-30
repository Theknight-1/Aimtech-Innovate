'use client'
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Hero from "@/brandcomponents/landing/hero";
import CaseStudy from "@/brandcomponents/landing/casestudy";
import ContactPage from "@/brandcomponents/contact/contactPage";
import SecondPage from "@/brandcomponents/contact/secondPage";
import ThirdPage from "@/brandcomponents/contact/thirdPage";
import Footer from "@/brandcomponents/global/footer";
import { NextSeo } from "next-seo";
export default function Contact() {
  return (
    <>
    <title>Aimtech -Contact Us</title>
    <NextSeo
        title="Helping Business to grow with digitaly | Aim Tech Innovate "
        description="Online Marketing Team passionate about helping businesses, generate leads and grow online through smart, measurable Marketing Strategies."
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Marketing Company,Digital Partner,latest tech,skilled team',
          },
          {
            name: 'author',
            content: 'Aimtech Innovate',
          },
        ]}
      />
      <Navbar />
      {/* <Hero/> */}
      <ContactPage />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </>
  );
}
