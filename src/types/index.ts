// Central type definitions.
// Keeping all shared shapes here means components and data files
// depend on this file only — not on each other — which is what keeps
// things low-coupled and easy to extend later.

export interface NavItem {
  label: string;
  href: string; // "#about" style in-page anchor, or "/articles" style route
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export interface EducationItem {
  id: string;
  title: string;
  place: string;
  period: string;
  description?: string;
  logo?: string; // optional
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases & Tools"
  | "DevOps & Cloud"
  | "AI & Security"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  iconKey: string; 
}

export type RepoLinks =
  | { type: "single"; url: string }
  | { type: "split"; frontend: string; backend: string };

export type LivePreview =
  | { type: "website"; url: string }
  | { type: "video"; url: string }
  | { type: "image"; url: string }
  | null;

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  summary: string;
  image: string | null;
  tech: string[];
  repo: RepoLinks | null;
  live: LivePreview;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string | null;
  credentialUrl?: string;
}