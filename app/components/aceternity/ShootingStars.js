"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
export default function ShootingStarsAndStarsBackground({children}) {
  return (
    (<div
      className=" min-h-screen h-full rounded-md bg-neutral-900 flex flex-col align-middle relative w-[100vw]">
      {children}
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
