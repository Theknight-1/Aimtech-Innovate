"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp,FaSignal } from "react-icons/fa";
import { FaPhone,FaMagnifyingGlassChart } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FcNext } from "react-icons/fc";
import SpringModal from "@/brandcomponents/Modal/SpringModal";
// react icons

import { FcBarChart,FcStatistics,FcSalesPerformance,FcCollaboration,FcFeedback } from "react-icons/fc";

const AnimatedHamburger = ({ handleMobileView }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    handleMobileView((pre) => !pre);
  };

  return (
    <div className="  flex flex-col justify-center">
      <div className="relative  mx-auto">
        <button
          className="w-14 h-10 relative focus:outline-none rounded"
          onClick={toggleMenu}
        >
          <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7 bg-black transition-transform duration-400 ease-in-out ${
                open ? "rotate-45 " : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-black transition-opacity duration-400 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-7 bg-black transition-transform duration-400 ease-in-out ${
                open ? "-rotate-45 " : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
};

function MegaMenu() {
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
      icon: <FcStatistics  size={35} />,
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
      icon: <FcSalesPerformance  size={35} />,
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
  const caseStudies = [
    "Food Delivery Project",
    "Aimtech Business Project",
    "Management Project",
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
      <div className="flex justify-end  itmes-center  w-screen py-1 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 border-b border-gray-300 lg:border-none ">
        <div className="hidden lg:flex gap-10 text-white  ">
          <h4 className="flex items-center gap-2 text-xl">
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
          <h4 className="flex items-center gap-2 text-xl">
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
          <h4 className="flex items-center gap-2 text-xl font-bold text-white hover:text-brand-secondary">
            <span>
              <FaPhone size={15} />
            </span>{" "}
            <a href="tel:+1905-399-6642"> +1 905-399-6642 </a>
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
      <header
        className={`sticky top-0 xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ${
          scrolling ? "bg-white text-black shadow" : "text-white"
        } z-50 mb-2 w-screen`}
      >
        <div className="flex items-center justify-between ">
          <Link href="/" className="font-bold text-black  text-xl ">
            <img
              src={imageUrl}
              className="w-24 h-12  lg:w-40 p-1 lg:h-16 object-scale-down"
              alt="logo"
            />
            {/* <img src={logo.src} width={200} height={150} alt="" /> */}
          </Link>
          <nav className="hidden   sticky top-0 lg:flex justify-center items-center gap-8">
            <ul className="flex items-center justify-evenly xl:text-[22px]  gap-4">
              <li className="relative group px-3 py-2 ">
                <Link href="/" className="hover:opacity-50 cursor-pointer">
                  {" "}
                  Home
                </Link>
                {/* <a href="/" className="hover:opacity-50 cursor-pointer">
                  Home
                </a> */}
              </li>
              <li className="relative group px-3 py-2">
                <Link href="/about" className="hover:opacity-50 cursor-pointer">
                  About us
                </Link>
                {/* <a href="/about" className="hover:opacity-50 cursor-pointer">
                  About us
                </a> */}
              </li>
              {/*Services DropDown  */}
              <li className="relative group  py-2 ">
                <button className="hover:opacity-50 cursor-pointer flex justify-self-auto items-center ">
                  Services
                  <span>
                    <RiArrowDropDownLine
                      size={30}
                      className="group-hover:-rotate-180 transition duration-300"
                    />
                  </span>
                </button>

                <div
                  className={`mx-auto   w-full bg-white ${
                    scrolling ? "top-26" : "top-36"
                  } h-auto fixed  left-0 transition group-hover:-translate-y-10 translate-y-0  opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 ease-in-out group-hover:transform z-50 max-w-screen  transform`}
                >
                  <div className="relative bg-white p-6  rounded-lg  w-full h-96">
                    <div className="   h-full ">
                      <div className="flex gap-5 h-full ">
                        {/* First Column */}
                        {/* <div className="flex-1" style={{ flexBasis: "15%" }}>
                          
                          <div className=" uppercase tracking-wider  text-[13px] rounded-tl-lg rounded-tr-lg overflow-hidden">
                            <img
                              src='/brand/logo/logo.svg'
                              alt="Our Services"
                              className="h-42 object-cover"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <h1 className="font-bold text-2xl text-center mt-2">
                              Aimtech Services
                            </h1>
                            <p className="text-sm text-center text-red-500 font-bold px-3 leading-relaxed">
                              Our services range from Digital marketing, Web
                              development to many more
                            </p>
                          </div>
                        </div> */}

                        {/* Second Column */}
                        <div
                          className="flex-1 flex items-center h-full py-24 justify-around space-x-5  "
                          style={{ flexBasis: "70%" }}
                        >
                          {servicedata.map((service, idx) => (
                            <Link key={idx} href={service.pagelink}>
                            <div
                              
                              className="px-6 h-full lg:px-2 flex-1 text-black  p-4 border shadow-xl hover:shadow-2xl hover:border-2 hover:border-brand-secondary rounded-xl   "
                              >
                              <div className="flex justify-normal items-center text-lg text-brand-primary gap-4 h-16">
                                {service.icon}
                                
                                  <h1 className="font-bold  ">
                                    {service.title}
                                  </h1>
                                
                              </div>
                              <ul className="mt-3 text-sm md:text-xl  p-2 font-semi-bold">
                                {service.services.map((srv, serviceIndex) => (
                                  <li
                                    key={serviceIndex}
                                    className="text-brand-primary cursor-pointer px-4 flex items-center justify-start p-1 gap-2"
                                  >
                                    <span><FcNext /></span>
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
                        {/* Third Column */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Case Study DropDown */}
              <li className="relative group py-2 ">
                <a href="/casestudy">
                  <button className="hover:opacity-50 cursor-pointer flex justify-self-auto items-center">
                    Case Studies
                    <span>
                      <RiArrowDropDownLine
                        size={30}
                        className="group-hover:-rotate-180 transition duration-300"
                      />
                    </span>
                  </button>
                </a>
                <div
                  className={`mx-auto divide-x divide-solid border-r-2  p-10  w-full bg-white h-auto fixed ${
                    scrolling ? "top-26" : "top-36"
                  } left-0 transition group-hover:-translate-y-10 translate-y-0  opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 ease-in-out group-hover:transform z-50 max-w-screen  transform`}
                >
                  <div className=" w-full h-auto p-2 text-black flex flex-col md:flex-row gap-6  text-brand-primary">
                    <div className="flex flex-col md:flex-row gap-6  ">
                    {/* card start */}
                    <div className="w-1/4 border-2  hover:shadow-2xl  rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                      <h1 className="font-bold text-blue-500 text-xl ">
                        Email related
                      </h1>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2">
                          <span className="text-xl font-bold  hover:text-brand-secondary ">Next coach</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">ABC company</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Rk builders</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* card end */}
                    {/* card start */}
                    <div className="w-1/4 border  hover:shadow-2xl rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                      <h1 className="font-bold text-[#7E62DD] text-xl">
                        SEO related
                      </h1>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Marketing Firm</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">US Market</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Canada Market</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* card end */}
                    {/* card start */}
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
                            Studied aimtech core busness aspect and helped them
                            grow with our expertise.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Next coach</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Google Tags</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* card end */}
                    {/* card start */}
                    <div className="w-1/4 border  hover:shadow-2xl rounded-lg h-auto blue-200 p-8 overflow-hidden text-wrap">
                      <h1 className="font-bold text-[#7E62DD] text-xl">
                        PPC related
                      </h1>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Analytics</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">FANGG</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 mt-2">
                        <span>📑</span>
                        <div className="flex flex-col items-start gap-2 ">
                          <span className="text-xl font-bold">Meta Vr</span>
                          <article className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat, aut.
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* card end */}
                    </div>
                    {/* card start */}
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
                            <FaSignal className="text-brand-primary" size={80} />
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
                              <h1 className="font-bold">Latest Case Studies</h1>
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
                              <h1 className="font-bold">Latest Case Studies</h1>
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
                              <h1 className="font-bold">Latest Case Studies</h1>
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
                              <FaSignal className="text-green-300" size={80} />
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
              </li>
              {/* Other list items and dropdowns go here */}
              <li className="relative group px-3 py-2">
                <Link
                  href="/contact"
                  className="hover:opacity-50 cursor-pointer"
                >
                  Contact
                </Link>
                {/* <a href="/contact" className="hover:opacity-50 cursor-pointer">
                  Contact
                </a> */}
              </li>
            </ul>
            <nav>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="rounded-lg px-3 py-2 font-semibold bg-brand-secondary flex items-center group"
                  >
                    <span className="mr-2 text-brand-primary hover:text-white font-bold text-xl">
                      Get Proposal
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </nav>
          {/* mobile navvar */}
          <nav className="block lg:hidden  cursor-pointer">
            <AnimatedHamburger handleMobileView={handleMobileView} />
          </nav>
        </div>
      </header>
      {isOpen && (
        <div className={``}>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
      {mobileNav && (
        <div className="z-9999 fixed w-full bg-white">
          <nav className="flex flex-col ">
            <ul className="flex flex-col justify-start p-5  xl:text-[22px] text-gray-900 gap-4">
              <li className="flex  group  py-2 border-b ">
                <a href="/" className=" cursor-pointer font-bold">
                  Home
                </a>
              </li>
              <li className="relative group  py-2 border-b ">
                <a href="/about" className=" cursor-pointer font-bold">
                  About us
                </a>
              </li>
              {/* Services Dropdown */}
              <li className="relative group py-2 border-b ">
                <button
                  className="flex justify-between items-center  cursor-pointer w-full font-bold"
                  onClick={toggleServices}
                >
                  <span>Services</span>
                  <span>
                    <RiArrowDropDownLine
                      size={30}
                      className={`transform transition-transform duration-300 ${
                        servicesOpen ? "rotate-180 opacity-50" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`w-full  ${
                    servicesOpen
                      ? " visible opacity-100 transition translate-y-0 duration-300 ease-linear"
                      : "invisible opacity-0 translate-y-10 "
                  }`}
                >
                  {servicesOpen && (
                    <ul>
                      {services.map((serviceCategory, index) => {
                        const category = Object.keys(serviceCategory)[0]; // Get the category name
                        const servicesList = serviceCategory[category]; // Get the array of services
                        const isOpen = openCategory === category;

                        return (
                          <li className="py-2" key={index}>
                            <div className="flex justify-between items-center">
                              <span
                                onClick={() => toggleCategory(category)}
                                className="cursor-pointer flex justify-between w-full"
                              >
                                <span>{category}</span>{" "}
                                <RiArrowDropDownLine size={30} className="" />
                              </span>
                            </div>
                            {isOpen && (
                              <ul className="ml-4">
                                {servicesList.map((service, idx) => (
                                  <li key={idx} className="py-2">
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>

              {/* Case Studies Dropdown */}
              <li className="relative group py-2 border-b ">
                <button
                  className="flex justify-between items-center  cursor-pointer w-full font-bold"
                  onClick={toggleCaseStudies}
                >
                  <span>Case Studies</span>
                  <span>
                    <RiArrowDropDownLine
                      size={30}
                      className={`transform transition-transform duration-300 ${
                        caseStudiesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`w-full ${
                    caseStudiesOpen
                      ? "visible opacity-100 transition translate-y-0 duration-300 ease-linear "
                      : "invisible opacity-0 translate-y-10 "
                  }`}
                >
                  {caseStudiesOpen && (
                    <ul>
                      {caseStudies &&
                        caseStudies.map((caseStudie, index) => {
                          return (
                            <li
                              className="py-2 mt-1 flex justify-between"
                              key={index}
                            >
                              {caseStudie}{" "}
                              <span>
                                <RiArrowDropDownLine size={30} />
                              </span>
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </div>
              </li>

              {/* Other list items go here */}
              <li className="relative group  py-2 border-b ">
                <a href="#" className=" cursor-pointer font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MegaMenu;
