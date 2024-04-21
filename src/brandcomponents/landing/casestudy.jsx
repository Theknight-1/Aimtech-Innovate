import React from 'react'

export default function CaseStudy() {
    return (
        <section class="container mx-auto flex flex-col items-center gap-y-10 p-10 mb-10 ">
            <div class="flex h-16 flex-col items-center justify-center text-center text-4xl font-bold text-white md:flex-row">
                <div class="w-1/10 h-full"></div>
                <div class="flex-1 flex items-center justify-center text-6xl mb-16 gap-x-8">
                    <svg width="129" height="146" className='scale-x-[-1]' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg>
                    <div>
                    <span>Learn More About</span> <br />
                    <span>the Work We've Done</span>
                    </div>
                     <svg width="129" height="146" className='' viewBox="0 0 129 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348" stroke="#FFB700" stroke-width="7" stroke-linecap="round" />
                        </svg>
                </div>
                <div class="w-1/10"></div>
            </div>
            <div class="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8">
                <div class="aspect-square h-auto w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img className='w-full h-full object-cover' src="https://static.vecteezy.com/system/resources/previews/029/772/275/large_2x/happy-successful-asian-businessman-celebrating-in-modern-office-celebrate-success-and-achieving-goals-male-entrepreneur-celebrate-winning-moments-free-photo.jpeg" alt="" />
                </div>
                <div class="aspect-square h-auto w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img className='w-full h-full object-cover' src="https://www.betterup.com/hs-fs/hubfs/Employee-smiling-amongst-coworkers-at-office-team-collaboration.jpg?width=2121&height=1414&name=Employee-smiling-amongst-coworkers-at-office-team-collaboration.jpg" alt="" />
                </div>
                <div class="aspect-square h-auto w-96 rounded bg-white shadow hover:bg-blue-200">
                    <img className='w-full h-full object-cover' src="https://blog.4psa.com/wp-content/uploads/Reasons-worth-colaborating-with-your-teammates-1024x536.jpg" alt="" />
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
