import React from 'react'

export default function Customer() {
    return (
        <>
            <section className='bg-white w-full'>
            <div class="mx-auto max-w-screen-lg px-8 p-4   text-gray-700 ">
                <div class="flex items-center justify-center ">
                    <div class=" border-r-2 border-black p-2 ">
                        <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">Aimtech innovate</h2>
                        <h3 class="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">Proud Partners</h3>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-x-2 ">
                           <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="/markneed.png" alt="" class="" />
                            </div>
                            <div class="w-32 h-32 aspect-square  flex items-center justify-center">
                                <img src="/nextcoach.png" alt="" class="" />
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            </section>
        </>

    )
}
