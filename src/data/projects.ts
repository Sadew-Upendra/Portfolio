import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "foodieexpress",
    title: "FoodieExpress",
    subtitle: "Online Food Ordering System",
    summary:
      "Full-stack food ordering system with JWT auth and a layered Spring Boot backend.",
    image: "/images/projects/foodieexpress.png",
    tech: ["Spring Boot", "MySQL", "React", "TypeScript", "JWT", "REST API"],
    repo: {
      type: "split",
      frontend: "https://github.com/Sadew-Upendra/FoodOrder-Frontend",
      backend: "https://github.com/Sadew-Upendra/FoodOrder-Backend",
    },
    live: { type: "website", url: "https://foodiexpress.vercel.app" },
    featured: true,
  },
  {
    slug: "gearrentpro",
    title: "GearRentPro",
    subtitle: "Equipment Rental Platform",
    summary: "Equipment rental platform handling real-world booking and inventory flows.",
    image: "/images/projects/gearrentpro.png",
    tech: ["Java", "JavaFX", "MySQL", "Layered Architecture", "Desktop App"],
    repo: { type: "single", url: "https://github.com/Sadew-Upendra/GearRent_Pro" },
    live: null,
  },
  {
    slug: "sarasavi-library-ms",
    title: "Sarasavi Library System",
    subtitle: "Library Management System",
    summary:
      "Desktop library system with three-tier architecture, reservation copy-locking, and role-based access.",
    image: "/images/projects/sarasavi.png",
    tech: ["C#", ".NET Framework", "SQL Server"],
    repo: {
      type: "single",
      url: "https://github.com/Sadew-Upendra/Sarasavi_LibraryMS",
    },
    live: null,
  },
  {
    slug: "e-channeling",
    title: "Medi Connect",
    subtitle: "E-channeling Booking System",
    emoji: "🏥",
    summary:
      "Doctor appointment booking system built with an 8-member team — contributed the booking page.",
    image: "/images/projects/medi-connect.png",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    repo: null,
    live: { type: "website", url: "https://medi-connect-opal-two.vercel.app/" },
  },
  {
    slug: "web-calculator",
    title: "Web Calculator",
    subtitle: "Simple Web-based Calculator",
    summary:
      "Modern, responsive web calculator with smooth animations and clean UI built with vanilla web technologies.",
    image: "/images/projects/web-calculator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: null,
    live: { type: "website", url: "https://simple-calculator-ruddy-six.vercel.app/" },
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
