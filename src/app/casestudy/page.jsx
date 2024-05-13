import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import Cards from "@/brandcomponents/casestudy/cards";
import Hero from "@/brandcomponents/CaseStudyLanding/Hero";
import Banner from "@/brandcomponents/CaseStudyLanding/Banner";
import Footer from "@/brandcomponents/global/footer";
import Hcta from '@/brandcomponents/landing/cta';

const page = () => {
  return (
    <>
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
