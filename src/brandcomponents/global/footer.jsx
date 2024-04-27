import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="relative border-t-2 text-white bg-opacity-25 backdrop-blur-2xl backdrop-filter">
      <div className="absolute z-0 top-0 h-full w-full">
        {/* <img src="/vector/waves.svg" className='w-full h-full' alt="" /> */}
      </div>
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm text-sm">
          <div className="mb-6 flex items-start justify-start flex-col h-16 space-x-2">
            <img
              className="h-full object-contain"
              src="/brand/logo/logo_white.svg"
              alt=""
            />
            {/* <span className="text-lg font-medium">AimTech</span> */}
          </div>
          {/* <div className="text-gray-500">We help you Grow your Business with our wide veraity of services</div> */}
          <div>
            <span>1188 settlers St. Windsor Ontario N9G2W7 Canada</span>
          </div>
          <div>
            <span>+1 905 399 6642</span>
          </div>
          <div>
            <span>info@aimtechinnovate.com</span>
          </div>
          <div>
            <span>www.aimtechinnovate.com</span>
          </div>
          <div className="flex flex-row gap-4">
            <FaFacebookF />
            <BiLogoInstagram />
            <CiLinkedin />
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Case studies</div>
          <nav aria-label="Guides Navigation" className="">
            <ul className="space-y-3">
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
                  Getting help from the community
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
          <div className="mt-4 mb-2 font-medium xl:mb-4">Company</div>
          <nav aria-label="Footer Navigation" className="">
            <ul className="space-y-3">
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
          <div className="mt-4 mb-2 font-medium xl:mb-4">Services</div>
          <nav aria-label="Footer Navigation" className="">
            <ul className="space-y-3">
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
      <div className="border-t text-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center  sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10 cursor-pointer">
          <p className="">© 2024 AimTech | All Rights Reserved</p>
          <p className="-order-1 sm:order-none">
            Powered By |{" "}
            <a href="https://nxtcoach.com" className="text-blue-400">
              Next Coach
            </a>{" "}
          </p>
          <p className="">
            <a className="" href="/privacy-policy">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="cursor-pointer" href="/terms-and-conditions">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
