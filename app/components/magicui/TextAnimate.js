"use client";

import { TextAnimate } from "./ui/text-animate";
import { MorphingText } from "./ui/morphing-text";
import { TypingAnimation } from "./ui/typing-animation";
import { WordRotate } from "./ui/word-rotate";
import { AuroraText } from "./ui/aurora-text";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { SparklesText } from "./ui/sparkle-text";
import { FlipText } from "./ui/flip-text";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutMe() {
  const texts = [
    "Innovator",
    "FullStack Developer",
    "IoT Enthusiast",
    "Creative Mind",
    "Hackathon Champion",
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          <AuroraText>A.K.S. Thirumurugan</AuroraText>
        </h1>
        <WordRotate
          className="mt-4 text-3xl font-semibold md:text-4xl text-gray-300"
          words={texts}
        />
        <TypingAnimation className="mt-4 text-lg md:text-xl text-gray-400">
          "Turning Ideas into Reality with Code & Innovation."
        </TypingAnimation>
      </div>

      {/* About Section */}
      <Card className="mt-10 max-w-3xl bg-white/10 backdrop-blur-md rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            <FlipText
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              word="About Me"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-gray-300">
          <p>
            Hi, I’m <span className="font-semibold text-white">A.K.S. Thirumurugan</span>, a 
            passionate <span className="text-blue-400">Full-Stack Developer</span> and 
            <span className="text-purple-400"> IoT Enthusiast</span>. I thrive on crafting scalable, 
            high-performance applications that blend innovation with usability.
          </p>
          <p className="mt-4">
            With expertise in <span className="text-yellow-400">React, Next.js, Express, MongoDB</span>, and 
            advanced UI libraries like <span className="text-green-400">ShadCN, TailwindCSS</span>, I build 
            engaging, user-friendly digital experiences.
          </p>
          <p className="mt-4">
            As a <span className="text-red-400">Hackathon Champion</span> and tech leader, I continuously push 
            boundaries, leading **Guvi-REC** & **Intellexa AI** while mentoring developers globally.
          </p>
        </CardContent>
      </Card>

      {/* Skills & Achievements */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 p-6 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-purple-300">🚀 Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <MorphingText
              texts={["React.js", "Next.js", "Express.js", "MongoDB", "IoT & Automation"]}
            />
            <p className="mt-2 text-gray-400">
              Proficient in multiple programming languages including 
              <span className="text-blue-400"> C, C++, C#, Java, Python, and JavaScript.</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 p-6 rounded-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-blue-300">🏆 Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-400">
              <li>Runner-up - National Level Hackathon (Parkveu)</li>
              <li>Hackmageddon 2024 - Top 6 Team</li>
              <li>SIH Internal Hackathon - Top 25</li>
              <li>Leadership - Guvi-REC & Intellexa AI</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Contact & Social Links */}
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold">📩 Get in Touch</h2>
        <div className="mt-4 flex space-x-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            asChild
          >
            <a href="mailto:thirumurganaksofficial@gmail.com">
              <FaEnvelope className="text-red-400" />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            asChild
          >
            <a href="https://github.com/AKSTHIRUMURUGAN" target="_blank">
              <FaGithub className="text-white" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            asChild
          >
            <a href="https://www.linkedin.com/in/thirumuruganaks" target="_blank">
              <FaLinkedin className="text-blue-500" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-sm text-center">
        <SparklesText text="Made with ❤️ by A.K.S. Thirumurugan" />
      </footer>
    </section>
  );
}
