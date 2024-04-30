"use client";
import React from "react";
import Cards from "@/brandcomponents/casestudy/cards";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function CaseLanding() {
  const squareData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    },
  ];

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full h-full" // Adjusted to fill the container
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    ));
  };

  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 6000);
  };
  return (
    <>
      <section className="text-white w-full">
        <header className="text-center">
          <div className="relative w-full h-[calc(100vh-35vh)] flex items-center justify-center">
            <div className="absolute text-white z-20">
              <h1 className="text-4xl font-bold">Demo Brand Name</h1>
              <h1 className="text-[4rem] font-bold">SEO Case Study</h1>
            </div>
            <div className="absolute w-full h-full">
              <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Featured Image"
              />
            </div>
          </div>
        </header>
        <div className="mt-10">
          <div>
            <h1 className="text-[3rem] font-bold text-center">
              published date
            </h1>
          </div>
          <div className="flex w-full mx-36">
            <div className="w-[40%] flex flex-col">
              <div>
                <h1 className="text-[3.5rem] font-bold uppercase mb-3">
                  Used Platform
                </h1>
                <ul>
                  <li className="text-3xl">Facebook</li>
                  <li className="text-3xl">Google</li>
                  <li className="text-3xl">Ads</li>
                </ul>
              </div>
            </div>
            <div className="w-[45%]">
              <ul className="flex justify-center gap-10">
                <li>
                  <h1 className="text-[3rem] font-bold">7.5X</h1>
                  <p className="text-2xl">
                    ROAS (Return on Ad Spend) on Facebook
                  </p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">10.1X</h1>
                  <p className="text-2xl">
                    ROAS (Return on Ad Spend) on Google Ads
                  </p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">49%</h1>
                  <p className="text-2xl">Increase in Attributed Sales</p>
                </li>
                <li>
                  <h1 className="text-[3rem] font-bold">1.8%</h1>
                  <p className="text-2xl">CTR</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:px-32 mt-10 flex gap-10 gap-y-4">
          <div className="flex-1">
            <h1 className="text-[3.5rem] font-bold uppercase mb-3">
              Client Goals
            </h1>
            <ul className="space-y-5 p-2 tracking-normal">
              <li className="text-3xl">
                1. Increase brand awareness and reach within the target
                audience.
              </li>
              <li className="text-3xl">
                2. Drive website traffic and boost sales of fitness equipment
                and accessories.
              </li>
              <li className="text-3xl">
                3. Improve return on investment (ROI) and return on ad spend
                (ROAS) from advertising efforts.
              </li>
              <li className="text-3xl">
                4. Enhance engagement metrics such as click-through rate (CTR)
                and conversion rate.
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="./case-study-1.png" alt="" />
          </div>
        </div>
        <div className="md:px-32 mt-10 flex gap-10 w-full gap-y-4">
          <div className="flex-1">
            <img src="./case-study-2.png" alt="" />
          </div>
          <div className="flex-1 p-5">
            <h1 className="text-[3.5rem] font-bold uppercase mb-3">
              How We Helped
            </h1>
            <p className="text-3xl leading-normal">
              Our strategy involved the creation of new creative assets that
              would inform and educate the audience about the solutions and
              expertise that Kintec offers. For this, we created campaigns for
              every step of the funnel, using the most relevant interest
              targeting and also leveraging custom and lookalike audiences for
              maximum reach and engagement of our target audience.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-[3.5rem] font-bold uppercase mb-3 text-white">
          Explore our work
        </h1>
        <div className="grid grid-cols-4 grid-rows-4 max-w-screen-3xl w-full h-auto gap-4">
          {squares.map((sq) => sq)}
        </div>
      </section>
      <section className="py-20">
        <Cards />
      </section>
    </>
  );
}