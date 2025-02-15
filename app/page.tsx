import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiGraphql,
  SiDotnet,
  SiTypescript,
  SiRuby,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandAws } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            <Link href="/">CHEBOi</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#projects"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="#contacts"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/avatar/cheboi_pro.png"
              alt="Moses Cheboi"
              width={150}
              height={150}
              className="rounded-full border-4 border-blue-700"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Hello, I'm Moses Cheboi
            </h2>
            <p className="text-xl text-blue-700 mb-8">
              Software Engineer with 3 years of experience crafting efficient
              and scalable web solutions.
            </p>
            <Link
              href="#projects"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiJavascript className="text-5xl text-yellow-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiReact className="text-5xl text-cyan-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">React</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiNextdotjs className="text-5xl text-black mb-4" />
              <span className="text-lg font-medium text-blue-800">Next.js</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiNodedotjs className="text-5xl text-green-600 mb-4" />
              <span className="text-lg font-medium text-blue-800">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiTailwindcss className="text-5xl text-sky-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiHtml5 className="text-5xl text-orange-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">HTML5</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiGraphql className="text-5xl text-pink-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">GraphQl</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiDotnet className="text-5xl text-indigo-800 mb-4" />
              <span className="text-lg font-medium text-blue-800">Dotnet</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <TbBrandCSharp className="text-5xl text-blue-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">C-Sharp</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiTypescript className="text-5xl text-blue-500 mb-4" />
              <span className="text-lg font-medium text-blue-800">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiRuby className="text-5xl text-red-600 mb-4" />
              <span className="text-lg font-medium text-blue-800">Ruby</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <SiPostgresql className="text-5xl text-blue-600 mb-4" />
              <span className="text-lg font-medium text-blue-800">
                Postgresql
              </span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition">
              <TbBrandAws className="text-5xl text-orange-400 mb-4" />
              <span className="text-lg font-medium text-blue-800">AWS</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            About Me
          </h2>
          <p className="text-blue-700 mb-6">
            I'm Moses Cheboi, a passionate software engineer with 3 years of
            professional experience in developing innovative web applications. I
            specialize in JavaScript, React, and Next.js. My goal is to build
            high-quality software solutions that drive business success.
          </p>
          <p className="text-blue-700">
            My expertise spans front-end development, UI/UX design, and
            performance optimization. I love tackling challenging problems and
            continuously learning new technologies to refine my craft.
          </p>
        </div>
      </section>

      <section id="experience" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Work Experience
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Momi Foundation - Software Developer
                </h3>
                <p className="text-blue-700">April 2023 - Present</p>
                <p className="text-blue-700 mt-2">
                  Developing and maintaining web applications using modern
                  technologies.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Freelance - Software Engineer (Part-Time)
                </h3>
                <p className="text-blue-700">2023 - Present</p>
                <p className="text-blue-700 mt-2">
                  Providing freelance software engineering services on a
                  part-time basis.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  The Jitu - Software Engineer
                </h3>
                <p className="text-blue-700">October 2022 - April 2023</p>
                <p className="text-blue-700 mt-2">
                  Developed robust solutions and contributed to software design.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Upwork - Software Programmer
                </h3>
                <p className="text-blue-700">March 2022 - October 2022</p>
                <p className="text-blue-700 mt-2">
                  Worked on freelance projects as a software programmer.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Side_Hustle - Front End Intern
                </h3>
                <p className="text-blue-700">October 2021 - March 2022</p>
                <p className="text-blue-700 mt-2">
                  Focused on front-end development and UI improvements during
                  the internship.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Momi Foundation - Technical Mentor
                </h3>
                <p className="text-blue-700">1 Year</p>
                <p className="text-blue-700 mt-2">
                  Mentored aspiring developers and provided technical guidance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  Kenya Power - Intern
                </h3>
                <p className="text-blue-700">January 2018 - April 2018</p>
                <p className="text-blue-700 mt-2">
                  Assisted in development projects and gained valuable industry
                  exposure.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-800">
                  KPLC - IT Support/Software Programmer
                </h3>
                <p className="text-blue-700">January 2017 - April 2017</p>
                <p className="text-blue-700 mt-2">
                  Provided IT support and assisted with software programming
                  tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Project Alpha
              </h3>
              <p className="text-blue-700 mb-4">
                A web application that streamlines business operations and
                enhances productivity.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Details &rarr;
              </a>
            </div>
            <div className="bg-blue-50 border border-blue-200 shadow rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Project Beta
              </h3>
              <p className="text-blue-700 mb-4">
                An innovative solution for modern e-commerce platforms with a
                seamless user experience.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-blue-700 mb-8">
            I'm always excited to connect and explore new opportunities. Whether
            you have a question or simply want to say hello, please drop me a
            message.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-700 to-blue-900 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          &copy; {new Date().getFullYear()} Moses Cheboi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
