"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const INK = "#EDEAE3";
const MUTED = "#B7B2A8";
const LAMP = "#E8A340";
const BORDER = "#2A2D33";

const PROJECTS = [
  {
    title: "FoodieExpress",
    desc: "Full-stack food ordering system with JWT auth, layered Spring Boot architecture, and a React TypeScript frontend.",
    stack: ["Spring Boot 3", "MySQL", "React", "TypeScript"],
    link: "#",
  },
  {
    title: "GearRentPro",
    desc: "Equipment rental platform handling real-world booking and inventory flows.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Sarasavi Library MS",
    desc: "Desktop library management system with three-tier architecture, reservation copy-locking, and role-based access.",
    stack: ["C#", ".NET Framework", "SQL Server"],
    link: "https://github.com/Sadew-Upendra/Sarasavi_LibraryMS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 md:px-12 py-28 max-w-5xl mx-auto" style={{ color: INK }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "Poppins, sans-serif", color: LAMP }}
        className="text-xs tracking-widest mb-4"
      >
        SELECTED WORK
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}
        className="text-3xl md:text-4xl mb-16"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-t"
            style={{ borderColor: BORDER }}
          >
            <div className="flex items-baseline gap-6">
              <span style={{ fontFamily: "monospace", color: LAMP }} className="text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  className="text-2xl md:text-3xl group-hover:opacity-80 transition-opacity"
                >
                  {project.title}
                </h3>
                <p className="mt-1 max-w-md" style={{ color: MUTED }}>
                  {project.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-10 md:pl-0">
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs" style={{ color: MUTED, fontFamily: "monospace" }}>
                    {s}
                  </span>
                ))}
              </div>
              <ExternalLink size={16} style={{ color: MUTED }} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}