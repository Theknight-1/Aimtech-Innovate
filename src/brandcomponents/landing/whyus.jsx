"use client";
import React, { useState } from "react";
import Accordion from "@/uicomponent/accordian";
import Link from "next/link";

export default function Whyus() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const accordionData = [
    {
      title: "Less Cost, Maximum Revenue",
      content:
        "We become an extension of your marketing team, delivering exceptional results without the hefty overhead costs of hiring a full-time digital marketing staff. Our streamlined operations and data-driven approach ensure we target the most impactful strategies, maximizing your return on investment and driving significant revenue growth. You'll see a tangible difference in your bottom line without breaking the bank.",
    },
    {
      title: "Quality Service Round the Clock",
      content:
        "We take pride in offering exceptional service that goes above and beyond.  Our team of digital marketing experts is available 24/7 to address your needs and concerns.  Whether you have a pressing question or require strategic guidance, we're here to ensure your campaigns run smoothly and deliver consistent results. We provide constant communication and transparent reporting, keeping you informed and involved every step of the way.",
    },
    {
      title: "Personalized Growth Plan",
      content:
        "An All-in-one personalised digital growth approach only works in today's dynamic digital landscape.  We take the time to understand your unique business goals, target audience, and competitive environment.  With this in-depth knowledge, we craft a personalized growth plan tailored specifically to your needs.  We leverage the most effective strategies to achieve your desired outcomes, propelling your brand to new heights and achieving sustainable growth in the long term.",
    },
   
  ];

  return (
    <section className="w-full font-satoshi   h-auto 2xl:h-[80vh] flex flex-col md:flex-row md:justify-center md:items-center lg:gap-x-16 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-start  p-4  ">
        <div className="relative  w-full h-full flex flex-col items-center justify-center space-y-7  ">
          <div className="absolute -z-0 top-0 left-0 w-full h-full rounded-full bg-[#15BEE3]/15 blur-3xl"></div>
          <div className="w-full flex items-end justify-end px-10 ">
            <svg
              width="40"
              height="43"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animate-fade animate-infinite animate-ease-in-out"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.81 8.60818C15.6924 7.91363 15.6037 7.22696 15.5465 6.54021C15.4602 5.51009 15.5135 4.4721 15.483 3.44198C15.4696 3.00496 15.4171 1.8656 15.4383 1.70171C15.6304 0.273594 16.7888 0.0550568 17.1276 0.0160372C17.2915 -0.00737466 18.9746 -0.194586 19.3377 1.66275C19.7832 3.9337 19.9259 6.22022 19.7683 8.45995C20.1361 10.3641 20.7651 12.2604 21.5957 13.9773C24.9006 20.8057 31.1984 21.4691 38.0216 21.4067C39.071 21.391 39.9424 22.2104 39.9973 23.2484C40.0522 24.2941 39.271 25.1994 38.2264 25.293C34.4124 25.6598 27.6456 28.7034 25.3061 31.8718C24.8167 32.5351 24.532 34.1349 24.1555 35.7035C23.6301 37.8808 23.005 40.0347 22.3046 40.9399C22.1995 41.0804 20.9219 42.5164 20.5408 42.7271C19.6247 43.2265 18.8915 42.9377 18.475 42.6724C18.0585 42.4071 17.5872 41.8842 17.399 41.018C17.2021 40.1127 17.3684 38.2553 17.3378 37.8573C17.2264 36.4136 16.9363 33.5808 16.3441 31.146C16.0249 29.8349 15.6845 28.6253 15.1214 28.0244C13.0368 25.8003 9.70359 26.1281 6.89664 26.4948C6.5743 26.5339 6.25197 26.5807 5.93041 26.6197C4.78771 26.9553 3.5744 27.205 2.2921 27.3533C0.355705 27.5796 0.0373079 25.8081 0.0200537 25.691C-0.0160233 25.4335 -0.15015 24.1068 1.3094 23.5762C1.46861 23.5215 2.64347 23.264 3.09601 23.1625C3.72657 23.0221 4.36418 22.9129 5.00415 22.8114C11.6149 20.7668 15.2053 15.023 15.81 8.60818ZM18.0789 15.702C20.5745 20.837 24.3618 23.3186 28.851 24.4424H28.8503C26.0472 25.9017 23.4975 27.7279 22.1462 29.5618C21.6333 30.2564 21.1627 31.6532 20.7384 33.2218C20.5086 31.7625 20.1981 30.2095 19.7879 28.8828C19.3212 27.3688 18.693 26.1125 17.9919 25.3633C16.6382 23.9196 14.9394 23.1158 13.1128 22.7178C15.2994 20.7902 16.9574 18.3866 18.0789 15.702Z"
                fill="#F8CC3F"
              />
            </svg>
          </div>
          <div className="flex gap-4 w-full items-center justify-center">
            {/* <svg width="129" height="146" className='scale-x-[-1]' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg> */}

            <span className="text-brand-secondary  h-auto p-2 text-center  overflow-hidden whitespace-nowrap  z-10   md:text-5xl sm:text-5xl text-4xl md:tracking-tighter lg:tracking-normal font-semibold">
              Why Us?
            </span>
            {/* <svg width="129" height="146" className='' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg> */}
          </div>
          <article className="w-full lg:w-3.5/4  text-xl z-10 sm:text-xl md:text-xl lg:text-2xl  text-white text-justify">
            <span className="font-satoshi">
              Aimtech Innovate offers premium digital marketing services at
              unbeatable pricing in the US and Canada, thanks to our partnership
              with Nepal's Next Coach. Access top-quality work at a fraction of
              the usual price.{" "}
            </span>
          </article>
          <Link href="/about" className="z-10">
            <button className="w-auto rounded-lg flex items-center justify-center gap-x-2 border bg-white md:p-4 px-8 p-3 shadow-lg group">
              <span className="font-bold text-[#122B59] md:text-base lg:text-lg text-sm uppercase">
                Know More About Us
              </span>
              <img
                src="/arrow-double-end.svg"
                className="w-4 h-4 text-brand-primary
                "
                alt=""
              />
            </button>
          </Link>
          <div className="w-full  flex items-end justify-start px-10">
            <svg
              width="40"
              height="43"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animate-fade animate-infinite animate-ease-in-out"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.81 8.60818C15.6924 7.91363 15.6037 7.22696 15.5465 6.54021C15.4602 5.51009 15.5135 4.4721 15.483 3.44198C15.4696 3.00496 15.4171 1.8656 15.4383 1.70171C15.6304 0.273594 16.7888 0.0550568 17.1276 0.0160372C17.2915 -0.00737466 18.9746 -0.194586 19.3377 1.66275C19.7832 3.9337 19.9259 6.22022 19.7683 8.45995C20.1361 10.3641 20.7651 12.2604 21.5957 13.9773C24.9006 20.8057 31.1984 21.4691 38.0216 21.4067C39.071 21.391 39.9424 22.2104 39.9973 23.2484C40.0522 24.2941 39.271 25.1994 38.2264 25.293C34.4124 25.6598 27.6456 28.7034 25.3061 31.8718C24.8167 32.5351 24.532 34.1349 24.1555 35.7035C23.6301 37.8808 23.005 40.0347 22.3046 40.9399C22.1995 41.0804 20.9219 42.5164 20.5408 42.7271C19.6247 43.2265 18.8915 42.9377 18.475 42.6724C18.0585 42.4071 17.5872 41.8842 17.399 41.018C17.2021 40.1127 17.3684 38.2553 17.3378 37.8573C17.2264 36.4136 16.9363 33.5808 16.3441 31.146C16.0249 29.8349 15.6845 28.6253 15.1214 28.0244C13.0368 25.8003 9.70359 26.1281 6.89664 26.4948C6.5743 26.5339 6.25197 26.5807 5.93041 26.6197C4.78771 26.9553 3.5744 27.205 2.2921 27.3533C0.355705 27.5796 0.0373079 25.8081 0.0200537 25.691C-0.0160233 25.4335 -0.15015 24.1068 1.3094 23.5762C1.46861 23.5215 2.64347 23.264 3.09601 23.1625C3.72657 23.0221 4.36418 22.9129 5.00415 22.8114C11.6149 20.7668 15.2053 15.023 15.81 8.60818ZM18.0789 15.702C20.5745 20.837 24.3618 23.3186 28.851 24.4424H28.8503C26.0472 25.9017 23.4975 27.7279 22.1462 29.5618C21.6333 30.2564 21.1627 31.6532 20.7384 33.2218C20.5086 31.7625 20.1981 30.2095 19.7879 28.8828C19.3212 27.3688 18.693 26.1125 17.9919 25.3633C16.6382 23.9196 14.9394 23.1158 13.1128 22.7178C15.2994 20.7902 16.9574 18.3866 18.0789 15.702Z"
                fill="#F8CC3F"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-2">
        <div className="flex flex-col gap-y-4 h-auto overflow-hidden flex-1">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              style="border-2 border-brand-secondary group  rounded-xl"
              textcolor="bg-white text-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
