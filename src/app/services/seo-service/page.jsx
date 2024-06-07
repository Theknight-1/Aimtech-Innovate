"use client";
import { NextSeo } from "next-seo";
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
    title: "Refine your online presence with a comprehensive SEO strategy",
    tagLine:
      "Boost Your Online Visibility with Our Expert Search Engine Optimization Services",
    desciption:
      "Need help to attract customers to your new website? Quality traffic increases sales and boosts business profits. SEO is the only solution! Our Canada based SEO services optimize your website for search engines, driving organic traffic and boosting your online presence. Let's help your business grow!",
    benifits: [
      "Technical & Local SEO",
      "On-Page Optimization",
      "Content Marketing",
      "Link Building",
    ],
    link: "/contact",
    image: "/service/seo-hero.svg",
    second: {
      title: "Take Your Business to the Top of Search Engine Rankings",
      points: [
        "Your website isn't showing up on the first few pages of Google for relevant keywords",
        "You're getting traffic, but it's not converting into leads or sales",
        "You don't have a consistent stream of new content to improve your search visibility",
        "Your website has technical issues that are hurting your ability to rank",
        "You're unsure how to optimize for voice search and mobile-first indexing",
        "You lack the in-house resources and expertise to fully execute an SEO strategy",
      ],
      short: [
        "Without implementing SEO strategies, you may lose potential web traffic and end up getting less sales – which might keep you out of the organic game.",
        "We specialize in helping businesses like yours use SEO tactics to increase website traffic, drive conversions, and increase sales. We provide custom SEO strategies for your organic business growth, you can gain an increase in website traffic by 40% and increase your sales by 65%",
        "By working with Aimtech Innovate and setting clear goals, We help businesses improve their SEO strategies, attract organic traffic, and increase sales. Our approach helps your business to rank at the top of the search results.",
      ],
      image: "/png/seo-first.png",
      description:
        "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
    },
    third: {
      title: "Supercharge Your Business With Our SEO Services",
      points: [
        "SEO Consulting",
        "SEO Audits",
        "SEO Strategy",
        "Keyword Research",
        "E-commerce SEO",
        "Local SEO",
        "Technical Optimization",
        "On-page Optimization",
        "Off-page Optimization",
        "Link building campaigns",
        "Google My Business",
        "Local and International SEO",
        "WordPress SEO",
        "YouTube SEO",
        "Shopify SEO",
        "And many more...",
      ],
      short: [
        "At Aimtech Innovate, our SEO services are designed to drive real results for your business. We take the time to understand your target audience, your business goals, and your industry. Our approach combines technical SEO mastery with high-quality content creation and marketing, ensuring that your website is optimized for both search engines and users.",
        "We have skilled expertise in On page SEO, Off-page SEO, Local SEO, Technical SEO and Content marketing, as well as Copywriting and Website maintenance!",
        "We always provide custom search engine optimization strategies for our clients that consist of:",
      ],
      image: "/png/seo-second.png",
      description:
        "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users.",
    },
    fourth: {
      ctatext: "LET’S RANK MY WEBSITE",
      ctalink: "/contact",
    },
  };

  const accordionData = [
    {
      title: "How long does it take to see results from SEO?",
      content:
        "SEO is a long-term investment, but you can often see improvements in 3-6 months depending on your website's condition and the competitiveness of keywords. Significant traffic and ranking increases usually happen in 6-12 months with consistent, strategic SEO work.",
    },
    {
      title: "What factors influence SEO pricing?",
      content:
        "SEO pricing depends on several factors like your target locations, industry competitiveness, number of key services/products, and the current condition of your website. Rates can range from $5,00-$5,000+ per month.",
    },
    {
      title: "Can you guarantee first-page rankings?",
      content:
        "While we aim to get you ranking on the first page for your most valuable keywords, it's impossible to truly guarantee rankings. Search engines remain tight-lipped about their algorithms, which change frequently.",
    },
    {
      title: "Is SEO still effective in 2024?",
      content:
        "Absolutely! As long as users continue searching on Google and other engines, SEO will retain its importance. However, the strategies and priorities evolve alongside search technology advancements like AI, voice, and mobile.",
    },
    {
      title: "What is the difference between SEO and PPC?",
      content:
        "SEO (Search Engine Optimization) and PPC (Pay-Per-Click) are both strategies for driving traffic to your website, but they work in different ways. SEO focuses on optimizing your website and content to rank higher in organic search results, while PPC involves paying to have your ads displayed at the top of the search results or on other websites. SEO is a long-term strategy that can provide a higher ROI over time, while PPC can provide more immediate results but requires an ongoing investment. Many businesses use a combination of both SEO and PPC to maximize their online visibility and reach.",
    },
    {
      title: "How do I know if my SEO strategy is working?",
      content:
        "There are several key metrics you can use to measure the success of your SEO strategy, including:Organic search traffic: Track the number of visitors coming to your website from organic search results.Keyword rankings: Monitor your rankings for your target keywords and track any improvements over time.Conversion rate: Measure the percentage of visitors who take a desired action, such as making a purchase or filling out a contact form.Backlink profile: Assess the quality and quantity of backlinks pointing to your website.ROI: Calculate the return on investment of your SEO efforts in terms of increased revenue or leads.By regularly tracking these metrics and making adjustments to your strategy as needed, you can ensure that your SEO efforts are delivering a positive return on investment for your business.",
    },
  ];

  const featuredcase = {
    title: "SEO For Fintech ",
    objective:
      "Aimtech Innovate successfully implemented a strategic SEO plan for a finance company, focusing on enhancing online visibility, improving organic traffic, and addressing low backlinking issues to boost authority and credibility in the finance industry.",
    challenge:
      "The primary challenge was the finance company's low backlinking, impacting their online visibility and authority within the competitive fintech sector.",
    Process:
      "Aimtech Innovate conducted a comprehensive audit of the finance company's website, identifying key SEO improvements. Recommendations included strategic link-building and on-page optimization to enhance backlinking and SEO performance. By addressing broken links on relevant websites and suggesting the company as a replacement, valuable backlinks were created.",
    Results:
      "The implementation of strategic SEO tactics led to a significant improvement in the finance company's search engine ranking, resulting in increased organic traffic and enhanced lead generation. Aimtech Innovate's expertise in SEO was evident through the successful navigation of the competitive fintech landscape.",
    learnings:
      "This case study highlights the importance of addressing backlinking challenges in the fintech industry through strategic SEO initiatives. By focusing on link-building, on-page optimization, and leveraging broken link opportunities, Aimtech Innovate effectively improved the client's online visibility and credibility, showcasing the impact of a well-rounded SEO strategy in the finance sector.",
    img: "/png/SEO-featured-case-study.svg",
  };

  return (
    <>
      <NextSeo
        title="Best SEO Agency in Canada | Aimtech Innovate"
        description="Choose Canada's Best SEO agency to rank top on Google SERPs. Our award-winning SEO Services unleash powerful marketing strategies for your business's success."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "SEO, On page SEO , Off page SEO , google tag manager,google analytics",
          },
          {
            name: "author",
            content: "Aimtech Innovate",
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
        title="Get a Free SEO Audit Report"
        d1="Get your free consultation today."
        d2="Learn how we can increase your website traffic."
      />
      <Footer />
    </>
  );
}
