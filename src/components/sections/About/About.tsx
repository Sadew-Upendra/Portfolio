"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <Container>
        <SectionHeading eyebrow="ABOUT" title="A developer who cares about the details." />

        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto aspect-square w-56 overflow-hidden rounded-3xl border border-border md:mx-0 md:w-full"
          >
            {/* Replace with your photo at public/images/profile/profile.jpg */}
            <img
              src={siteConfig.aboutImage}
              alt={siteConfig.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl"
          >
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I&apos;m a Computer Science undergraduate at the University of Kelaniya with a
              background spanning full-stack web development, desktop applications, and a
              growing interest in AI/ML and cybersecurity. I hold a Comprehensive Master Java
              Developer certification from IJSE and a Diploma in Information Technology from
              IMBS Green Campus.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Beyond coursework, I&apos;m active in my university&apos;s Computer Science Student
              Association (CSSA) and ISACA student chapter, and I&apos;m an IEEE student member.
              I care about building software that&apos;s well-structured and genuinely useful —
              not just functional.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
