"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { SkillIcon } from "./SkillIcon";
import { SkillCategory } from "@/types";

const categories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases & Tools",
  "DevOps & Cloud",
  "AI & Security",
  "Concepts",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-surface/40 py-28">
      <Container>
        <SectionHeading eyebrow="CAPABILITIES" title="Skills" />

        <div className="space-y-12">
          {categories.map((category) => {
            const items = skills.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <p className="mb-4 font-mono text-xs tracking-widest text-muted">
                  {category.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.4 }}
                      className="flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2.5 text-sm text-ink"
                    >
                      <SkillIcon iconKey={skill.iconKey} size={18} />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
