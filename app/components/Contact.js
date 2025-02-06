import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <a href="mailto:thirumurganaksofficial@gmail.com" className="hover:text-blue-400 transition-colors">
              thirumurganaksofficial@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            <a href="tel:+919600338406" className="hover:text-blue-400 transition-colors">
              +91 9600338406
            </a>
          </div>
          <div className="flex items-center mb-4">
            <FaGithub className="mr-2" />
            <a
              href="https://github.com/AKSTHIRUMURUGAN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/thiruganaks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

