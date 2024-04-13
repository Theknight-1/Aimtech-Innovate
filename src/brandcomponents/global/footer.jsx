import React from 'react'

export default function Footer() {
  return (
    <footer class="border-t-2 ">
  <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div class="max-w-sm">
      <div class="mb-6 flex items-start justify-start flex-col h-16 space-x-2">
        <img class="h-full object-contain" src="/Brandlogo.png" alt="" />
        {/* <span class="text-lg font-medium">AimTech</span> */}
        
      </div>
      <div class="text-gray-500">We help you Grow your Business with our wide veraity of services</div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
      <nav aria-label="Guides Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="#">How to make a footer</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Designing your app</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Getting help from the community</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing vs Hourly Rate</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
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
      {/* <div class="mt-4 mb-2 font-medium xl:mb-4">Find Us on Instagram</div> */}
      <div class="flex flex-col">
        <div class="mb-4">
          <a href="https://nxtcoach.com" target="_blank"><img src="/Brandlogo.png" alt="Apple - Think&#0032;Different | Product Hunt" width="250" height="54" /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="border-t">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
      <p class="">© 2022 AimTech | All Rights Reserved</p>
      <p class="-order-1 sm:order-none">Made with ❤️ Remotely</p>
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
