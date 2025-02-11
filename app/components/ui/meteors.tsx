import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number = 20, // Default to 20 meteors if not provided
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);
  
  return (
    <>
      {meteors.map((_, idx) => {
        const randomX = Math.random() * 100; // Random position from 0% to 100%
        const randomY = Math.random() * 100; // Random position from 0% to 100%
        const duration = Math.random() * (5 - 2) + 2; // Random duration between 2s and 5s
        const delay = Math.random() * (1 - 0.2) + 0.2; // Random delay between 0.2s and 1s

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "absolute h-0.5 w-0.5 rounded-full bg-slate-500",
              "shadow-[0_0_10px_2px_#ffffff30] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%]",
              "before:w-[80px] before:h-[2px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              "animate-meteor-effect",
              className
            )}
            style={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></span>
        );
      })}
    </>
  );
};
