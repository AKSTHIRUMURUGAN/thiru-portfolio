import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            A.K.S. Thirumurugan
          </Link>
          <div className="flex space-x-4">
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <a
              href="https://github.com/AKSTHIRUMURUGAN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub className="inline-block" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiruganaks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="inline-block" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

