"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CirclingElements from "../components/fancyComponents/CirclingElements";

const exampleImages = [
  { url: "https://source.unsplash.com/random/200x200?nature" },
  { url: "https://source.unsplash.com/random/200x200?water" },
  { url: "https://source.unsplash.com/random/200x200?city" },
  { url: "https://source.unsplash.com/random/200x200?animals" },
  { url: "https://source.unsplash.com/random/200x200?mountains" },
  { url: "https://source.unsplash.com/random/200x200?forest" },
];

const CirclingImages = () => {
  const [radius, setRadius] = useState(0);

  // Function to update radius based on viewport width
  const updateRadius = () => {
    setRadius(window.innerWidth * 0.1); // 10vw for radius
  };

  useEffect(() => {
    updateRadius(); // Set radius on mount
    window.addEventListener("resize", updateRadius); // Update on resize

    return () => window.removeEventListener("resize", updateRadius); // Cleanup event listener
  }, []);

  return (
    <div className="w-screen h-screen bg-[#efefef] flex items-center justify-center">
      <CirclingElements radius={radius}>
        {exampleImages.map((image, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-28 md:h-28 absolute -translate-x-1/2 -translate-y-1/2"
          >
            <Image src={image.url} fill alt="image" className="object-cover" />
          </div>
        ))}
      </CirclingElements>
    </div>
  );
};

export default CirclingImages;
