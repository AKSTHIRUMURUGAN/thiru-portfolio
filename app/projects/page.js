import React from 'react'
import GridBackground from '../components/aceternity/GridBackground'
import AnimatedPin from '../components/aceternity/Pin'
import Squares from '../components/GridBg'

const page = () => {
  const projects = [
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
    {
      title: "TechBuddy Space",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description:
        "TechBuddySpace is an edutech startup featuring theme-based animations, AOS, and glassmorphism.",
    },
  ];
  return (
    <Squares 
    speed={0.5} 
    squareSize={40}
    direction='diagonal' // up, down, left, right, diagonal
    borderColor='#fff'
    hoverFillColor='#222'
    >
      <AnimatedPin projects={projects}/>
      </Squares>
  )
}

export default page