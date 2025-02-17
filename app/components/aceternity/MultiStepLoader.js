"use client";
import React, { useEffect, useState } from "react";
import { MultiStepLoader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function MultiStepLoaderEffect({ loadingStates, text }) {
  const [loading, setLoading] = useState(false);



  return (
    <div className="w-full  flex items-center justify-center">
      {/* Core Loader Modal */}
      <MultiStepLoader 
        loadingStates={loadingStates} 
        loading={loading} // ✅ Corrected
        duration={2000} 
        loop={false} 
        onComplete={() => setLoading(false)} // ✅ Ensure loader stops
      />

      {/* Start Button */}
      <button
        onClick={() => { 
          setLoading(true); 
        }} 
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-white mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-xl px-8"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}>
        {text}
      </button>

      {/* Close Button */}
      {loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => setLoading(false)}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
