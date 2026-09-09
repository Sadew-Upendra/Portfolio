"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { SkillIcon } from "./SkillIcon";
import { SkillCategory } from "@/types";

// Filter out "Concepts" from main cards grid
const categoryOrder: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases & Tools",
  "DevOps & Cloud",
  "AI & Security"
];

const concepts = skills.filter((s) => s.category === "Concepts");

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface/30 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="CAPABILITIES" title="Technical Stack" />

        {/* Main Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((category, categoryIdx) => {
            const categoryItems = skills.filter((s) => s.category === category);
            if (categoryItems.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIdx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-bg/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[-6px_-6px_14px_rgba(255,255,255,0.03),6px_6px_18px_rgba(0,0,0,0.6),inset_1px_1px_2px_rgba(255,255,255,0.08)]"
              >
                {/* Top glow accent line */}
                <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-lamp/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="mb-5 border-b border-border/40 pb-3">
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-muted uppercase">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {categoryItems.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center gap-2 rounded-xl border border-border/50 bg-surface/60 px-3 py-2 text-xs font-medium text-ink transition-all duration-200 hover:border-transparent hover:bg-surface hover:text-lamp hover:shadow-[-3px_-3px_8px_rgba(255,255,255,0.03),3px_3px_8px_rgba(0,0,0,0.5),inset_1px_1px_1px_rgba(255,255,255,0.1)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                      >
                        <SkillIcon iconKey={skill.iconKey} size={16} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Concepts Capsule Design */}
        {concepts.length > 0 && (
          <div className="mt-16 border-t border-border/40 pt-10">
            <p className="mb-6 text-center font-mono text-xs font-semibold tracking-widest text-muted uppercase">
              Core Concepts
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {concepts.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-full border border-border/60 bg-bg/60 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-lamp hover:shadow-[-4px_-4px_10px_rgba(255,255,255,0.03),4px_4px_12px_rgba(0,0,0,0.5),inset_1px_1px_1px_rgba(255,255,255,0.08)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                >
                  <SkillIcon iconKey={skill.iconKey} size={18} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}