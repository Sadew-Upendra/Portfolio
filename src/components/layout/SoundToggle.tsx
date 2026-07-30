"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export function SoundToggle({ src }: { src: string }) {
  const { isPlaying, toggle } = useSound(src);

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? "Mute background sound" : "Play background sound"}
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/60 text-ink transition hover:border-lamp hover:text-lamp"
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
