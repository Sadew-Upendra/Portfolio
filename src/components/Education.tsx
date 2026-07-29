"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const INK = "#EDEAE3";
const MUTED = "#B7B2A8";
const LAMP = "#E8A340";
const BORDER = "#2A2D33";

const EDUCATION = [
  {
    title: "BSc (Hons) Computer Science",
    place: "Faculty of Computing and Technology, University of Kelaniya",
    period: "Oct 2025 — Present",
  },
  {
    title: "CMJD - Comprehensive Master Java Developer",
    place: "IJSE",
    period: "Completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-black px-6 md:px-12 py-28 max-w-4xl mx-auto" style={{ color: INK }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "Poppins, sans-serif", color: LAMP }}
        className="text-xs tracking-widest mb-4"
      >
        BACKGROUND
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}
        className="text-3xl md:text-4xl mb-16"
      >
        Education
      </motion.h2>

      <div>
        {EDUCATION.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex items-start gap-5 py-7 border-t"
            style={{ borderColor: BORDER }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#232B3A" }}>
              <GraduationCap size={18} color={LAMP} />
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }} className="text-xl">
                {item.title}
              </h3>
              <p className="mt-1" style={{ color: MUTED }}>{item.place}</p>
              <p className="mt-1 text-sm" style={{ color: LAMP, fontFamily: "monospace" }}>{item.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}