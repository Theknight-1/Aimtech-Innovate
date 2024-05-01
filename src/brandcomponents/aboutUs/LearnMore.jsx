import React from "react";

const LearnMore = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        <div className="w-full flex items-center ">
          <div className=" flex-1">
            <img src="/about/aboutUsPlaceholder.png" alt="" />
          </div>
          <div className="flex-1 ">
            <div className="px-20 space-y-5">
              <h1 className="text-5xl tracking-wide font-semibold text-white">
                Learn More <br /> About Us
              </h1>
              <p className="text-2xl text-white">
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
              <div className=" pl-5 flex items-center gap-5">
                <div class="mt-3 flex -space-x-5">
                  <img
                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="mt-3 text-sm font-medium leading-0">
                  <a href="#" class="text-[#FFB700] text-6xl font-bold">
                    50k+
                  </a>
                  <p className="text-lg text-white">Joined in already</p>
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
