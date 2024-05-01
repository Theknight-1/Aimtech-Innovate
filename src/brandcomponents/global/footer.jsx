import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative h-[50vh]  text-white bg-black flex flex-col xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4">
      <div className="flex items-center justify-around  h-[80%] w-full">
        <div className="text-sm  max-w-72 space-y-3">
          <div className="mb-6 flex items-start justify-center text-center flex-col h-24 space-x-2 ">
            <img
              className="w-full h-full object-contain"
              src="/brand/logo/footer-logo.png"
              alt=""
            />
            {/* <span className="text-lg font-medium">AimTech</span> */}
          </div>
          {/* <div className="text-gray-500">We help you Grow your Business with our wide veraity of services</div> */}
          <div className="flex items-center gap-5 px-3 ">
            <span className="text-2xl">
              <FaMapLocationDot />
            </span>
            <span>1188 settlers St. Windsor Ontario N9G2W7 Canada</span>
          </div>
          <div className="flex items-center gap-5 px-3">
            <span className="text-2xl">
              <LuPhoneCall />
            </span>
            <span>+1 905 399 6642</span>
          </div>
          <div className="flex items-center gap-5 px-3">
            <span className="text-2xl">
              <CiMail />
            </span>
            <span>info@aimtechinnovate.com</span>
          </div>
          <div className="flex items-center gap-5 px-3">
            <span className="text-2xl">
              <TfiWorld />
            </span>
            <span>www.aimtechinnovate.com</span>
          </div>
          <div className="flex flex-row items-center justify-center text-3xl gap-4">
            <FaFacebookF />
            <BiLogoInstagram />
            <CiLinkedin />
          </div>
        </div>
        <div className=" grid gap-12   md:grid-cols-2 xl:grid-cols-4">
         
          <div className="">
            <div className="font-medium xl:mb-4">Services</div>
            <nav aria-label="Footer Navigation" className="">
              <ul className="space-y-4">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className=" font-medium xl:mb-4">Company</div>
            <nav aria-label="Footer Navigation" className="">
              <ul className="space-y-4">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className=" font-medium xl:mb-4">Case studies</div>
            <nav aria-label="Guides Navigation" className="">
              <ul className="space-y-4">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    How to make a footer
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Designing your app
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Getting help from the us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing vs Hourly Rate
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <div className=" font-medium xl:mb-4">Services</div>
            <nav aria-label="Footer Navigation" className="">
              <ul className="space-y-4">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t text-white">
        <div className="mx-auto  max-w-lg gap-5  py-3 text-center flex justify-center items-center cursor-pointer">
          <p className="w-max">© 2024 Aimtech Innovate | A Joint venture With </p>
          <div>
            <img src="/brand/logo/logo-12.png" alt="logo12" />
          </div>
        </div>
      </div>
    </footer>
  );
}
