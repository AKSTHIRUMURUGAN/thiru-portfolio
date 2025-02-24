"use client";

import { cn } from "@/lib/utils";
import { Router } from "lucide-react";
import { motion, MotionProps, type AnimationProps } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.9 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 30,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
  link?:string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className,link, ...props}, ref) => {
  const router=useRouter();
  return (
    <div className='w-full flex justify-center'>
      <div className='w-fit'>
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-2 font-medium text-white transition-all duration-300 ease-in-out",
        "backdrop-blur-xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_60%)]",
        "hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]",
        "dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15)_0%,transparent_70%)]",
        "dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]",
        className
      )}
      {...animationProps}
      {...props}
      onClick={()=>router.push(`/${link}`)}
    >
      {/* Text with Visible Contrast */}
      <span
        className="relative block size-full text-lg uppercase font-semibold tracking-wider"
        style={{
          color: "rgba(255, 255, 255, 1)", // Fully visible white text
          maskImage:
            "linear-gradient(-75deg,hsl(0, 0%, 100%) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(0, 0%, 100%) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* Shiny Effect */}
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.2)_calc(var(--x)+20%),rgba(255,255,255,0.8)_calc(var(--x)+25%),rgba(255,255,255,0.2)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
    </div>
    </div>
  );
});

ShinyButton.displayName = "ShinyButton";
