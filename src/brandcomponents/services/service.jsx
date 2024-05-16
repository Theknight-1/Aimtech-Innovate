import React from "react";
import file from "@/Data.json";
import Link from "next/link";

export default function brandservice({ data }) {
  const dataOBJ = data;

  return (
    <section class="overflow-x-hidden h-auto  text-white gap-y-8  lg:px-24">
      <section className="w-full h-auto  flex flex-col md:flex-row    justify-evenly items-center  ">
        <div className="w-full lg:w-1/2  flex items-center justify-center p-8 ">
          
            <img
              src={dataOBJ.image}
              alt="Product screenshot"
              class=" h-full object-cover"
            />
            {/* <img
              src="/service/Img2-about-section.png"
              alt="Product screenshot"
              class=" h-full object-cover"
            /> */}
          
        </div>
        <div className=" flex-1  flex items-center  text-justify  justify-start ">
          <div className="w-full h-auto space-y-8 ">
            <h1 className="text-brand-secondary text-2xl font-bold uppercase">
              {dataOBJ.title}
            </h1>
            <article className="text-xl lg:text-5xl font-semibold">{dataOBJ.tagLine}</article>
            <p className="text-white text-xl lg:text-lg">{dataOBJ.desciption}</p>
            <div className="grid grid-cols-2 text-brand-secondary gap-4 text-2xl">
              {dataOBJ.benifits.map((ben, index) => (
                <span key={index}>{ben}</span>
              ))}
            </div>
            <div className="hidden">
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
        <div class=" h-full  flex flex-col-reverse md:flex-row items-start justify-start gap-2">
          <div class="w-full lg:w-1/2 h-full  lg:pr-8  p-10  overflow-hidden flex flex-col items-center justify-center ">
            
            <div class="w-full">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}

              <p className="mt-2 text-6xl font-bold tracking-tight text-white sm:text-5xl text-justify" >{dataOBJ.second.title}</p>
              
              <br />
              <div>
                <h1>Does this sound like you Business</h1>
              </div>
              <br />

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none  ">
                <ul class="pl-4 font-satoshi list-disc space-y-6 text-sm lg:text-xl" >

                  {dataOBJ.second.points.map(item => (
                    <li key={item}>{item}</li>
                  ))}


                </ul>
              </dl>
            </div>
            <div class=" font-satoshi w-full space-y-5 text-xl mt-5 flex flex-col items-start justify-start">
              
                {/* {dataOBJ.second.short} */}
                
                  {dataOBJ.second.short.map((dn, index) => (
                <span key={index}>{dn}</span>
              ))}
              
           
            </div>
          </div>
          <div className="flex-1 h-full lg:pt-72  flex items-center justify-center ">
            <img
              src={dataOBJ.second.image}
              alt="Product screenshot"
              class="w-2/3 h-full object-contain aspect-square"
            />
          </div>
        </div>
      </section>
      <section class=" w-full mt-20 h-auto flex justify-center items-center xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 ">
        <div class=" h-full  flex flex-col-reverse md:flex-row-reverse items-start justify-start gap-2">
          <div class="w-full lg:w-1/2 h-full  lg:pr-8  p-10  overflow-hidden flex flex-col items-start justify-center ">
            <div class="w-full">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}

              <p className="mt-2  text-3xl font-normal tracking-tight text-white sm:text-5xl text-justify" >{dataOBJ.third.title}</p>
             
              <br />
              {/* <div>
                <h1>Does this sound like you Business</h1>
              </div> */}

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none  ">
              <div class="  w-full space-y-5 text-xl mt-5 flex flex-col items-start justify-start">
              
                {/* {dataOBJ.second.short} */}
                
                  {dataOBJ.third.short.map((dn, index) => (
                <span key={index}>{dn}</span>
              ))}
              
           
            </div>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 list-inside list-disc text-sm lg:text-xl">
              {dataOBJ.third.points.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

              </dl>
            </div>
            <div class="list-disc space-y-5 text-xl mt-5">
                <button className=" bg-brand-secondary font-bold text-brand-primary p-4 rounded hover:bg-yellow-400">{dataOBJ.fourth.ctatext}</button>  
            </div>
          </div>
          <div className="flex-1 h-full  flex items-center justify-center ">
            <img
              src={dataOBJ.third.image}
              alt="Product screenshot"
              class="w-2/3 h-full object-contain aspect-square"
            />
          </div>
        </div>
      </section>
      
    </section>
  );
}
