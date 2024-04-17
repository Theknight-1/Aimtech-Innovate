import Image from "next/image";
import Header from "../brandcomponents/global/Header"
import Hero from "../brandcomponents/landing/hero"
import Whyus from "../brandcomponents/landing/whyus"
import Footer from "@/brandcomponents/global/footer";
import Customer from "@/brandcomponents/landing/customer"
import Pland from "@/brandcomponents/practice/landing"
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen w-screen flex-col items-center justify-start ">
    <Header/>
    <Pland/>
    {/* <Hero/> */}
    {/* <Whyus/> */}
    </main>
    <Customer/>
    <Footer/>
    </>
  );
}
