"use client";
import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
import file from "@/Data.json";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  return (
    <>
      <Navbar />
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
