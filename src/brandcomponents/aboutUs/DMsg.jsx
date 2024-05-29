import "swiper/css";
import "swiper/css/bundle";
import { FaSignal } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const SingleCard = ({ image, CardDescription, CardTitle, titleHref }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="mb-10 rounded-lg p-4 pb-6 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card">
        <div className="mb-6 w-full overflow-hidden rounded-md">
          <img
            src={image}
            alt="card image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="px-[10px]">
          <h3>
            <a
              href={titleHref}
              className="mb-3 inline-block text-lg font-semibold text-dark hover:text-primary sm:text-xl lg:text-lg xl:text-2xl tracking-wider"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-sm lg:text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const DMsg = () => {
  return (
    <>
      <section className="h-auto w-full overflow-hidden px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28 font-satoshi">
        <div className="flex items-center justify-center p-4">
          <span className="text-5xl lg:text-6xl text-center text-brand-secondary font-bold mb-3">
            Director’s Message
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:h-[70%]">
          <div className="flex-1 lg:w-1/3 flex flex-col items-center justify-center">
            <div className="w-full md:w-[45%] lg:[40%] rounded">
              <img
                src="/director-aimtech.jpeg"
                alt="Team Member"
                className="w-full lg:w-auto h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
            <br />
            <span className="text-4xl text-brand-secondary w-full text-center">
              Adil Muhammad
            </span>
          </div>
          <div className="lg:w-1/2 h-full text-justify lg:pr-0 space-y-2 p-2">
            <div className="w-full h-auto text-white text-base sm:text-lg md:text-lg xl:text-xl text-justify leading-normal 2xl:space-y-7 md:space-y-4">
              <p>
                At Aimtech Innovate, we attribute our success to the unwavering
                commitment to delivering exceptional quality services, which
                have consistently exceeded the expectations of our valued
                clientele. Our reputation as a premier provider of business
                solutions is a testament to our steadfast dedication to
                excellence.
              </p>
              <p>
                Central to our organizational ethos is a culture of integrity,
                professionalism, and innovation. Our diverse and talented teams
                are the cornerstone of our operations, embodying our core values
                and principles. We take immense pride in fostering an
                environment where expertise is cultivated, and each member of
                our team is empowered to contribute to our collective success.
              </p>
              <p>
                Whether you represent a governmental institution, a
                manufacturing enterprise, a retail establishment, or any other
                facet of industry, Aimtech Innovate stands ready to collaborate
                with you in achieving your objectives. Our commitment to
                delivering bespoke solutions tailored to your unique
                requirements is unwavering, and your satisfaction remains our
                paramount concern.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white lg:px-16 py-6 sm:py-8 lg:py-12 mt-12 p-4 font-satoshi">
        <div className="">
          <div class="">
            <h2 className="text-center text-4xl md:text-5xl font-bold md:mb-4 lg:text-6xl">
              Our Core Values
            </h2>
          </div>
          <section className="bg-gray-2  pt-5 dark:bg-dark">
            <div className=" hidden mx-auto md:flex md:container ">
              <SingleCard
                image="/about/card1.png"
                CardTitle="Less Cost, Maximum Revenue"
                titleHref="#"
                CardDescription="We become an extension of your marketing team, delivering exceptional results without the hefty overhead costs of hiring a full-time digital marketing staff. Our streamlined operations and data-driven approach ensure we target the most impactful strategies, maximizing your return on investment and driving significant revenue growth. You'll see a tangible difference in your bottom line without breaking the bank."
              />
              <SingleCard
                image="/about/card2.png"
                CardTitle="Quality Service Round the Clock"
                titleHref="#"
                CardDescription="We take pride in offering exceptional service that goes above and beyond. Our team of digital marketing experts is available 24/7 to address your needs and concerns. Whether you have a pressing question or require strategic guidance, we're here to ensure your campaigns run smoothly and deliver consistent results. We provide constant communication and transparent reporting, keeping you informed and involved every step of the way."
              />
              <SingleCard
                image="/about/card3.png"
                CardTitle="Personalized Growth Plan"
                titleHref="#"
                CardDescription="An All-in-one personalised digital growth approach only works in today's dynamic digital landscape. We take the time to understand your unique business goals, target audience, and competitive environment. With this in-depth knowledge, we craft a personalized growth plan tailored specifically to your needs. We leverage the most effective strategies to achieve your desired outcomes, propelling your brand to new heights and achieving sustainable growth in the long term."
              />
            </div>
          </section>
          <section className="bg-gray-2  dark:bg-dark">
            <div className="md:hidden mx-auto">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <SingleCard
                    image="/about/card1.png"
                    CardTitle="Less Cost, Maximum Revenue"
                    titleHref="#"
                    CardDescription="We become an extension of your marketing team, delivering exceptional results without the hefty overhead costs of hiring a full-time digital marketing staff. Our streamlined operations and data-driven approach ensure we target the most impactful strategies, maximizing your return on investment and driving significant revenue growth. You'll see a tangible difference in your bottom line without breaking the bank."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleCard
                    image="/about/card2.png"
                    CardTitle="Quality Service Round the Clock"
                    titleHref="#"
                    CardDescription="We take pride in offering exceptional service that goes above and beyond. Our team of digital marketing experts is available 24/7 to address your needs and concerns. Whether you have a pressing question or require strategic guidance, we're here to ensure your campaigns run smoothly and deliver consistent results. We provide constant communication and transparent reporting, keeping you informed and involved every step of the way."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleCard
                    image="/about/card3.png"
                    CardTitle="Personalized Growth Plan"
                    titleHref="#"
                    CardDescription="An All-in-one personalised digital growth approach only works in today's dynamic digital landscape. We take the time to understand your unique business goals, target audience, and competitive environment. With this in-depth knowledge, we craft a personalized growth plan tailored specifically to your needs. We leverage the most effective strategies to achieve your desired outcomes, propelling your brand to new heights and achieving sustainable growth in the long term."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </div>
      </section>
      <section className="lg:h-screen h-auto w-full overflow-hidden hidden px-16">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center lg:gap-6 gap-2 lg:p-10 md:p-6 sm:p-4 p-2 py-4">
          <div className="lg:w-1/2 text-justify w-full text-white text-lg lg:text-2xl p-2 lg:px-0 space-y-3 lg:space-y-10">
            <div className="h-auto w-full lg:w-9/12 space-y-2">
              <p className="text-brand-secondary text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
                Our Core Values
              </p>
              <div className="space-y-2 lg:space-y-6">
                <div className="flex items-center gap-4">
                  <FaSignal className="text-xl lg:text-3xl" />
                  <span className="text-lg lg:text-xl">Great Success</span>
                </div>
                <p className="text-gray-300">
                  Our focus is on your success. We treat you actively with
                  confidence and care. Team puts passion into the delivery of
                  each project and excels at world-class quality standards. And
                  this is exactly how we manage any project to run effectively
                  and well above our client’s expectations.
                </p>
                <div className="flex items-center gap-4">
                  <AiOutlinePieChart className="text-xl lg:text-3xl" />
                  <span className="text-lg lg:text-xl">Our commitment</span>
                </div>
                <p className="text-gray-300">
                  We are your success partner for today and beyond. We keep the
                  promises we make and keep being a persistently improving
                  organization in all aspects of our work.
                </p>
                <div className="flex items-center gap-4">
                  <IoBagHandleOutline className="text-xl lg:text-3xl" />
                  <span className="text-lg lg:text-xl">Team collaborate</span>
                </div>
                <p className="text-gray-300">
                  Our teamwork culture ensures that everyone is held
                  responsible, and our commitments to you will be the same as
                  they were. With years of combined knowledge, we can identify
                  the top-notch results for your particular task.
                </p>
              </div>
            </div>
          </div>
          <div className="relative items-center justify-center flex w-1/2">
            <img
              src="/about/about-3.png"
              alt="About 3"
              className="w-72 md:w-auto lg:w-auto h-auto object-cover"
            />
            <div className="absolute -top-20 left-40 lg:left-auto right-40 lg:right-auto w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-[#15BEE3]/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DMsg;
