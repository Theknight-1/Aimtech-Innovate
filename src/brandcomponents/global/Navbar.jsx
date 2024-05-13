

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp, FaSignal } from "react-icons/fa";
import { FaPhone, FaMagnifyingGlassChart } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FcNext } from "react-icons/fc";
import SpringModal from "@/brandcomponents/Modal/SpringModal";
// react icons

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //handleScroll effect
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
      setImageUrl("/brand/logo/blue-logo.png");
    } else {
      setScrolling(false);
      setImageUrl("/brand/logo/logoFinal.png");
    }
  };

  const servicedata = [
    {
      title: "Web design and Developemtn",
      pagelink: "/services/web-development",
      icon: <FcStatistics size={35} />,
      services: [
        { name: "wesite developement", pagelink: "/seo-service" },
        { name: "website Branding", pagelink: "/seo-service" },
        { name: "Website Re-Branding", pagelink: "/digital-marketing" },
        { name: "SEO Optimized", pagelink: "/seo-service" },
        { name: "Brand Focused", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Social Media Marketing",
      pagelink: "/services/social-media-marketing",
      icon: <FcCollaboration size={35} />,
      services: [
        { name: "Facebook marketing", pagelink: "/seo-service" },
        { name: "Instagram marketting", pagelink: "/seo-service" },
        { name: "Tiktok marketing", pagelink: "/seo-service" },
        { name: "Video ads", pagelink: "/seo-service" },
        { name: "Custom Brand Graphics", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Pay Per Click Advertisement",
      pagelink: "/services/ppc-advertisement",
      icon: <FcSalesPerformance size={35} />,
      services: [
        { name: "Pay as you grow", pagelink: "/seo-service" },
        { name: "Useful solutions", pagelink: "/seo-service" },
        { name: "Easy payment", pagelink: "/seo-service" },
        { name: "Excelent service", pagelink: "/seo-service" },
        { name: "rewarding suppot", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Search Engine Optimization",
      pagelink: "/services/seo-service",
      icon: <FcBarChart size={35} />,
      services: [
        { name: "SEO Service", pagelink: "/seo-service" },
        { name: "Enterprise SEO Services", pagelink: "/seo-service" },
        { name: "Digital Maketing Service", pagelink: "/seo-service" },
        { name: "Local SEO Services", pagelink: "/seo-service" },
        { name: "Google Local Service Ads", pagelink: "/seo-service" },
      ],
    },
    {
      title: "Email marketting",
      pagelink: "/services/email-marketing",
      icon: <FcFeedback size={35} />,
      services: [
        { name: "Business email service", pagelink: "/seo-service" },
        { name: "Custom Email templates", pagelink: "/seo-service" },
        { name: "Brand building focused", pagelink: "/seo-service" },
        { name: "Guide from experts", pagelink: "/seo-service" },
        { name: "free consultation", pagelink: "/seo-service" },
      ],
    },
  ];

  const services = [
    {
      "SEO & Lead Generation": [
        "SEO Services",
        "Enterprise SEO Services",
        "Digital Maketing Service",
        "Local SEO Services",
        "Google Local Service Ads",
      ],
    },
    {
      "Revenue Marketing & CRO": [
        "SEO Services",
        "Enterprise SEO Services",
        "Digital Maketing Service",
        "Local SEO Services",
        "Google Local Service Ads",
      ],
    },
    {
      "UX & Interactive": [
        "SEO Services",
        "Enterprise SEO Services",
        "Digital Maketing Service",
        "Local SEO Services",
        "Google Local Service Ads",
      ],
    },
    {
      Technology: [
        "SEO Services",
        "Enterprise SEO Services",
        "Digital Maketing Service",
        "Local SEO Services",
        "Google Local Service Ads",
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
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "ABC company",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Rk builders",
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
          title: "Marketing Firm",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "US Market",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Canada Market",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
      ],
    },
    {
      category: "Web Development related",
      icon: "🌐",
      data: [
        {
          title: "Aimtech Casestudy",
          description:
            "Studied aimtech core busness aspect and helped them grow with our expertise.",
        },
        {
          title: "Next coach",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Google Tags",
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
          title: "Analytics",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "FANGG",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut.",
        },
        {
          title: "Meta Vr",
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
      // else {
      //   setMobileNav(true); // Update mobile nav state if window width is <= 1024
      // }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // If you have dependencies, include them here (e.g., [someProp, someState])

  const handleMobileView = () => {
    setServicesOpen(false);
    setCaseStudiesOpen(false);
    setOpenCategory(false);
    setMobileNav((pre) => !pre);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleCaseStudies = () => {
    setCaseStudiesOpen(!caseStudiesOpen);
  };
  return (
    <>
      <nav
        className={`sticky top-0 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ${
          scrolling ? "bg-white text-black shadow" : "text-white"
        } z-50 mb-2 w-screen`}
      >
        <div className=" mx-auto flex justify-between items-center py-2">
          <div className="relative block  text-xl text-blue-600 font-bold">
            <Link href="/" className="font-bold text-black  text-xl ">
              {" "}
              <img
                src={imageUrl}
                className="w-28  lg:w-48 p-1 object-scale-down"
                alt="logo"
              />
              {/* <img src={logo.src} width={200} height={150} alt="" /> */}
            </Link>
          </div>
          <div>
            <div className="flex justify-end  itmes-center  ">
              <div className="hidden lg:flex gap-4 lg:gap-7  ">
                <h4 className="flex  items-center gap-2 text-base">
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
                <h4 className="flex  items-center gap-2 text-base">
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
                <h4 className="flex  items-center gap-2 text-xl font-bold hover:text-brand-secondary">
                  <span>
                    <FaPhone size={15} />
                  </span>{" "}
                  <Link href="tel:+1905-399-6642" className="tracking-wider">
                    {" "}
                    +1 905-399-6642{" "}
                  </Link>
                </h4>
              </div>
              <div className=" lg:hidden w-full  flex justify-end">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="rounded-lg px-2 py-1.5 font-semibold bg-brand-secondary w-max-lg "
                >
                  <span className="text-brand-primary hover:text-white font-bold text-lg">
                    Get Proposal
                  </span>
                </button>
              </div>
            </div>
            <ul className=" hidden lg:flex items-center justify-center">
              <li className="relative block py-6 px-4 lg:p-6 text-sm lg:text-xl  ">
                <Link
                  href="/"
                  className=" hover:border-b-2 hover:border-brand-secondary cursor-pointer "
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="relative block py-6 px-4 lg:p-6 text-sm lg:text-xl ">
                <Link
                  href="/about"
                  className="hover:border-b-2 hover:border-brand-secondary cursor-pointer"
                >
                  About us
                </Link>
              </li>
              {/* Hoverable Link */}
              <li className="hoverable group py-6 px-4 relative text-sm lg:text-xl ">
                <Link
                  href="#"
                  className="   hover:border-b-2 hover:border-brand-secondary  flex justify-center items-center"
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
                  <div className="relative bg-white p-6   w-full h-96">
                    <div className="flex justify-evenly items-center">
                      {servicedata.map((service, idx) => (
                        <Link key={idx} href={service.pagelink}>
                          <div className="px-6 h-full lg:px-2 flex-1 text-black  p-4 border shadow-xl hover:shadow-2xl hover:border-2 hover:border-brand-secondary rounded-xl   ">
                            <div className="flex justify-normal items-center text-lg text-brand-primary gap-4 h-16">
                              {service.icon}

                              <h1 className="font-bold  ">{service.title}</h1>
                            </div>
                            <ul className="mt-3 text-sm md:text-xl  p-2 font-semi-bold">
                              {service.services.map((srv, serviceIndex) => (
                                <li
                                  key={serviceIndex}
                                  className="text-brand-primary cursor-pointer px-4 flex items-center justify-start p-1 gap-2"
                                >
                                  <span>
                                    <FcNext />
                                  </span>
                                  {srv.name}
                                  {/* <Link
                                 href={`/services${srv.pagelink}`} // Use the slug as the href
                                 className="block p-2 -mx-2 rounded-lg xl:text-[17px] text-sm text-brand-primary font-semibold hover:text-brand-secondary "
                               >
                                 {srv.name}
                               </Link> */}
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
              <li className="hoverable group py-6 px-4 relative text-sm lg:text-xl ">
                <Link
                  href="#"
                  className="   hover:border-b-2 hover:border-brand-secondary cursor-pointer flex justify-center items-center"
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
                  <div className="relative bg-white p-6   w-full h-auto">
                    <div className=" w-full h-auto p-2 flex flex-col md:flex-row gap-6  text-brand-primary">
                   
                      <div className="flex flex-col md:flex-row gap-6  ">
               
                 
                        <div className="w-1/4 border-2  hover:shadow-2xl  rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                  
                          <h1 className="font-bold text-blue-500 text-xl ">
                            Email related 
                          </h1>
            
                          <div className="flex flex-row gap-2 mt-2">
                   
                            <div className="flex flex-col items-start gap-2">
                         
                              <span className="text-xl font-bold  hover:text-brand-secondary ">
                                Next coach
                              </span>
                       
                              <article className="text-sm">
                                 Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                            <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                ABC company
                              </span>
                              
                              <article className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                            <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Rk builders
                              </span>
                              
                              <article className="text-sm">
                               Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                 
                        
                        <div className="w-1/4 border  hover:shadow-2xl rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                          
                          <h1 className="font-bold text-[#7E62DD] text-xl">
                            SEO related 
                          </h1>
                          
                          <div className="flex flex-row gap-2 mt-2">
                  <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Marketing Firm
                              </span>
                              
                              <article className="text-sm">
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing  elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                          <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                US Market
                              </span>
                              
                              <article className="text-sm">
                                 Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                          <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Canada Market
                              </span>
                              
                              <article className="text-sm">
                              Lorem ipsum dolor sit amet consectetur
                                adipisicing  elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        
                        
                        <div className="w-1/4 border  hover:shadow-2xl rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                          
                          <h1 className="font-bold text-green-500 text-xl">
                    Web Developement related 
                          </h1>
                          
                          <div className="flex flex-row gap-2 mt-2">
                          <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <Link href="/casestudy/aimtech-casestudy">
                                
                                <span className="text-xl font-bold">
                                 Aimtech Casestudy 
                                </span>
                                
                              </Link>
                              
                              <article className="text-sm">
                               Studied aimtech core busness aspect and
                                helped them  grow with our expertise. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                     <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Next coach
                              </span>
                              
                              <article className="text-sm">
                           Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                           <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Google Tags
                              </span>
                              
                              <article className="text-sm">
                                // Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        
                        
                        <div className="w-1/4 border  hover:shadow-2xl rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                          
                          <h1 className="font-bold text-[#7E62DD] text-xl">
                            PPC related 
                          </h1>
                          
                          <div className="flex flex-row gap-2 mt-2">
                             <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">
                                Analytics
                              </span>
                              
                              <article className="text-sm">
                                // Lorem ipsum dolor sit amet consectetur
                                adipisicing // elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                           <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">FANGG</span>
                              
                              <article className="text-sm">
                               Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                          <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                            
                            <div className="flex flex-col items-start gap-2 ">
                              
                              <span className="text-xl font-bold">Meta Vr</span>
                              
                              <article className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quaerat, aut. 
                              </article>
                              
                            </div>
                            
                          </div>
                          
                        </div>
                        
                        
                      </div>
                    
                      
                      <div className="w-1/4 h-auto rounded-lg border-2 bg-brand-secondary hover:shadow-2xl  p-2 overflow-hidden text-wrap">
                        
                        <div
                          className="w-full h-full flex justify-center items-center"
                          style={{ flexBasis: "15%" }}
                        >
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
                              <button className="px-5 py-4 text-sm font-bold bg-brand-primary rounded text-white">
                                Read our case study
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* card end */}
                    </div>
                    <div className="relative hidden top-6 p-6  rounded-xl shadow-xl w-full">
                      {/* triangle box */}
                      <div className=" relative z-10 ">
                        <div className="flex gap-5 ">
                          {/* Second Column */}
                          <div
                            className="flex-1 flex space-x-5"
                            style={{ flexBasis: "85%" }}
                          >
                            {/* Use flex-2 class for the second box */}
                            <div className="p-4 border border-white rounded-lg">
                              <div className="">
                                <h1 className="font-bold">
                                  Latest Case Studies
                                </h1>
                              </div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="p-4 border border-white rounded-lg">
                              <div className="">
                                <h1 className="font-bold">
                                  Latest Case Studies
                                </h1>
                              </div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="p-4 border border-white rounded-lg">
                              <div className="">
                                <h1 className="font-bold">
                                  Latest Case Studies
                                </h1>
                              </div>
                              <ul className="mt-3 text-[15px]">
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className=" -mx-2 rounded-lg  text-gray-950 font-bold flex justify-normal items-center gap-4"
                                  >
                                    <span>
                                      <FaMagnifyingGlassChart size={30} />
                                    </span>
                                    Food Delivery Project
                                  </a>
                                  <a
                                    href="#"
                                    className="block p-2 -mx-2 rounded-lg  text-black hover:text-[#185493] text-sm"
                                  >
                                    The project highlights the food e-commerce
                                    website that we created to bring the service
                                    of good meals.
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Third Column */}
                          <div
                            className="flex-1 flex justify-center items-center"
                            style={{ flexBasis: "15%" }}
                          >
                            {/* Use flex-2 class for the third box */}
                            <div className="space-y-5 text-center">
                              <p className="uppercase tracking-wider text-green-300 text-center text-4xl font-semibold">
                                155%
                              </p>
                              <p className="text-sm font-bold px-10 text-center text-black">
                                Increase in organic tranactions
                              </p>
                              <span className="flex justify-center items-center">
                                <FaSignal
                                  className="text-green-300"
                                  size={80}
                                />
                              </span>
                              <button className="px-5 py-4 text-sm font-bold bg-[#FCCF40] rounded ">
                                Read our case study
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Third Column */}
                </div>
              </li>
              <li className="relative block py-6 px-4 lg:p-6 text-sm lg:text-xl">
                <Link
                  href="/contact"
                  className="hover:border-b-2 hover:border-brand-secondary cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="rounded-lg px-3 py-2 font-semibold bg-brand-secondary hover:bg-[#ecb85d] flex items-center group z-10"
                >
                  <span className="mr-2 text-brand-primary hover:text-white font-bold text-xl">
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
