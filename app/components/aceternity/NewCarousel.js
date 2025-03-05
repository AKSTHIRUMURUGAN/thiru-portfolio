"use client";

import Carousel from "../ui/carousel.jsx";
export default function CarouselEffect() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/gallery/college/devs_banner.jpeg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/gallery/college/oist.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/gallery/college/guviceo.jpeg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/gallery/college/hm.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/gallery/college/startup_india.jpeg",
    },
  ];
  return (
    (<div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>)
  );
}
