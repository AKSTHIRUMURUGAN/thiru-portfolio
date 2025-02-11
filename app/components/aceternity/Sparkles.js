"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export default function Sparkles({children}) {
  return (
    (<div
      className="h-full relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF" />
      </div>
      <div
        className="z-20 py-[1vw] flex flex-col gap-5">
       {children}
      </div>
    </div>)
  );
}
