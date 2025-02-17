"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function Typewriter() {
     
  const words = [
    {
      text: "Welcome",
      className: "text-white pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10"
    },
    {
      text: "to",
      className: "text-white pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10 "
    },
    {
      text: "Thiru's",
      className: "text-white pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10 "
    },
    {
      text: "World",
      className: "text-white pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10"
    },

  ];
  return (
 

      <TypewriterEffect words={words}  className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-6xl font-semibold leading-none text-transparent from-white to-slate-900/10"/>
  
  );
}
