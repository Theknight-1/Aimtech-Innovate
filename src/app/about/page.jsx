import React from 'react'

export default function About() {
    return (
        <>

            <section className='border h-16 bg-white'>
                <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
                    <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                        <span class="mr-2 text-4xl text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
                        </span>
                        Brand
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
            </section>
            <section>
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
                                    <span class="inline-block text-green-500 animate-fade-left animate-delay-100"> Pacific Ocean</span>
                                </h2>
                                <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequuntur quaerat! Optio.</p>
                            </div>
                            <div class="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                                <a href="/" class="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto"> Start a free Trial </a>
                                <a href="/" class="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto">Watch a demo video</a>
                            </div>

                            <div class="mt-6 flex justify-center -space-x-4 lg:justify-start">
                                <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                <img class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
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
                        <div class="hidden animate-fade-left animate-delay-100 h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
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
            <section class="relative py-10 text-gray-800 sm:py-16 md:py-20 md:pb-32">
                <div class="group relative mx-auto mb-10 hidden w-full max-w-xl overflow-hidden rounded-xl border-8 border-white bg-teal-600 shadow-lg md:block">
                    <div class="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500 hover:scale-110 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    {/* <img class="group-hover:opacity-30 h-full w-full opacity-100 duration-500" src="/images/R-8M56ZRVfqR53IR0a-1p.png" alt="" /> */}
                </div>

                <div class="mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
                    <div class="relative mx-auto my-auto flex flex-col items-center text-center">
                        <h2 class="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">Now Free for <span class="whitespace-nowrap">Early Birds</span></h2>
                        <p class="mt-4 font-medium md:text-xl">Everyone who signs up before the beta launch, will get 6 months free</p>

                        <div class="sm mt-8 flex flex-col sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
                            <button class="relative mt-4 rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow transition hover:bg-orange-600">
                                <div class="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-gray-800 md:inline-flex">
                                    <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
                                    </svg>
                                </div>
                                Try for free
                            </button>
                            <button class="mt-4 animate-fade-left flex items-center rounded-lg border-2 border-gray-800 px-6 py-2 font-medium transition hover:bg-gray-800 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>
                                Watch the demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mx-auto py-16">
                <div class="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
                    <div class="text-center">
                        <h2 class="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">Get in touch</h2>
                        <p class="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Let's take your business to the moon</p>
                        <a href="#" class="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg">Contact Us</a>
                    </div>
                </div>
            </section>
            <section class=" py-12 text-gray-800 sm:py-24">
                <div class="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div class="max-w-2xl px-4 lg:pr-24">
                        <p class="mb-2 text-blue-600">Have Custom Needs</p>
                        <h3 class="mb-5 text-3xl font-semibold">Get Custom Pricing</h3>
                        <p class="mb-16 text-lg text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, corrupti asperiores voluptatum labore eligendi quisquam. Id quae, laboriosam saepe facere ea asperiores!</p>
                        <div class="mb-5 flex font-medium">
                            <div class="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>
                            </div>
                            <div class="">
                                <p class="mb-2">Monthly 400k Image Downloads</p>
                                <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div class="">
                                <p class="mb-2">Stay Syned to the Database</p>
                                <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
                            </div>
                        </div>
                        <div class="mb-5 flex font-medium">
                            <div class="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-blue-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div class="">
                                <p class="mb-2">Save on Energy Costs</p>
                                <span class="font-normal text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum porro molestias quaerat maxime modi.</span>
                            </div>
                        </div>
                    </div>
                    <div class="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                        <div class="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                            <h3 class="mb-1 inline-block text-3xl font-medium"><span class="mr-4">Get a quote!</span><span class="inline-block rounded-md bg-blue-100 px-2 py-1 text-sm text-blue-700 sm:inline">Quick Response</span></h3>
                            <p class="text-gray-600">Contact us for custom use cases</p>
                        </div>
                        <div class="p-4 sm:p-8">
                            <input id="name" type="text" class="mt-4 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your name" />
                            <input id="email" type="email" class="peer mt-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500" placeholder="Enter your email" />
                            <div class="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">Email format Incorrect. Please complete the email</div>
                            <label class="mt-5 mb-2 inline-block max-w-full">Tell us about your company</label>
                            <textarea id="about" class="mb-8 w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none hover:border-blue-500"></textarea>
                            <button class="w-full rounded-lg border border-blue-700 bg-blue-700 p-3 text-center font-medium text-white outline-none transition focus:ring hover:border-blue-700 hover:bg-blue-600 hover:text-white">Send</button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="">
                <div class="mx-auto px-5 md:max-w-screen-lg">
                    <h1 class="pt-16 pb-5 text-center text-5xl font-semibold">Stay ahead of the curve</h1>
                    <p class="pb-10 text-center text-sm uppercase text-gray-700">Stand out from the crowd with real-world skills and accelerate your career.</p>
                </div>
                <div class="mx-auto mt-4 justify-center px-4 leading-8 md:flex md:max-w-screen-lg">
                    <div class="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
                        <div class="relative mt-8 mb-12 w-full self-center lg:mr-6 lg:self-auto">
                            <div id="" class="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white shadow-none">
                                <div class="relative flex h-full flex-col items-center px-4">
                                    <div class="flex w-full flex-col items-center pb-6">
                                        <p class="m-6 text-center text-xl font-semibold">Standard</p>
                                        <div class="mb-4 items-baseline">
                                            <p class="text-center text-sm font-light text-gray-600 line-through">$14.99</p>
                                            <div class="flex items-baseline justify-center">
                                                <p class="text-4xl font-semibold text-gray-800">$8</p>
                                                <p class="text-2xl font-semibold text-gray-800">.99</p>
                                                <p class="ml-1 text-lg tracking-wide">/ month</p>
                                            </div>
                                            <p class="mt-1 text-center font-light text-gray-600"><span class="mr-2">discounted price</span></p>
                                        </div>
                                        <p class="text-center text-base">$215 billed every 2 years</p>
                                    </div>
                                    <button class="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border border-gray-400 bg-transparent p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-gray-100" id="buyNowTwo Year Plan-200-lg">Get Started</button
                                    ><button class="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-transparent p-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
                                        <p id="choose-annual-standard-plan" class="my-2 text-gray-600 underline">Choose annual plan</p>
                                    </button>
                                    <div class="flex w-full flex-col">
                                        <div class="my-6 mx-4 self-center">
                                            <div class="mb-3 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                    <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                ><span class="ml-2 text-base">24 months of unlimited access</span>
                                            </div>
                                            <div class="mb-3 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                    <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                ><span class="ml-2 text-base">New courses every week</span>
                                            </div>
                                            <div class="mb-3 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                    <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                ><span class="ml-2 text-base">Completion certificates</span>
                                            </div>
                                            <div class="mb-3 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                    <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                ><span class="ml-2 text-base">Skill assessments</span>
                                            </div>
                                            <div class="mb-3 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                    <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                ><span class="ml-2 text-base"> Early access to new courses</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex w-full flex-col"></div>
                                </div>
                            </div>
                            <div class="flex w-full items-center justify-center"></div>
                        </div>
                    </div>
                    <div class="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
                        <div class="">
                            <div class="relative mb-12 w-full self-center lg:mr-6 lg:self-auto">
                                <div class="shadow-xs relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white">
                                    <div class="flex h-8 items-center justify-center bg-teal-200 p-2">
                                        <span class="text-xs font-semibold uppercase leading-4 text-green-900">best for learning</span>
                                    </div>
                                    <div class="relative flex h-full flex-col items-center px-4">
                                        <div class="flex w-full flex-col items-center pb-6">
                                            <p class="m-6 text-center text-xl font-semibold text-indigo-600">Premium</p>
                                            <div class="mb-4 items-baseline">
                                                <p class="text-center text-sm font-light text-gray-600 line-through">$24.99</p>
                                                <div class="flex items-baseline justify-center">
                                                    <p class="text-4xl font-semibold text-indigo-600">$14</p>
                                                    <p class="text-2xl font-semibold text-indigo-600">.99</p>
                                                    <p class="ml-1 text-lg tracking-wide">/ month</p>
                                                </div>
                                                <p class="mt-1 text-center font-light text-gray-600"><span class="mr-2">discounted price</span></p>
                                            </div>
                                            <p class="text-center text-base">$179 billed annually</p>
                                        </div>
                                        <button class="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border-indigo-600 bg-indigo-600 p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-100 duration-200" id="buyNowAnnual-300-lg">Get Started</button
                                        ><button class="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-gray-100 py-3 pl-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
                                            <p id="choose-two-year-premium-plan" class="my-2 text-gray-600 underline">Choose 2 year plan</p>
                                            <span class="ml-2 h-6 rounded-full border border-indigo-200 bg-blue-100 px-2 pt-1 text-xs leading-4 text-blue-800 no-underline">Save 16%</span>
                                        </button>
                                        <div class="flex w-full flex-col">
                                            <div class="my-6 mx-4 self-center">
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">12 months of unlimited access</span>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">New courses every week</span>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">Completion certificates</span>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">Skill assessments</span>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">Early access to new courses</span>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">Projects</span>
                                                    <div class="mt-1 ml-1 flex items-center text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                                            <circle cx="12" cy="12" r="10" class=""></circle>
                                                            <line x1="12" y1="16" x2="12" y2="12" class=""></line>
                                                            <line x1="12" y1="8" x2="12.01" y2="8" class=""></line>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="mb-3 flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                        <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                                    ><span class="ml-2 text-base">Personalized learning </span>
                                                    <div class="mt-1 ml-1 flex items-center text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                                            <circle cx="12" cy="12" r="10" class=""></circle>
                                                            <line x1="12" y1="16" x2="12" y2="12" class=""></line>
                                                            <line x1="12" y1="8" x2="12.01" y2="8" class=""></line>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex w-full flex-col"></div>
                                    </div>
                                </div>
                                <div class="flex w-full items-center justify-center"></div>
                            </div>
                        </div>
                    </div>
                    <div class="relative mt-8 mb-12 w-full self-center md:w-1/3 lg:mr-6 lg:self-auto">
                        <div id="" class="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white shadow-none">
                            <div class="relative flex h-full flex-col items-center px-4">
                                <div class="flex w-full flex-col items-center pb-6">
                                    <p class="m-6 text-center text-xl font-semibold">Monthly</p>
                                    <div class="mb-4 items-baseline">
                                        <p class="text-center text-sm font-light text-gray-600 line-through">$59</p>
                                        <div class="flex items-baseline justify-center">
                                            <p class="text-4xl font-semibold text-gray-800">$35</p>
                                            <p class="ml-1 text-lg tracking-wide">/ month</p>
                                        </div>
                                        <p class="mt-1 text-center font-light text-gray-600"><span class="mr-2">discounted price</span></p>
                                    </div>
                                    <p class="text-center text-base">billed every month</p>
                                </div>
                                <button class="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border border-gray-400 bg-transparent p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-gray-100" id="buyNowMonthly-100-lg">Get Started</button>
                                <p class="mt-4"> </p>
                                <div class="flex w-full flex-col">
                                    <div class="my-6 mx-4 self-center">
                                        <div class="mb-3 flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                            ><span class="ml-2 text-base">1 months of unlimited access</span>
                                        </div>
                                        <div class="mb-3 flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                            ><span class="ml-2 text-base"> New courses every week</span>
                                        </div>
                                        <div class="mb-3 flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                            ><span class="ml-2 text-base">Completion certificates</span>
                                        </div>
                                        <div class="mb-3 flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                                                <polyline points="20 6 9 17 4 12" class=""></polyline></svg
                                            ><span class="ml-2 text-base">Skill assessments</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-full flex-col"></div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-center"></div>
                    </div>
                </div>
            </div>
            <footer class="bg-gray-50 border-t-2">
                <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                    <div class="max-w-sm">
                        <div class="mb-6 flex h-12 items-center space-x-2">
                            <span class="text-2xl font-bold">Bel<span class="text-blue-600">Air</span>.</span>
                        </div>
                        <div class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
                        <div class="text-gray-500">
                            35 Remida Heights, <br />
                            45 Street, <br />
                            South Caroline, US
                        </div>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                        <nav aria-label="Footer Navigation" class="text-gray-500">
                            <ul class="space-y-3">
                                <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" href="#">Press</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
                                <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="">
                        <div class="mt-4 mb-2 font-medium xl:mb-4">Subscribe to our Newsletter</div>
                        <div class="flex flex-col">
                            <div class="mb-4">
                                <input type="email" class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
                                <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
                        <div class="">© 2022 BelAir | All Rights Reserved</div>
                        <div class="">
                            <a class="" href="#">Privacy Policy</a>
                            <span>|</span>
                            <a class="" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
