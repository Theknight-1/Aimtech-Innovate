'use client'
import React, { useEffect, useState } from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [imageUrl, setImageUrl] = useState('/brand/logo/logo_white.svg');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
      setImageUrl('/brand/logo/logo.svg');
    } else {
      setScrolling(false);
      setImageUrl('/brand/logo/logo_white.svg');
    }
  };
    return (
        <>
        <div className='w-full p-2 text-white flex items-center justify-end pr-10 '>
            <div className='flex gap-4 items-center'>
                <span>Schedule Discovery Meet</span>
                <span>Whatsapp</span>
                <span className='text-sm md:text-2xl'>+915464565</span>
            </div>
            </div>
        <header class={`   sticky top-0  ${scrolling ? 'bg-white/80 text-black shadow' : 'text-white'} z-50 mb-2 w-screen`}>
            <div class=" flex w-full flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="#" class="flex items-center justify-start whitespace-nowrap pl-8 text-2xl font-black">
                    <span class="mr-2 ">
                        <img src={imageUrl} alt="" className='h-16 w-full' />
                    </span>
                    {/* <span class="text-black">AimTech</span> */}
                </a>
                <input type="checkbox" class="peer hidden" id="navbar-open" />
                <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
                    <span class="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul class="flex flex-col font-bold  items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li class=" md:mr-12 hover:text-blue-600"><a href="/">Home</a></li>
                        <li class=" md:mr-12 hover:text-blue-600"><a href="/about">About US</a></li>
                        <li class=" md:mr-12 hover:text-blue-600"><a href="/services">Services</a></li>
                        <li class=" md:mr-12 hover:text-blue-600"><a href="/casestudy">Case Studies</a></li>
                        <li class=" md:mr-12 hover:text-blue-600"><a href="/contact">Contact</a></li>
                        <li class=" md:mr-12 hover:text-blue-600">
                            <button class="rounded-md border-2 bg-yellow-400 px-6 py-1 font-medium text-black  hover:bg-yellow-500 hover:text-white">Get Proposal</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>

    )
}
