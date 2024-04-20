import React from 'react'

export default function CaseStudy() {
    return (
        <section class="container mx-auto flex flex-col items-center gap-y-10 p-10 mb-10 ">
            <div class="flex h-16 flex-col items-center justify-center text-center text-4xl font-bold text-white md:flex-row">
                <div class="w-1/10 h-full"></div>
                <div class="flex-1">
                    <span>Learn More About</span> <br />
                    <span>the Work We've Done</span>
                </div>
                <div class="w-1/10"></div>
            </div>
            <div class="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8">
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                <div class="aspect-square h-auto min-w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img src="/vector/team.svg" alt="" />
                </div>
                
            </div>
            <div>
                <button class="rounded-lg bg-yellow-400 p-4 shadow-lg">Explore More Case studies</button>
            </div>
        </section>
    )
}
