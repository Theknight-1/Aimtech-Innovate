"use client";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { SiAffinitydesigner } from "react-icons/si";
import { GiTechnoHeart } from "react-icons/gi";
import Link from "next/link";
import SpringModal from "@/brandcomponents/Modal/SpringModal";

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
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  //convet the service into slug
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  };
  return (
    <>
      <div className="flex justify-end  itmes-center  w-screen px-6 md:px-28 py-2 border-b border-gray-300 lg:border-none ">
        <div className="hidden lg:flex gap-10 text-white font-semibold ">
          <h4 className="flex items-center gap-2 text-lg">
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
          <h4 className="flex items-center gap-2 text-lg">
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
          <h4 className="flex items-center gap-2 text-xl font-bold text-[#fcd040d3] hover:text-[#FCCF40]">
            <span>
              <FaPhone size={15} />
            </span>{" "}
            <a href="tel:+1905-399-6642"> +1 905-399-6642 </a>
          </h4>
        </div>
        <div className=" lg:hidden w-full  flex justify-end">
          <a
            href="#"
            className="rounded-lg px-2 py-1 font-semibold bg-[#FCCF40] w-max-lg "
          >
            <span className="text-[#122B59] font-bold text-sm">
              Get Proposal
            </span>
          </a>
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

                <div className="mx-auto  w-full bg-brand-primary/30 backdrop-blur-3xl h-96 fixed top-36 left-0 transition group-hover:-translate-y-10 translate-y-0  opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 ease-in-out group-hover:transform z-50 max-w-screen  transform">
                  <div className="relative top-6 p-6  rounded-xl  w-full  ">
                    <div className="relative z-10  ">
                      <div className="flex gap-5 ">
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
                          className="flex-1 flex items-center justify-center space-x-5  "
                          style={{ flexBasis: "70%" }}
                        >
                          {services.map((categoryObject, index) => {
                            const categoryName = Object.keys(categoryObject)[0]; // Extract category name
                            const servicesList = categoryObject[categoryName]; // Extract services list for the category

                            let iconComponent;

                            switch (categoryName) {
                              case "SEO & Lead Generation":
                                iconComponent = (
                                  <FaMagnifyingGlassChart size={35} />
                                );
                                break;
                              case "Revenue Marketing & CRO":
                                iconComponent = (
                                  <RiExchangeDollarLine size={35} />
                                );
                                break;
                              case "UX & Interactive":
                                iconComponent = (
                                  <SiAffinitydesigner size={35} />
                                );
                                break;
                              case "Technology":
                                iconComponent = <GiTechnoHeart size={35} />;
                                break;
                              default:
                                iconComponent = null;
                                break;
                            }

                            return (
                              <div
                                key={index}
                                className="px-6  lg:px-2 flex-1 border border-gray-200 p-4 rounded-xl bg-[#122B59]/50 backdrop-blur-2xl shadow-3xl "
                              >
                                <div className="flex justify-normal items-center gap-4 h-16">
                                  {iconComponent && (
                                    <span>{iconComponent}</span>
                                  )}
                                  <h1 className="font-bold">{categoryName}</h1>
                                </div>
                                <ul className="mt-3 text-[15px]">
                                  {servicesList.map((service, idx) => (
                                    <li key={idx}>
                                      <Link
                                        href={`/services/${toSlug(service)}`} // Use the slug as the href
                                        className="block p-2 -mx-2 rounded-lg xl:text-[17px] text-sm text-gray-300 font-semibold hover:text-yellow-400"
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                  <li className="animate-bounce">
                                    <a
                                      href="#"
                                      className="flex items-center justify-start text-yellow-400  gap-1"
                                    >
                                      <span className="text-sm">See all</span>
                                      <LiaGreaterThanSolid size={12} />{" "}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
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
                            <Link href="/services">
                              <button className="xl:px-5 px-2 py-4 md:text-sm text-[12px] font-bold bg-[#FCCF40] rounded">
                                Read our case study
                              </button>
                            </Link>
                          </div>
                        </div>
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
                <div className="mx-auto  w-full bg-[#122B59]/30 backdrop-blur-3xl h-96 fixed top-36 left-0 transition group-hover:-translate-y-10 translate-y-0  opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 ease-in-out group-hover:transform z-50 max-w-screen  transform">
                  <div className="relative top-6 p-6  rounded-xl shadow-xl w-full">
                    {/* triangle box */}
                    <div className="relative z-10 ">
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
                    className="rounded-lg px-3 py-2 font-semibold bg-[#FCCF40] flex items-center group"
                  >
                    <span className="mr-2 text-brand-primary font-bold text-xl">
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
        <div
          className={``}
        >
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
      {mobileNav && (
        <div className="z-9999 fixed w-full bg-white">
          <nav className="flex flex-col ">
            <ul className="flex flex-col justify-start p-5  xl:text-[22px] text-gray-900 gap-4">
              <li className="flex  group  py-2 border-b ">
                <a href="#" className=" cursor-pointer font-bold">
                  Home
                </a>
              </li>
              <li className="relative group  py-2 border-b ">
                <a href="#" className=" cursor-pointer font-bold">
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
