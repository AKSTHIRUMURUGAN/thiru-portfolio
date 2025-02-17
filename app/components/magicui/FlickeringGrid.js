import { FlickeringGrid } from "./ui/flickering-grid";

export default function FlickeringGridEffect({ children }) {
  return (
    <div className="relative min-h-screen h-full w-[100vw] overflow-hidden rounded-lg border bg-background">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      {/* Children Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}