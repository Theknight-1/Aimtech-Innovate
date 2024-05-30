'use client'
import { NextSeo } from 'next-seo';
import React from 'react'
import Navbar from '@/brandcomponents/global/Navbar'
import CaseLanding from '@/brandcomponents/casestudy/caselanding'
import Footer from '@/brandcomponents/global/footer'
export default function page() {

 const casedata = {
    pubdate:"Dec 21, 2023",
    title:"CRM For Fintech",
    description:"Aimtech Innovate created an AI-enabled CRM for a fintech company, enabling smart decisions based on accurate and real-time data. The CRM provides deep insights into sales metrics, revenue forecasts, team performance analysis, and custom dashboards.",
    keywords:["Finance","CRM","AI","Data Analytics"],
    achievements:[{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""}],
    goal:{
        title:"",
        image:"",
        points:[
          "Develop an AI-powered CRM system to streamline sales processes and improve ",
          "decision-making",
          "Gain deeper insights into sales data to optimize revenue forecasting and team performance",
          "Provide a user-friendly platform for managing customer relationships and interactions",
          "Integrate the CRM with existing fintech systems and tools",
        ],

    },
    help:"Aimtech Innovate's experts developed an AI-powered CRM for the fintech company, using machine learning to analyze real-time sales data for accurate forecasts and performance insights. Integrated seamlessly with existing systems, the CRM offers custom dashboards for informed decision-making, streamlining data flow and enhancing user experience for efficient customer relationship management.",
 }

  return (
    <>
    <NextSeo 
    title='CRM For Fintech'
    description='Aimtech Innovate created an AI-enabled CRM for a fintech company, enabling smart decisions based on accurate and real-time data. The CRM provides deep insights into sales metrics, revenue forecasts, team performance analysis, and custom dashboards.'
    additionalMetaTags={[
      {
        name: 'keywords',
        content: 'Finance,CRM,AI,Data Analytics',
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
