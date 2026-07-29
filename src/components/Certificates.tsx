"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";

const INK = "#EDEAE3";
const MUTED = "#B7B2A8";
const LAMP = "#E8A340";
const NAVY = "#232B3A";

const CERTIFICATES = [
  {
    title: "Comprehensive Master Java Developer",
    issuer: "IJSE",
    year: "2026",
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    year: "2025",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-black px-6 md:px-12 py-28 max-w-5xl mx-auto" style={{ color: INK }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "Poppins, sans-serif", color: LAMP }}
        className="text-xs tracking-widest mb-4"
      >
        CREDENTIALS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}
        className="text-3xl md:text-4xl mb-16"
      >
        Certificates
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl p-6 flex items-start gap-4"
            style={{ backgroundColor: NAVY }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: LAMP }}
            >
              <Award size={20} color="#1A1206" />
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }} className="text-lg leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: MUTED }}>
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}