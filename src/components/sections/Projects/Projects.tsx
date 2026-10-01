"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-32 overflow-hidden">
      <Container>
        {/* Header with Title on Left and Navigation Controls on Top Right */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects" />

          {/* Top Right Navigation Arrows (Sleek Dark Theme) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface/30 border border-white/[0.05] text-muted transition-all duration-300 hover:border-white/20 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface/30 border border-white/[0.05] text-muted transition-all duration-300 hover:border-white/20 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Projects Container with Uniform Alignment */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth items-stretch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="w-[300px] sm:w-[350px] md:w-[380px] flex-shrink-0 snap-start flex flex-col"
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}