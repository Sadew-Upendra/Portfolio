"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const DEFAULT_COUNT = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, DEFAULT_COUNT);
  const hiddenCount = projects.length - DEFAULT_COUNT;

  return (
    <section id="projects" className="scroll-mt-24 py-28">
      <Container>
        <SectionHeading eyebrow="SELECTED WORK" title="Projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-lamp hover:text-lamp"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  See More ({hiddenCount}) <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
