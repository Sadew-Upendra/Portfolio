"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLink, PlayCircle, ImageIcon } from "lucide-react";
import { Project } from "@/types";

function RepoButtons({ repo }: { repo: Project["repo"] }) {
  if (!repo) return null;
  if (repo.type === "single") {
    return (
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-lamp hover:text-lamp"
      >
        <SiGithub size={16} />
      </a>
    );
  }
  return (
    <>
      <a
        href={repo.frontend}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Frontend repository"
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:border-lamp hover:text-lamp"
      >
        <SiGithub size={14} /> Frontend
      </a>
      <a
        href={repo.backend}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Backend repository"
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:border-lamp hover:text-lamp"
      >
        <SiGithub size={14} /> Backend
      </a>
    </>
  );
}

function LiveButton({ live }: { live: Project["live"] }) {
  if (!live) return null;
  const iconMap = { website: ExternalLink, video: PlayCircle, image: ImageIcon };
  const labelMap = { website: "Live", video: "Demo Video", image: "Preview" };
  const Icon = iconMap[live.type];
  return (
    <a
      href={live.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 rounded-full bg-lamp/10 px-3 py-1.5 text-xs font-semibold text-lamp transition hover:bg-lamp/20"
    >
      <Icon size={14} /> {labelMap[live.type]}
    </a>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {

  const CardInner = (
    <>
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-navy">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-muted">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-border bg-surface"
    >
    </motion.div>
  );
}
