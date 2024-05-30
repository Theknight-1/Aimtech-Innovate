'use client'
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Cards from "@/brandcomponents/casestudy/cards";
import Hero from "@/brandcomponents/CaseStudyLanding/Hero";
import Banner from "@/brandcomponents/CaseStudyLanding/Banner";
import Footer from "@/brandcomponents/global/footer";
import Hcta from '@/brandcomponents/landing/cta';
import { NextSeo } from "next-seo";
const page = () => {
  return (
    <>
    <NextSeo 
    title='Business projects case studies'
    description='The list of case studies by our agency for various business types.'
    additionalMetaTags={[
      {
        name: 'keywords',
        content: 'Business case studies,Business research',
      },
      {
        name: 'author',
        content: 'Aimtech Innovate',
      },
    ]}
    />
      <Navbar />
      <Hero />
      <Cards heading={"Explore our Case Studies"} />
      {/* <Banner/> */}
      <Hcta/>
      <Footer />
    </>
  );
};

export default page;
