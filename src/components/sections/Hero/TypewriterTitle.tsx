"use client";

import { useEffect, useState } from "react";

export function TypewriterTitle({
  roles,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseMs = 1400,
}: {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseMs);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setPhase("typing");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="font-mono text-sm tracking-widest text-lamp md:text-base">
      {text}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}