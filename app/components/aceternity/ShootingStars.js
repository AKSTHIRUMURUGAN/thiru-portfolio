"use client";
import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
export default function ShootingStarsAndStarsBackground({children}) {
  return (
    (<div
      className=" min-h-screen h-full  bg-black flex flex-col  relative w-full md:w-[100vw] ">
        <div className="z-40">
      {children}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}
