"use client"

import { useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPrisma, SiGooglecloud } from "react-icons/si"

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Database Management", icon: FaDatabase },
]

export default function Skills() {
  const [flippedCards, setFlippedCards] = useState([])

  const toggleFlip = (index) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flip-card ${flippedCards.includes(index) ? "flipped" : ""}`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front flex items-center justify-center bg-gray-700 rounded-lg p-6">
                  <skill.icon className="text-6xl" />
                </div>
                <div className="flip-card-back flex items-center justify-center bg-blue-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

