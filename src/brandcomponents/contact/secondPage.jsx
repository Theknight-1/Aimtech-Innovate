import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const secondPage = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex h-full flex-col lg:flex-row ">
        <div className="flex-1 flex  justify-start items-center h-auto  ">
          <div className="">
            <img src="./Frame.png" alt="" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start h-full ">
          <div className=" space-y-10 w-[70%] p-16">
            <h1 className="text-white text-[3rem] font-semibold">
              Contact us to drive your CX & EX at scale
            </h1>
            <div className="space-y-6">
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Accuracy and Relevancy
              </p>
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Accuracy and Relevancy
              </p>
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
              <p className="flex items-center gap-6 text-white text-2xl font-semibold">
                <span>
                  <FaCheckCircle />
                </span>{" "}
                Efficient and Timely Completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default secondPage;
