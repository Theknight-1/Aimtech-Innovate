"use client";
import React, { useState } from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Footer from "@/brandcomponents/global/footer";
import Map from "@/brandcomponents/aboutUs/map";
import LearnMore from "@/brandcomponents/aboutUs/LearnMore";
import DMsg from "@/brandcomponents/aboutUs/DMsg.jsx";
import AboutContact from "@/brandcomponents/aboutUs/aboutContact";
import Accordion from "@/uicomponent/accordian";
import Pland from "@/brandcomponents/practice/landing";
import Carousel from "../../brandcomponents/about/carousel";
import Hcta from '@/brandcomponents/landing/cta'
import { NextSeo } from 'next-seo';
export default function About() {
  const accordionData = [
    {
      title: "What services do you offer?",
      content:
        "Aim Tech Innovate provides a full range of digital marketing services, including social media marketing, search engine optimisation (SEO), web development, graphic design, and strategic consulting.",
    },
    {
      title: "What makes us different?",
      content:
        "Our team of 10+ experienced professionals is certified by Google, Facebook/Instagram, and other major platforms. We combine creativity, data analysis, and strategic thinking to deliver exceptional results.",
    },
    {
      title: "How long have you been around?",
      content: "We've been helping businesses thrive online since 2015, constantly adapting to the ever-changing digital landscape.",
    },
    {
      title: "Where are we located?",
      content: "With teams in Canada and the USA, we're well-positioned to serve businesses across North America.",
    },
    
  ];
  return (
    <>
    <title> Helping Business to grow with digitaly | Aim Tech Innovate </title>
      <NextSeo
        title="Helping Business to grow with digitaly | Aim Tech Innovate "
        description="Online Marketing Team passionate about helping businesses, generate leads and grow online through smart, measurable Marketing Strategies."
      />
      <Navbar />
      <LearnMore />
      <DMsg/>
      {/* <Carousel/> */}
      <Map />
      <Pland faqdata={accordionData} />
      
      <AboutContact />
      <Footer />
    </>
  );
}
