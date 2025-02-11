import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function BeamsWithCollision({children}) {
  return (
    (<BackgroundBeamsWithCollision className="w-full h-full">
{children}
    </BackgroundBeamsWithCollision>)
  );
}
