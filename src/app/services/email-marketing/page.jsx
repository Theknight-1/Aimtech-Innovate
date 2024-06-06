'use client'
import { NextSeo } from 'next-seo';
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
    image:"/png/email_hero.svg",
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
    title: "Increasing Email Open Rates by Resending Campaigns ",
    objective:"The objective was to improve email open rates by strategically resending campaigns to subscribers, ensuring that the content reaches the intended audience and maximizes engagement.",
    challenge : "The challenge was to identify the most effective approach to resending campaigns without overwhelming subscribers or compromising the overall effectiveness of the email marketing strategy.",
    Process:"Aimtech Innovate's email marketing experts analyzed the performance of previous campaigns, identifying the most effective subject lines, content, and timing. They then developed a targeted resending strategy that focused on subscribers who had previously engaged with the content or had not opened the email. The strategy included adjusting subject lines, adding personalized content, and optimizing the timing of the resend.",
    Results: "The targeted resending strategy resulted in a significant increase in email open rates, with a higher percentage of subscribers engaging with the content. The approach ensured that the content reached the intended audience, maximizing the effectiveness of the email marketing campaign.",
    learnings:"This project highlighted the importance of analyzing campaign performance and developing targeted strategies to improve email open rates. By focusing on subscriber engagement and adjusting content and timing accordingly, email marketers can increase the effectiveness of their campaigns and maximize engagement with their audience.",
    img: "/png/email.png",
  }
   
  return (
    <>
     <NextSeo
        title="Email Marketing Services | Effective Email Marketing Management"
        description="We offer email marketing management and newsletter services. Contact Aimtech Innovate and let us tailor an email campaign for you!"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Audience Segmentation,Compelling Content, Eye-catching Design, Clear Call-to-Action (CTA)',
          },
          {
            name: 'author',
            content: 'Aimtech Innovate',
          },
        ]}
      />
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
