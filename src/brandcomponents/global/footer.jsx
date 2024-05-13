"use client";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";

const ProvidedSchems = () => {
  return (
    <div className=" grid lg:gap-12 gap-8  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 text-gray-300 p-2 md:p-0">
      <div className="">
        <div className=" xl:mb-4 text-lg font-semibold">Case studies</div>
        <nav aria-label="Footer Navigation" className="">
          <ul className="lg:space-y-4 space-y-2 text-sm ">
            <li>
              <a className=" hover:underline" href="#">
                Integrations
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Changelog
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Docs
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Linear Method
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className=" xl:mb-4 text-lg font-semibold">Company</div>
        <nav aria-label="Footer Navigation" className="">
          <ul className=" lg:space-y-4 space-y-2 text-sm">
            <li>
              <a className=" hover:underline" href="#">
                About us
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Blog
              </a>
            </li>

            <li>
              <a className=" hover:underline" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Brand
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className=" xl:mb-4 text-lg font-semibold">Services</div>
        <nav aria-label="Guides Navigation" className="">
          <ul className="lg:space-y-4 space-y-2 text-sm">
            <li>
              <a className=" hover:underline" href="#">
                Web development & design
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                PPC Advertisement
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                SEO
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Digital Marketting
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="#">
                Email Marketting
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className=" xl:mb-4 text-lg font-semibold">Resources</div>
        <nav aria-label="Footer Navigation" className="">
          <ul className="lg:space-y-4 space-y-2 text-sm">
            <li>
              <a className=" hover:underline" href="#">
                Sitemap
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="terms-and-conditions">
                T & C
              </a>
            </li>
            <li>
              <a className=" hover:underline" href="/contact" target="_blank">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default function Footer() {
  const [isCaseStudyDropdownOpen, setIsCaseStudyDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleCaseStudyDropdown = () => {
    setIsCaseStudyDropdownOpen(!isCaseStudyDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <footer className="relative md:h-[50vh]  text-white bg-black flex flex-col xl:px-32 lg:px-24 md:px-2 sm:px-8 px-4 ">
      {/* dropdown */}
      <div className="md:hidden block w-full  mt-3">
        {/* Case Study Dropdown */}
        <div className="">
          <button
            onClick={toggleCaseStudyDropdown}
            className="text-white font-medium rounded-lg text-lg px-4 py-2.5 w-full flex justify-between text-center items-center  "
            type="button"
          >
            Case Study
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`z-10 ${
              isCaseStudyDropdownOpen ? "" : "hidden"
            } divide-y divide-gray-100 rounded-lg shadow w-full`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="caseStudyDropdownButton"
            >
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary"
                >
                  Linear Method
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Company Dropdown */}
      <div className="md:hidden block w-full  mt-3">
        <div>
          <button
            onClick={toggleCompanyDropdown}
            className="text-white font-medium rounded-lg text-lg px-4 py-2.5 w-full flex justify-between text-center items-center"
            type="button"
          >
            Company
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`z-10 ${
              isCompanyDropdownOpen ? "" : "hidden"
            } divide-y divide-gray-100 rounded-lg shadow w-full`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="companyDropdownButton"
            >
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Brand
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Services Dropdown */}
      <div className="md:hidden block w-full  mt-3">
        <div>
          <button
            onClick={toggleServicesDropdown}
            className="text-white font-medium rounded-lg text-lg px-4 py-2.5 w-full flex justify-between text-center items-center"
            type="button"
          >
            Services
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`z-10 ${
              isServicesDropdownOpen ? "" : "hidden"
            } divide-y divide-gray-100 rounded-lg shadow w-full`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="servicesDropdownButton"
            >
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Web Development & Design
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  PPC Advertisement
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Resources Dropdown */}
      <div className="md:hidden block w-full  mt-3">
        <div>
          <button
            onClick={toggleResourcesDropdown}
            className="text-white font-medium rounded-lg text-lg px-4 py-2.5 w-full flex justify-between text-center items-center"
            type="button"
          >
            Resources
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`z-10 ${
              isResourcesDropdownOpen ? "" : "hidden"
            } divide-y divide-gray-100 rounded-lg shadow w-full`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="resourcesDropdownButton"
            >
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  T&C
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="block px-4 py-2 hover:bg-brand-secondary "
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center justify-evenly md:gap-20 lg:gap-32 xl:gap-36 h-[80%]  w-full ">
        <div className="text-sm w-full md:w-[25%] lg:w-[20%] space-y-3  lg:space-y-5 p-2 md:p-0">
          <div className="m-4 md:m-0 md:flex md:items-start md:justify-start text-center flex-col h-32  ">
            <img
              className=" h-full object-contain"
              src="/brand/logo/footer-logo.png"
              alt=""
            />
          </div>
          <div className="flex items-center gap-5 leading-tight ">
            <span className="text-xl">
              <FaMapLocationDot />
            </span>
            <span>1188 settlers St. Windsor Ontario <br /> N9G2W7 Canada</span>
          </div>
          <div className="flex items-center gap-5 ">
            <span className="text-xl">
              <LuPhoneCall />
            </span>
            <span>+1 905 399 6642</span>
          </div>
          <div className="flex items-center gap-5 ">
            <span className="text-xl">
              <CiMail />
            </span>
            <span>support@aimtechinnovate.com</span>
          </div>

          <div className="flex flex-row items-center justify-start text-2xl gap-4 ">
            <FaFacebookF />
            <BiLogoInstagram />
            <CiLinkedin />
          </div>
        </div>
        <div className="md:block hidden w-[50%]">
          <ProvidedSchems />
        </div>
      </div>
      <div className="border-t-2 text-white">
        <div className="mx-auto  max-w-lg gap-5  py-4 text-center flex flex-col lg:flex-row text-xs justify-center items-center cursor-pointer">
          <p className="w-max  text-xm lg:text-lg ">
            © 2024 Aimtech Innovate | <br />
             A Joint venture With{" "}
          </p>
          <div>
            <img src="/brand/logo/nxtcoachlogo.png" alt="next coach logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
