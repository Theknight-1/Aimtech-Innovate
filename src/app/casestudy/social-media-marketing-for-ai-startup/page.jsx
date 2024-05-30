'use client'
import { NextSeo } from 'next-seo';
import React from 'react'
import Navbar from '@/brandcomponents/global/Navbar'
import CaseLanding from '@/brandcomponents/casestudy/caselanding'
import Footer from '@/brandcomponents/global/footer'
export default function page() {

const casedata = {
    pubdate:"May 12, 2024",
    title:"Social Media Marketing for AI Startup",
    description:"Aimtech Innovate resolved many problems for AI startups and provided them with the best target audience and regional market research to create the most effective marketing campaigns.",
    keywords:["Social Media Marketing","AI Solutions","Market Research","Digital Marketing","Startup Consulting"],
    achievements:[{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""}],
    goal:{
        title:"",
        image:"",
        points:[
          "Develop a comprehensive social media marketing strategy for the AI startup",
          "Identify the most relevant target audience and platforms for the startup's products and services",
          "Create engaging and informative content to showcase the startup's expertise and offerings",
          "Increase brand awareness, website traffic, and lead generation through social media channels",
          "Achieve a positive return on investment (ROI) from the social media marketing efforts",
        ],

    },
    help:"Aimtech Innovate's social media marketing experts collaborated closely with the AI startup to understand their unique challenges, target audience, and business goals. We conducted in-depth market research to identify the most promising platforms and target segments for the startup's offerings.",
}

  return (
    <>
    <NextSeo 
    title='Social Media Marketing for AI Startup'
    description='Aimtech Innovate resolved many problems for AI startups and provided them with the best target audience and regional market research to create the most effective marketing campaigns.'
    additionalMetaTags={[
      {
        name: 'keywords',
        content: 'Social Media Marketing,AI Solutions,Market Research,Digital Marketing,Startup Consulting',
      },
      {
        name: 'author',
        content: 'Aimtech Innovate',
      },
    ]}
    />
    <Navbar/>
    <CaseLanding casedata={casedata}/>
    <Footer/>
    </>
  )
}
