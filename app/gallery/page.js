"use client";

import React from "react";
import { AnimatedBackground } from "animated-backgrounds";  // Import it correctly
import Particles from "../components/ParticlesBg"

const Page = () => {
  return (
    // <div className="relative w-full h-screen flex items-center justify-center">
    //   <h1 className="text-white text-3xl font-bold z-10">
    //     Welcome to Next.js with Animated Backgrounds
    //   </h1>

    //   {/* Animated Background Component */}
    //   <AnimatedBackground
    //     animationName="particleNetwork"
    //     blendMode="blend" // Optional for effects
    //     className="absolute top-0 left-0 w-full h-full bg-black"
    //   />
    // </div>
    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  >
        <h1>hello world</h1>
    </Particles>
  );
};

export default Page;
