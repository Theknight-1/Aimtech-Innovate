import React from "react";

const Banner = () => {
  return (
    <section className="relative h-[70vh] w-full">
      <div className="absolute flex justify-center items-center bottom-0 left-0  bg-[url('/CaseStudy/CaseStudyBanner.png')] bg-cover bg-center w-full h-[60vh]">
        <div className=" w-96 flex flex-col items-center justify-center space-y-8 border-t-4 py-5">
            <h1 className="text-[50px] text-white font-normal text-center leading-snug">Elevate your online presence together</h1>
            <p className="text-white text-lg text-center">Experience accelerated growth with our innovative strategies. </p>
            <button className="text-lg px-20 py-4 bg-white border border-black">Try now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
