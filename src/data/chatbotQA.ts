import { ChatQA } from "@/types";

// Powers both the tappable quick-question chips and free-text matching.
// When you're ready for a real AI API, see the comment in
// components/chatbot/Chatbot.tsx's getResponse() — this file can stay
// exactly as is, as a fallback for when the API is unavailable.
export const CHATBOT_QA: ChatQA[] = [
  {
    question: "Who are you?",
    keywords: ["who", "about you", "yourself"],
    answer:
      "I'm Sadew Upendra, a Computer Science undergraduate at the University of Kelaniya. I build full-stack software — Spring Boot APIs, React frontends, and desktop apps.",
  },
  {
    question: "What are your skills?",
    keywords: ["skill", "tech", "stack", "technolog"],
    answer:
      "Java, TypeScript, and JavaScript for programming; React, Next.js, and Tailwind CSS on the frontend; Spring Boot, Node.js, and Express on the backend; MySQL and MongoDB for databases. Check the Skills section for the full breakdown.",
  },
  {
    question: "Tell me about your projects.",
    keywords: ["project", "built", "work"],
    answer:
      "Highlights include FoodieExpress (Spring Boot + React food ordering system) and the Sarasavi Library Management System (a three-tier C#/.NET desktop app). Scroll to Projects for the full lineup and repo links.",
  },
  {
    question: "How can I contact you?",
    keywords: ["contact", "email", "reach", "hire"],
    answer:
      "Use the contact form further down this page, or reach out via GitHub at github.com/Sadew-Upendra. The Contact section has every option.",
  },
  {
    question: "Can I download your CV?",
    keywords: ["cv", "resume", "download"],
    answer: "Yes — there's a Download CV button in the hero section.",
  },
  {
    question: "Tell me about your education.",
    keywords: ["education", "university", "degree", "study", "kelaniya"],
    answer:
      "I'm pursuing a BSc (Hons) in Computer Science at the Faculty of Computing and Technology, University of Kelaniya — started October 2025, currently in progress. I also hold a Comprehensive Master Java Developer certification from IJSE and a Diploma in IT from IMBS Green Campus.",
  },
];

export const chatbotFallback =
  "I'm not sure about that yet — try one of the questions below, or ask about skills, projects, education, or how to get in touch!";