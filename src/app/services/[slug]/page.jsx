"use client";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import file from "@/Data.json";
import { useParams } from "next/navigation";

//components
import Brandservice from "@/brandcomponents/services/service";
import FCStudy from "@/brandcomponents/services/FCStudy";
import Pland from "@/brandcomponents/practice/landing";
import Footer from "@/brandcomponents/global/footer";
import CaseStudies from "@/brandcomponents/landing/casestudy";
import Testimonial from "@/brandcomponents/landing/testimonial";
import Hcta from "@/brandcomponents/landing/cta";


const page = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
      <Brandservice slug={params?.slug}/>
      <section className="w-full h-full px-44">
        {params?.slug === "seo-services" ? (
          <div className="text-4xl text-center text-white">
            <h1>{file?.description}</h1>
          </div>
        ) : (
          <div className="text-4xl text-center text-white">{params.slug}</div>
        )}
      </section>
    </>
  );
};

export default page;
