"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const loadingSteps = [
  { threshold: 0, text: "INITIALIZING ENVIRONMENT" },
  { threshold: 30, text: "LOADING ASSETS & GRAPHICS" },
  { threshold: 65, text: "MOUNTING CORE MODULES" },
  { threshold: 88, text: "READY TO LAUNCH" },
];

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const minDuration = 1600;

    const tick = setInterval(() => {
      setProgress((p) => (p < 92 ? p + (92 - p) * 0.08 + 0.35 : p));
    }, 80);

    const finish = () => {
      const remaining = Math.max(minDuration - (Date.now() - start), 0);
      setTimeout(() => {
        clearInterval(tick);
        setProgress(100);
        setTimeout(() => setHide(true), 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      clearInterval(tick);
      window.removeEventListener("load", finish);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = hide ? "" : "hidden";
  }, [hide]);

  // Determine active status message based on progress
  const currentStep =
    [...loadingSteps].reverse().find((step) => progress >= step.threshold)?.text ??
    "INITIALIZING";

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg select-none overflow-hidden"
        >
          {/* Ambient Glow in Background */}
          <div className="absolute h-72 w-72 rounded-full bg-lamp/10 blur-[120px] pointer-events-none" />

          {/* Circle Loader Container */}
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* Outer Background Ring */}
            <div className="absolute inset-0 rounded-full border border-border/40 bg-surface/30 backdrop-blur-sm" />

            {/* Glowing SVG Progress Circle */}
            <svg className="absolute inset-0 -rotate-90 h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={RADIUS}
                fill="none"
                stroke="#E8A340"
                strokeWidth="2.5"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - progress / 100)}
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(232,163,64,0.6)]"
                style={{ transition: "stroke-dashoffset 0.18s cubic-bezier(0.4, 0, 0.2, 1)" }}
              />
            </svg>

            {/* Center Content */}
            <div className="flex flex-col items-center justify-center z-10">
              <span className="font-mono text-[10px] font-semibold tracking-widest text-muted/80 uppercase">
                SU
              </span>
              <span className="font-display text-xl font-black tracking-tight text-lamp">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Dynamic Status Text & Brand Name */}
          <div className="mt-8 flex flex-col items-center gap-1.5 text-center px-4">
            <h2 className="font-mono text-xs font-bold tracking-[0.2em] text-ink uppercase">
              SADEW UPENDRA
            </h2>
            <p className="font-mono text-[10px] tracking-widest text-lamp/80 uppercase transition-all duration-300">
              {currentStep}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}