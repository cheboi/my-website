export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
  tech: string[];
  date: string;
}
