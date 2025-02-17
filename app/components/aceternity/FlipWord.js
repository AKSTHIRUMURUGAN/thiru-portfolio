import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsEffect() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    (<div className="h-fit flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-400">
        Im a
        <FlipWords words={words} />
      </div>
    </div>)
  );
}
