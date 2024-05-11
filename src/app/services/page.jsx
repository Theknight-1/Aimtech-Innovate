import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Hero from "@/brandcomponents/services/hero";
import Options from "@/brandcomponents/services/Options";
import FCStudy from "@/brandcomponents/services/FCStudy";
import Pland from "@/brandcomponents/practice/landing";
import Footer from "@/brandcomponents/global/footer";
import CaseStudies from "@/brandcomponents/landing/casestudy";
import Testimonial from "@/brandcomponents/landing/testimonial";
import Hcta from "@/brandcomponents/landing/cta";
export default function Services() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-32"></div>
      <FCStudy />
      <CaseStudies />
      <Testimonial />
      <Pland />
      <Hcta />
      <Options />
      <Footer />
    </>
  );
}
