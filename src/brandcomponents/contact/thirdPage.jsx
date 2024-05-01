import Link from "next/link";
import React from "react";

const thirdPage = () => {
  return (
    <section class="relative h-screen w-screen ">
      <div class="flex items-center justify-center w-full h-full">
        <div className="mx-28 flex">
          <div className="w-[60%] bg-[#FAC954]  flex justify-center items-center  rounded-tl-[3rem] rounded-bl-[3rem]">
            <div className="p-28 space-y-7">
              <h1 className="text-[3rem] font-bold">Let’s get acquainted </h1>
              <p className="text-2xl  font-medium leading-relaxed">
                Aimtech Innovate offers premier digital marketing services at
                unbeatable rates in the US and Canada, thanks to our partnership
                with Nepal's Next Coach Incubator Program. Access top-quality
                work at a fraction of the cost.
              </p>
              <Link href="/about" className="mt-2">
                <button className="bg-[#11225F] px-12 py-3 text-white rounded-lg">
                  Know More About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[40%] h-full ">
            <img src="./Maskgroup.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default thirdPage;
