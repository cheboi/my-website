"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-blue-800 text-white py-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          CHEBOi
        </a>

        <ul className="flex space-x-6">
          <li>
            <a
              href="/"
              className={`px-4 py-2 rounded ${
                isActive("/portfolio")
                  ? "bg-white text-blue-800 font-semibold"
                  : ""
              }`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className={`px-4 py-2 rounded ${
                isActive("/projects")
                  ? "bg-white text-blue-800 font-semibold"
                  : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/articles"
              className={`px-4 py-2 rounded ${
                isActive("/articles")
                  ? "bg-white text-blue-800 font-semibold"
                  : ""
              }`}
            >
              Articles
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
