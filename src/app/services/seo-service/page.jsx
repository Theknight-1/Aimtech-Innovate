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
    title: "SEO SERVICE",
    tagLine: "The only SEO Service You need to scale your businee to new heights.",
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
      title: "What is SEO and how does it work?",
      content:
        "SEO optimizes your website for search engines like Google, making it more likely to appear in relevant search results. This involves using targeted keywords and high-quality content.",
    },
    {
      title: "Can I do SEO for my website myself?",
      content:
        "Yes, but it requires ongoing effort and expertise. We can help you achieve optimal results.",
    },
    {
      title: "Does SEO still work?",
      content: "Absolutely! SEO is crucial for organic website traffic and brand visibility in search results.",
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
