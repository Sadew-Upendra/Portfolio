import { NavItem } from "@/types";

// Only the most important sections go here — this is intentionally short.
// Articles, Gallery, Events, Volunteering are real pages/sections but are
// reached via the Footer or in-page links instead, to keep the navbar clean.
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
