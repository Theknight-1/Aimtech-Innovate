'use client'
import React, { useState } from 'react'
import Accordion from "@/uicomponent/accordian";

export default function Services() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const accordionData = [
        { title: 'Web Development Services.', content: 'Yes , You heard it right , we provide Web Development Services.' },
        { title: 'SEO Optimization', content: 'Yes , You heard it right , we provide SEO Optimization services' },
        { title: 'Digital Marketing', content: 'Yes , You heard it right , we provide Digital Marketing services' },
        { title: 'Software development Services.', content: 'Yes , You heard it right , we provide Software development Services' },
        { title: 'Brand marketing service', content: 'Yes , You heard it right , we provide Brand marketing service' },
        { title: 'Team Of Experienced Professional.', content: 'We have a team Of Experienced Professionals for every work you need.' },

    ];
    return (
        <section className='w-screen h-[calc(100vh-20vh)] mx-20 flex flex-col md:flex-row px-24'>
            <div className='relative w-full gap-4 md:w-1/2 h-full p-10 flex flex-col items-center justify-start'>
                {/* <div className='absolute -z-0 w-3/4 h-auto aspect-square rounded-full  bg-[#15BEE3]/30 blur-3xl'></div> */}
                <div className='absolute z-0 w-full gap-4  h-full p-10 flex flex-col mt-16 items-center justify-start'>

                    <div className='flex gap-4 w-full items-center justify-center '>
                        {/* <svg width="129" height="146" className='scale-x-[-1]' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg> */}

                        <span className='text-sm md:text-6xl font-bold w-full  text-[#FFB700] text-left'>What we provide</span>
                        {/* <svg width="129" height="146" className='' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg> */}

                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-y-4 text-white'>
                        <button className='p-4 w-full 12 text-sm md:text-4xl text-left  hover:bg-yellow-400 active:bg-yellow-400 active:text-white font-bold'>Digital marketting</button>
                        <button className='p-4 w-full 12 text-sm md:text-4xl text-left  hover:bg-yellow-400'>SEO Optimization</button>
                        <button className='p-4 w-full 12 text-sm md:text-4xl text-left  hover:bg-yellow-400'>Web Developement</button>
                        <button className='p-4 w-full 12 text-sm md:text-4xl text-left  hover:bg-yellow-400'>Brnad marketing</button>
                        <button className='p-4 w-full 12 text-sm md:text-4xl text-left  hover:bg-yellow-400'>Software Development</button>

                    </div>
                </div>
            </div>
            <div className=' w-full md:w-1/2 h-full flex items-center justify-center p-4'>
                <div className='relative flex flex-col items-center justify-center gap-y-4 p-10 h-full overflow-hidden     flex-1 '>
                    <div className='absolute -z-0 opacity-80 w-full h-auto aspect-video'>

                        <img src="https://www.shutterstock.com/image-photo/digital-online-marketing-businessman-using-600nw-1792952278.jpg" alt="" className='w-full h-full opacity-65' srcset="" />
                    </div>
                    <div className='absolute z-0 text-white flex items-center gap-y-4 justify-start  flex-col p-6 text-center'>
                        <span className='text-sm md:text-5xl font-bold text-white'>
                        Push your product to next level.
                        </span>
                        <div>
                        <span className='text-center'>End-to-end payments and financial management in a single solution.</span><br />

                        <span className='text-center'>Meet the right platform to help realize.</span>
                        </div>
                        <button className='border bg-yellow-400 text-black font-bold px-4 rounded'>Get started</button>
                       
                    </div>

                </div>
            </div>
        </section>
    )
}
