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