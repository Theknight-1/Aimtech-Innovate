import React from 'react'

export default function Hcta() {
  return (
    <section class="py-10 text-gray-800 bg-[#13628D] sm:py-16 md:py-20 md:pb-32">
  <div class="mx-auto mb-10 hidden aspect-video h-auto w-full max-w-xl overflow-hidden rounded-xl border-8 border-white bg-teal-600 shadow-lg md:block">
    <img class="h-full w-full" src="/chitra/waves.svg" alt="" />
  </div>

  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
    <div class="relative mx-auto my-auto flex flex-col items-center text-center text-white">
      <h2 class="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Keep every one <span class="whitespace-nowrap">in the loop</span></h2>
      <p class="mt-4 font-medium md:text-xl">All good things starts with a homepage. Get inspired without breaking your wallet.</p>

      <div class="flex flex-col sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
        <button class="relative mt-4 rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow transition hover:bg-orange-600">
          <div class="absolute -bottom-10 left-0 hidden h-10 w-10 -rotate-12 -scale-x-100 text-gray-800 md:inline-flex"></div>
          Start for free
        </button>
      </div>
    </div>
  </div>
</section>
  )
}
