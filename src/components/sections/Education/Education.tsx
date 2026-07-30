"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow="BACKGROUND" title="Education" />

        <div>
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-start gap-5 border-t border-border py-7"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy">
                <GraduationCap size={18} className="text-lamp" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-muted">{item.place}</p>
                <p className="mt-1 font-mono text-sm text-lamp">{item.period}</p>
                {item.description && <p className="mt-2 text-sm text-muted">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}