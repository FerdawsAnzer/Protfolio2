
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaAws,
  FaTools,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import type { SkillCategory } from "./Types/Skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", level: 85, color: "yellow", icon: FaJsSquare },
      { name: "TypeScript", level: 75, color: "cyan", icon: SiTypescript },
      { name: "PHP", level: 60, color: "orange", icon: FaPhp },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", level: 85, color: "blue", icon: FaReact },
      { name: "HTML", level: 90, color: "pink", icon: FaHtml5 },
      { name: "CSS", level: 88, color: "purple", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 70, color: "green", icon: FaNodeJs },
      { name: "MySQL", level: 75, color: "red", icon: FaDatabase },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 80, color: "gray", icon: FaGitAlt },
      { name: "Postman", level: 70, color: "orange", icon: FaTools },
    ],
  },
  {
    title: "Platforms & Hosting",
    items: [
      { name: "AWS", level: 65, color: "yellow", icon: FaAws },
    ],
  },
];
