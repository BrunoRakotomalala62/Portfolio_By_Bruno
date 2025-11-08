export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";
export type ProjectCategory = "frontend" | "backend" | "fullstack";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  percentage: number;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  bio: string;
  location: string;
  experience: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    github?: string;
    linkedin?: string;
  };
}
