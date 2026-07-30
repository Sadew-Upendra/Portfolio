import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "foodieexpress",
    title: "FoodieExpress",
    summary:
      "Full-stack food ordering system with JWT auth and a layered Spring Boot backend.",
    image: "/images/projects/foodieexpress.jpg",
    tech: ["Spring Boot", "MySQL", "React", "TypeScript"],
    repo: {
      type: "split",
      frontend: "https://github.com/Sadew-Upendra/foodieexpress-frontend",
      backend: "https://github.com/Sadew-Upendra/foodieexpress-backend",
    },
    live: null,
    featured: true,
  },
  {
    slug: "gearrentpro",
    title: "GearRentPro",
    summary: "Equipment rental platform handling real-world booking and inventory flows.",
    image: "/images/projects/gearrentpro.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    repo: { type: "single", url: "https://github.com/Sadew-Upendra/gearrentpro" },
    live: { type: "website", url: "https://gearrentpro.vercel.app" },
  },
  {
    slug: "sarasavi-library-ms",
    title: "Sarasavi Library Management System",
    summary:
      "Desktop library system with three-tier architecture, reservation copy-locking, and role-based access.",
    image: "/images/projects/sarasavi.jpg",
    tech: ["C#", ".NET Framework", "SQL Server"],
    repo: {
      type: "single",
      url: "https://github.com/Sadew-Upendra/Sarasavi_LibraryMS",
    },
    live: null,
  },
  {
    slug: "e-channeling",
    title: "E-Channeling Booking System",
    summary:
      "Doctor appointment booking system built with an 8-member team — contributed the booking page.",
    image: null,
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: null,
    live: null,
  },
];

/**
 * FUTURE PROJECT TEMPLATE — copy this shape once a larger project is ready.
 * The `details` object powers /projects/[slug], the full case-study page.
 * Leaving it commented out for now since no current project needs it yet.
 *
 * {
 *   slug: "future-project",
 *   title: "Future Project",
 *   summary: "One-line summary shown on the card.",
 *   image: "/images/projects/future-project.jpg",
 *   tech: ["Next.js", "PostgreSQL"],
 *   repo: { type: "single", url: "https://github.com/..." },
 *   live: { type: "website", url: "https://..." },
 *   details: {
 *     overview: "What the project is and who it's for.",
 *     problem: "The problem it solves.",
 *     approach: "How it was built, key decisions.",
 *     challenges: ["Challenge one and how it was solved", "Challenge two..."],
 *     architecture: "High-level architecture description.",
 *     gallery: ["/images/projects/future-project-1.jpg"],
 *   },
 * }
 */
