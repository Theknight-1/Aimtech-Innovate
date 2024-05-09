import React from "react";
import Navbar from '@/brandcomponents/global/Navbar'
import Hero from "@/brandcomponents/landing/hero";
import CaseStudy from "@/brandcomponents/landing/casestudy";
import ContactPage from "@/brandcomponents/contact/contactPage";
import SecondPage from "@/brandcomponents/contact/secondPage";
import ThirdPage from "@/brandcomponents/contact/thirdPage";
import Footer from "@/brandcomponents/global/footer";
import { NextSeo } from 'next-seo';
export default function Contach() {
  return (
    <>
    
      <Navbar />
      {/* <Hero/> */}
      <ContactPage />
      <SecondPage />
      <ThirdPage />
      <Footer/>
    </>
  );
}
