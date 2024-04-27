import React from "react";

const cards = () => {
  return (
    <section className="h-full w-screen  p-8">
      <h1 className="text-center text-[3rem] font-bold text-white">
        Recent Case Studies
      </h1>

      <div className="mx-40">
        <div className="grid h-[60vh] justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {/* Card 1 */}

          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="p-3 h-[50%] flex justify-center items-center">
              <div>
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <a className="mt-3 block" href="#">
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="p-3 h-[50%] flex justify-center items-center">
              <div>
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <a className="mt-3 block" href="#">
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-[50vh] overflow-hidden">
            <img
              className="h-50 lg:h-60 w-full object-cover"
              src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="p-3 h-[50%] flex justify-center items-center">
              <div>
                <span className="text-sm text-primary">November 19, 2022</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                  International Women's Day 2022: Date, history, significance,
                  theme this year
                </h3>
                <p className="paragraph-normal text-gray-600">
                  Happy Women's Day 2022: Read on to know all about the history
                  and significance...
                </p>
                <a className="mt-3 block" href="#">
                  Read More{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center">
        <h1 className="text-center text-[4rem] font-bold text-white w-[40%]">
          Have a project in mind? Let’s get to work.
        </h1>
        <button className="px-10 py-3 rounded-lg text-lg mt-12 bg-[#FFB700]">Start Project</button>
      </div>
    </section>
  );
};

export default cards;
