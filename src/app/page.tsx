'use client'
import Image from "next/image";
import React, { useState } from 'react';
import Header from "../brandcomponents/global/Header"
import Hero from "../brandcomponents/landing/hero"
// import Whyus from "../brandcomponents/landing/whyus"
import Footer from "@/brandcomponents/global/footer";
import Customer from "@/brandcomponents/landing/customer"
import Pland from "@/brandcomponents/practice/landing"
import Testimonial from "@/brandcomponents/landing/testimonial"
import Carousel from "@/brandcomponents/practice/carousel"
import GradientSection from "@/brandcomponents/practice/gradientsection"
import Accordion from "@/uicomponent/accordian";
import Hcta from '@/brandcomponents/landing/cta'
import CaseStudies from '@/brandcomponents/landing/casestudy'
import Services from '@/brandcomponents/landing/services'
import Whyus from "../brandcomponents/landing/whyus";
import Navbar from "@/brandcomponents/global/Navbar";
import { NextSeo } from 'next-seo';





export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const accordionData = [
    {
      title: "Where is your office located?",
      content:
        "We don't have a physical office location - we work virtually! This allows us to serve clients across North America efficiently.",
    },
    {
      title: "Do you serve in the US?",
      content:
        "Yes! We're proud to partner with businesses across the United States.",
    },
    {
      title: "Do you serve in Canada?",
      content: "Absolutely!  Canadian businesses are a core part of our clientele.",
    },
    {
      title: "What is your tech domain?",
      content: "Our expertise lies in online marketing, with a focus on web design, development, and SEO to drive explosive growth for your business.",
    },
    {
      title: "Do you build only websites or full software?",
      content: "We primarily focus on web design and development, creating impactful online presences. However, we can also discuss your specific software needs to see if we can be a good fit.",
    },
    {
      title: "How big is your team ?",
      content: "Our team size is flexible, allowing us to scale our expertise to meet your project's needs. We have a network of skilled professionals to ensure we deliver exceptional results.",
    },
  ];
  return (
    <>
      <title> Digital Marketing Agency Based in Canada, | Aim Tech Innovate</title>
      <NextSeo
        title="Digital Marketing Agency Based in Canada, | Aim Tech Innovate"
        description="Increase ROI with the best digital marketing agency || Performance guarantees || Canada Based Company ||  Local & global | Get in touch today!"
      />


      <Navbar />
      <main className="flex h-auto w-screen flex-col items-center justify-start ">
        {/* <Header /> */}
        {/* <Carousel/> */}
        <GradientSection />

        <Whyus />
        <Services />
        <CaseStudies />
        <Testimonial />

        <Pland faqdata={accordionData} />


        <Hcta />
      </main>
      {/* <Customer/> */}
      <Footer />
    </>
  );
}
