// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Carousel = () => {
    return (
        <section className='w-full my-24 h-auto py-32 px-16 flex items-center justify-center border'>
            <Swiper
                spaceBetween={25}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='h-full'
            >
                <SwiperSlide className='h-full'>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="h-full">
                  <div className=" flex items-center justify-center">
                    <img src="/about/laughing.png" alt="img" className="" />
                  </div>
                  <span className="text-3xl font-bold  text-center mt-5 text-[#FFB700]">
                    Good to Great Culture
                  </span>
                  <div className="flex flex-col space-y-3 text-white text-xl p-5  border-yellow-600 ">
                    <span>+ Methodical</span>
                    <span>+ Proactive</span>
                    <span> + System and process Improvement</span>
                    <span>+ Structure</span>
                  </div>
                </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

Carousel.displayName = 'Carousel';

export default Carousel;