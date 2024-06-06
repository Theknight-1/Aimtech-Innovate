'use client'
import {React,useEffect} from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Hero from "@/brandcomponents/landing/hero";
import CaseStudy from "@/brandcomponents/landing/casestudy";
import ContactPage from "@/brandcomponents/contact/contactPage";
import SecondPage from "@/brandcomponents/contact/secondPage";
import ThirdPage from "@/brandcomponents/contact/thirdPage";
import Footer from "@/brandcomponents/global/footer";
import { NextSeo } from "next-seo";
export default function Contact() {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }, []);
  return (
    <>
    <title>Aimtech Innovate - Contact Us</title>
    <NextSeo
        title="Contact Us Today | Aimtech Innovate"
        description="We offer extensive digital marketing solutions to help you boost your brand online. Contact us today to learn more about our services."
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
