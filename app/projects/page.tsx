"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  const [filterTech, setFilterTech] = useState<string>("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  // Filter and sort methods
  const filteredProjects = projects
    .filter((project) =>
      filterTech ? project.tech.includes(filterTech) : true
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  // Get tech categories
  const techCategories = Array.from(
    new Set(projects.flatMap((project) => project.tech))
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Projects
        </h1>

        <div className="flex flex-wrap gap-4 mb-8 text-blue-800">
          <select
            value={filterTech}
            onChange={(e) => setFilterTech(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Technologies</option>
            {techCategories.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "date" | "title")}
            className="p-2 border rounded"
          >
            <option value="date">Sort by Date (Newest First)</option>
            <option value="title">Sort by Title (A-Z)</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover text-blue-800"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
