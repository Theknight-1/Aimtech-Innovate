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
    title: "Email Marketing Campaigns That Drive Conversions",
    tagLine: "Drive Business Growth And Build Customer Loyalty With Effective Email Marketing Campaigns",
    desciption:
      "Are you looking for an effective way to reach and engage with your customers? Look no further than email marketing! Email marketing is the most effective digital marketing channel and delivers even higher ROI than paid ads or social media.",
    benifits: ["Audience Segmentation", "Compelling Content", "Eye-catching Design", "Clear Call-to-Action (CTA)"],
    link: "/contact",
    image:"/png/svg/email-hero.svg",
    second : {
        title : "Attract. Connect. Win Over Customers with Email Marketing",
        points : [
            "You need email marketing services to effectively communicate with your customers and grow your business.",
            "Your email marketing strategy is outdated, and you're missing opportunities to engage with your audience and drive sales.",
            "You're not using email marketing automation tools, which means you're wasting time and resources on manual processes.",
            "Your email campaigns are not optimized for mobile devices, resulting in a poor user experience and low engagement.",
            "Your email content is not personalized, leading to low open rates and a lack of conversions.",
            "You're not tracking your email marketing metrics, so you have no idea what's working and what's not.",
        ],
        short : [
          "Without any email marketing campaigns, you may be losing customers that you have built over time – and that means you have been wasting your marketing efforts.",
          "We specialize in helping businesses like yours use email to build customer trust, drive conversions, and increase sales. By activating/reactivating your customer database, you can gain an increase of inward leads by around 30% and increase your client base by 60%. Send emails and generate leads now.",
          "By working with Aimtech Innovate and setting clear goals, We help businesses improve their email marketing campaigns, attract more customers, and increase sales. Our approach helps your business grow in revenue and a stronger position in the market."
        ],
        image : "/png/email-first.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    },
    third : {
        title : "A proven email marketing process to generate results for your business",
        points : [
            "Email newsletters",
            "Promotional emails",
            "Email campaigns",
            "Email Template Design",
            "Sales emails",
            "Email automation set-up",
            "Email trigger sequences",
            "Event emails",
            "Email list building",
            "Email compelling content",
            "Eye-catching design",
            "Clear call-to-action (CTA)",
            "A/B testing",
            "Analytics and Reporting",
            "And many more...",
        ],
        short : [
          "At Aimtech Innovate we establish a relevant, trustworthy relationship with your customers by providing you the tools to create the most powerful one-to-one marketing. Our email marketing service lets you turn your prospects into buyers. We do it by using proven, tested processes, and by crafting content that connects with your prospects on an emotional level.",
          "We have skilled expertise in Hootsuite, Mailchimp, Brevo, Hubspot and Zapier along with custom template design, copywriting and personalized touch.",
          "We always provide custom email marketing strategies for our clients that consist of:"
        ],
        image : "/png/email-second.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    },
    fourth:{
      ctatext : "LET’S RUN EMAIL CAMPAIGNS",
      ctalink : "/contact",
    }
  };
  const accordionData = [
    {
      title: "Is email marketing still relevant in 2024?",
      content:
        "Absolutely! Email marketing boasts a high ROI (Return On Investment) and allows for targeted communication directly with your audience. Social media platforms change algorithms frequently, but email remains a consistent way to connect.",
    },
    {
      title: "How does email marketing compare to social media marketing?",
      content:
        "Both are valuable marketing techniques, but they serve different purposes. Social media is fantastic for brand awareness and engagement, while email marketing excels at targeted promotions, nurturing leads, and driving conversions.",
    },
    {
      title: "How can I build my email list?",
      content: "There are many ways! Offer valuable incentives like discounts or downloadable content in exchange for signups. Encourage subscriptions on your website, social media bios, and even physical business cards.",
    },
    {
      title: "What should I include in my email marketing campaigns?",
      content: "Focus on providing value to your subscribers. Include informative content, industry news, exclusive offers, and clear calls to action (CTAs) that tell them what you want them to do next.",
    },
    {
      title: "How often should I send emails?",
      content: "The frequency depends on your audience and content. It's better to send high-quality emails consistently than low-quality ones too frequently. Experiment and track open rates to find the sweet spot for your audience.",
    },
    {
      title: "How can I measure the success of my email marketing campaigns?",
      content: "Track key metrics like open rates, click-through rates, and conversion rates. These will tell you how engaging your emails are and how well they're driving results.",
    },
  ];
  const featuredcase = {
    title: "Web Design For High School ",
    objective:"The objective was to create a modern, responsive website that reflects the high school's brand and values, improves online presence, showcases academic programs and achievements, and enhances communication with stakeholders.",
    challenge : "The challenge was to design a website that not only met the aesthetic and functional needs of the high school but also catered to the diverse audience of students, parents, and the community while ensuring accessibility and engagement.",
    Process:"Aimtech Innovate's web design experts collaborated closely with the high school to develop a clean, intuitive interface aligned with the school's branding. The design was optimized for mobile devices, featuring a soft scroll design for seamless navigation. Ongoing support was provided to keep the website up-to-date and secure.",
    Results: "The partnership resulted in a modern, engaging website with a low bounce rate, effectively communicating the school's brand and providing valuable information to visitors. The website successfully showcases academic programs, extracurricular activities, and achievements, enhancing stakeholder engagement and improving online visibility.",
    learnings:"This project highlighted the importance of collaboration between web design experts and clients to create a website that not only meets design and functionality requirements but also resonates with the target audience. By focusing on branding, mobile optimization, and user experience, the website achieved its goals of enhancing the school's online presence and communication with stakeholders."
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
    <Hcta title='Get a Free Email Template' d1='Get your free consultation today.'  d2='Learn how we can boost your ROI. '/>
    <Footer />
  </>
  )
}
