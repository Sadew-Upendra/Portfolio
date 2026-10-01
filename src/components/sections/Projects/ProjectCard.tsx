"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, PlayCircle, ImageIcon, ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Project } from "@/types";

function RepoButtons({ repo }: { repo: Project["repo"] }) {
  if (!repo) return null;
  if (repo.type === "single") {
    return (
      <a href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-lamp">
        <Github size={14} /> GitHub
      </a>
    );
  }
  return (
    <>
      <a href={repo.frontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-lamp">
        <Github size={14} /> Frontend
      </a>
      <a href={repo.backend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-muted transition hover:text-lamp">
        <Github size={14} /> Backend
      </a>
    </>
  );
}

function LiveButton({ live }: { live: Project["live"] }) {
  if (!live) return null;
  const iconMap = { website: ExternalLink, video: PlayCircle, image: ImageIcon };
  const labelMap = { website: "Live Demo", video: "Demo Video", image: "Preview" };
  const Icon = iconMap[live.type];
  return (
    <a href={live.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-lamp transition hover:brightness-110">
      <Icon size={14} /> {labelMap[live.type]}
    </a>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasCaseStudy = Boolean(project.details);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;

  const CardInner = (
    <div className="flex h-auto md:h-full flex-col justify-between">
      {/* Top Media & Details Section */}
      <div className="flex flex-col">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-navy flex-shrink-0">
          {showImage ? (
            <img
              src={project.image!}
              alt={project.title}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl">
              {project.emoji ?? "💻"}
            </div>
          )}
          {hasCaseStudy && (
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
              <ArrowUpRight size={16} className="text-lamp" />
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <h3 className="font-display text-lg sm:text-xl font-bold line-clamp-2 md:line-clamp-1">{project.title}</h3>
          {project.subtitle && <p className="mt-0.5 text-xs sm:text-sm font-semibold text-lamp line-clamp-1">{project.subtitle}</p>}
          
          {/* Full description on mobile, clamped on desktop */}
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted md:line-clamp-3">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions Section */}
      <div
        className="mx-5 sm:mx-6 mb-5 sm:mb-6 pt-4 flex flex-wrap items-center gap-4 border-t border-border mt-4 md:mt-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <RepoButtons repo={project.repo} />
        <LiveButton live={project.live} />
        {!project.repo && !project.live && (
          <span className="font-mono text-xs text-muted/70">No public links yet</span>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col h-auto md:h-full overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-lamp/40"
    >
      {hasCaseStudy ? <Link href={`/projects/${project.slug}`} className="flex flex-col h-auto md:h-full">{CardInner}</Link> : CardInner}
    </motion.div>
  );
}