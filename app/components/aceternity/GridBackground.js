import React from "react";

export default function GridBackground({children}) {
  return (
    (<div
      className="h-full w-full bg-black  bg-grid-white/[0.5]  relative ">
{children}
    </div>)
  );
}
