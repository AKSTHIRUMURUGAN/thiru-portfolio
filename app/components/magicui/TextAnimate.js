"use client";

import { TextAnimate } from "./ui/text-animate";
import { MorphingText } from "./ui/morphing-text";
import { TypingAnimation } from "./ui/typing-animation";
import { WordRotate } from "./ui/word-rotate";
import { AuroraText } from "./ui/aurora-text";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { SparklesText } from "./ui/sparkle-text";
import { FlipText } from "./ui/flip-text";
import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";

export default function ThiruWorld() {
  const words = [
    "IoT Innovator",
    "Fullstack Developer",
    "Hackathon Champion",
    "Creative Thinker",
    "Tech Leader",
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      {/* Welcome Section */}
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          <AuroraText>Welcome to Thiru World 🚀</AuroraText>
        </h1>

        <TextAnimate
          animation="blurInUp"
          by="text"
          className="text-3xl md:text-5xl font-bold"
        >
          Hi, I'm A.K.S. Thirumurugan!
        </TextAnimate>

        <WordRotate
          className="text-3xl font-semibold text-purple-400"
          words={words}
        />

        <TypingAnimation className="text-lg md:text-xl text-gray-400">
          "Explore my world – where creativity meets technology!"
        </TypingAnimation>
      </div>

      {/* Animation Showcase */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {/* Fade In */}
        <TextAnimate animation="fadeIn" by="character" className="text-3xl">
          I build experiences that inspire.
        </TextAnimate>

        {/* Blur In */}
        <TextAnimate animation="blurIn" by="word" className="text-3xl">
          IoT & Web Development Enthusiast
        </TextAnimate>

        {/* Slide Up */}
        <TextAnimate animation="slideUp" by="text" className="text-3xl">
          Innovation starts with imagination.
        </TextAnimate>

        {/* Slide Down */}
        <TextAnimate animation="slideDown" by="character" className="text-3xl">
          Creating tomorrow's tech, today.
        </TextAnimate>

        {/* Slide Left */}
        <TextAnimate animation="slideLeft" by="text" className="text-3xl">
          Fullstack Mastery – Frontend to Backend.
        </TextAnimate>

        {/* Slide Right */}
        <TextAnimate animation="slideRight" by="word" className="text-3xl">
          Shaping the Future, One Project at a Time.
        </TextAnimate>

        {/* Scale Up */}
        <TextAnimate animation="scaleUp" by="character" className="text-3xl">
          Every line of code tells a story.
        </TextAnimate>

        {/* Scale Down */}
        <TextAnimate animation="scaleDown" by="text" className="text-3xl">
          Let's innovate together.
        </TextAnimate>
      </div>

      {/* Shiny Call-to-Action */}
      <div
        className={cn(
          "group mt-16 rounded-full border border-black/5 bg-neutral-100 text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-2 text-xl font-semibold transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          Explore My Projects 🌟
        </AnimatedShinyText>
      </div>

      {/* Interactive Flip Text */}
      <FlipText
        className="mt-12 text-5xl font-extrabold -tracking-widest text-white"
        word="Your Journey Starts Here"
      />

      {/* Sparkling Footer */}
      <footer className="mt-16">
        <SparklesText text="🚀 Crafted with Passion – Thiru World" />
      </footer>

      {/* CTA Buttons */}
      <div className="mt-12 flex gap-6">
        <Button variant="outline" asChild>
          <a href="/about">Learn More About Me</a>
        </Button>

        <Button variant="outline" asChild>
          <a href="/projects">View My Projects</a>
        </Button>
      </div>
    </section>
  );
}
