import React from 'react'
import Link from 'next/link'
export default function Hero() {
  return (
    <section className="w-full h-[90vh]  flex  justify-evenly items-center bg-[url('/vector/Waves.svg')] ">
        <div className=" flex items-center justify-center">
          <div className="">
            <img
              src="/service/Img2-about-section.png"
              alt="Product screenshot"
              class=" h-full object-cover"
            />
          </div>
        </div>
        <div className=" flex items-center  justify-start">
          <div className="w-[40vw] h-[60vh] space-y-8  ">
            <h1 className="text-[#FCCF40] text-xl uppercase">
              ABOUT OUR <span className="uppercase"> Services</span>
            </h1>
            <h1 className="text-[4rem] text-white font-semibold">SERVICE TAGLINE</h1>
            <p className="text-gray-200 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero officiis dolores sapiente assumenda amet nihil ea temporibus fugiat tempore.</p>
            <div className="grid grid-cols-2 text-[#FCCF40] gap-4 text-2xl">
                <span>Feature one</span>
                <span>Feature two</span>
                <span>Feature Three</span>
                <span>Feature Four</span>
             
            </div>
            <div>
              <Link
                href='/services'
                className="px-6 w-max block py-6 bg-[#FFB700] text-[#102D5E] font-bold text-lg rounded-xl"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
