"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp, FaSignal } from "react-icons/fa";
import { FaPhone, FaMagnifyingGlassChart } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FcNext } from "react-icons/fc";
import SpringModal from "@/brandcomponents/Modal/SpringModal";

import {
  FcBarChart,
  FcStatistics,
  FcSalesPerformance,
  FcCollaboration,
  FcFeedback,
} from "react-icons/fc";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [imageUrl, setImageUrl] = useState("/brand/logo/logoFinal.png");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
        setImageUrl("/brand/logo/blue-logo.png");
      } else {
        setScrolling(false);
        setImageUrl("/brand/logo/logoFinal.png");
      }
    };

    // Check the scroll position on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicedata = [
    {
      title: "Web Design and Development",
      pagelink: "/services/web-development",
      icon: <FcStatistics size={35} />,
      services: [
        { name: "Custom Website Design", pagelink: "/seo-service" },
        { name: "E-Commerce Development", pagelink: "/seo-service" },
        { name: "WordPress Development", pagelink: "/digital-marketing" },
        { name: "UI/UX Optimization", pagelink: "/seo-service" },
        { name: "Website Maintenance", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Social Media Management",
      pagelink: "/services/social-media-marketing",
      icon: <FcCollaboration size={35} />,
      services: [
        { name: "Social Media Strategy", pagelink: "/seo-service" },
        { name: "Content Creation", pagelink: "/seo-service" },
        { name: "Community Management", pagelink: "/seo-service" },
        { name: "Social Media Advertising", pagelink: "/seo-service" },
        { name: "Analytics and Reporting", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Pay-Per-Click Advertisement",
      pagelink: "/services/ppc-advertisement",
      icon: <FcSalesPerformance size={35} />,
      services: [
        { name: "PPC Strategy Development", pagelink: "/seo-service" },
        { name: "Ad Copywriting", pagelink: "/seo-service" },
        { name: "Campaign Optimization", pagelink: "/seo-service" },
        { name: "Remarketing", pagelink: "/seo-service" },
        { name: "Performance Tracking", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Search Engine Optimization",
      pagelink: "/services/seo-service",
      icon: <FcBarChart size={35} />,
      services: [
        { name: "On-Page SEO", pagelink: "/seo-service" },
        { name: "Off-Page SEO", pagelink: "/seo-service" },
        { name: "GTM and Google Analytics", pagelink: "/seo-service" },
        { name: "SEO Audits", pagelink: "/seo-service" },
        { name: "Local SEO", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Email Marketing",
      pagelink: "/services/email-marketing",
      icon: <FcFeedback size={35} />,
      services: [
        { name: "Email Campaign Design", pagelink: "/seo-service" },
        { name: "List Building and Segmentation", pagelink: "/seo-service" },
        { name: "Automation Setup", pagelink: "/seo-service" },
        { name: "A/B Testing", pagelink: "/seo-service" },
        { name: "Performance Analysis", pagelink: "/seo-service" },
      ],
    },
  ];


  const caseStudiesData = [
    {
      category: "Email related",
      icon: "📧",
      data: [
        {
          title: "Next coach",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "ABC company",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Rk builders",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
      ],
    },
    {
      category: "SEO related",
      icon: "🔍",
      data: [
        {
          title: "fultime service for automobiles",
          link: "/casestudy/full-time-operatonal-services-for-automobile",
          description:
            "Aimtech Innovate provided comprehensive IT infrastructure ..",
        },
        {
          title: "SEO For Fintech",
          link: "/casestudy/seo-for-fintech",
          description:
            "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company...",
        },
        {
          title: "Canada Market",
          link: "",
          description:
            "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company..",
        },
      ],
    },
    {
      category: "Web Development related",
      icon: "🌐",
      data: [
        {
          title: "CRM For Fintech",
          link: "/casestudy/crm-for-fintech",
          description:
            "Aimtech Innovate created an AI-enabled CRM for a fintech company...",
        },
        {
          title: "high-school web design",
          link: "/casestudy/web-design-for-high-school",
          description:
            "Aimtech Innovate helped create a best-in-class website for a high school...",
        },
        {
          title: "Google Tags",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
      ],
    },
    {
      category: "PPC related",
      icon: "💰",
      data: [
        {
          title: "social-media-marketing-for-ai-startup",
          link: "/casestudy/social-media-marketing-for-ai-startup",
          description:
            "Aimtech Innovate resolved many problems for AI startups..",
        },
        {
          title: "FANGG",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Meta Vr",
          link: "",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
      ],
    },
  ];

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileNav(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileView = () => {
    setServicesOpen(false);
    setCaseStudiesOpen(false);
    setOpenCategory(false);
    setMobileNav((prev) => !prev);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setCaseStudiesOpen(false);
    setOpenCategory(false);
  };

  const toggleCaseStudies = () => {
    setCaseStudiesOpen((prev) => !prev);
    setServicesOpen(false);
    setOpenCategory(false);
  };
  return (
    <>
      <nav
        className={`sticky top-0 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ${
          scrolling ? "bg-white text-black shadow" : "text-white"
        } z-50 mb-2 w-screen`}
      >
        <div className={`  mx-auto flex justify-between items-center py-2`}>
          <div className=" relative block  text-xl text-blue-600 font-bold">
            <Link href="/" className="font-bold text-black  text-xl ">
              {" "}
              <img
                src={imageUrl}
                className={` object-scale-down ${
                  scrolling ? "w-28 " : "w-28  lg:w-40 xl:w-48"
                }`}
                alt="logo"
              />
              {/* <img src={logo.src} width={200} height={150} alt="" /> */}
            </Link>
          </div>
          <div className="">
            <div className="flex justify-end  itmes-center  ">
              {/* <div className={`lg:flex gap-4 lg:gap-7 ${
          scrolling ? "text-green-400 hidden" : "text-red-400"
        }`}> */}
              <div className={`lg:flex gap-4 lg:gap-7 hidden`}>
                <h4
                  className={`flex  items-center gap-2 text-base ${
                    scrolling ? "hidden" : ""
                  }`}
                >
                  <a
                    href="https://calendly.com/himanshusaxena5500/30min"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <span>
                      <GoDeviceCameraVideo size={22} />
                    </span>{" "}
                    Schedule Discovery Meet
                  </a>
                </h4>
                <h4
                  className={`flex  items-center gap-2 text-base ${
                    scrolling ? "hidden" : ""
                  }`}
                >
                  <span>
                    <FaWhatsapp size={22} />
                  </span>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+1905-399-6642&text=Hello from the website"
                  >
                    {" "}
                    Whatsapp{" "}
                  </a>
                </h4>
                <h4
                  className={`flex  items-center gap-2  text-lg font-bold hover:text-brand-secondary ${
                    scrolling ? "hidden" : ""
                  }`}
                >
                  <span>
                    <FaPhone size={15} />
                  </span>{" "}
                  <Link href="tel:+1905-399-6642" className="tracking-wider">
                    {" "}
                    +1 905-399-6642{" "}
                  </Link>
                </h4>
              </div>
              <div className=" lg:hidden w-full  flex justify-end ">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="rounded-lg px-2 py-1.5  font-semibold bg-brand-secondary hover:bg-yellow-400 w-max-lg "
                >
                  <span className="text-brand-primary hover:text-white font-bold text-lg">
                    Get Proposal
                  </span>
                </button>
              </div>
            </div>
            <ul
              className={` hidden lg:flex items-center justify-center lg:gap-5 xl:gap-10 2xl:gap-12 text-lg xl:text-xl `}
            >
              <li className="relative block py-2  ">
                <Link
                  href="/"
                  className="border-b border-transparent   hover:border-brand-secondary cursor-pointer "
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="relative block py-2  ">
                <Link
                  href="/about"
                  className="border-b border-transparent hover:border-brand-secondary cursor-pointer"
                >
                  About us
                </Link>
              </li>
              {/* Hoverable Link */}
              <li className="hoverable group py-2  relative ">
                <Link
                  href="#"
                  className="border-b border-transparent hover:border-brand-secondary  flex justify-center items-center"
                >
                  Services
                  <span>
                    <RiArrowDropDownLine
                      size={30}
                      className="group-hover:-rotate-180 transition duration-300"
                    />
                  </span>
                </Link>
                <div className=" mega-menu mb-16 sm:mb-0 shadow-xl ">
                  <div
                    className={`relative bg-white p-6 w-full h-auto ${
                      scrolling ? "-top-7" : ""
                    }`}
                  >
                    <div className="flex justify-evenly lg:gap-3 xl:gap-6">
                      {servicedata.map((service, idx) => (
                        <Link key={idx} href={service.pagelink}>
                          <div className="h-full text-black p-4  hover:shadow-2xl border hover:border-brand-secondary rounded-xl transition duration-300 ease-in-out border-transparent">
                            <div className="flex justify-normal items-center text-lg text-brand-primary gap-4 h-16">
                              {service.icon}
                              <h1 className="font-bold">{service.title}</h1>
                            </div>
                            <ul className="mt-3 text-sm md:text-lg xl:text-xl font-semi-bold">
                              {service.services.map((srv, serviceIndex) => (
                                <li
                                  key={serviceIndex}
                                  className="text-brand-primary cursor-pointer px-0 text-sm md:text-base xl:text-lg flex items-center justify-start p-1 gap-2"
                                >
                                  <span>
                                    <FcNext />
                                  </span>
                                  {srv.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Third Column */}
                </div>
              </li>
              <li className="hoverable group py-2  relative  ">
                <Link
                  href="#"
                  className="border-b border-transparent hover:border-brand-secondary cursor-pointer flex justify-center items-center"
                >
                  Case Study
                  <span>
                    <RiArrowDropDownLine
                      size={30}
                      className="group-hover:-rotate-180 transition duration-300"
                    />
                  </span>
                </Link>
                <div className=" mega-menu mb-16 sm:mb-0 shadow-xl ">
                  <div
                    className={`relative bg-white p-6 w-full h-auto ${
                      scrolling ? "-top-7" : ""
                    }`}
                  >
                    <div className=" w-full h-auto p-2 flex flex-col md:flex-row gap-6  text-brand-primary">
                      <div className="flex flex-col md:flex-row  gap-0 lg:gap-3 xl:gap-6  ">
                        {caseStudiesData.map((ckey, index) => (
                          <div
                            key={index}
                            className="w-1/4 border-2    rounded-lg h-auto blue-200  lg:p-4  xl:p-8 overflow-hidden text-wrap  "
                          >
                            <h1 className="font-bold text-blue-500 text-xl ">
                              {ckey.category}
                            </h1>
                            {ckey.data.map((cstudy, idx) => (
                              <div
                                key={idx}
                                className="flex flex-row gap-2 mt-2 xl:text-xl lg:text-lg  hover:shadow-lg p-2 cursor-pointer"
                              >
                                <span>📑</span>

                                <div className="flex flex-col items-start gap-2 ">
                                  <Link href={cstudy.link}>
                                    <span className=" font-bold">
                                      {cstudy.title}
                                    </span>
                                  </Link>

                                  <article className="text-sm">
                                    {cstudy.description}
                                  </article>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div className="lg:w-1/4 hidden xl:block h-auto rounded-lg  bg-brand-secondary hover:shadow-2xl  p-8 lg:p-5 xl:p-3 overflow-hidden text-wrap ">
                        <div className="w-full h-full flex justify-center items-center">
                          {/* Use flex-2 class for the third box */}
                          <div className="space-y-5 text-center">
                            <p className="uppercase tracking-wider text-brand-primary text-center text-4xl font-semibold">
                              155%
                            </p>
                            <p className="text-xl font-bold px-10 text-center text-black">
                              Increase in organic tranactions
                            </p>
                            <span className="flex justify-center items-center">
                              <FaSignal
                                className="text-brand-primary"
                                size={80}
                              />
                            </span>
                            <Link href="/casestudy">
                              <button className="xl:px-4 lg:px-12 py-2 font-bold bg-brand-primary rounded text-white xl:text-base 2xl:text-lg text-sm">
                                Read our case study
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* card end */}
                    </div>
                  </div>
                  {/* Third Column */}
                </div>
              </li>
              <li className="relative block py-4 ">
                <Link
                  href="/contact"
                  className="border-b border-transparent hover:border-brand-secondary cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="rounded-lg px-1 lg:px-2 xl:px-3 py-2 font-semibold bg-brand-secondary hover:bg-yellow-400 flex items-center group z-10"
                >
                  <span className="mr-2 text-brand-primary  font-bold xl:text-xl lg:text-lg text-base">
                    Get Proposal
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className={``}>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
