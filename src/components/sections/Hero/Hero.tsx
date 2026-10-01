"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mouse, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { TypewriterTitle } from "./TypewriterTitle";

function SceneBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-workspace-1.png"
        className="h-full w-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        {/* Fallback image in case the video format is unsupported */}
        <img
          src="/images/hero-workspace-1.png"
          alt="Developer workspace background"
          className="h-full w-full object-cover"
        />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.65) 45%, rgba(10,10,12,0.2) 70%, rgba(10,10,12,0.1) 100%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <SceneBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pt-12 pb-16 md:px-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="mt-4 font-display text-6xl font-black leading-[0.95] md:text-7xl lg:text-[5.5rem]">
            {siteConfig.name.split(" ")[0]}
            <br />
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </h1>

          <div className="mt-4 text-2xl text-lamp md:text-3xl lg:text-4xl">
            <TypewriterTitle roles={siteConfig.roles} />
          </div>

          <p className="mt-8 max-w-sm text-base text-muted md:text-lg">{siteConfig.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-lamp px-6 py-3 text-sm font-bold text-[#1A1206] shadow-md transition hover:brightness-110"
            >
              VIEW PROJECTS
            </a>
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/60 px-6 py-3 text-sm font-bold text-ink transition hover:border-lamp hover:text-lamp"
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-ink"
        aria-label="Scroll to About section"
      >
        <Mouse size={20} />
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}

/* 
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mouse, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { TypewriterTitle } from "./TypewriterTitle";

function SceneBackground() {
  return (
    <div className="absolute inset-0">
      <img
        src="/images/hero-workspace-1.png"
        alt="3D render of a developer workspace at night"
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,12,0.94) 0%, rgba(10,10,12,0.6) 45%, rgba(10,10,12,0.15) 70%, rgba(10,10,12,0) 100%)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <SceneBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pt-12 pb-16 md:px-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >

          <h1 className="mt-4 font-display text-6xl font-black leading-[0.95] md:text-7xl lg:text-[5.5rem]">
            {siteConfig.name.split(" ")[0]}
            <br />
            {siteConfig.name.split(" ").slice(1).join(" ")}
          </h1>

          <div className="mt-4 text-2xl text-lamp md:text-3xl lg:text-4xl">
            <TypewriterTitle roles={siteConfig.roles} />
          </div>

          <p className="mt-8 max-w-sm text-base text-muted md:text-lg">{siteConfig.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-lamp px-6 py-3 text-sm font-bold text-[#1A1206] shadow-md transition hover:brightness-110"
            >
              VIEW PROJECTS
            </a>
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink/60 px-6 py-3 text-sm font-bold text-ink transition hover:border-lamp hover:text-lamp"
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-ink"
        aria-label="Scroll to About section"
      >
        <Mouse size={20} />
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
} 
*/
