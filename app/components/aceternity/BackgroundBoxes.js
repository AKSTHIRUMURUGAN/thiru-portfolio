"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxes({ children }) {
  return (
    <div
      className="h-full relative overflow-hidden w-full  bg-slate-900 flex flex-col items-center justify-center rounded-lg"
    >
      <Boxes className="w-full h-full" />
      {children}
    </div>
  );
}
