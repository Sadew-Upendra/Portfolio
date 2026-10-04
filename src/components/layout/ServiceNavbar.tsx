"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SoundToggle } from "./SoundToggle";
import { siteConfig } from "@/data/site";

export function ServiceNavbar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/[0.05] bg-bg/70 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-xs font-bold text-ink/80 transition-colors hover:text-lamp"
        >
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1 text-lamp" />
          <span>BACK TO HOME</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full bg-lamp px-6 py-2 text-sm font-bold text-[#1A1206] shadow-md transition hover:brightness-110 md:inline-flex"
          >
            GET IN TOUCH
          </a>
          <SoundToggle src={siteConfig.heroAudio} />
        </div>
      </nav>
    </header>
  );
}