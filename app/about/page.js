"use client";
import { useState, useEffect } from "react";
import React from "react";
import ShootingStarsAndStarsBackground from "../components/aceternity/ShootingStars";
import TrueFocus from "../components/TrueFocus";
import TimelineEffect from "../components/aceternity/Timeline";
import FlipWordsEffect from "../components/aceternity/FlipWord";
import TextRevealCardEffect from "../components/aceternity/TextRevealCard";
import TextGenerate from "../components/aceternity/TextGenerate";
import TechStack from "../components/TechStack";
import IconCloudEffect from "../components/magicui/IconCloud";
import { TextAnimate } from "../components/magicui/ui/text-animate";
import { MorphingText } from "../components/magicui/ui/morphing-text";
import { TypingAnimation } from "../components/magicui/ui/typing-animation";
import { WordRotate } from "../components/magicui/ui/word-rotate";
import { AuroraText } from "../components/magicui/ui/aurora-text";
import { AnimatedShinyText } from "../components/magicui/ui/animated-shiny-text";
import { SparklesText } from "../components/magicui/ui/sparkle-text";
import { FlipText } from "../components/magicui/ui/flip-text";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [role, setRole] = useState("Visitor"); // Default role

  useEffect(() => {
    // Check window width to determine if it's mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Get role from localStorage
    const storedRole = localStorage.getItem("role") || "Visitor";
    setRole(storedRole);

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const texts = [
    "Innovator",
    "FullStack Developer",
    "IoT Enthusiast",
    "Creative Mind",
    "Hackathon Champion",
  ];

  return (
    <ShootingStarsAndStarsBackground>
      {/* Section 1: Hero Section with TrueFocus */}
      <div className="mt-16">
        <TrueFocus
          sentence="About Me"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Section 2: Hero Section with AuroraText and WordRotate */}
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl bg-black">
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

      {/* Section 3: About Section with FlipText and Dynamic Content */}
      <Card className="mt-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            <FlipText
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              word="About Me"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-gray-300">
          {role === "Hire" ? (
            <>
              <TextAnimate animation="blurIn" by="word" delay={0.2} duration={0.5}>
                I am a dedicated and versatile professional with expertise in full-stack development, robotics, IoT, and digital marketing. Currently pursuing a Bachelor of Engineering in Robotics and Automation at Rajalakshmi Engineering College, I have a strong foundation in both software and hardware development.
              </TextAnimate>
              <TextAnimate animation="slideUp" by="word" delay={0.4} duration={0.5} className="mt-4">
                <span className="font-semibold text-white">Core Skills & Expertise:</span>
                <br />
                ✔ Full-Stack Development: HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, MongoDB, Express.js
                <br />
                ✔ Programming Languages: C, C++, Java, Python, C#
                <br />
                ✔ Game & 3D Development: Unity, Blender
                <br />
                ✔ Cybersecurity & Blockchain: Basic security principles, decentralized systems
                <br />
                ✔ Digital Marketing & Branding: Video editing, poster/logo design, content creation, strategic marketing
              </TextAnimate>
              <TextAnimate animation="fadeIn" by="line" delay={0.6} duration={0.5} className="mt-4">
                <span className="font-semibold text-white">Why Choose Me?</span>
                <br />
                ✔ Innovative Thinking: I approach challenges with a creative, solution-driven mindset.
                <br />
                ✔ Continuous Learning: I stay updated with the latest technologies and trends.
                <br />
                ✔ Collaboration & Communication: I work seamlessly with diverse teams, ensuring efficiency and success.
                <br />
                ✔ Adaptability: I have experience across multiple domains, making me a valuable asset in various roles.
              </TextAnimate>
            </>
          ) : (
            <>
              <TextAnimate animation="blurInUp" by="word" delay={0.2} duration={0.5}>
                 Hey there! I’m Aks Thirumurugan!
              </TextAnimate>
              <TextAnimate animation="slideUp" by="word" delay={0.4} duration={0.5} className="mt-4">
                I’m a tech enthusiast, problem solver, and lifelong learner currently pursuing my 3rd year in Robotics and Automation Engineering at Rajalakshmi Engineering College. I love exploring new technologies, participating in hackathons, and building innovative projects that solve real-world problems.
              </TextAnimate>
              <TextAnimate animation="fadeIn" by="line" delay={0.6} duration={0.5} className="mt-4">
                I’ve dived into full-stack development, game development, cybersecurity, and digital marketing—because why limit myself to just one field? From coding in C, C++, Python, Java, and C# to designing in Blender and Unity, I enjoy creating things that make an impact.
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="character" delay={0.8} duration={0.5} className="mt-4">
                When I’m not coding, you’ll find me brainstorming crazy ideas with my team TechBuddy, networking with like-minded people, or helping friends understand complex concepts (because I love teaching too!).
              </TextAnimate>
              <TextAnimate animation="scaleUp" by="text" delay={1.0} duration={0.5} className="mt-4">
                I believe in stepping out of my comfort zone,  
              </TextAnimate>
              taking up every challenge that comes my way, and growing together with my team. Whether it’s hackathons, projects, or startups, I’m always ready to contribute, collaborate, and innovate!
            </>
          )}
        </CardContent>
      </Card>

      {/* Section 4: TimelineEffect - Education, Internships, Clubs */}
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          <AnimatedShinyText text="My Journey" />
        </h2>
        <TimelineEffect />
      </div>

      {/* Section 5: TextRevealCardEffect - Core Philosophy */}
      <div className="mt-10">
        <TextRevealCardEffect />
      </div>

      {/* Section 6: TechStack or IconCloudEffect - Skills Showcase */}
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          <SparklesText text="Tech Stack" />
        </h2>
        {isMobile ? <IconCloudEffect /> : <TechStack />}
      </div>

      {/* Section 7: Contact & Social Links */}
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold">
          <TextAnimate animation="blurIn" by="word" delay={0.2} duration={0.5}>
            📩 Get in Touch
          </TextAnimate>
        </h2>
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
    </ShootingStarsAndStarsBackground>
  );
};

export default About;