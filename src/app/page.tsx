'use client'
import React from 'react';
// import Whyus from "../brandcomponents/landing/whyus"
import Footer from "@/brandcomponents/global/footer";
import Pland from "@/brandcomponents/practice/landing"
import Testimonial from "@/brandcomponents/landing/testimonial"
import GradientSection from "@/brandcomponents/practice/gradientsection"
import Hcta from '@/brandcomponents/landing/cta'
import CaseStudies from '@/brandcomponents/landing/casestudy'
import Services from '@/brandcomponents/landing/services'
import Whyus from "../brandcomponents/landing/whyus";
import Navbar from "@/brandcomponents/global/Navbar";
import { NextSeo } from 'next-seo';





export default function Home() {
  

  const accordionData = [
    {
      title: "Would my business benefit from hiring a digital marketing agency?",
      content:
        "Definitely yes. Hiring a digital marketing agency is worth it for their expertise, industry insights, cost-effective lead generation, proven results, up-to-date strategies, and time-saving benefits. With the digital marketing industry booming and agencies offering specialized services, businesses can benefit from their tailored approach to online marketing, driving growth and maximizing ROI.",
    },
    {
      title: "What can a digital marketing agency do for my business?",
      content:
        "A digital marketing agency can provide your business with expertise across multiple channels, cost-effective and scalable services, improved online presence and lead generation, High ROI, and professional support. By partnering with an agency, you can focus on your core business while experts drive results, giving you a competitive edge in the digital landscape.",
    },
    {
      title: "Do you have experience in my industry?",
      content: "The systems we use work for any industry. Our team has worked with clients in hundreds of E-commerce, SAAS, Fintech, Small businesses, Kickstarter campaigns and everything in between. No matter the industry, the key ingredients for success include having an irresistible offer and a quality product that people want. If you’ve got that, our creative team can help you get the attention you need to sell your product/service.",
    },
    {
      title: "How do you report on your results?",
      content: "We provide reports based on digital marketing results that define clear goals, organize and prioritize data, structure metrics, use reporting tools like Office 365 or Coefficient, and create custom reports tailored to client needs. By filtering and structuring data, you can track performance accurately and showcase the success of cross-channel marketing efforts. These steps streamline reporting, provide actionable insights, and communicate the impact of digital strategies to stakeholders. Leveraging tools and custom reports enhances transparency, demonstrates ROI, and helps optimize future marketing campaigns for continued success.",
    },
    {
      title: "Why is Aimtech Innovate the most cost-effective digital marketing agency across the US and Canada?",
      content: "Aimtech Innovate is considered the most cost-effective digital marketing agency across the US and Canada due to its ability to enhance digital presence and achieve market excellence while offering competitive pricing and comprehensive solutions for web development and digital marketing services Our reputation for providing quality services at an affordable rate positions us as a top choice for businesses looking to optimize their online presence without compromising on quality or effectiveness.",
    },
    {
      title: "What questions should I ask a digital marketing agency before I hire them?",
      content: "Before hiring a digital marketing agency, ensure alignment by asking key questions: Understand your needs and their process, inquire about their experience with similar companies, clarify team composition for consistent communication, discuss cost, billing, and potential expenses, question their success measurement and analytics provision, understand their service offerings and integration with your plan, and discuss reporting frequency, key metrics, and progress tracking tools. These questions help assess expertise, approach, experience, and fit with your goals, ensuring a successful partnership that drives your business forward.",
    },
    
  ];
  return (
    <>
      <title> Digital Marketing Agency Based in Canada, | Aim Tech Innovate</title>
      <NextSeo
        title="Digital Marketing Agency Based in Canada, | Aim Tech Innovate"
        description="Increase ROI with the best digital marketing agency || Performance guarantees || Canada Based Company ||  Local & global | Get in touch today!"
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

        <Pland faqdata={accordionData} />


        <Hcta title="Get a Free Audit Report" d1="Get your free consultation today." d2="Learn how we can boost your ROI." />
      </main>
      {/* <Customer/> */}
      <Footer />
    </>
  );
}
