"use client";
import React, { useEffect, useRef } from "react";
import { FaSignal } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { LiaLessThanSolid } from "react-icons/lia";
import Swiper from "swiper";

const DMsg = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".multiple-slide-carousel", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".multiple-slide-carousel .swiper-button-next",
        prevEl: ".multiple-slide-carousel .swiper-button-prev",
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <section className="h-[90vh] w-full">
        <h1 className="text-6xl text-white font-bold text-center mb-10">
          Director’s Message
        </h1>
        <div className="h-full w-full flex flex-col ">
          <div className="flex items-center justify-center gap-64">
            <div className="relative  flex-1 flex justify-end">
              <div className="absolute -top-28 left-40 -z-0 w-full h-auto aspect-square rounded-full  bg-[#15BEE3]/30 blur-3xl"></div>
              <div className="relative ">
                <div className="absolute w-full h-full group hover:bg-green-300 z-0">
                  <div className="invisible group-hover:visible bottom-5 absolute left-3">
                    <h1 className=" text-3xl font-semibold text-green-900">
                      Jorden Petros
                    </h1>
                    <h3 className=" text-sm ml-2 font-semibold text-green-900">
                      Principle Partner
                    </h3>
                  </div>
                </div>
                <img src="/about/TeamMember.png" alt="image" className="" />
              </div>
            </div>
            <div className="flex-1 text-white text-2xl pr-44 space-y-10">
              <p>
                Founded in 2003 by Principal Architect Jordan Peters, we employ
                strategies to manage resources efficiently, including passive
                and active design, and carefully selecting sustainable and
                environmentally responsible building materials to ensure that
                the long term impact on the environment is minimal.
              </p>
              <p>
                The firm has been involved in a wide range of services including
                residential, civic and commercial design, design of
                architectural signage and graphics, workplace consultancy and
                renovation, landscape design and affordable housing design.
              </p>
              <p>
                Notable works include the Advantage Place (12-storey office
                complex for Enterprise Properties Ltd), Visitor’s Centre for the
                Kakum National Park, the Gomoa Fetteh Feyenoord Football Academy
                (now the West African Football Academy) and the renovation of
                the Headquarters of the Ghana Revenue Authority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[80vh] w-full">
        <div className="h-full w-full flex flex-col ">
          <div className="flex items-center justify-center">
            <div className="flex-1 flex items-center justify-end text-white text-2xl pr-44 space-y-10 ">
              <div className="space-y-5">
                <p className="text-blue-500 text-xl font-bold">Why choose us</p>
                <h1 className="text-3xl font-bold text-white">Key Features</h1>
                <div className="space-y-3">
                  <span className="flex gap-5">
                    <span>
                      <FaSignal />
                    </span>
                    <h1>Expand Your Reach</h1>
                  </span>
                  <p className="text-lg text-gray-300">
                    {" "}
                    With a focus on delivering innovative solutions. <br />
                    Aimtech Innovate offers a wide range of services.{" "}
                  </p>
                </div>
                <div>
                  <span className="flex gap-5">
                    <span>
                      <AiOutlinePieChart />
                    </span>
                    <h1>Expand Your Reach</h1>
                  </span>
                  <p className="text-lg text-gray-300">
                    With a focus on delivering innovative solutions. <br />
                    Aimtech Innovate offers a wide range of services.{" "}
                  </p>
                </div>
                <div>
                  <span className="flex gap-5">
                    <span>
                      <IoBagHandleOutline />
                    </span>
                    <h1>Expand Your Reach</h1>
                  </span>
                  <p className="text-lg text-gray-300">
                    {" "}
                    With a focus on delivering innovative solutions. <br />
                    Aimtech Innovate offers a wide range of services.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex-1 flex justify-start ">
              <div className="absolute -top-28 left-40 -z-0 w-full h-auto aspect-square rounded-full  bg-[#15BEE3]/30 blur-3xl"></div>
              <div className="relative ">
                <img src="/about/about-3.png" alt="image" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default DMsg;
