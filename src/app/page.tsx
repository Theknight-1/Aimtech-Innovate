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
    { title: 'Where is your office located?', content: 'Aimtech is the leading Digital marketting agency based in Canada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores quo tempora expedita porro, doloremque, facilis amet adipisci laboriosam nisi dolore optio magnam magni! Aliquam optio ipsa excepturi sed distinctio? Placeat in laudantium sunt magni nam voluptates veritatis vero optio, maiores accusamus quisquam labore consequatur nobis quod. Accusantium, alias facilis.' },
    { title: 'Do you serve in US ?', content: 'Yes , we do serve in US.' },
    { title: 'Do you serve in Caneda ?', content: 'Yes , we do serve in Caneda.' },
  ];
  return (
    <>
      <title> Aimtech innovate </title>
      <NextSeo
        title="Aimtech innovate"
        description="Your best serach for Digital marketting and brand building."
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

        <Pland />


        <Hcta />
      </main>
      {/* <Customer/> */}
      <Footer />
    </>
  );
}
