"use client";

import React,{useState,useEffect} from "react";
import Particles from "../components/ParticlesBg";
import RollingGallery from '../components/RollingGallery'
import TiltedCardStack from '../components/TiltedCardStack'
import FocusCardEffect from '../components/aceternity/FocusCards'
import CarouselEffect from '../components/aceternity/NewCarousel'
import MovingBorderEffect from '../components/aceternity/MovingBorder'

const Page = () => {
    const [role, setRole] = useState("Visitor"); // Default role
      useEffect(() => {
        const storedRole = localStorage.getItem("role") || "Visitor";
        setRole(storedRole);
      }, []);
  return (
    <div className="relative top-0 left-0 min-h-screen min-w-[100vw] w-full h-full bg-transparent">
      {/* Particles Background */}
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Hidden SVG Defs for Glow Effect */}
      {/* <svg>
        <defs>
          <filter id="glow-effect" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4" result="blur4" />
            <feGaussianBlur stdDeviation="19" result="blur19" />
            <feGaussianBlur stdDeviation="9" result="blur9" />
            <feGaussianBlur stdDeviation="30" result="blur30" />

            <feColorMatrix
              in="blur4"
              result="color-0-blur"
              type="matrix"
              values="1 0 0 0 0 0 0.98 0 0 0 0 0 0.96 0 0 0 0 0 0.8 0"
            />
            <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />

            <feColorMatrix
              in="blur19"
              result="color-1-blur"
              type="matrix"
              values="0.82 0 0 0 0 0 0.49 0 0 0 0 0 0.26 0 0 0 0 0 1 0"
            />
            <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />

            <feColorMatrix
              in="blur9"
              result="color-2-blur"
              type="matrix"
              values="1 0 0 0 0 0 0.67 0 0 0 0 0 0.36 0 0 0 0 0 0.65 0"
            />
            <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />

            <feColorMatrix
              in="blur30"
              result="color-3-blur"
              type="matrix"
              values="1 0 0 0 0 0 0.61 0 0 0 0 0 0.39 0 0 0 0 0 1 0"
            />
            <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />

            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg> */}

      {/* Glowing Text */}
      {/* <div
        className="absolute mt-4 top-12 text-7xl font-bold text-white rounded-xl"
        style={{ filter: "url(#glow-effect)" }}
      >
        Gallery
      </div> */}
      <MovingBorderEffect/>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className="mt-[70vh]">
      <CarouselEffect/>
      <FocusCardEffect/>
      {role === "Hire" ?null:(
        
      <TiltedCardStack/>)}
      </div>
      

     
    </div>
  );
};

export default Page;
