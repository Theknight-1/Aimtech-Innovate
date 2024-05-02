import React from 'react'
import Navbar from '@/brandcomponents/global/Navbar'
import CaseStudies from '@/brandcomponents/landing/casestudy'
import CaseLanding from '@/brandcomponents/casestudy/caselanding'
import Footer from '@/brandcomponents/global/footer'
export default function page() {
  return (
    <>
    <Navbar/>
    <CaseLanding/>
    <Footer/>
    </>
  )
}
