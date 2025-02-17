import React from 'react'
import AnimatedPin from '../components/aceternity/Pin'
import Squares from '../components/GridBg'
import GradientText from '../components/GradientText'
import WarpBg from '../components/magicui/WrapBackground'


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
    // <Squares 
    // speed={0.5} 
    // squareSize={40}
    // direction='diagonal' // up, down, left, right, diagonal
    // borderColor='#fff'
    // hoverFillColor='#222'
    // >
    <WarpBg>
      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="text-7xl font-extrabold bg-transparent mt-16"
>
  <h1>PROJECTS</h1>
</GradientText>
      <AnimatedPin projects={projects}/>
      {/* </Squares> */}
      </WarpBg>
  )
}

export default page