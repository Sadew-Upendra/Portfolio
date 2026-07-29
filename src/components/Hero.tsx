"use client";

import { motion } from "motion/react";
import { ChevronDown, Mouse, Volume2 } from "lucide-react";

const IMAGE_SRC = "/hero-workspace.png";

const INK = "#EDEAE3";       
const MUTED = "#B7B2A8";     
const LAMP = "#E8A340";      
const NAVY = "#232B3A";     

function SceneBackground() {
  return (
    <div className="absolute inset-0">
      <img
        src={IMAGE_SRC}
        alt="3D render of a developer workspace at night, character at desk with dual monitors"
        className="w-full h-full object-cover"
      />
      {/* Gradient so text stays readable over the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.55) 45%, rgba(10,10,12,0.15) 70%, rgba(10,10,12,0) 100%)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <SceneBackground />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-8">
        <div
          className="hidden md:flex items-center gap-2 rounded-full px-2 py-2 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors hover:bg-white/10"
              style={{ color: INK }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="px-6 py-3 rounded-full font-bold text-sm shadow-md hover:brightness-110 transition"
            style={{ backgroundColor: LAMP, color: "#1A1206" }}
          >
            GET IN TOUCH
          </button>
          <button
            aria-label="Toggle sound"
            className="w-11 h-11 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: INK, color: INK }}
          >
            <Volume2 size={18} />
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: INK }}
            className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
          >
            Sadew
            <br />
            Upendra
          </h1>

          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: -4 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="inline-block mt-6 px-5 py-2 rounded-md font-bold tracking-wide"
            style={{ backgroundColor: NAVY, color: LAMP, fontFamily: "Poppins, sans-serif" }}
          >
            FULL-STACK DEVELOPER
          </motion.span>

          <p className="mt-8 max-w-sm text-base md:text-lg" style={{ color: MUTED }}>
            CS undergraduate crafting full-stack apps — Spring Boot,
            React, and everything in between.
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-1 mt-10 pb-10"
        style={{ color: INK }}
      >
        <Mouse size={20} />
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
