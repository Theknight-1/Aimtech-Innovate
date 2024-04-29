'use client'
import React, { useState } from 'react';
import Navbar from '@/brandcomponents/global/Navbar'
import Footer from '@/brandcomponents/global/footer'
import Testimonial from '@/brandcomponents/landing/testimonial'
import Map from '@/brandcomponents/aboutUs/map'
import Accordion from '@/uicomponent/accordian'
import Pland from "@/brandcomponents/practice/landing"

export default function About() {
   
    return (
        <>
            <Navbar/>
            <Testimonial/>
            <Map/>
            <Pland/>
            <Footer/>
        </>
    )
}
