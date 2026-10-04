import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { About } from "@/components/sections/About/About";
import { Certificates } from "@/components/sections/Certificates/Certificates";
import { Contact } from "@/components/sections/Contact/Contact";
import { Education } from "@/components/sections/Education/Education";
import { GallerySection } from "@/components/sections/Gallery/GallerySection";
import { GithubStats } from "@/components/sections/GithubStats/GithubStats";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Skills } from "@/components/sections/Skills/Skills";
import { Chatbot } from "@/components/chatbot/Chatbot";
import { Experience } from "@/components/sections/Experience/Experience";
import { Services } from "@/components/sections/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        {/* <Experience/> */}
        <Skills/>
        <Projects/>
        <Certificates/>
        <GithubStats/>
        <GallerySection/>
        {/* <Services/> */}
        <Contact/>
      </main>
      <Footer/>
      {/* <Chatbot/> */}
      <ScrollToTopButton/>
    </>
  )
}
