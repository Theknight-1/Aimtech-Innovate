import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
export default function CaseLanding() {
  // const images = [
  //   {
  //     url: "https://source.unsplash.com/random/400x600",
  //     alt: "Image 1",
  //     size: "h-96",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/800x400",
  //     alt: "Image 2",
  //     size: "h-56",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/600x800",
  //     alt: "Image 3",
  //     size: "h-96",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/600x600",
  //     alt: "Image 4",
  //     size: "h-72",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/800x600",
  //     alt: "Image 5",
  //     size: "h-56",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/400x800",
  //     alt: "Image 6",
  //     size: "h-96",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/800x800",
  //     alt: "Image 7",
  //     size: "h-96",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/600x400",
  //     alt: "Image 8",
  //     size: "h-56",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/400x400",
  //     alt: "Image 9",
  //     size: "h-72",
  //   },
  // ];
  return (
    <>
      <section className="text-white  w-full">
        <article>
          <header className="text-center">
            <div className="relative w-full h-[calc(100vh-35vh)] flex items-center justify-center">
              <div className="absolute text-white z-20">
                <h1 className="text-4xl font-bold">Demo Brand Name</h1>
                <h1 className="text-[4rem] font-bold">SEO Case Study</h1>
              </div>
              <div className="absolute w-full h-full ">
                <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
                <img
                  class="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Featured Image"
                />
              </div>
            </div>
          </header>
          <div className="mt-10">
            <div>
              <h1 className="text-[3rem] font-bold text-center">
                published datt
              </h1>
            </div>
            <div className="flex w-full mx-36">
              <div className="w-[40%] flex flex-col ">
                <div>
                  <h1 className="text-[3.5rem] font-bold uppercase mb-3">
                    Used Plateform
                  </h1>
                  <ul>
                    <li className="text-3xl">Facebook</li>
                    <li className="text-3xl">Google</li>
                    <li className="text-3xl">Ads</li>
                  </ul>
                </div>
              </div>
              <div className="w-[45%]">
                <ul className="flex justify-center gap-10">
                  <li>
                    <h1 className="text-[3rem] font-bold">7.5X</h1>
                    <p className="text-2xl">
                      ROAS (Return on Ad Spend) on Facebook
                    </p>
                  </li>
                  <li>
                    <h1 className="text-[3rem] font-bold">10.1X</h1>
                    <p className="text-2xl">
                      ROAS (Return on Ad Spend) on Google Ads
                    </p>
                  </li>
                  <li>
                    <h1 className="text-[3rem] font-bold">49%</h1>
                    <p className="text-2xl">Increase in Attributed Sales</p>
                  </li>
                  <li>
                    <h1 className="text-[3rem] font-bold">1.8%</h1>
                    <p className="text-2xl">CTR</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="md:px-32 mt-10 flex gap-10   gap-y-4 ">
            <div className="flex-1">
              <h1 className="text-[3.5rem] font-bold uppercase mb-3">
                Client Goals
              </h1>
              <ul className="space-y-5 p-2 tracking-normal">
                <li className="text-3xl">
                  1. Increase brand awareness and reach within the target
                  audience.
                </li>
                <li className="text-3xl">
                  2. Drive website traffic and boost sales of fitness equipment
                  and accessories.
                </li>
                <li className="text-3xl">
                  3. Improve return on investment (ROI) and return on ad spend
                  (ROAS) from advertising efforts.
                </li>
                <li className="text-3xl">
                  4. Enhance engagement metrics such as click-through rate (CTR)
                  and conversion rate.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img src="./case-study-1.png" alt="" />
            </div>
          </div>
          <div class="md:px-32 mt-10 flex gap-10 w-full gap-y-4 ">
            <div className="flex-1">
              <img src="./case-study-2.png" alt="" />
            </div>
            <div className="flex-1 p-5">
              <h1 className="text-[3.5rem] font-bold uppercase mb-3">
                How We Helped
              </h1>
              <p className="text-3xl leading-normal">
                Our strategy involved the creation of new creative assets that
                would inform and educate the audience about the solutions and
                expertise that Kintec offers. For this, we created campaigns for
                every step of the funnel, using the most relevant interest
                targeting and also leveraging custom and lookalike audiences for
                maximum reach and engagement of our target audience.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-full">
        {/* <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`bg-gray-200 overflow-hidden rounded-lg shadow-md ${image.size}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div> */}
      </section>
      <section class="py-20 ">
        <Cards />
      </section>
    </>
  );
}
