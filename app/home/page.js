import React from 'react'
import Sparkles from '../components/aceternity/Sparkles'
import AnimatedPin from '../components/aceternity/Pin'
import Typewriter from '../components/aceternity/TypeWriter'
import ColourfulText from '../components/ui/colourful-text'
import LampEffect from '../components/aceternity/Lamp'
import ThreeDCard from '../components/aceternity/Card'

const page = () => {
  const awards = [
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "First Price",
      description: "Puratchiyalar virudhu",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Second Price",
      description: "Best Innovation Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Price",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Price",
      description: "Community Excellence Award",
      link: "#",
    },
    // Add more cards as needed
  ];
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
    ];
  return (
    <div>
    <Sparkles>
        <LampEffect><Typewriter/>   
 <ColourfulText text="components" /> 
      </LampEffect>
      <AnimatedPin projects={projects}/>
      <ThreeDCard cardData={awards}/>
        


    </Sparkles>
    </div>
  )
}

export default page