"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const word = `I’m Aks Thirumurugan, a passionate Full Stack Web Developer and IoT enthusiast with a knack for solving real-world problems through innovative tech solutions. Proficient in React, Next.js, MongoDB, and Tailwind CSS, I build scalable and user-friendly applications. I thrive in collaborative environments, whether it’s leading hackathon teams or mentoring peers. My curiosity drives me to explore emerging technologies like IoT, cybersecurity, and blockchain. Let’s connect and build something amazing together!`;

export default function TextGenerate({words}) {
  return <TextGenerateEffect words={words} />;
}