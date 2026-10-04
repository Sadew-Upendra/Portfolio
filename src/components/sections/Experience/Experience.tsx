"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  MapPin, 
  Calendar, 
  GitBranch, 
  Sparkles, 
  CornerDownRight,
  Maximize2,
  Minus,
  X,
  Play
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const [selectedId, setSelectedId] = useState<string>(
    experience[0]?.id || ""
  );

  const activeExperience =
    experience.find((item) => item.id === selectedId) || experience[0];

  return (
    <section id="experience" className="relative scroll-mt-20 py-16 sm:py-24 overflow-hidden bg-bg">
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lamp/[0.035] blur-[160px] rounded-full pointer-events-none" />

      <Container className="max-w-7xl px-4 sm:px-6 relative z-10">
        <SectionHeading eyebrow="CAREER PATH" title="Work Experience" />

        <div className="mt-10 lg:mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Fixed-Height Terminal Directory Selector (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            
            {/* Terminal Directory Header */}
            <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl bg-[#09090c] border border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="font-mono text-[11px] text-muted/70 ml-2">
                  bash - /dev/infra/companies
                </span>
              </div>
              <span className="font-mono text-[9px] text-lamp bg-lamp/10 border border-lamp/20 px-2 py-0.5 rounded uppercase">
                {experience.length} LOGS
              </span>
            </div>

            {/* Left Scroll Area: Fixed Height (~285px) */}
            <div className="h-[285px] overflow-y-auto pr-1 space-y-2.5 custom-scrollbar bg-[#050507] p-2 rounded-b-2xl border-x border-b border-white/[0.08]">
              {experience.map((company, index) => {
                const isSelected = company.id === selectedId;

                return (
                  <motion.button
                    key={company.id}
                    onClick={() => setSelectedId(company.id)}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    className={`group relative text-left w-full p-3.5 rounded-xl transition-all duration-200 border font-mono ${
                      isSelected
                        ? "bg-[#111116] border-lamp/50 text-white shadow-[0_0_20px_rgba(232,163,64,0.12)]"
                        : "bg-[#09090c] border-white/[0.04] text-muted/80 hover:border-white/10 hover:bg-[#0d0d12]"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-lamp rounded-l-xl shadow-[0_0_8px_#E8A340]" />
                    )}

                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-lamp font-bold flex items-center gap-1">
                        <Play size={9} className="fill-lamp" />
                        node_0{index + 1}.log
                      </span>
                      <span className="text-muted/60 flex items-center gap-1">
                        <Calendar size={10} />
                        {company.totalPeriod}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="mt-1.5 font-display text-sm font-bold text-ink transition-colors group-hover:text-white">
                      {company.company}
                    </h3>

                    {/* All Roles Grouped Inside Card */}
                    <div className="mt-1.5 space-y-0.5 border-t border-white/[0.04] pt-1.5">
                      {company.roles.map((r, rIdx) => (
                        <div key={r.id || rIdx} className="flex items-center justify-between text-[11px]">
                          <span className="font-sans font-medium text-lamp/90">
                            › {r.role}
                          </span>
                          <span className="text-[9px] text-muted/60 font-mono">
                            {r.period}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-muted/70">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-lamp/80" />
                        {company.location}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded">
                        {company.roles.length} {company.roles.length > 1 ? "ROLES" : "ROLE"}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom CLI Directory Info Bar */}
            <div className="p-3 rounded-xl bg-[#09090c] border border-white/[0.06] font-mono text-[10px] text-muted/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <GitBranch size={12} className="text-lamp/80" />
                <span>PATH: /var/log/career/production</span>
              </div>
              <span className="text-emerald-400">READY</span>
            </div>

          </div>

          {/* Right Column: Dynamic Terminal Output Inspector (7 Cols) */}
          <div className="lg:col-span-7 relative flex">
            <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#050507] overflow-hidden flex flex-col justify-between shadow-[-10px_-10px_30px_rgba(255,255,255,0.01),10px_10px_30px_rgba(0,0,0,0.8)] font-mono">
              
              {/* Terminal Frame Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#09090c] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-lamp" />
                  <span className="text-xs text-ink/90 font-bold">
                    sadew@cluster:~ inspect --company={activeExperience?.id}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted/50">
                  <Minus size={12} />
                  <Maximize2 size={11} />
                  <X size={12} />
                </div>
              </div>

              {/* Fixed Height Inspection Body with Smooth Auto-Scroll (`h-[480px] overflow-y-auto`) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExperience?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-8 h-[480px] overflow-y-auto custom-scrollbar flex flex-col justify-between space-y-6"
                >
                  <div>
                    {/* Command Prompt */}
                    <div className="flex items-center gap-2 text-xs text-muted/60 mb-4 pb-2 border-b border-white/[0.04]">
                      <span className="text-emerald-400 font-bold">root@devops-node:~#</span>
                      <span className="text-lamp">systemctl status {activeExperience?.id}.service</span>
                    </div>

                    {/* Company Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-muted/70">
                          <MapPin size={12} className="text-lamp" />
                          <span>{activeExperience?.location}</span>
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-black text-ink tracking-tight mt-1">
                          {activeExperience?.company}
                        </h2>
                      </div>

                      <div className="text-xs text-lamp bg-[#09090c] px-3.5 py-1.5 rounded-lg border border-lamp/20 font-bold">
                        {activeExperience?.totalPeriod}
                      </div>
                    </div>

                    {/* Roles Timeline Flow */}
                    <div className="space-y-6">
                      {activeExperience?.roles.map((r, rIdx) => (
                        <div
                          key={r.id || rIdx}
                          className="relative pl-4 border-l border-lamp/40 space-y-3"
                        >
                          <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-lamp shadow-[0_0_8px_#E8A340]" />

                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <h3 className="font-sans text-base sm:text-lg font-bold text-ink">
                                {r.role}
                              </h3>
                              <span className="font-mono text-[10px] text-lamp uppercase bg-lamp/10 border border-lamp/20 px-2 py-0.5 rounded mt-1 inline-block">
                                {r.type}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-muted/70 bg-[#09090c] border border-white/[0.05] px-2.5 py-1 rounded-md">
                              {r.period}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-muted/90 leading-relaxed font-sans">
                            {r.description}
                          </p>

                          {/* Key Outcomes */}
                          {r.highlights && r.highlights.length > 0 && (
                            <div className="space-y-1.5 bg-[#09090c] border border-white/[0.04] p-3 rounded-xl">
                              <div className="flex items-center gap-1.5 text-lamp text-[10px] font-bold uppercase">
                                <Sparkles size={11} />
                                <span>AUTOMATION & INFRASTRUCTURE IMPACT</span>
                              </div>
                              <ul className="space-y-1.5 mt-1">
                                {r.highlights.map((h, hIdx) => (
                                  <li key={hIdx} className="flex items-start gap-2 text-xs text-muted/85">
                                    <CornerDownRight size={11} className="text-lamp flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed font-sans text-xs">{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tech Stack */}
                          {r.skills && r.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {r.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[10px] text-zinc-300 bg-[#09090c] border border-white/[0.08] px-2.5 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Terminal Prompt Footer Line */}
                  <div className="flex items-center gap-2 text-xs pt-4 border-t border-white/[0.04]">
                    <span className="text-emerald-400 font-bold">sadew@devops-cluster:~$</span>
                    <span className="w-2 h-4 bg-lamp animate-pulse inline-block" />
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
