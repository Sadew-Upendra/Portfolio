"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ChatMessage({
  role,
  text,
  animate = false,
}: {
  role: "bot" | "user";
  text: string;
  animate?: boolean;
}) {
  const [visibleText, setVisibleText] = useState(animate ? "" : text);

  useEffect(() => {
    if (!animate) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 14);
    return () => clearInterval(interval);
  }, [animate, text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex", role === "user" ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed",
          role === "user"
            ? "bg-lamp text-[#1A1206]"
            : "border border-border bg-bg text-muted"
        )}
      >
        {visibleText}
      </div>
    </motion.div>
  );
}