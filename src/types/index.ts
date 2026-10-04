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
  featured?: boolean;
  // Full case-study fields — optional, used by the project detail page.
  // Not filled in yet for any current project, but the page and types
  // are ready for when a larger project needs them.
  details?: {
    overview: string;
    problem: string;
    approach: string;
    challenges: string[];
    architecture?: string;
    gallery?: string[];
  };
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string | null;
  credentialUrl?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  date: string;
}

export interface EventItem {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
}

export interface VolunteerRole {
  title: string;
  period: string;
  badge?: string;
  description: string;
  highlights?: string[];
}

export interface VolunteerOrganization {
  id: string;
  organization: string;
  location: string;
  mainBadge: string;
  overallPeriod: string;
  roles: VolunteerRole[];
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
}

export interface ChatQA {
  question: string; // shown as a tappable quick-question chip
  keywords: string[]; // matched against free-typed questions too
  answer: string;
}

export interface RoleDetail {
  id: string;
  role: string;
  period: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance";
  description: string;
  highlights: string[];
  skills: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  totalPeriod: string;
  roles: RoleDetail[];
}