import React from "react";

const Hero = () => {
  return (
    <section className="h-auto md:h-[calc(100vh-10vh)] w-full xl:px-28 lg:px-24 md:px-12 sm:px-8 px-4 flex justify-center items-center font-satoshi">
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-6 sm:mt-0">
        <div className="flex flex-col md:w-[60%] w-full md:pr-8 space-y-3 xl:space-y-4 2xl:space-y-6 p-4">
          <h1 className="text-[#FCCF40] text-xl md:text-2xl font-bold">
            EXPLORE OUR CASE STUDIES
          </h1>
          <h2 className="text-5xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white md:leading-[140%]">
            Experience our expertise <br /> based projects
          </h2>
          <p className="font-normal text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-100 ">
            Discover Success Stories: Explore our diverse case studies
            showcasing real-world applications of our solutions across
            industries and challenges.
          </p>
          <p className="font-normal text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-100">
            Celebrate Innovation: Dive into compelling narratives of how our
            clients leveraged cutting-edge technology and strategic approaches
            to overcome obstacles, drive growth, and achieve remarkable results.
            Each case study offers valuable insights into the power of
            collaboration, adaptability, and forward-thinking in today's dynamic
            business landscape.
          </p>
        </div>
        <div className="w-full md:w-[50%] h-full  flex items-center justify-center mt-8 md:mt-0">
          <div className="w-[80%] md:w-[600px] h-full">
            <img
              src="/png/revenue.png"
              alt="img"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
