"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export default function AnimatedPin({projects}) {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {projects.map((card, index) => (
        <PinContainer
          key={index}
          title={card.title}
          href={card.href}
          className="w-full flex-1 min-w-[250px] min-h-[350px] glassmorphism"
        >
          <div className="w-full h-full flex flex-col items-center text-center p-4 border border-white/[0.2] rounded-lg">
            {/* Image */}
            <Image
              src={card.imageSrc}
              width={2000}
              height={700}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-slate-100">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 mt-2 flex-grow">
              {card.description}
            </p>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}
 