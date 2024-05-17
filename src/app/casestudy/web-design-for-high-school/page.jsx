import React from 'react'
import Navbar from '@/brandcomponents/global/Navbar'
import CaseLanding from '@/brandcomponents/casestudy/caselanding'
import Footer from '@/brandcomponents/global/footer'
export default function page() {

 const casedata = {
    pubdate:"Feb 12, 2024",
    title:"Web Design For High School",
    description:"Aimtech Innovate helped create a best-in-class website for a high school, achieving remarkable results.",
    keywords:["Education","Website Design","Marketing, Branding","SEO","Modern UI"],
    achievements:[{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""},{h1:"",h2:"",h3:""}],
    goal:{
        title:"",
        image:"",
        points:[
          "Create a modern, responsive website representing the high school's brand and values.",
          "Improve the school's online presence and accessibility for students, parents, and the community.",
          "Provide a platform to showcase the school's academic programs, extracurricular activities, and achievements.",
          "Enhance communication and engagement with stakeholders through the website's features and content.",
        ],

    },
    help:"Aimtech Innovate's web design experts collaborated with the high school to develop a clean, intuitive interface aligned with the school's branding and optimized for mobile devices. The website features a soft scroll design and ongoing support ensures it remains up-to-date and secure. The partnership has resulted in a modern, engaging website that effectively communicates the school's brand and provides valuable information, as evidenced by the low bounce rate.",
 }

  return (
    <>
    <Navbar/>
    <CaseLanding casedata={casedata}/>
    <Footer/>
    </>
  )
}
