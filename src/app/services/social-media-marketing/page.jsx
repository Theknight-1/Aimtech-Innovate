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
    title: "Engage With Your Customers Via Social Media Handles",
    tagLine: "Reach Your Niche Market Audience With a Robust Social Presence",
    desciption:
      "Take your business to the next level with our comprehensive social media management solutions. Our team of social media experts creates and implements customized strategies that drive engagement, increase brand awareness, and generate leads. We believe that a strong social media presence is crucial for businesses to thrive in today's digital landscape.",
    benifits: ["Facebook & Instagram", "LinkedIn  & Twitter", "TikTok", "Youtube"],
    link: "/contact",
    image:"/png/svg/smm-hero.svg",

    second : {
        title : "Elevate Your Social Media Game and Grow Your Business",
        points : [
            "You don't have a social media presence, making it difficult for customers to find and engage with you online.",
            "Your social media profiles are incomplete or inconsistent, damaging your brand's credibility.",
            "You're struggling to create engaging content that resonates with your audience.",
            "You're not sure how to measure the success of your social media efforts or adjust your strategy accordingly.",
            "You need to be on social media so customers can find and connect with you online.",
            "You're wasting time and resources on social media without seeing any tangible results.",
           
        ],
        short : [
          "Without a solid social media strategy, you might be missing out on valuable opportunities to connect with your target audience – and that means you are losing potential customers on social media.",
          "Our social media management services can help you increase your followers by about 20% in just 3 months, boost engagements by 15% and customer satisfaction by 25%.Improve your online reputation and credibility with social media presence.",
        ],
        image : "/png/smm-first.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    },
    third : {
        title : "We Craft Social Media Strategies that Drive Real Results",
        points : [
            "Content creation and curation",
            "Profile optimization and branding",
            "Engagement and community management",
            "Analytics and performance tracking",
            "Influencer partnerships and collaborations",
            "Social media audit and strategy development",
            "Content calendar creation",
            "Monthly content creation (posts, stories, reels, etc.)",
            "Paid social media advertising (Facebook, Instagram, LinkedIn, etc.)",
            "Engagement and response management",
            "Monthly analytics and performance reporting",
            "Content promotion and amplification",
            "Inbound Engagement Monitoring",
            "Analytics Monitoring",
            "Content Strategy Creation",
            "And many more...",
        ],
        short : [
          "At Aimtech Innovate, our social media management service is built on a deep understanding of your target audience, your business goals, and the latest social media trends. We know your marketing goals are our goals. Our role as a social media management company is to help you understand and utilize social media marketing so that your business profits from it! ",
          "We have skilled expertise in Facebook, Instagram, Twitter, Linkedin, Youtube and TikTok handle management along with planning personalized social media plans for our clients.",
          "We always provide custom social media marketing strategies for our clients that consist of:"
        ],
        image : "/png/smm-second.png",
        description : "Marketing is all about getting reach to more number of visitors on a website's visibility on search engines like Google. Aimtech Innovate uses a variety of techniques to optimize clients' websites, improving their search engine rankings and making them more easily discoverable by users."
    },
    fourth:{
      ctatext : "LET'S GROW YOUR SOCIAL MEDIA PRESENCE",
      ctalink : "/contact",
    }
  };
  const accordionData = [
    {
      title: "What services are typically included in social media management?",
      content:
        "Social media management services typically include content creation, scheduling, community engagement, analytics reporting, and paid advertising. Content creation involves developing engaging text, images, and videos tailored to each platform's audience and objectives. Scheduling ensures consistent posting, while community engagement involves responding to comments and messages to build relationships with followers. Analytics reporting tracks the performance of social media efforts, allowing for data-driven optimization",
    },
    {
      title: "How much does social media management cost?",
      content:
        "The cost of social media management varies depending on the scope of services, the number of platforms, and the level of engagement required. On average, businesses can expect to invest between $500 and $5,000 per month.",
    },
    {
      title: "How long does it take to see results from social media management?",
      content: "The time it takes to see results from social media management depends on various factors, including the quality of your content, the engagement of your audience, and the competitiveness of your industry. With a well-planned strategy, you can start seeing results within 2-3 months.",
    },
    {
      title: "How does social media management help my business?",
      content: "Social media management helps your business by increasing brand awareness, driving website traffic, generating leads, and improving customer engagement. It also provides valuable insights into your target audience's preferences and behaviors.",
    },
    {
      title: "What information do you need to get started with social media management?",
      content: "To get started, we need access to your social media profiles, your brand guidelines, and any existing content or marketing materials. We'll also need to discuss your business goals, target audience, and any specific objectives you have for your social media presence.",
    },
    {
      title: "What are the benefits of outsourcing social media management?",
      content: "Outsourcing social media management to an agency offers several benefits. It allows businesses to focus on their core operations while leaving social media to experts who have the time, skills, and tools to manage it effectively. Agencies often have access to a team of specialists in content creation, design, analytics, and paid advertising, ensuring a comprehensive approach. Outsourcing also provides flexibility in terms of budget and scalability, as businesses can choose from various packages and adjust their needs as they grow.",
    },
   
    
  ];

  const featuredcase = {
    title: "Social Media Marketing for AI Startup ",
    objective:"Develop a comprehensive social media marketing strategy, identify relevant target audience and platforms, create engaging content, increase brand awareness, website traffic, lead generation, and achieve a positive return on investment (ROI) for the AI startup.",
    challenge : "Reach more customers with ads and branding while creating an effective social media marketing strategy for the AI startup's products and services.",
    Process:"Aimtech Innovate's experts collaborated with the startup, conducted in-depth market research, identified the most promising platforms and target segments, created a tailored social media marketing plan, and implemented targeted advertising campaigns to reach the ideal customers.",
    Results: "By implementing a comprehensive social media marketing strategy, the AI startup experienced significant improvements in brand awareness, website traffic, lead generation, and achieved a positive return on investment (ROI) from social media marketing efforts.",
    learnings:"Aimtech Innovate's social media marketing campaign for the AI startup underscores the importance of a tailored approach that considers the unique needs and challenges of the client, thorough market research, identifying relevant platforms and target audience, and creating engaging content to achieve positive ROI.",
    img: "/png/Social.png",
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
    <Hcta title='Get a Free Social Media Audit Report' d1='Get your free consultation today.' d2='Learn how we can boost your online presence.' />
    <Footer />
  </>
  )
}
