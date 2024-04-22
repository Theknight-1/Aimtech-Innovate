import React from 'react'
import Header from '@/brandcomponents/global/Header'
import CaseStudies from '@/brandcomponents/landing/casestudy'

export default function CaseStudy() {
  return (
    <>
    <main className="flex min-h-screen w-screen flex-col items-center justify-start ">
        <Header/>
        <CaseStudies/>
    </main>
    </>
  )
}
