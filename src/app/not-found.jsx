import React from 'react'
import Header from "../brandcomponents/global/Header"
export default function NotFound() {
    return (
        <>
        <main className="flex min-h-screen w-screen flex-col items-center justify-start ">
            <Header/>
            <div class="w-full h-[90vh] border bg-white flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center">
                    <img src="/404.svg" alt="" />
                    
                    <p class="md:text-lg lg:text-xl text-gray-600 mt-8">Sorry, the page you are looking for could not be found.</p>
                    <a href="/" class="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-200 text-gray-900 px-4 py-2 mt-12 rounded " title="Return Home">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Return Home</span>
                    </a>
                </div>
            </div>
            </main>
        </>
    )
}
