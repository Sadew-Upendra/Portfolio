"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const FACTS = [
  { label: "Based in", value: "Sri Lanka" },
  { label: "Studying at", value: "University of Kelaniya" },
  { label: "Focus", value: "Full-stack, AI/ML, Cloud" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* 3D crystal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 h-[320px] w-full sm:h-[380px] lg:order-1 lg:h-[420px]"
        >
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <p className="font-mono text-sm text-accent-blue">About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            A builder at the intersection of software and ideas
          </h2>

          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            I&apos;m a Computer Science undergraduate at the University of Kelaniya&apos;s
            Faculty of Computing and Technology, where I&apos;m developing a strong foundation
            across software engineering, artificial intelligence, and cloud systems.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Before starting my degree, I completed the Comprehensive Master Java Developer
            program at IJSE and a Diploma in Information Technology at IMBS Green Campus —
            experience that shaped how I approach building layered, production-style
            applications rather than one-off assignments. Outside of coursework, I build
            full-stack projects spanning Java/Spring Boot, the MERN stack, and native
            desktop applications, and I&apos;m steadily expanding into cybersecurity and
            DevOps practices.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="font-mono text-xs text-text-muted">{fact.label}</p>
                <p className="mt-1 text-sm font-medium text-text">{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
