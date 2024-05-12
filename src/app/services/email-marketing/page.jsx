import React from 'react'

//components
import Navbar from "@/brandcomponents/global/Navbar"
import Brandservice from "@/brandcomponents/services/service";
import FCStudy from "@/brandcomponents/services/FCStudy";
import Pland from "@/brandcomponents/practice/landing";
import Footer from "@/brandcomponents/global/footer";
import CaseStudies from "@/brandcomponents/landing/casestudy";
import Testimonial from "@/brandcomponents/landing/testimonial";
import Hcta from "@/brandcomponents/landing/cta";

export default function page() {
  const dataOBJ = {
    title: "Email marketing",
    tagLine: "The only Email Marketing Service You need to scale your businee to new heights.",
    desciption:
      "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
    benifits: ["Website marketting", "Product marketting", "Safe", "Secure"],
    link: "/contact",

    second : {
        title : "Growing Your Business and Increasing Your SEO Revenue",
        points : [
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
           
        ],
        image : "/service/image28.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    },
    third : {
        title : "Get More sales",
        points : [
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
            "You’re overly dependent on paid ads and not seeing enough ROI",
            "You want to enhance your PPC efforts with SEO for more success",
        ],
        image : "/service/image30.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    }
  };
  const accordionData = [
    {
      title: "What services do you offer?",
      content:
        "Aim Tech Innovate provides a full range of digital marketing services, including social media marketing, search engine optimisation (SEO), web development, graphic design, and strategic consulting.",
    },
    {
      title: "What makes us different?",
      content:
        "Our team of 10+ experienced professionals is certified by Google, Facebook/Instagram, and other major platforms. We combine creativity, data analysis, and strategic thinking to deliver exceptional results.",
    },
    {
      title: "How long have you been around?",
      content: "We've been helping businesses thrive online since 2015, constantly adapting to the ever-changing digital landscape.",
    },
    {
      title: "What is you tech domain ?",
      content: "Our expertise lies in online marketing, with a focus on web design, development, and SEO to drive explosive growth for your business.",
    },
    {
      title: "Do you build only websites or full software?",
      content: "We primarily focus on web design and development, creating impactful online presences. However, we can also discuss your specific software needs to see if we can be a good fit.",
    },
    {
      title: "How big is your team ?",
      content: "Our team size is flexible, allowing us to scale our expertise to meet your project's needs. We have a network of skilled professionals to ensure we deliver exceptional results.",
    },
  ];
   
  return (
    <>
    <Navbar />
    <Brandservice data={dataOBJ} />
    {/* <section className="w-full h-full px-44">
      {params?.slug === "seo-services" ? (
        <div className="text-4xl text-center text-white">
          <h1>{file?.description}</h1>
        </div>
      ) : (
        <div className="text-4xl text-center text-white">{params.slug}</div>
      )}
    </section> */}
    <FCStudy />
    <CaseStudies />
    <Testimonial />
    <Pland faqdata={accordionData} />
    <Hcta />
    <Footer />
  </>
  )
}
