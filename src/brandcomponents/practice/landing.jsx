import React from 'react'

export default function Pland() {
    return (
        <>
            <div class="h-[calc(100vh-10vh)] w-full p-10 bg-[#185493]">
                <div className='border w-full h-full '></div>
            </div>
            <section class="relative h-auto min-h-96 w-screen  ">
                <div class="relative h-[calc(100vh-10vh)] w-full bg-[#27262B]">
                    <div className='absolute top-0 z-0 w-full h-full '>
                        <img src="/vector/faqbg.svg" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='absolute top-0 z-10 w-full h-auto  p-28'>
                        <div className='w-full h-auto  flex   bg-[#27262B] mt-16 p-10'>
                            <div className='flex flex-col justify-between  w-1/3 h-full p-16 '>
                                <div>
                                    <span className='font-bold text-6xl text-white '>Frequently Asked Questions?</span><br />
                                </div>
                                <hr />
                                <br />
                                <div>
                                    <span className='font-bold  text-2xl text-white mt-16'>Still have some Questions?</span><br />
                                    <span className='text-xl text-white'>Contact us , we will help you.</span> <br />
                                    <button className='bg-[#FFB700] w-48 p-4 text-xl font-bold text-white rounded mt-4'> +979846135461</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 p-10 max-h-[60vh] overflow-x-scroll    flex-1 h-auto'>
                                <div className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'>
                                    <span>Where is aimtech located ?</span>
                                    <button>+</button>
                                </div>
                                <div className='w-full h-auto border bg-[#1B1B1B] p-2 text-xl text-white rounded'>
                                    <p>Aimtech is the leading Digital marketting agency based in Canada. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores quo tempora expedita porro, doloremque, facilis amet adipisci laboriosam nisi dolore optio magnam magni! Aliquam optio ipsa excepturi sed distinctio? Placeat in laudantium sunt magni nam voluptates veritatis vero optio, maiores accusamus quisquam labore consequatur nobis quod. Accusantium, alias facilis.</p>
                                </div>
                                <div className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'>
                                    <span>How to reach Aimtech Office?</span>
                                    <button>+</button>
                                </div>
                                <div className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'>
                                    <span>How to reach Aimtech Office?</span>
                                    <button>+</button>
                                </div>
                                <div className='w-full h-16 border flex flex-row items-center rounded-lg bg-[#1B1B1B] justify-between p-2 text-xl text-white'>
                                    <span>How to reach Aimtech Office?</span>
                                    <button>+</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-auto  w-full flex flex-col items-center justify-center bg-[#FFB700] p-10">
                    <div className='p-10 w-full h-full flex flex-col items-center justify-start '>
                        <span className='text-4xl font-bold bg-blue-500 text-white p-2 text-left'>Start</span>
                        <span className='text-[100px] font-bold'>Growing</span>
                        <br />
                        <div className='flex flex-col items-center justify-center text-4xl font-bold'>

                            <span>Levelup your Marketing Without</span>
                            <span> increasing your headcount</span>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}
