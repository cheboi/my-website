import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-blue-600 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">CHEBOi</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/projects"
                  className="text-white hover:text-blue-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-white hover:text-blue-200">
                  Contacts
                </a>
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
              className="rounded-full border-4 border-blue-600"
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
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              View My Projects
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
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

      <section id="projects" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
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
            {/* Project Card 2 */}
            <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
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
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-blue-700 mb-8">
            I'm always excited to connect and explore new opportunities. Whether
            you have a question or simply want to say hello, feel free to reach
            out.
          </p>
          <a
            href="mailto:moscheb96.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          &copy; {new Date().getFullYear()} Moses Cheboi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
