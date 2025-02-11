"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function Typewriter() {
  const words = [
    {
      text: "Welcome",
      className: "text-white "
    },
    {
      text: "TO",
      className: "text-white "
    },
    {
      text: "Thiru's",
      className: "text-white "
    },
    {
      text: "World",
      className: "text-white "
    },

  ];
  return (
 

      <TypewriterEffect words={words} />
  
  );
}
