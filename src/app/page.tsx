import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { About } from "@/components/sections/About/About";
import { Certificates } from "@/components/sections/Certificates/Certificates";
import { Contact } from "@/components/sections/Contact/Contact";
import { Education } from "@/components/sections/Education/Education";
import { GithubStats } from "@/components/sections/GithubStats/GithubStats";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";

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
        <GithubStats/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}
