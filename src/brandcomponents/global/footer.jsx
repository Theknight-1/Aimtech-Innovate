import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";


export default function Footer() {
  return (
    <footer class="relative border-t-2 bg-[#000000] text-white ">
      <div className='absolute z-0 top-0 h-full w-full'>
        <img src="/vector/waves.svg" className='w-full h-full' alt="" />
      </div>
      <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div class="max-w-sm text-sm">
          <div class="mb-6 flex items-start justify-start flex-col h-16 space-x-2">
            <img class="h-full object-contain" src="/aimtech_logo_white.png" alt="" />
            {/* <span class="text-lg font-medium">AimTech</span> */}

          </div>
          {/* <div class="text-gray-500">We help you Grow your Business with our wide veraity of services</div> */}
          <div>
            <span>1188 settlers St. Windsor Ontario N9G2W7 Canada</span>
          </div>
          <div>
            <span>+1 905 399 6642</span>
          </div>
          <div>
            <span>info@aimtechinnovate.com
            </span>
          </div>
          <div>
            <span>www.aimtechinnovate.com</span>
          </div>
          <div className='flex flex-row gap-4'>
          <FaFacebookF />
          <BiLogoInstagram />
          <CiLinkedin />
          </div>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Case studies</div>
          <nav aria-label="Guides Navigation" class="">
            <ul class="space-y-3">
              <li><a class="hover:text-blue-600 hover:underline" href="#">How to make a footer</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Designing your app</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Getting help from the community</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing vs Hourly Rate</a></li>
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Company</div>
          <nav aria-label="Footer Navigation" class="">
            <ul class="space-y-3">
              <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Press</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="">
          <div class="mt-4 mb-2 font-medium xl:mb-4">Services</div>
          <nav aria-label="Footer Navigation" class="">
            <ul class="space-y-3">
              <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Press</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
              <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="border-t text-white">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center  sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p class="">© 2024 AimTech | All Rights Reserved</p>
          <p class="-order-1 sm:order-none">Powered By | <a href="https://nxtcoach.com" className='text-blue-400'>Next Coach</a> </p>
          <p class="">
            <a class="" href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a class="" href="/terms-and-conditions">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>

  )
}
