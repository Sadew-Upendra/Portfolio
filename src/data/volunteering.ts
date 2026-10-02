import { VolunteerOrganization } from "@/types";

export const volunteering: VolunteerOrganization[] = [
  {
    id: "isaca-uok",
    organization: "ISACA Student Group",
    location: "University of Kelaniya",
    mainBadge: "CYBERSECURITY & GOVERNANCE",
    overallPeriod: "2026 — Present",
    roles: [
      {
        title: "Organizing Committee Member — Delegates Team (Cipherhunt '26)",
        period: "2026 — Present",
        badge: "EVENT LEADERSHIP",
        description:
          "Contributing to the planning, delegate management, and operational execution for Cipherhunt'26, a university-level cybersecurity CTF competition.",
        highlights: [
          "Coordinating delegate communications, registration pipelines, and participant inquiries.",
          "Facilitating cross-team logistics to ensure smooth execution of competition events.",
        ],
      },
      {
        title: "Active Student Member",
        period: "2026 — Present",
        badge: "COMMUNITY",
        description:
          "Engaging in university cybersecurity awareness programs, IT governance sessions, and technical community initiatives.",
      },
    ],
  },
  {
    id: "cssa-uok",
    organization: "Computer Science Students' Association (CSSA)",
    location: "University of Kelaniya",
    mainBadge: "ACADEMIC COMMUNITY",
    overallPeriod: "2025 — Present",
    roles: [
      {
        title: "Student Member",
        period: "2025 — Present",
        badge: "COMMUNITY",
        description:
          "Collaborating with CS undergraduates on technical workshops, peer hackathons, and departmental tech activities.",
      },
    ],
  },
  {
    id: "ieee-uok",
    organization: "IEEE Student Branch",
    location: "University of Kelaniya",
    mainBadge: "GLOBAL NETWORK",
    overallPeriod: "Upcoming (Nov 2026)",
    roles: [
      {
        title: "Student Member",
        period: "Upcoming (Nov 2026)",
        badge: "MEMBERSHIP",
        description:
          "Joining the student IEEE chapter to participate in student developer tracks, technical symposiums, and professional engineering networks.",
      },
    ],
  },
];
