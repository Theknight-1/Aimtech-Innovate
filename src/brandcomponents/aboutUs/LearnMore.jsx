import React from "react";

const LearnMore = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  ];
  return (
    <section className="w-full h-auto  flex justify-center items-center  px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 py-10 font-satoshi">
      <div className="w-full lg:max-w-full ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1 ">
            <div className=" lg:px-0 md:space-y-6 space-y-2">
              <h1 className=" text-brand-secondary text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl tracking-wide font-semibold ">
                World Class Creative Digital Marketing Agency
              </h1>
              <p className="text-lg lg:text-xl text-white text-justify">
                We're more than an agency, we're your long-term growth partner.{" "}
                <br />
                Our team of 10+ experienced digital marketing experts is
                hand-picked for their specific skills. We have social media
                wizards, Google gurus, talented web developers, creative graphic
                designers, data-driven business analysts, and strategic
                masterminds.
                <br />
                Located in Canada and the US, we're here to serve you across
                North America. <br />
              </p>
              <div className="flex items-center space-x-4 lg:space-x-8  h-auto p-2">
                <div className="flex items-center  p-2  overflow-x-hidden">
                  {imageUrls.map((imageUrl, index) => (
                    <img
                      key={index}
                      className="h-12 w-12 aspect-square rounded-full lg:h-16 lg:w-16 ring-2  ring-white"
                      src={imageUrl}
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-xs lg:text-sm text-white">
                  <a
                    href="#"
                    className="text-[#FFB700] text-2xl lg:text-4xl font-bold"
                  >
                    200+
                  </a>
                  <p className="text-lg lg:text-base">Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center ">
            <div className="md:w-[60%]">
              <img
                src="/png/aboutus-head.png"
                alt="About Us"
                className="w-full h-auto lg:w-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
