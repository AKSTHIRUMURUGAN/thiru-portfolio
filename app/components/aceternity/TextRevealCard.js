"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export default function TextRevealCardEffect() {
  return (
    <div className="flex items-center justify-center h-[20rem] rounded-2xl w-full z-50">
      <TextRevealCard text="You know the business" revealText="I know the tech">
        <TextRevealCardTitle>
          Innovation is my passion, collaboration is my strength.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          I believe in creating solutions that are not just functional but also impactful. Whether it’s through coding, mentoring, or leading teams, I strive to make a difference.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}