'use client'
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Footer from "@/brandcomponents/global/footer";
import Map from "@/brandcomponents/aboutUs/map";
import LearnMore from "@/brandcomponents/aboutUs/LearnMore";
import DMsg from "@/brandcomponents/aboutUs/DMsg.jsx";
import AboutContact from "@/brandcomponents/aboutUs/aboutContact";
import Pland from "@/brandcomponents/practice/landing";
import Customers from '@/brandcomponents/landing/customer'
import { NextSeo } from 'next-seo';
export default function About() {
  const accordionData = [
    {
      title: "What services do you offer?",
      content:
        "Aimtech Innovate provides a full range of digital marketing services, including social media marketing, search engine optimisation (SEO), web development, graphic design, and strategic consulting.",
    },
    {
      title: "What makes us different?",
      content:
        "Our team of 10+ experienced professionals is certified by Google, Facebook/Instagram, and other major platforms. We combine creativity, data analysis, and strategic thinking to deliver exceptional results.",
    },
    {
      title: "How long have you been around?",
      content: "We've been helping businesses thrive online since 2019, constantly adapting to the ever-changing digital landscape.",
    },
    {
      title: "How quickly will I start seeing results after working with Aimtech Innovate?",
      content: "This depends on the channels you use, your competition, your budget and the state of your website before we start working with you.However, as a general rule, you should start to see an uplift in online visibility and improvements in your key metrics and goals after the first three months. That’s because the first three months are all about developing the digital strategy and laying the foundations for a successful long-term project.",
    },
    {
      title: "Why do I need digital marketing for my business?",
      content: "Businesses need more than just a website because everyone is competing with the high amounts of traffic and users online. While a website is essential and serves as the foundation for your online marketing presence, it is just that, a foundation. Promoting your website via other digital marketing channels is important to set your business apart and give you every opportunity to attract new visitors, hopefully turning into new customers.",
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
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Marketing Company, Digital Partner, latest tech',
          },
          {
            name: 'author',
            content: 'Aimtech Innovate',
          },
        ]}
      />
      <Navbar />
      <LearnMore />
      <Customers/>
      <DMsg/>
      {/* <Carousel/> */}
      <Map />
      <Pland faqdata={accordionData} />
      
      <AboutContact />
      <Footer />
    </>
  );
}
