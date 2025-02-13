import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Project One"
          description="A short description of project one."
          link="#"
        />
        <ProjectCard
          title="Project Two"
          description="A short description of project two."
          link="#"
        />
      </div>
    </main>
  );
}
