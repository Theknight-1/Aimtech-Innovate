import React from 'react'

export default function Customer() {
    return (
        <>
            <div class="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
                <div class="flex flex-wrap">
                    <div class="w-full max-w-full flex-shrink-0 flex flex-col items-start justify-center  border-r-2 border-black lg:mt-2 lg:w-1/3 lg:flex-none">
                        <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">Our Clients</h2>
                        <h3 class="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">Trusted by over 100+ clients</h3>
                        <p class="">We bring solutions to make life easier for our customers.</p>
                    </div>
                    <div class="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
                           <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="/next.svg" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="/vercel.svg" alt="" class="" />
                            </div>
                           
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="https://assets-global.website-files.com/6312535109af3402143e250c/6312535109af345c4c3e251b_apple_-%20logo-300x119.png " alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="https://assets-global.website-files.com/6312535109af3402143e250c/6312535109af34b7653e2519_amazon_-%20logo-300x119.png" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="https://assets-global.website-files.com/6312535109af3402143e250c/6312535109af34530b3e26a4_netflix_-%20logo-300x82.png" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="/Brandlogo.png" alt="" class="" />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
