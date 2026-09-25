"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Shield, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSc in Computer Science",
      subtitle: "University of Kelaniya",
    },
    {
      icon: Award,
      title: "Master Java Developer",
      subtitle: "IJSE Certified",
    },
    {
      icon: Users,
      title: "Active Leadership",
      subtitle: "CSSA & IEEE Member",
    },
    {
      icon: Shield,
      title: "Cybersecurity & AI",
      subtitle: "Specialization Areas",
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-y border-border/40 bg-surface/30 py-20 md:py-26 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lamp/5 blur-[100px]" />

      <Container>
        <SectionHeading 
          eyebrow="ABOUT ME" 
          title="Driven by clean architecture and practical solutions." 
        />

        <div className="mt-11 grid gap-9 lg:grid-cols-[300px_1fr] lg:gap-14 lg:items-center">
          
          {/* Profile Image Column — Cleaned (No overlaid text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="group relative mx-auto w-64 lg:mx-0 lg:w-full"
          >
            {/* Neumorphic / Glass Ambient Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-transparent bg-bg/60 p-2 shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),6px_6px_20px_rgba(0,0,0,0.8),inset_1px_1px_2px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              
              {/* Top ambient line accent on hover */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-lamp/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="h-full w-full overflow-hidden rounded-xl border border-border/40">
                <img
                  src={siteConfig.aboutImage}
                  alt={siteConfig.name}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Text & Highlights Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            {/* Improved Bio Narrative Text */}
            <div className="space-y-4 text-[15px] md:text-[17px] leading-relaxed text-muted/90">
              <p>
                I&apos;m a <span className="font-semibold text-ink">Computer Science undergraduate</span> at the University of Kelaniya, driven by a commitment to building robust, high-performance software systems. My engineering background spans full-stack web platforms, distributed backends, and desktop applications.
              </p>
              <p>
                With core foundations strengthened through a <span className="font-semibold text-ink">Comprehensive Master Java Developer</span> certification from IJSE, I focus on bridging scalable backend architectures with intuitive, modern UI design patterns.
              </p>
              <p>
                Beyond code, I contribute to community growth through student chapter involvement in the <span className="font-semibold text-ink">CSSA</span>, <span className="font-semibold text-ink">ISACA</span>, and <span className="font-semibold text-ink">IEEE</span>, while advancing my technical scope in <span className="text-lamp font-medium">Artificial Intelligence</span> and <span className="text-lamp font-medium">Cybersecurity</span>.
              </p>
            </div>

            {/* Quick Highlight Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group/card flex flex-col rounded-xl border border-border/50 bg-bg/50 p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[-4px_-4px_12px_rgba(255,255,255,0.03),4px_4px_14px_rgba(0,0,0,0.6)]"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-surface/80 text-lamp shadow-[inset_1px_1px_2px_rgba(255,255,255,0.05)] transition-colors group-hover/card:border-lamp/40">
                      <Icon size={16} />
                    </div>
                    <span className="font-display text-xs font-bold text-ink leading-tight">
                      {item.title}
                    </span>
                    <span className="mt-0.5 font-mono text-[10.5px] text-muted">
                      {item.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}