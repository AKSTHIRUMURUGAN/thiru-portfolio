"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

export default function VortexEffect({ children }) {
  return (
    <div className="relative w-full min-h-screen h-full">
      {/* Vortex Background */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        containerClassName="fixed top-0 left-0 w-full h-full"
        className="w-full h-full"
      />

      {/* Content (ensured it's above the background) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
