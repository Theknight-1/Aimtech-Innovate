import React from "react";
import { FaSignal } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

const DMsg = () => {
  return (
    <>
      <section className=" h-auto w-full  p-4 md:p-6 lg:mt-12  lg:px-16  overflow-hidden">
        <h1 className=" text-5xl lg:text-6xl text-brand-secondary font-bold text-center mb-3 ">
         "Director’s Message"
        </h1>
        <div className="flex  flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:h-[70%]">
          <div className="flex-1 lg:w-1/3 flex flex-col items-center justify-center ">
            <div className=" ">
              <img
                src="/about/TeamMember.png"
                alt="Team Member"
                className="w-9/12 lg:w-auto h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
              <span className="text-2xl text-brand-secondary w-full text-center font-bold ">Mr. Adil</span>
          </div>
          <div className=" lg:w-2/3  h-full text-justify lg:pr-0 space-y-2    p-2 ">
            <div className="w-full  h-auto text-white text-base md:text-xl lg:text-2xl  lg:space-y-7 md:space-y-4">
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
      <section className="lg:h-screen h-auto w-full overflow-hidden  px-16">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center lg:gap-6 gap-2 lg:p-10 md:p-6 sm:p-4 p-2 py-4 ">
          
          <div className="lg:w-1/2 text-justify w-full text-white text-lg lg:text-2xl p-2 lg:px-0 space-y-3 lg:space-y-10 ">
            <div className="h-auto w-full lg:w-9/12 space-y-2">
              <p className="text-brand-secondary text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
                Our Core Values
              </p>

              <div className="space-y-2 lg:space-y-6">
                <div className="flex items-center gap-4">
                  <FaSignal className="text-xl lg:text-3xl" />
                  <h1 className="text-lg lg:text-xl">Great Success </h1>
                </div>
                <p className="text-gray-300">
                  Our focus is on your success. We treat you actively with confidence and care. Team puts passion into the delivery of each project and excels at world-class quality standards. And this is exactly how we manage any project to run effectively and well above our client’s expectations.
                </p>
                <div className="flex items-center gap-4">
                  <AiOutlinePieChart className="text-xl lg:text-3xl" />
                  <h1 className="text-lg lg:text-xl">Our commitment
                  </h1>
                </div>
                <p className="text-gray-300">
                  We are your success partner for today and beyond. We keep the promises we make and keep being a persistently improving organization in all aspects of our work.

                </p>
                <div className="flex items-center gap-4">
                  <IoBagHandleOutline className="text-xl lg:text-3xl" />
                  <h1 className="text-lg lg:text-xl">Team collaborate
                  </h1>
                </div>
                <p className="text-gray-300">
                  Our teamwork culture ensures that everyone is held responsible, and our commitments to you will be the same as they were. With years of combined knowledge, we can identify the top-notch results for your particular task.

                </p>
              </div>
            </div>
          </div>
          <div className="relative items-center justify-center flex w-1/2">
            <img
              src="/about/about-3.png"
              alt="About 3"
              className="w-72 md:w-auto lg:w-auto h-auto object-cover"
            />
            <div className="absolute -top-20 left-40 lg:left-auto right-40 lg:right-auto w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-[#15BEE3]/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DMsg;
