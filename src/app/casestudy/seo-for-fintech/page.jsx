import React from 'react'
import Navbar from '@/brandcomponents/global/Navbar'
import CaseLanding from '@/brandcomponents/casestudy/caselanding'
import Footer from '@/brandcomponents/global/footer'
export default function page() {

 const casedata = {
    pubdate:"Sep 10, 2023",
    title:"SEO For Fintech",
    description:"Aimtech Innovate successfully implemented a strategic SEO plan for a finance company, addressing their primary challenge of low backlinking within a month.",
    keywords:["Finance"],
    achievements:[{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""}],
    goal:{
        title:"",
        image:"",
        points:[
          "Enhance the finance company's online visibility and search engine ranking.",
          "Improve organic traffic and lead generation through effective SEO strategies.",
          "Address the issue of low backlinking to boost the company's authority and credibility in the industry.",
          "Finding broken links on relevant websites and suggesting the company's website as a replacement, creating valuable backlinks.",
        ],

    },
    help:"Aimtech Innovate audited a finance company's website, identifying SEO improvements. Their recommendations enhanced backlinking and SEO performance. Through strategic link-building and on-page optimization, Aimtech Innovate improved the company's search engine ranking, resulting in significant organic traffic and lead generation. This showcases Aimtech Innovate's SEO expertise in the competitive fintech industry. ",
 }

  return (
    <>
    <Navbar/>
    <CaseLanding casedata={casedata}/>
    <Footer/>
    </>
  )
}
