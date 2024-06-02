import React from "react";

export default function Customer() {
  return (
    <>
      <section className="bg-white w-full p-4">
        <div class="mx-auto max-w-screen-lg py-4   text-gray-700 ">
          <div class="flex items-center justify-center ">
            <div class=" border-r-2 border-black sm:px-16 px-3">
              <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
                Aimtech innovate
              </h2>
              <h3 class=" font-bold text-gray-800 sm:text-2xl xl:text-4xl">
                Proud Partners
              </h3>
            </div>
            <div class="block">
              <div class="flex px-2 xl:px-16 justify-center ">
                <div class="w-24 h-24 sm:w-28 sm:h-28 aspect-square  flex items-center justify-center">
                  <img src="/nextcoach.png" alt="" className="object-cover" />
                </div>
                <div class="w-28 h-28 sm:w-32 sm:h-32   aspect-square  flex items-center justify-center">
                  <img src="/markneed.png" alt="" className="object-cover"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
