"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import { Highlight } from "../ui/hero-highlight";

export default function MovingBorder() {
  return (
    (<div className="w-full flex justify-center">
      <div className="mt-16">
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800 text-7xl font-extrabold">
                  <Highlight className="text-white rounded-2xl">
                  Gallery
        </Highlight>
        
      </Button>
      </div>
    </div>)
  );
}
