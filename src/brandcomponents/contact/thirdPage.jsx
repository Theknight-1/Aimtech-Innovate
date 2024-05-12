import Link from "next/link";
import React from "react";

const ThirdPage = () => {
  return (
    <section className="relative h-screen w-screen  ">
      <div className="flex items-center justify-center w-full h-full">
        <div className="mx-4 lg:mx-28 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] bg-brand-secondary flex justify-center items-center lg:rounded-l-3xl">
            <div className="p-8 sm:p-10 lg:p-12 xl:p-20 space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold ">
                Ready to unleash the explosive potential of your business?
                {" "}
              </h1>
              <p className="text-lg lg:text-2xl font-medium leading-relaxed">
                Contact Aim Tech Innovate today and let's get started.  Remember, it's risk-free. Your success is our guarantee. <br /> <br />

                Get a FREE consultation to discuss your unique growth strategy!

              </p>
              <div className=" w-full">
                <Link href="/about">
                  <button className="bg-[#11225F] px-8 lg:px-12 py-3 text-white rounded-lg">
                    Know More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] md:h-96 lg:h-auto rounded-r-3xl ">
            <img
              src="/Maskgroup.png"
              alt=""
              className=" sm:w-11/12 md:w-full md:h-[96] h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
