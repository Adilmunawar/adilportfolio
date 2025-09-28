export type Skill = {
  name: string;
  proficiency: number;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageId: string;
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};
