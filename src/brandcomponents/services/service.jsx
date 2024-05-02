import React from "react";
import file from "@/Data.json";
import Link from "next/link";

export default function brandservice({ data }) {
  const dataOBJ = data;

  return (
    <section class="overflow-hidden text-white ">
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
              ABOUT OUR <span className="uppercase"> SEO Service</span>
            </h1>
            <h1 className="text-[4rem] font-semibold">{dataOBJ.tagLine}</h1>
            <p className="text-gray-200 text-lg">{dataOBJ.desciption}</p>
            <div className="grid grid-cols-2 text-[#FCCF40] gap-4 text-2xl">
              {dataOBJ.benifits.map((ben, index) => (
                <span key={index}>{ben}</span>
              ))}
            </div>
            <div>
              <Link
                href={dataOBJ.link}
                className="px-6 w-max block py-6 bg-[#FFB700] text-[#102D5E] font-bold text-lg rounded-xl"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class=" w-full h-screen flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 p-5 ">
          <div class="lg:pr-8 lg:pt-4  p-10 mt-9 flex flex-col items-center justify-center">
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
          <div className="">
            <img
              src={dataOBJ.second.image}
              alt="Product screenshot"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section class="w-full h-screen flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
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
