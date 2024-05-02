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
export default function About() {
  return (
    <>
      <Navbar />
      <LearnMore />
      <DMsg/>
      <Carousel/>
      <Map />
      <Pland />
      <AboutContact />
      <Footer />
    </>
  );
}
