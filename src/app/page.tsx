import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import About from "@/components/sections/About/About";
import Certificates from "@/components/sections/Certificates/Certificates";
import Education from "@/components/sections/Education/Education";
import { Hero } from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <Certificates/>
      </main>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}
