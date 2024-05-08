import React from "react";
import { FaSignal } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

const DMsg = () => {
  return (
    <>
      <section className="h-screen w-full ">
        <h1 className="text-4xl lg:text-6xl text-white font-bold text-center">
          Director’s Message
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:h-[80%] ">
          <div className="flex-1 lg:w-1/2  flex justify-center">
            <div className="relative z-10">
              <img
                src="/about/TeamMember.png"
                alt="Team Member"
                className="w-9/12 lg:w-auto object-cover"
              />
            </div>
          </div>
          <div className="flex-1 lg:w-1/2 text-white text-lg lg:text-2xl  lg:pr-0 space-y-6 lg:space-y-10">
            <p>
              Founded in 2003 by Principal Architect Jordan Peters, we employ
              strategies to manage resources efficiently, including passive and
              active design, and carefully selecting sustainable and
              environmentally responsible building materials to ensure that the
              long term impact on the environment is minimal.
            </p>
            <p>
              The firm has been involved in a wide range of services including
              residential, civic and commercial design, design of architectural
              signage and graphics, workplace consultancy and renovation,
              landscape design and affordable housing design.
            </p>
            <p>
              Notable works include the Advantage Place (12-storey office
              complex for Enterprise Properties Ltd), Visitor’s Centre for the
              Kakum National Park, the Gomoa Fetteh Feyenoord Football Academy
              (now the West African Football Academy) and the renovation of the
              Headquarters of the Ghana Revenue Authority.
            </p>
          </div>
        </div>
      </section>
      <section className="h-auto lg:h-[80vh] w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative lg:w-1/2 ">
          <img
            src="/about/about-3.png"
            alt="About 3"
            className="w-full h-auto object-cover"
          />
          <div className="absolute -top-20 left-40 lg:left-auto right-40 lg:right-auto w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-[#15BEE3]/30 blur-3xl rounded-full"></div>
        </div>
        <div className="flex-1 lg:w-1/2 text-white text-lg lg:text-2xl pr-4 lg:pr-0 space-y-3 lg:space-y-10">
          <p className="text-blue-500 text-xl font-bold">Why choose us</p>
          <h1 className="text-3xl font-bold">Key Features</h1>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-4">
              <FaSignal className="text-xl lg:text-3xl" />
              <h1 className="text-lg lg:text-xl">Expand Your Reach</h1>
            </div>
            <p className="text-gray-300">
              With a focus on delivering innovative solutions. Aimtech Innovate
              offers a wide range of services.
            </p>
            <div className="flex items-center gap-4">
              <AiOutlinePieChart className="text-xl lg:text-3xl" />
              <h1 className="text-lg lg:text-xl">Improve Efficiency</h1>
            </div>
            <p className="text-gray-300">
              With a focus on delivering innovative solutions. Aimtech Innovate
              offers a wide range of services.
            </p>
            <div className="flex items-center gap-4">
              <IoBagHandleOutline className="text-xl lg:text-3xl" />
              <h1 className="text-lg lg:text-xl">Enhance Productivity</h1>
            </div>
            <p className="text-gray-300">
              With a focus on delivering innovative solutions. Aimtech Innovate
              offers a wide range of services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DMsg;
