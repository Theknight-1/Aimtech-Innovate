import React from "react";
import file from "@/Data.json";
import Link from "next/link";

export default function brandservice({ data }) {
  const dataOBJ = data;

  return (
    <section class="overflow-x-hidden h-auto  text-white gap-y-8 ">
      <section className="w-full h-auto  flex flex-col md:flex-row    justify-evenly items-center bg-[url('/vector/Waves.svg')] ">
        <div className="w-1/2  flex items-center justify-center p-8 ">
          
            <img
              src="/service/Img2-about-section.png"
              alt="Product screenshot"
              class=" h-full object-cover"
            />
          
        </div>
        <div className=" flex-1 p-8 flex items-center   justify-start">
          <div className="w-full h-auto space-y-8   ">
            <h1 className="text-brand-secondary text-xl uppercase">
              ABOUT OUR <span className="uppercase"> SEO Service</span>
            </h1>
            <article className="text-xl lg:text-4xl font-semibold">{dataOBJ.tagLine}</article>
            <p className="text-white text-xl lg:text-lg">{dataOBJ.desciption}</p>
            <div className="grid grid-cols-2 text-[#FCCF40] gap-4 text-2xl">
              {dataOBJ.benifits.map((ben, index) => (
                <span key={index}>{ben}</span>
              ))}
            </div>
            <div className="">
              <Link
                href={dataOBJ.link}
                className="p-4 bg-brand-secondary text-center text-brand-primary font-bold text-sm md:text-lg rounded-xl"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class=" w-full mt-20 h-auto flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div class=" h-full flex flex-col-reverse md:flex-row items-center justify-center gap-2">
          <div class="w-full lg:w-1/2 h-full  lg:pr-8  p-10  overflow-hidden flex flex-col items-center justify-center ">
            <div class="w-full">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}

              <p className="mt-2  text-3xl font-normal tracking-tight text-brand-secondary sm:text-5xl" >{dataOBJ.second.title}</p>
              <p class="mt-2 hidden text-3xl font-normal tracking-tight  sm:text-5xl ">
                Growing Your Business
                <br />
                and{" "}
                <span className="text-[#FFB700] underline ">
                  Increasing
                </span>{" "}
                Your SEO Revenue
              </p>
              <br />
              {/* <div>
                <h1>Does this sound like you Business</h1>
              </div> */}

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none  ">
                <ul class="list-disc space-y-6 text-xl" >

                  {dataOBJ.second.points.map(item => (
                    <li key={item}>{item}</li>
                  ))}


                </ul>
              </dl>
            </div>
            <div class="list-disc space-y-5 text-xl mt-5">
              <p className="leading-normal">
                {dataOBJ.second.description}
              </p>
           
            </div>
          </div>
          <div className="flex-1 h-full ">
            <img
              src={dataOBJ.second.image}
              alt="Product screenshot"
              class="w-full h-full object-contain aspect-square"
            />
          </div>
        </div>
      </section>
      <section class="w-full h-auto flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <img
              src={dataOBJ.third.image}
              alt="Product screenshot"
              class=" h-full object-cover"
            />
          </div>
          <div class="lg:pr-8 lg:pt-4  p-10 mt-9">
            <div class="w-full">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}

              <p className="mt-2  text-3xl font-normal tracking-tight text-brand-secondary sm:text-5xl" >{dataOBJ.third.title}</p>
              <p class="mt-2 hidden text-3xl font-normal tracking-tight  sm:text-5xl ">
                Growing Your Business
                <br />
                and{" "}
                <span className="text-[#FFB700] underline ">
                  Increasing
                </span>{" "}
                Your SEO Revenue
              </p>
              <br />
              {/* <div>
                <h1>Does this sound like you Business</h1>
              </div> */}

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none ">
                <ul class="list-disc space-y-5 text-xl" >

                  {dataOBJ.third.points.map(item => (
                    <li key={item}>{item}</li>
                  ))}


                </ul>
              </dl>
            </div>
            <div class="list-disc space-y-5 text-xl mt-5">
              <p>
                {dataOBJ.third.description}
              </p>
           
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
