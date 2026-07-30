"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navItems
    .filter((item) => item.href.startsWith("#"))
    .map((item) => item.href.slice(1));
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 z-40 w-full">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 pt-6 md:px-12">
        {/* Logo */}
        <Link href="#" className="font-display text-lg font-extrabold tracking-tight text-ink">
          SU<span className="text-lamp">.</span>
        </Link>

        {/* Desktop nav pill */}
        <div className="hidden items-center gap-1 rounded-full bg-white/[0.06] p-1.5 backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-colors",
                activeId === item.href.slice(1)
                  ? "bg-white/10 text-lamp"
                  : "text-ink/80 hover:text-ink"
              )}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-lamp px-6 py-2.5 text-sm font-bold text-[#1A1206] shadow-md transition hover:brightness-110 md:inline-flex"
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>

      {/* Mobile vertical nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-3 backdrop-blur-md md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink/90 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-xl bg-lamp px-4 py-3 text-center text-sm font-bold text-[#1A1206]"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
