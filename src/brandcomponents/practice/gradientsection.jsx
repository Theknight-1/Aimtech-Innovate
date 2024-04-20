import React from 'react'

export default function GradientSection() {
    return (
        <>
            <section class="relative flex h-screen w-screen flex-col bg-[#162F5C] text-white md:flex-row">
                <div className='absolute z-0 w-full h-full'>
                    <img src="/vector/Waves.svg" alt="" />
                </div>
                <div className=' w-full flex'>
                    <div class="w-full p-2 md:w-1/2 ">
                        <div class="flex  aspect-square h-full w-full items-center justify-center">
                            <div className='flex  w-full h-full items-center justify-center'>
                                <div class=" pl-10 py-10 flex flex-col items-start justify-center w-full h-full">
                                    <div class="">
                                        <p class="flex text-sm uppercase text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                                            </svg>
                                            The most cost-effective digital marketing agency of USA and Canada
                                        </p>
                                        <h2 class="mb-6  text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                                            <span>Enhance your Digital Presence and gain Market excellence</span>
                                            <span class="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">different</span>
                                        </h2>
                                        <p class="text-base text-gray-100">Don't believe it? Request a free quotation today</p>
                                    </div>
                                    <div class="mt-10 flex flex-col items-center md:flex-row">
                                        <a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Stream Now </a>
                                        <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-white"
                                        >Watch how it works
                                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full bg-transparent p-2 md:w-1/2">
                        <div class="flex aspect-square h-full  w-full items-center justify-center ">
                            <div class="flex  aspect-square h-full w-full items-center justify-center  ">
                                <img src="/Herobg.png" className='w-full h-full ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
           
        </>



    )
}
