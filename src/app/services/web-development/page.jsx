
'use client'
import { NextSeo } from 'next-seo';
import React from "react";

//components
import Navbar from "@/brandcomponents/global/Navbar";
import Brandservice from "@/brandcomponents/services/service";
import FCStudy from "@/brandcomponents/services/FCStudy";
import Pland from "@/brandcomponents/practice/landing";
import Footer from "@/brandcomponents/global/footer";
import CaseStudies from "@/brandcomponents/landing/casestudy";
import Testimonial from "@/brandcomponents/landing/testimonial";
import Hcta from "@/brandcomponents/landing/cta";

export default function page() {
  const dataOBJ = {
    title: "Lead Generating Web Design and Development",
    tagLine:
      "Grow your Business with our Custom Website Design & Development Services",
    desciption:
      "Make a good impression on potential customers right away. Our talented team of web designers and developers creates websites that are both aesthetically pleasing and conversion-focused. We believe that a unique, customized website design makes the business stand out from the crowd and creates an online presence.",
    benifits: [
      "WordPress",
      "Shopify ",
      "WooCommerce",
      "Custom Code (Almost any Tech Stack)",
    ],
    link: "/contact",
    image: "/png/Head/service-webdev-head.png",

    second: {
      title: "Designing your business web presence and generating leads online",
      points: [
        "You don’t have a website for your business to have a digital presence.",
        "Your website looks great, but it's not optimized for search engines. As a result, it's nearly impossible for customers to find you online.",
        "You built your website a few years ago, but it's outdated and doesn't work well on mobile devices. This is turning customers away.",
        "Managing your website's content is a nightmare. You have to go through your web developer every time you want to make a simple update.",
        "Your website lacks important features like e-commerce capabilities or online appointment booking. This limits your ability to generate revenue.",
        "Your website doesn't integrate with your other business systems, so you're stuck doing manual data entry and wasting time.",
      ],
      short: [
        "Without a high-converting website, you might lose your important prospects even though your efforts are consistent and that means you are not getting out what you should have from your website.",
        "Building a website helps your business to thrive in a competitive market. We help you with a 20% increase in website traffic in just 3 months and 15%  in customer engagement and a 25% jump in customer satisfaction. Let's grow your business together!",
        "By working with Aimtech Innovate and setting clear goals, We help businesses improve their online presence, attract more customers, and increase sales. Our approach helps your business grow in revenue and a stronger position in the market.",
      ],
      image: "/png/web.png",
      description:
        "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
    },
    third: {
      title:
        "We are incredible at developing web designs that resonate with your business idea",
      points: [
        "Wireframing",
        "User scenarios",
        "Usability testing",
        "Website Design",
        "Website Copywriting",
        "Website Development",
        "SEO Optimisation",
        "Website Analytics",
        "Content Creation",
        "Website Audit",
        "Conversion Optimisation",
        "Digital content management",
        "Website maintenance & updating",
        "Mobile and Tablet responsiveness",
        "Crash control & stats analysis",
        "And many more",
      ],
      short: [
        "At Aimtech Innovate, Our website development service follows a systematic process that combines a deep understanding of what matters most to your audience, an understanding of your business priorities, beautiful design and UI/UX principles, combined with behavioral psychology and neuromarketing.",
        "We have skilled expertise in WordPress, Wix, Shopify, WooCommerce and Custom Code (with NextJS, Django and MERN stack).",
        "We always provide a custom Web Design and Development plan for our clients but in general, it consists of:",
      ],
      image: "/png/web-second.png",
      description:
        "We always provide a custom Web Design and Development plan for our clients but in general, it consists of:",
    },
    fourth: {
      ctatext: "LET’S BUILD A WEBSITE",
      ctalink: "/contact",
    },
  };

  const accordionData = [
    {
      title:
        "How do I choose the right website design and development company?",
      content:
        "Businesses must choose the top website design and development company in Canada if they want to expand their online presence. When choosing a website design company for new website designs, it's important to keep in mind that SEO and website development are always evolving. It's also a good idea to look at how well their prior clients' websites are, since this will demonstrate how effectively they can improve your website.",
    },
    {
      title: "How much does it cost to design a website?",
      content:
        "You must invest money in the creation of your website. As more businesses move toward internet marketing, having a quality website may boost your online presence and attract new customers. Website design might cost anywhere from $800 to $30,000, depending on the complexity and needs of the business.",
    },
    {
      title: "How long does it take to build a website?",
      content:
        "To optimize a website for Google and other search engines, it may require more work than just building one. Depending on the design and development components and whether the website is for e-commerce or not, the construction of a website can take four to eight weeks.",
    },
    {
      title: "How does website design help my website to rank on Google?",
      content:
        "There are several ways in which the design of your website might affect its position on Google and other search engines. Search engines look upon user experience in addition to search engine optimization. For instance, content on a low-ranked website could be difficult to navigate. This also applies to really huge photo loads. Additionally, there's a significant chance that if your website's construction and design are not optimized for user experience, its ranking will suffer.",
    },
    {
      title:
        "What is the information required before designing and developing the website?",
      content:
        "The content needs to be ready, and that includes the following ( High-resolution logos, High-quality images of products and services, Sitemap ,Enquiry forms to collect contact information, Domain and hosting logins if you own existing accounts)",
    },
    {
      title: "Can you help me improve my site without building a new website?",
      content:
        "Through our maintenance service, we can help you in improving the design, features and overall performance of your website without the need for a new one. Our web experts can also help you with suggestions on improving user experience in an existing website hence, we can enhance your existing website without any hassle.",
    },
  ];

  const featuredcase = {
    title: "CRM For Fintech",
    objective:
      "Aimtech Innovate aimed to develop an AI-enabled CRM solution for a fintech company to enhance sales processes, decision-making, and customer relationship management Challenges. The challenges included integrating AI technology seamlessly with existing systems, ensuring accurate data analysis for sales forecasting, and creating a user-friendly platform for managing customer interactions.",
    challenge:
      "The primary challenge was to enhance the site's SEO performance to increase job applications amid the competitive job market in the food industry.",
    Process:
      "Aimtech Innovate's experts utilised machine learning to develop an AI-powered CRM system that analysed real-time sales data, provided revenue forecasts, and offered insights into team performance. The CRM was seamlessly integrated with existing FinTech tools, ensuring a smooth transition and enhancing user experience.",
    Results:
      "The implementation of the AI-powered CRM led to streamlined sales processes, improved decision-making, and enhanced customer relationship management. The custom dashboards provided deep insights into sales metrics, enabling the FinTech company to optimize revenue forecasting and team performance effectively.",
    learnings:
      "The successful implementation of the AI-enabled CRM highlighted the importance of leveraging technology to streamline processes, gain valuable insights, and enhance customer interactions in the fintech industry. The project emphasised the significance of integrating AI seamlessly with existing systems and focusing on user-friendly design for efficient CRM operations.",
    img: "/png/web-head.png",
  };
 

  return (
    <>
     <NextSeo
        title="Website Design & Development Services in Canada "
        description="We provide website design services to create unique, beautiful and functional websites that are easy to navigate and increase user interaction"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'WordPress,Shopify,WooCommerce,Custom Code (Almost any Tech Stack)',
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
      <Hcta
        title="Get a Free Website Audit Report"
        d1="Get your free consultation today."
        d2="Learn how we can boost your ROI."
      />
      <Footer />
    </>
  );
}
