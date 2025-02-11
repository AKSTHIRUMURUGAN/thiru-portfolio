"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function Beams({children}) {
  return (
    (<div
      className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    
{children}
      <BackgroundBeams />
    </div>)
  );
}
