"use client";

import React from "react";
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
  SiIntellijidea,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { VscCode, VscAzure } from "react-icons/vsc";
import {
  Braces,
  Layers,
  Database,
  Network,
  Boxes,
  Binary,
  ShieldCheck,
  BrainCircuit,
  Sparkles,
  Bot,
} from "lucide-react";
import { DiVisualstudio } from "react-icons/di";

interface IconConfig {
  component: React.ComponentType<any>;
  colorClass?: string;
}

// SVG fallback for OpenAI logo
function OpenAIIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 8.6556a4.485 4.485 0 0 1 2.3655-1.9728V12.2a.7665.7665 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 8.6556zm16.0963 3.8558l-5.8428-3.3685 2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.4944 4.4944 0 0 1-.6865 8.1002v-5.6772a.79.79 0 0 0-.3921-.6725zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0L8.9089 10.0136V7.6812a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7913a4.4992 4.4992 0 0 1 6.6763 4.6598zm-8.4286-5.8924a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V8.082a4.504 4.504 0 0 1 4.4945-4.4944z" />
    </svg>
  );
}

const iconMap: Record<string, IconConfig> = {
  // Languages & Core
  java: { component: FaJava, colorClass: "text-[#E76F00]" },
  typescript: { component: SiTypescript, colorClass: "text-[#3178C6]" },
  javascript: { component: SiJavascript, colorClass: "text-[#F7DF1E]" },
  csharp: { component: TbBrandCSharp, colorClass: "text-[#512BD4]" },
  python: { component: SiPython, colorClass: "text-[#3776AB]" },
  html5: { component: SiHtml5, colorClass: "text-[#E34F26]" },
  html: { component: SiHtml5, colorClass: "text-[#E34F26]" },
  css3: { component: SiCss, colorClass: "text-[#1572B6]" },

  // Frontend & Backend
  react: { component: SiReact, colorClass: "text-[#61DAFB]" },
  nextjs: { component: SiNextdotjs, colorClass: "text-ink" },
  tailwind: { component: SiTailwindcss, colorClass: "text-[#06B6D4]" },
  spring: { component: SiSpring, colorClass: "text-[#6DB33F]" },
  nodejs: { component: SiNodedotjs, colorClass: "text-[#339933]" },
  express: { component: SiExpress, colorClass: "text-ink" },
  dotnet: { component: Layers, colorClass: "text-[#512BD4]" },

  // Databases & Tools
  mysql: { component: SiMysql, colorClass: "text-[#4479A1]" },
  mongodb: { component: SiMongodb, colorClass: "text-[#47A248]" },
  sqlserver: { component: Database, colorClass: "text-[#CC292B]" },
  postman: { component: SiPostman, colorClass: "text-[#FF6C37]" },
  vscode: { component: DiVisualstudio, colorClass: "text-[#007ACC]" },
  intellij: { component: SiIntellijidea, colorClass: "text-[#FE315D]" },

  // DevOps & Cloud
  git: { component: SiGit, colorClass: "text-[#F05032]" },
  github: { component: SiGithub, colorClass: "text-ink" },
  docker: { component: SiDocker, colorClass: "text-[#2496ED]" },
  aws: { component: FaAws, colorClass: "text-[#FF9900]" },
  azure: { component: VscAzure, colorClass: "text-[#0089D6]" },
  linux: { component: SiLinux, colorClass: "text-[#FCC624]" },

  // AI & Machine Learning
  openai: { component: OpenAIIcon, colorClass: "text-[#412991] dark:text-[#10A37F]" },
  tensorflow: { component: SiTensorflow, colorClass: "text-[#FF6F00]" },
  pytorch: { component: SiPytorch, colorClass: "text-[#EE4C2C]" },
  scikitlearn: { component: SiScikitlearn, colorClass: "text-[#F7931E]" },
  pandas: { component: SiPandas, colorClass: "text-[#150458] dark:text-[#E70488]" },
  ai: { component: BrainCircuit, colorClass: "text-lamp" },
  genai: { component: Sparkles, colorClass: "text-lamp" },
  langchain: { component: Bot, colorClass: "text-[#38BDF8]" },

  // Concepts
  rest: { component: Network, colorClass: "text-lamp" },
  oop: { component: Boxes, colorClass: "text-lamp" },
  dsa: { component: Binary, colorClass: "text-lamp" },
  security: { component: ShieldCheck, colorClass: "text-lamp" },
  layers: { component: LayersIcon, colorClass: "text-lamp" },
};

export function SkillIcon({
  iconKey,
  size = 20,
}: {
  iconKey: string;
  size?: number;
}) {
  const target = iconMap[iconKey.toLowerCase().replace(/[^a-z0-9]/g, "")];
  const IconComponent = target?.component ?? Braces;
  const colorClass = target?.colorClass ?? "text-lamp";

  return (
    <span className="inline-flex shrink-0 items-center justify-center">
      <IconComponent size={size} className={colorClass} />
    </span>
  );
}

export function LayersIcon({
  size = 18,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}