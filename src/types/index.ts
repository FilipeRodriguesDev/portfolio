export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: { label: string; value: string; trend?: string }[];
  featured?: boolean;
  date: string;
  liveUrl?: string;
  repoUrl?: string;
  codeSnippet?: {
    language: string;
    code: string;
    fileName?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
