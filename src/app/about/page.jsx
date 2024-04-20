'use client'
import React, { useState } from 'react';
import Header from '@/brandcomponents/global/Header'
import Footer from '@/brandcomponents/global/footer'
import Testimonial from '@/brandcomponents/landing/testimonial'
import Accordion from '@/uicomponent/accordian'
export default function About() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const accordionData = [
      { title: 'Where is your office located?', content: 'We are located in Nepal and US.' },
      { title: 'Do you serve in US ?', content: 'Yes , we do serve in US.' },
      { title: 'Do you serve in Caneda ?', content: 'Yes , we do serve in Caneda.' },
    ];
    return (
        <>
            <Header/>
            <Testimonial/>
            <div className="container flex flex-col gap-y-4 mx-auto p-4">
                {accordionData.map((item, index) => (
                    <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    index={index}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    />
                ))}
                </div>
            
            <Footer/>

        </>
    )
}
