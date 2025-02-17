import React from "react";
import { BackgroundLines } from "../ui/background-lines";

export default function Lines({children}) {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
{children}
    </BackgroundLines>)
  );
}
