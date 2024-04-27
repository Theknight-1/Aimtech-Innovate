'use client'
import React, { useState } from 'react';
import Header from '@/brandcomponents/global/Header'
import Footer from '@/brandcomponents/global/footer'
import Testimonial from '@/brandcomponents/landing/testimonial'
import Accordion from '@/uicomponent/accordian'
import Pland from "@/brandcomponents/practice/landing"
export default function About() {
   
    return (
        <>
            <Header/>
            <Testimonial/>
            <Pland/>
            <Footer/>
        </>
    )
}
