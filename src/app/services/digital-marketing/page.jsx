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
        title: "Digital marketing",
        tagLine: "Best Digital marketting agency in US & Canada",
        desciption:
          "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
        benifits: ["Website marketting", "Product marketting", "Safe", "Secure"],
        link: "/contact",
        image:"/png/revenue.png",

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
            short : [
              "Without optimized paid advertising campaigns, you could be wasting thousands on ineffective ads that don't reach your target buyers – and that bleeds your marketing budget dry with little results to show for it.",
              "Our PPC experts optimize every aspect of your campaigns - audience targeting, ad copy, landing pages, bidding strategies and more. Which attracts more qualified clicks from purchase-ready buyers, increases conversions, and maximizes your ROI. On average, our clients see a 200%+ increase in lead volume within 90 days.",
              "Our company’s PPC advertisement services will make these steps easier for you. We offer bespoke PPC marketing and management services to help you grow your business. Our PPC advertising experts will handle everything from planning and optimizing to monitoring."
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
            short : [
              "Without optimized paid advertising campaigns, you could be wasting thousands on ineffective ads that don't reach your target buyers – and that bleeds your marketing budget dry with little results to show for it.",
              "Our PPC experts optimize every aspect of your campaigns - audience targeting, ad copy, landing pages, bidding strategies and more. Which attracts more qualified clicks from purchase-ready buyers, increases conversions, and maximizes your ROI. On average, our clients see a 200%+ increase in lead volume within 90 days.",
              "Our company’s PPC advertisement services will make these steps easier for you. We offer bespoke PPC marketing and management services to help you grow your business. Our PPC advertising experts will handle everything from planning and optimizing to monitoring."
            ],
            image : "/service/image30.png",
            description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
        },
        fourth:{
          ctatext : "LET’S DISCUSS YOUR PPC STRATEGY",
          ctalink : "/contact",
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

      const featuredcase = {
        title: "CRM For Fintech",
        objective:"To grow the organic search visibility of the Careers page subdomain, balancing national and local keywords to expand regional visibility.",
        challenge : "The primary challenge was to enhance the site's SEO performance to increase job applications amid the competitive job market in the food industry.",
        Process:"Conducted technical SEO audits, identified keyword opportunities, and implemented a full-funnel content strategy alongside offsite tactics like securing relevant backlinks.",
        Results: "Conducted technical SEO audits, identified keyword opportunities, and implemented a full-funnel content strategy alongside offsite tactics like securing relevant backlinks.",
        learnings:"Dot Foods’ SEO improvements underscore the significance of a multifaceted SEO strategy that includes technical optimization, content strategy, and offsite tactics. Balancing branded and unbranded keywords while focusing on full-funnel content led to increased organic visibility and job applications.",
        
      }
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
    <FCStudy featured={featuredcase} />
    <CaseStudies />
    <Testimonial />
    <Pland faqdata={accordionData} />
    <Hcta />
    <Footer />
  </>
  )
}
