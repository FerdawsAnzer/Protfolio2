import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  level: number;
  color:string; 
  icon:IconType;
};
export type SkillCategory = {
  title: string;       // e.g. "Frontend"
  items: Skill[];      // list of skills in the category
};