import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        View Details &rarr;
      </Link>
    </div>
  );
}
