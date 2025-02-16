// data/projects.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    links: {
      github: "https://github.com/cheboi/my-website",
      demo: "https://portfolio.com",
    },
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with React and Node.js.",
    image: "/images/projects/e-commerce.png",
    links: {
      github: "https://github.com/cheboi/ecommerce",
      demo: "https://ecommerce.com",
    },
    tech: ["React", "Node.js", "Express", "Postgresql"],
    date: "2023-09-15",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A task management app built with Vue.js and Firebase.",
    image: "/images/projects/task-management-app.png",
    links: {
      github: "https://github.com/cheboi/task-management-app",
      demo: "https://taskmanager.com",
    },
    tech: ["Vue.js", "Firebase", "JavaScript"],
    date: "2023-08-20",
  },
];
