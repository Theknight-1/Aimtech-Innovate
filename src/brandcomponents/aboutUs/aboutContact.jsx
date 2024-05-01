import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const aboutContact = () => {
  return (
    <section className="w-full relative h-[60vh]">
      <div className="w-full h-full ">
        <div className="flex gap-20 items-center justify-center">
          <div>
            <img src="/about/aboutLast.png" alt="" />
          </div>
          <div className="flex flex-col space-y-3 max-w-lg ">
            <h1 className="text-5xl text-[#FFB700] font-bold leading-normal">
              Infuse Your Brand with Excellence
            </h1>
            <p className="text-gray-400 text-2xl">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <div className="text-white text-xl space-y-2">
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Adipiscing eli sed eiusmod</p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Tempor incididunt</p>
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <AiOutlineCheckCircle />
                </span>
                <p>Labore et dolore magna</p>
              </span>
            </div>
            <button className="px-4 py-4 w-max bg-[#ffb700ea] hover:bg-[#FFB700] rounded-lg text-[#122B59] text-lg font-semibold">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutContact;
