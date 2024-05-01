import React from 'react'

export default function About() {
    return (
        <section>
            <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
                <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                    <span class="mr-2 text-4xl text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
                    </span>
                    the future
                </a>
                <input type="checkbox" class="peer hidden" id="navbar-open" />
                <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
                    <span class="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li class="font-bold md:mr-12"><a href="#">Pricing</a></li>
                        <li class="md:mr-12"><a href="#">Features</a></li>
                        <li class="md:mr-12"><a href="#">Support</a></li>
                        <li class="md:mr-12">
                            <button class="rounded-full border-2 border-green-500 px-6 py-1 text-green-600 transition-colors hover:bg-green-500 hover:text-white">Login</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <div class="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
                <div class="mx-auto max-w-xl lg:max-w-screen-xl">
                    <div class="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
                        <div class="mb-6 max-w-xl">
                            <div>
                                <p class="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-200 px-3 py-px text-sm font-semibold tracking-wider text-green-900">This is Flippy</p>
                            </div>
                            <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                                The #1 Marketplace <br />
                                in
                                <span class="inline-block text-green-500">Pacific Ocean</span>
                            </h2>
                            <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur quaerat! Optio.</p>
                        </div>
                        <div class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                            <a href="/" class="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"> Start a free Trial </a>
                            <a href="/" class="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto">Watch a demo video</a>
                        </div>

                        <div class="mt-6 flex justify-center -space-x-4 lg:justify-start ">
                            <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt='img' />
                            <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt='img'/>
                            <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt='img' />
                            <div class="">
                                <span class="pl-8 font-semibold">Customer Reviews</span>
                                <div class="flex w-auto items-center justify-center space-x-1 pl-8">
                                    <svg class="h-auto w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span class="text-sm font-medium text-slate-400"> 4.9 • <a href="#" class="text-sm font-normal underline">129 reviews</a> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden  h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
                        <svg class="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="img1" x="0" y="0" width="1" height="1">
                                    <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" href="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                </pattern>
                            </defs>

                            <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>

    )
}
