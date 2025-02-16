import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900  text-white py-8 mb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-white">
              I'm a passionate developer who loves building web applications and
              solving real-world problems with code.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-white hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cheboi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/moses-cheboi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/moses_cheboy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Moses Cheboi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
