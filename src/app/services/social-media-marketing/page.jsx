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
    title: "Social Media Marketing",
    tagLine: "The only Social Media Marketing Service You need to scale your businee to new heights.",
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
      title: "How do I get started with social media marketing?",
      content:
        "Define your goals, research your audience, create engaging content, analyze results, and adapt your strategy for continuous improvement.",
    },
    {
      title: "What's the best social media platform for marketing?",
      content:
        "It depends on your target audience and industry. We can help you identify the best platforms for your business.",
    },
    {
      title: "How can I be a good social media marketer?",
      content: "Be informative, creative, and consistent. Track your results and adapt your approach to maximize engagement.",
    },
    {
      title: "Why is social media marketing important?",
      content: "It lets you connect directly with your audience, build brand awareness, and drive sales.",
    },
    {
      title: "Are Facebook Ads worth it?",
      content: "Yes, if done strategically. Facebook Ads can reach a large, targeted audience and deliver a high return on investment (ROI).",
    },
    {
      title: "How much does it cost to advertise on Facebook?",
      content: "You set your budget. We can help you create effective ad campaigns that fit your budget.",
    },
    {
      title: "How do I place an ad on Facebook?",
      content: "The Facebook Ads platform allows you to set up targeted campaigns. We can help you navigate the process.",
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
