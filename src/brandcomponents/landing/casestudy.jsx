import React from "react";
import "@/brandcomponents/landing/css/style.css";
import Link from "next/link";

const caseStudiesData = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/029/772/275/large_2x/happy-successful-asian-businessman-celebrating-in-modern-office-celebrate-success-and-achieving-goals-male-entrepreneur-celebrate-winning-moments-free-photo.jpeg",
    title: "Aimtech",
    description:
      "Digital Marketing agency based in canada.",
    link: "/casestudy/aimtech",
  },
  {
    id: 2,
    image:
      "https://blog.4psa.com/wp-content/uploads/Reasons-worth-colaborating-with-your-teammates-1024x536.jpg",
    title: "Next coach",
    description:
      "IT service Company",
    link: "/casestudy/aimtech",
  },
  {
    id: 2,
    image:
      "/landingPage/questionmark.jpg",
    title: "This can be you",
    description:
      "Contact us for your case study",
    link: "/casestudy/aimtech",
  },
  // Add more case study data objects as needed
];

export default function CaseStudies() {
  return (
    <section className="flex flex-col items-center justify-center mt-20 h-auto lg:min-h-screen  gap-y-8 p-10 mt-8">
      <div class="flex h-full flex-col items-center justify-center text-center text-4xl font-bold text-white md:flex-row">
        <div class="w-1/10 h-full"></div>
        <div class="flex-1 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl mb-16 gap-x-4 capitalize">
          <svg
            className="w-10 h-auto md:w-20 lg:w-32 md:h-12 lg:h-16 scale-x-[-1]"
            viewBox="0 0 129 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348"
              stroke="#FFB700"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <span>Learn More About</span> <br />
            <span>the Work We've Done</span>
          </div>
          <svg
            className="w-10 h-auto md:w-20 lg:w-32 md:h-12 lg:h-16"
            viewBox="0 0 129 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M123.279 4.00354C130.739 42.3166 117.577 119.002 5.24102 119.237M5.24102 119.237L34.3014 84.6331M5.24102 119.237L41.4143 142.348"
              stroke="#FFB700"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="w-1/10"></div>
      </div>
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8">
        {caseStudiesData.map((study) => (
          <div key={study.id} className="flip-card aspect-square h-auto w-96">
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front">
                <img
                  className="w-full h-full object-cover"
                  src={study.image}
                  alt=""
                />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center">
                <h1 className="text-4xl">{study.title}</h1>
                <br />
                <p>{study.description}</p>
                <br />
                <Link
                  href={study.link}
                  className="bg-[#122b59ee] hover:bg-[#122B59] p-3 rounded-lg text-white"
                >
                  <p>Learn more...</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link
          href="/casestudy"
          className="rounded-lg bg-yellow-400 p-4 shadow-lg font-bold hover:text-white"
        >
          Explore More Case studies
        </Link>
      </div>
    </section>
  );
}
