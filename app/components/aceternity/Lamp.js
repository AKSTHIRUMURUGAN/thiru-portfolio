"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export default function LampEffect({children}) {
  return (
    (<LampContainer className="bg-transparent h-fit">
      <motion.h1
        initial={{ opacity: 0.25, y: 50 }}
        whileInView={{ opacity: 1, y: -10 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-transparent  py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        {children}
      </motion.h1>
    </LampContainer>)
  );
}
