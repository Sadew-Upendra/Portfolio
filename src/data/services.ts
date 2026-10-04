import type { ServiceItem } from "../types";

export const services: ServiceItem[] = [
  {
    id: "devops-cloud",
    title: "Cloud Infrastructure & CI/CD Pipelines",
    category: "Cloud & DevOps",
    tagline: "Automated deployments, container orchestration, and server architecture.",
    description:
      "Architecting reliable cloud infrastructure with automated CI/CD workflows, Docker containerization, and proactive monitoring stacks.",
    deliverables: [
      "Automated CI/CD pipelines with GitHub Actions",
      "Docker containerization & multi-environment setups",
      "Cloud provisioning & server management",
      "Monitoring & logging integration (Grafana/Prometheus)",
    ],
    skills: ["AWS", "Docker", "GitHub Actions", "Vercel", "Linux", "Nginx"],
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Engineering",
    category: "Full-Stack Web",
    tagline: "High-performance web applications built with Spring Boot & React.",
    description:
      "Building scalable RESTful backends paired with modern, responsive dark-mode frontends featuring smooth user interfaces and robust security authentication.",
    deliverables: [
      "RESTful API design with Spring Boot & Node.js",
      "Modern React / Next.js / Vite frontends with Tailwind CSS",
      "Database schema design (MySQL, PostgreSQL, MongoDB)",
      "JWT authentication & OAuth security filters",
    ],
    skills: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "MySQL", "PostgreSQL"],
  },
  {
    id: "desktop-architecture",
    title: "Custom Software Architecture",
    category: "Software Design",
    tagline: "Maintainable desktop software with DAO/DTO layered architecture.",
    description:
      "Engineering standalone desktop management systems using JavaFX and C# .NET with clean layered architectures and local/remote database setups.",
    deliverables: [
      "Desktop software using JavaFX / C# Windows Forms",
      "DAO/DTO layered architecture implementations",
      "Database migration & local SQLite / SQL Server integration",
      "Bug fixing, performance optimization & refactoring",
    ],
    skills: ["JavaFX", "C#", ".NET", "SQL Server", "SQLite", "OOP Design"],
  },
];
