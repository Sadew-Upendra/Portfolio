import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import Certificates from "@/components/sections/Certificates/Certificates";
import Education from "@/components/sections/Education/Education";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <Education/>
        <Projects/>
        <Certificates/>
      </main>
      <ScrollToTopButton/>
    </>
  )
}
