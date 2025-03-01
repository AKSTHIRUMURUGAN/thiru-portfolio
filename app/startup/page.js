"use client";
import React from "react";
import HeroHighlightEffect from "../components/aceternity/HeroHighlight";
import PixelTransition from "../components/PixelTransition";

const Startup = () => {
  return (
    <HeroHighlightEffect>
      <div className="container w-full flex justify-center mt-12">
  <p className="glitch">
    <span aria-hidden="true">STARTUP</span>
    STARTUP
    <span aria-hidden="true">STARTUP</span>
  </p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full h-full place-items-center p-2">
        {/* Startup Logo Section */}
        <PixelTransition
          firstContent={
            <img
              src="/startup/tb.jpg" // Change this to your startup's logo
              alt="Tech Buddy Space"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>
               Edutech startup based on peer learning. for the students, by the students.
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card w-full max-w-[300px] sm:max-w-full"
        />
                        {/* Startup Logo Section */}
                        <PixelTransition
          firstContent={
            <img
              src="/startup/agri_trade.jpg" // Change this to your startup's logo
              alt="Agri Trade"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>
                Comming Soon
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card w-full max-w-[300px] sm:max-w-full"
        />

        {/* Startup Description Section */}
        <PixelTransition
          firstContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
                padding: "20px",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>
                Comming soon...
              </p>
            </div>
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",
                padding: "20px",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "1.5rem", color: "#ffffff", textAlign: "center" }}>
                Something is under cooking...
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card w-full max-w-[300px] sm:max-w-full"
        />


        {/* Startup Description Section */}
        <PixelTransition
          firstContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
                padding: "20px",
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>
                Comming soon...
              </p>
            </div>
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",
                padding: "20px",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "1.5rem", color: "#ffffff", textAlign: "center" }}>
               Something is under cooking....
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card w-full max-w-[300px] sm:max-w-full"
        />
      </div>
    </HeroHighlightEffect>
  );
};

export default Startup;
