"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Code2, 
  Layers, 
  ArrowUpRight, 
  Terminal,
  Sparkles 
} from "lucide-react";

export function Services() {
  const servicePillars = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      desc: "CI/CD, Kubernetes & Docker",
    },
    {
      icon: Code2,
      title: "Full-Stack Web",
      desc: "Spring Boot & React Systems",
    },
    {
      icon: Layers,
      title: "Software Architecture",
      desc: "Layered DAO/DTO Desktop Apps",
    },
  ];

  return (
    <section id="services-preview" className="relative py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c0f] p-6 sm:p-10 backdrop-blur-md shadow-[-8px_-8px_24px_rgba(255,255,255,0.015),8px_8px_28px_rgba(0,0,0,0.8)]"
        >
          {/* Background Ambient Spotlights & Tech Grid */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-lamp/[0.08] blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

          {/* Header Row */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={13} className="text-lamp" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lamp">
                  CAPABILITIES & SCOPE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Engineering Services
              </h3>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-lamp px-5 py-2.5 font-mono text-xs font-bold text-[#1a1206] shadow-[0_0_20px_rgba(232,163,64,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_28px_rgba(232,163,64,0.4)]"
            >
              <span>EXPLORE CATALOG</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Service Pillar Preview Cards */}
          <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-3">
            {servicePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={i}
                  href="/services"
                  className="group relative rounded-2xl border border-white/[0.04] bg-[#060608]/80 p-4 transition-all duration-300 hover:border-lamp/30 hover:bg-[#0e0e12]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lamp/10 text-lamp border border-lamp/20 group-hover:scale-105 transition-transform duration-200">
                      <Icon size={18} />
                    </div>
                    <Sparkles size={12} className="text-white/10 group-hover:text-lamp transition-colors" />
                  </div>

                  <h4 className="mt-3 font-display text-sm font-bold text-ink group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-muted/70">
                    {pillar.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Footer Terminal Line */}
          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted/60 border-t border-white/[0.04] pt-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              STATUS // READY FOR NEW PROJECTS
            </span>
            <span className="hidden sm:inline text-lamp/80">
              Click any pillar to view detailed deliverables →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}