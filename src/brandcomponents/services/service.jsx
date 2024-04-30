import React from "react";
import file from "@/Data.json";
import Link from "next/link";

export default function brandservice({ slug }) {
  const dataOBJ = {
    title: "Search Engine Optimization",
    tagLine: "Best SEO service",
    desciption:
      "SEO is all about improving a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
    benifits: ["Fast", "Optimized", "Upscale", "Ontime"],
    link: "/contact",
  };

  return (
    <section class="overflow-hidden text-white ">
      <section className="w-full h-[90vh]  flex  justify-evenly items-center bg-[url('/vector/Waves.svg')] ">
        <div className=" flex items-center justify-center">
          <div className="">
            <img src="/service/Img2-about-section.png" alt="" />
          </div>
        </div>
        <div className=" flex items-center  justify-start">
          <div className="w-[40vw] h-[60vh] space-y-8  ">
            <h1 className="text-[#FCCF40] text-xl uppercase">
              ABOUT OUR <span className="uppercase"> {slug}</span>
            </h1>
            <h1 className="text-[4rem] font-semibold">{dataOBJ.tagLine}</h1>
            <p className="text-gray-200 text-lg">{dataOBJ.desciption}</p>
            <div className="grid grid-cols-2 text-[#FCCF40] gap-4 text-2xl">
              {dataOBJ.benifits.map((ben) => (
                <span>{ben}</span>
              ))}
            </div>
            <div >
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
      <section class=" mx-36 px-6 lg:px-8 ">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
              <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Growing Your Business
              </p>
              <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                and Increasing Your SEO Revenue
              </p>
              <br />
              <div>
                <h1>Does this sound like you Business</h1>
              </div>

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none ">
                <ul class="list-disc">
                  <li>
                    You’re overly dependent on paid ads and not seeing enough
                    ROI
                  </li>
                  <li>
                    You want to enhance your PPC efforts with SEO for more
                    success
                  </li>
                  <li>
                    You’re trying to attract high-intent visitors (who are eager
                    to buy your product or service) to your website
                  </li>
                  <li>
                    You want to improve brand credibility by showing up in the
                    SERPs for your business’ keywords
                  </li>
                  <li>
                    You want to improve the user engagement rate on your site
                  </li>
                  <li>You need more sales of your top-notch products</li>
                  <li>
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>
              </dl>
            </div>
            <div class="mt-10 flex flex-col items-center gap-x-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Product screenshot"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section class="mx-36 px-6 lg:px-8 ">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Product screenshot"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              {/* <h2 class="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
              <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                Growing Your Business
              </p>
              <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                and Increasing Your SEO Revenue
              </p>
              <br />
              <div>
                <h1>Does this sound like you Business</h1>
              </div>

              <dl class=" max-w-xl space-y-8 text-base leading-7  lg:max-w-none ">
                <ul class="list-disc">
                  <li>
                    You’re overly dependent on paid ads and not seeing enough
                    ROI
                  </li>
                  <li>
                    You want to enhance your PPC efforts with SEO for more
                    success
                  </li>
                  <li>
                    You’re trying to attract high-intent visitors (who are eager
                    to buy your product or service) to your website
                  </li>
                  <li>
                    You want to improve brand credibility by showing up in the
                    SERPs for your business’ keywords
                  </li>
                  <li>
                    You want to improve the user engagement rate on your site
                  </li>
                  <li>You need more sales of your top-notch products</li>
                  <li>
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>
              </dl>
            </div>
            <div class="mt-10 flex flex-col items-center gap-x-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                molestiae provident harum recusandae cupiditate aliquid
                laboriosam neque nisi, non sit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
