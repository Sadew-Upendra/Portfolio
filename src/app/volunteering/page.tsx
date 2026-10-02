"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { volunteering } from "@/data/volunteering";

export default function VolunteeringPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 pt-32 md:pt-36">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 font-mono text-xs font-bold tracking-[0.25em] text-lamp uppercase">
              COMMUNITY & LEADERSHIP
            </p>
            <h1 className="mb-3 font-display text-3xl sm:text-4xl font-black text-ink tracking-tight">
              Volunteering
            </h1>
            <p className="mb-10 w-full text-xs sm:text-sm text-muted leading-relaxed">
              Contributing to technical societies, organizing cybersecurity competitions, and collaborating with developer communities across the University of Kelaniya.
            </p>
          </motion.div>

          <div className="space-y-6">
            {volunteering.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/30 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-surface/50 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.02),inset_-3px_-3px_7px_rgba(0,0,0,0.5)]"
              >
                {/* Organization Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <span className="inline-block font-mono text-[10px] font-bold tracking-widest text-lamp uppercase bg-lamp/10 border border-lamp/20 px-2 py-0.5 rounded-md w-fit mb-1.5">
                      {org.mainBadge}
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink transition-colors duration-200 group-hover:text-zinc-200">
                      {org.organization}
                    </h2>
                    <p className="font-mono text-xs text-muted/70">{org.location}</p>
                  </div>

                  <span className="font-mono text-xs text-muted/80 bg-surface/50 border border-white/[0.04] px-2.5 py-1 rounded-lg">
                    {org.overallPeriod}
                  </span>
                </div>

                {/* Sub-Roles List */}
                <div className="mt-5 space-y-6">
                  {org.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative pl-4 border-l border-lamp/30">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-lamp" />

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-mono text-xs sm:text-sm font-semibold text-lamp/90">
                          {role.title}
                        </h3>
                        {role.badge && (
                          <span className="font-mono text-[9px] text-muted/80 uppercase bg-surface/80 border border-white/[0.05] px-2 py-0.5 rounded">
                            {role.badge}
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                        {role.description}
                      </p>

                      {/* Highlights Bullet Points */}
                      {role.highlights && role.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1.5 border-t border-white/[0.04] pt-2.5">
                          {role.highlights.map((h, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 font-mono text-xs text-muted/90">
                              <span className="text-lamp mt-0.5">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      {/* <Footer /> */}
    </>
  );
}