"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/gallery";

export function GalleryOrbit() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = gallery.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), 3500);
    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) {
    return (
      <p className="text-center text-sm text-muted">
        No photos added yet — add entries to <code className="text-lamp">data/gallery.ts</code>.
      </p>
    );
  }

  // Calculate indices for 3 visible cards in a row
  const getVisibleIndex = (offset: number) => {
    return (active + offset + count) % count;
  };

  const visibleIndices = [-1, 0, 1].map((offset) => getVisibleIndex(offset));

  return (
    <div
      className="relative mx-auto my-4 flex w-full max-w-6xl flex-col items-center justify-center px-1 sm:px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex w-full items-center justify-between gap-2 sm:gap-4 md:gap-6">
        
        {/* Left Arrow Button */}
        <button
          onClick={() => setActive((a) => (a - 1 + count) % count)}
          aria-label="Previous photo"
          className="z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-bg/90 text-ink backdrop-blur-md transition-all duration-300 hover:text-lamp shadow-[-3px_-3px_8px_rgba(255,255,255,0.03),3px_3px_10px_rgba(0,0,0,0.6)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.7)] sm:h-10 sm:w-10"
        >
          <ChevronLeft size={18} className="sm:hidden" />
          <ChevronLeft size={20} className="hidden sm:block" />
        </button>

        {/* Responsive Grid: 1 Column on Mobile, 3 Columns on Tablet/Desktop */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6">
          {visibleIndices.map((idx, pos) => {
            const img = gallery[idx];
            const isCenter = pos === 1;

            return (
              <div
                key={`${img.id ?? idx}-${pos}`}
                onClick={() => setActive(idx)}
                className={`group relative flex aspect-[4/3] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-500 ease-out sm:aspect-[16/10] ${
                  /* Hide left and right images on small screens, show all 3 on sm screens and up */
                  !isCenter ? "hidden sm:flex" : "flex"
                } ${
                  isCenter
                    ? "border-transparent bg-bg shadow-[-6px_-6px_16px_rgba(255,255,255,0.03),6px_6px_20px_rgba(0,0,0,0.7),inset_1px_1px_2px_rgba(255,255,255,0.08)] scale-100 opacity-100"
                    : "border-border/30 bg-bg/40 opacity-50 sm:scale-95 hover:opacity-80 hover:border-lamp/40"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption ?? "Gallery photo"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption Overlay */}
                {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/60 to-transparent p-2.5 text-center backdrop-blur-[2px] sm:p-3">
                    <p
                      className={`font-mono text-xs tracking-wide transition-colors ${
                        isCenter ? "font-medium text-lamp" : "text-muted"
                      }`}
                    >
                      {img.caption}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => setActive((a) => (a + 1) % count)}
          aria-label="Next photo"
          className="z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-bg/90 text-ink backdrop-blur-md transition-all duration-300 hover:text-lamp shadow-[-3px_-3px_8px_rgba(255,255,255,0.03),3px_3px_10px_rgba(0,0,0,0.6)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.7)] sm:h-10 sm:w-10"
        >
          <ChevronRight size={18} className="sm:hidden" />
          <ChevronRight size={20} className="hidden sm:block" />
        </button>
      </div>
    </div>
  );
}

/* "use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/gallery";

export function GalleryOrbit() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = gallery.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), 3200);
    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) {
    return (
      <p className="text-center text-sm text-muted">
        No photos added yet — add entries to <code className="text-lamp">data/gallery.ts</code> to populate this carousel.
      </p>
    );
  }

  const angleStep = 360 / count;

  return (
    <div
      className="relative mx-auto my-2 flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 3D Orbit Scene Container 
      <div
        className="relative flex h-[230px] w-full items-center justify-center sm:h-[270px] md:h-[310px]"
        style={{
          perspective: "950px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {gallery.map((img, i) => {
            let offset = i - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const angle = offset * angleStep;
            const isActive = offset === 0;

            return (
              <div
                key={img.id ?? i}
                className="absolute h-36 w-60 overflow-hidden rounded-xl border transition-all duration-700 ease-out sm:h-44 sm:w-76 md:h-48 md:w-84"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--orbit-depth, 200px)) scale(${isActive ? 1 : 0.9})`,
                  borderColor: isActive ? "#E8A340" : "rgba(255, 255, 255, 0.1)",
                  opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.4,
                  zIndex: isActive ? 10 : 10 - Math.abs(offset),
                  // Slight blur increase (2px) for balanced depth of field
                  filter: isActive ? "none" : "brightness(0.55) blur(3px)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.caption ?? "Gallery photo"}
                  className="h-full w-full object-cover"
                />
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5 text-center">
                    <p className="font-display text-xs font-medium text-ink">
                      {img.caption}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chevron Controls 
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-4">
          <button
            onClick={() => setActive((a) => (a - 1 + count) % count)}
            aria-label="Previous photo"
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/80 text-ink backdrop-blur transition hover:border-lamp hover:text-lamp"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setActive((a) => (a + 1) % count)}
            aria-label="Next photo"
            className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/80 text-ink backdrop-blur transition hover:border-lamp hover:text-lamp"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Pagination Indicators 
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-lamp" : "w-1.5 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Dynamic Depth Scaling 
      <style jsx>{`
        div {
          --orbit-depth: 160px;
        }
        @media (min-width: 640px) {
          div {
            --orbit-depth: 220px;
          }
        }
        @media (min-width: 768px) {
          div {
            --orbit-depth: 270px;
          }
        }
      `}</style>
    </div>
  );
} */