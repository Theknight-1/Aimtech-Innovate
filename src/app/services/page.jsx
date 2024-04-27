import React from "react";
import Navbar from '@/brandcomponents/global/Navbar'
import Brandservice from "@/brandcomponents/services/service";
import Pland from "@/brandcomponents/practice/landing";
import Footer from "@/brandcomponents/global/footer";
import CaseStudies from "@/brandcomponents/landing/casestudy";
import Testimonial from "@/brandcomponents/landing/testimonial";
import Hcta from "@/brandcomponents/landing/cta";
export default function Services() {
  return (
    <>
      <Navbar />
      <Brandservice />
      <div className="h-32"></div>
      <CaseStudies />
      <Testimonial />
      <Pland />
      <Hcta />
      <Footer />
    </>
  );
}
