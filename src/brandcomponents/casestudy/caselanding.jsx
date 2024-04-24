import React from 'react'

export default function CaseLanding() {
    return (
        <>
            <main className='text-white  w-full' >
                <article>
                    <header class=" pt-8 text-center">
                        <p class="">Published April 4, 2022</p>
                        <h1 class="mt-2 text-3xl font-bold  sm:text-5xl">7 rules of effective marketing</h1>
                        <p class="mt-6 text-lg ">You're doing marketing the wrong way</p>
                        <div class="mt-6 flex text-gray-600 flex-wrap justify-center gap-2" aria-label="Tags">
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Marketing</button>
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Branding</button>
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Digital</button>
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Identity</button>
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Development</button>
                            <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium  hover:bg-gray-200">Publishing</button>
                        </div>
                        <div className=' w-full h-[calc(100vh-20vh)]  flex items-center justify-center p-4 px-32'>

                            <img class=" w-full h-full object-contain" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Featured Image" />
                        </div>
                    </header>

                    <div class="md:px-32 mt-10 flex flex-col gap-y-4 ">
                        <div>
                            <h1 className='text-xl md:text-4xl'>Heading</h1>
                            <ul className='pt-2 '>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum? lorem</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h1 className='text-xl md:text-4xl'>Another Heading</h1>
                            <ul className='pt-2 '>
                                <li><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores unde cumque eveniet mollitia molestias reprehenderit consequatur animi totam, rerum possimus ipsum provident a blanditiis! Enim tempore inventore obcaecati natus libero. Sunt eligendi corrupti, eius possimus repellendus laborum reprehenderit eum beatae nostrum neque est assumenda odio, aut quod veniam tempore totam.</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h1 className='text-xl md:text-4xl'>Another Heading</h1>
                            <ul className='pt-2 '>
                                <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero fuga obcaecati distinctio repellat neque nesciunt consequatur, fugit mollitia, enim sit id odit dolorum cupiditate quisquam labore! Nulla libero nobis, reprehenderit temporibus illum dolorum adipisci fugit? Tempora ad provident alias maiores assumenda dolor in ut esse delectus similique reprehenderit minus repellat enim illum voluptates, est neque sunt, dicta vel necessitatibus. Inventore eos earum ipsam fugit beatae dolor quidem mollitia, assumenda ex cum molestias nostrum tenetur similique incidunt corporis minima asperiores, enim sunt voluptatum. Quo, sit eveniet? Recusandae quam perspiciatis iste eaque, asperiores laboriosam assumenda soluta a aliquam reprehenderit, culpa possimus!</p></li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h1 className='text-xl md:text-4xl'>Another Heading</h1>
                            <ul className='pt-2 '>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laborum? lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt, ipsum officiis ea provident dolore vitae, qui sint eum neque soluta tempora, officia repellendus? Quaerat non ratione obcaecati, quae neque nemo asperiores eum nostrum maxime eos ad voluptas error exercitationem atque! Repellendus tempore impedit, nihil facere officia vitae natus quasi ex id sequi deserunt tenetur laudantium unde illo numquam. Tenetur.</p></li>
                            </ul>
                        </div>

                    </div>
                </article>
            </main>
            <section class="py-20 ">
                <h1 class="mb-12 text-center font-sans text-5xl text-white font-bold">Recent Posts</h1>
                <div class=" px-32 grid  grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">

                    

                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Coding</p>
                                <p class="mb-2 text-xl font-medium ">Getting to know the Ice Factory Pattern</p>
                                <p class="text-md font-light ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
                                <div class="justify-starts mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#js</div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#icefactory</div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Coding</p>
                                <p class="mb-2 text-xl font-medium ">Getting to know the Ice Factory Pattern</p>
                                <p class="text-md font-light ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
                                <div class="justify-starts mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#js</div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#icefactory</div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Coding</p>
                                <p class="mb-2 text-xl font-medium ">Getting to know the Ice Factory Pattern</p>
                                <p class="text-md font-light ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
                                <div class="justify-starts mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#js</div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#icefactory</div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                        <a href="#" class="block h-full w-full">
                            <img class="max-h-40 w-full object-cover" alt="featured image" src="https://images.unsplash.com/photo-1660227868332-93e0a0a8c67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                            <div class="w-full bg-white p-4">
                                <p class="text-md font-medium text-indigo-500">Coding</p>
                                <p class="mb-2 text-xl font-medium ">Getting to know the Ice Factory Pattern</p>
                                <p class="text-md font-light ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vel neque ipsam?</p>
                                <div class="justify-starts mt-4 flex flex-wrap items-center">
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#js</div>
                                    <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs ">#icefactory</div>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </section>
        </>
    )
}
