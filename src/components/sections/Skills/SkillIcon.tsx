import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { Braces, Layers, Database, Network, Boxes, Binary, ShieldCheck, BrainCircuit, Coffee } from "lucide-react";

// Add a new entry here whenever you add a skill with a new iconKey in data/skills.ts.
// Brand logos come from react-icons/si (Simple Icons); a few languages/concepts
// without a reliable brand icon use lucide-react generic icons instead.
const iconMap: Record<string, React.ComponentType<any>> = {
  // No standard brand icon exists for Java in simple-icons — Coffee is a
  // widely-understood stand-in. Swap for a custom SVG if you'd prefer.
  java: Coffee,
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  spring: SiSpring,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  postman: SiPostman,

  // No reliable open brand icon for these — using clear generic icons instead.
  csharp: Braces,
  dotnet: Layers,
  sqlserver: Database,
  rest: Network,
  oop: Boxes,
  dsa: Binary,
  security: ShieldCheck,
  ai: BrainCircuit,
};

export function SkillIcon({ iconKey, size = 22 }: { iconKey: string; size?: number }) {
  const Icon = iconMap[iconKey] ?? Braces;
  return <Icon size={size} className="text-lamp" />;
}
