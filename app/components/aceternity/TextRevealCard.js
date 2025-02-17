"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export default function TextRevealCardEffect() {
  return (
    (<div
      className="flex items-center justify-center  h-[40rem] rounded-2xl w-full z-10">
      <TextRevealCard text="You know the business" revealText="I know the chemistry ">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>)
  );
}
