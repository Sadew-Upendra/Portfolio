"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

// Supports either iconUrl or custom badgeImage
const digitalBadges = [
  {
    id: "aws-badge",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    // badgeImage: "/images/badges/aws.png",
    badgeImage: undefined,
    verifyUrl: "#",
  },
  {
    id: "microsoft-badge",
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    badgeImage: undefined,
    verifyUrl: "#",
  },
  {
    id: "java-badge",
    title: "Java Certified Developer",
    issuer: "Oracle",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    badgeImage: undefined,
    verifyUrl: "#",
  },
];

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-12 sm:py-20 overflow-hidden">
      {/* Natural ambient atmospheric background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-lamp/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <Container className="max-w-7xl px-4 sm:px-6 relative z-10">
        <SectionHeading eyebrow="BACKGROUND" title="Education Journey" />

        {/* Editorial Asymmetric Layout */}
        <div className="mt-8 lg:mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Natural Flowing Timeline (7 cols) - UNCHANGED */}
          <div className="lg:col-span-7 relative pl-5 sm:pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-lamp/60 via-border to-transparent" />

            <div className="space-y-4 sm:space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative group rounded-2xl p-3.5 sm:p-5 transition-all duration-300 bg-surface/30 border border-white/[0.03] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.02),inset_-3px_-3px_7px_rgba(0,0,0,0.5),0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[inset_3px_3px_6px_rgba(255,255,255,0.03),inset_-4px_-4px_8px_rgba(0,0,0,0.6),0_12px_28px_rgba(0,0,0,0.35)] hover:border-lamp/20"
                >
                  {/* Timeline node dot */}
                  <div className="absolute -left-[29px] sm:-left-[41px] top-5 sm:top-6 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full border border-lamp bg-bg shadow-[0_0_12px_rgba(232,163,64,0.4)]">
                    <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-lamp" />
                  </div>

                  {/* Content details */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="font-display text-base sm:text-[1.3rem] font-bold text-ink tracking-tight transition-colors duration-300 group-hover:text-lamp">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted font-medium">
                      <MapPin size={13} className="text-muted/70 flex-shrink-0 sm:w-[14px] sm:h-[14px]" />
                      <span>{item.place}</span>
                    </div>

                    <div className="pt-0.5 pb-0.5 flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-lamp font-medium tracking-wide">
                      <Calendar size={12} className="sm:w-[13px] sm:h-[13px]" />
                      <span>{item.period}</span>
                    </div>

                    {item.description && (
                      <p className="text-[11px] sm:text-sm leading-relaxed text-muted/90 max-w-2xl font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Centered Badges Container (5 cols) */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center justify-center text-center space-y-5"
          >

            <div className="flex items-center gap-2">
              <Award size={15} className="text-muted" />
              <h4 className="font-mono text-[11px] font-medium text-muted/80 uppercase tracking-widest">
                Verified Credentials
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              {digitalBadges.map((badge, idx) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="group relative flex h-14 w-14 items-center justify-center rounded-xl bg-surface/20 border border-white/[0.04] p-3 transition-all duration-300 hover:border-white/10 hover:bg-surface/40 hover:shadow-lg"
                >

                  <img
                    src={badge.badgeImage || badge.iconUrl}
                    alt={badge.title}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out z-30">
                    <div className="bg-bg/95 border border-white/10 backdrop-blur-md rounded-md px-2.5 py-1.5 shadow-xl whitespace-nowrap text-center">
                      <p className="font-display text-[11px] font-semibold text-ink">
                        {badge.title}
                      </p>
                      <p className="font-mono text-[9px] text-muted">
                        {badge.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          */}

        </div>
      </Container>
    </section>
  );
}