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
    <section className="w-full h-auto lg:h-screen flex justify-center items-center">
      <div className="w-full lg:max-w-full  lg:px-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
            <img
              src="/about/aboutUsPlaceholder.png"
              alt="About Us"
              className="w-full h-auto lg:w-full lg:h-full object-cover "
            />
          </div>
          <div className="flex-1">
            <div className="px-2 lg:px-0 space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wide font-semibold text-white">
                Learn More <br /> About Us
              </h1>
              <p className="text-lg lg:text-xl text-white">
                Aimtech Innovate is a leading provider of Digital Marketing
                Services in the US and Canadian markets. With a focus on
                delivering innovative solutions tailored to each client's unique
                needs, Aimtech Innovate offers a wide range of services. These
                include Web Design and Development, where they create
                aesthetically pleasing and user-friendly websites to improve
                customer engagement and increase conversions. Their Social Media
                Management services ensure clients' social platforms are
                effectively utilized to engage with their audience and build
                brand awareness. The company also specializes in PPC
                Advertisement, strategically placing ads to reach potential
                customers at the right time. Additionally, they offer Search
                Engine Optimization to improve clients' online visibility and
                ranking on search engines, and Email Marketing to cultivate and
                maintain customer relationships through personalized
                communication.
              </p>
              <div className="flex items-center space-x-4 lg:space-x-8">
                <div className="flex items-center space-x-2 lg:space-x-4 overflow-x-hidden">
                  {imageUrls.map((imageUrl, index) => (
                    <img
                      key={index}
                      className="h-12 w-12 lg:h-16 lg:w-16 rounded-full ring-2 ring-white"
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
                    50k+
                  </a>
                  <p className="text-lg lg:text-base">Joined already</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
