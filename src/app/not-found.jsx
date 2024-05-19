import React from "react";
import Navbar from "@/brandcomponents/global/Navbar";
export default function NotFound() {
  return (
    <>
      <title>404 Page not found - Aimtech</title>
      <main className="flex max-h-screen w-screen flex-col items-center justify-start ">
        <Navbar />
        <div class="w-full h-[90vh]  bg-brand-primary flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center">
            <div className=" w-3/4">

            <img src="/404.png" alt="" />
            </div>

            <p class="md:text-3xl lg:text-6xl mt-8 text-white">
            Page Not found
            </p>
            <a
              href="/"
              class="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-200 text-gray-900 px-4 py-2 mt-12 rounded "
              title="Return Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Return Home</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
