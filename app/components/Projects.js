import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    name: "ETLSID",
    description:
      "Multilingual educational platform for students with disabilities, featuring assessments and multimedia content.",
    stack: ["React", "Next.js", "Google Cloud API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    name: "ParkWiz",
    description:
      "Integrated parking system with authentication, A* algorithm navigation, payment system, and admin dashboard.",
    stack: ["Next.js", "React", "MongoDB", "EmailJS", "OpenStreetMap", "Node.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    name: "ClubHub",
    description: "Platform connecting college clubs and students for seamless event management and ticket bookings.",
    stack: ["Next.js", "Clerk", "MongoDB", "Stripe", "React"],
    github: "#",
    live: "#",
  },
  {
    name: "ThiruCart",
    description:
      "E-commerce platform with features like advanced cart management, payment integration, and order tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaGithub className="inline-block mr-1" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaExternalLinkAlt className="inline-block mr-1" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

