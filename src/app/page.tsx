import Image from "next/image";
import Header from "../brandcomponents/global/Header"
import Hero from "../brandcomponents/landing/hero"
import Whyus from "../brandcomponents/landing/whyus"
import Footer from "@/brandcomponents/global/footer";
import Customer from "@/brandcomponents/landing/customer"
import Pland from "@/brandcomponents/practice/landing"
import Testimonial from "@/brandcomponents/landing/testimonial"
import Carousel from "@/brandcomponents/practice/carousel"
import GradientSection from "@/brandcomponents/practice/gradientsection"
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen w-screen flex-col items-center justify-start ">
     
    <Header/>
    {/* <Carousel/> */}
    <GradientSection/>
    <Testimonial/>
    <Pland/>
    {/* <Hero/> */}
    {/* <Whyus/> */}
    </main>
    <Customer/>
    <Footer/>
    </>
  );
}
