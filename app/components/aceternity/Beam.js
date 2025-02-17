"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function Beams({children}) {
  return (
    (<div
      className="min-h-screen  h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center  antialiased">
    
{children}
      <BackgroundBeams />
    </div>)
  );
}
