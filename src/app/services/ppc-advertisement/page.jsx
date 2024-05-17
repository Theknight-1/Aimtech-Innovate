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
    title: "Lead Generating Pay-Per-Click (PPC) Advertising",
    tagLine: "Drive Qualified Leads and Sales with Our PPC Management Services",
    desciption:
      "Attract your ideal customers through highly targeted, ROI-driven pay-per-click advertising campaigns. Our PPC specialists use advanced strategies and continual optimization to ensure your ads are seen by the right audiences at the perfect moment when they're ready to buy.",
    benifits: ["Google & Microsoft Ads", "Social PPC (Facebook, Instagram, etc.)", "YouTube & Video Ads", "Amazon PPC"],
    link: "/contact",
    image:"/png/revenue.png",

    second : {
        title : "Get More Leads and Sales with Optimized PPC Campaigns",
        points : [
            "Your ads aren't showing up in the top positions on search engines, so you're missing out on valuable clicks.",
            "Your ad spend is eating up your marketing budget with little return on investment (ROI).",
            "You're getting clicks, but they aren't converting into leads or sales.",
            "You're overspending on paid ads with no measurable return.",
            "Managing your campaigns is becoming too complex and time-consuming",
            "You're unsure which platforms and ad types are most effective",
           
        ],
        short : [
          "Without optimized paid advertising campaigns, you could be wasting thousands on ineffective ads that don't reach your target buyers – and that bleeds your marketing budget dry with little results to show for it.",
          "Our PPC experts optimize every aspect of your campaigns - audience targeting, ad copy, landing pages, bidding strategies and more. Which attracts more qualified clicks from purchase-ready buyers, increases conversions, and maximizes your ROI. On average, our clients see a 200%+ increase in lead volume within 90 days.",
          "Our company’s PPC advertisement services will make these steps easier for you. We offer bespoke PPC marketing and management services to help you grow your business. Our PPC advertising experts will handle everything from planning and optimizing to monitoring."
        ],
        image : "/png/ppc-marketing.png",
        description : "Without optimized paid advertising campaigns, you could be wasting thousands on ineffective ads that don't reach your target buyers – and that bleeds your marketing budget dry with little results to show for it.Our PPC experts optimize every aspect of your campaigns - audience targeting, ad copy, landing pages, bidding strategies and more. Which attracts more qualified clicks from purchase-ready buyers, increases conversions, and maximizes your ROI. On average, our clients see a 200%+ increase in lead volume within 90 days. Our company’s PPC advertisement services will make these steps easier for you. We offer bespoke PPC marketing and management services to help you grow your business. Our PPC advertising experts will handle everything from planning and optimizing to monitoring."
    },
    third : {
        title : "PPC Management Tailored to Your Business Goals",
        points : [
            "Compelling Ad Copy & Creative",
            "Landing Page Optimization",
            "Google Analytics & Conversion Tracking",
            "Bid Management & Budgeting",
            "Retargeting & Remarketing",
            "Advanced PPC Reporting & Analysis",
            "Continuous Split Testing",
            "Campaign Monitoring & Adjustments",
            "Google Ads Management",
            "Microsoft Advertising (Bing Ads)",
            "Facebook & Instagram Ads",
            "LinkedIn Ads",
            "Amazon Advertising",
            "Dynamic Search Ads",
            "Conversion Rate Optimization (CRO)",
            "And many more",
          
        ],
        image : "/png/ppc-ads.png",
        short : [
          "At Aimtech Innovate, our pay-per-click management services are fully customized based on your specific goals, industry, products/services, and audience. We take a data-driven approach using advanced PPC software, AI bidding technologies, and ongoing A/B testing to continually improve performance.",
          "We have skilled expertise in Google Ads, Facebook Ads, Instagram Ads, YouTube Ads, Pinterest Ads, Linkedin Ads and Native Ads. ",
          "We always provide a custom PPC Management plan for our clients but in general, it consists of:"
        ],
        descriptions : "At Aimtech Innovate, our pay-per-click management services are fully customized based on your specific goals, industry, products/services, and audience. We take a data-driven approach using advanced PPC software, AI bidding technologies, and ongoing A/B testing to continually improve performance"
    },
    fourth:{
      ctatext : "LET’S DISCUSS YOUR PPC STRATEGY",
      ctalink : "/contact",
    }

  };
  const accordionData = [
    {
      title: "What is PPC advertising?",
      content:
        "Advertisers that use the pay-per-click (PPC) method only have to pay when a client clicks through or interacts with their advertisement. PPC ads may be created for both search and display networks. PPC advertising is considered a vital search engine marketing strategy because of its 11.38% click-through rate on Google.",
    },
    {
      title: "How to bring my Ads on top of Google?",
      content:
        "Quality score and budget have a big impact on how likely it is that your ads will stand out on Google's first page. The campaign structure and keyword landing page are two elements that impact the quality score of your advertisements.",
    },
    {
      title: "How much should I spend on PPC ads?",
      content: "Depending on the requirements of your project. When establishing your campaign's budget, you must decide on your target audience and objectives. Generally, keywords and their cost per click (CPC) define the budget.",
    },
    {
      title: "Are you a Google certified PPC agency?",
      content: "Our team of certified Google Ads experts has years of experience managing thousands of budgets for clients in the United States and Canada. The leading PPC agency in Canada, AimTech Innovate, is committed to assisting clients in reaching their goals by offering audience-targeted and conversion-focused PPC services.",
    },
    {
      title: "How long until PPC ads start generating leads?",
      content: "With professional PPC management, you can start generating leads very quickly - often within a week or two. However, it takes 1-3 months to fully optimize campaigns based on performance data to hit peak lead volume and ROI. From there, campaigns continually need adjusting to maintain results.",
    },
    {
      title: "How much should I spend on PPC ads?",
      content: "Depending on the requirements of your project. When establishing your campaign's budget, you must decide on your target audience and objectives. Generally, keywords and their cost per click (CPC) define the budget.",
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
    <Hcta title='Get a Free PPC Performance Audit'  d1="Book your free PPC consultation today." d2='Learn how we can boost your ROI.' />
    <Footer />
  </>
  )
}
