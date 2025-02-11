"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
export default function ShootingStarsAndStarsBackground({children}) {
  return (
    (<div
      className="h-[100vh] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      {children}
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
