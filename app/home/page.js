"use client"
import React from 'react'
import Sparkles from '../components/aceternity/Sparkles'
import AnimatedPin from '../components/aceternity/Pin'
import Typewriter from '../components/aceternity/TypeWriter'
import ColourfulText from '../components/ui/colourful-text'
import LampEffect from '../components/aceternity/Lamp'
import ThreeDCard from '../components/aceternity/Card'
import { AuroraText } from '../components/magicui/ui/aurora-text'
import { WordRotate } from '../components/magicui/ui/word-rotate'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { FlipText } from '../components/magicui/ui/flip-text'
import { TypingAnimation } from '../components/magicui/ui/typing-animation'
import Image from 'next/image'
import { ShinyButton } from '../components/magicui/ui/shiny-button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaFileDownload } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const page = () => {
  const router=useRouter();
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
    const texts = [
      "IoT Innovator",
      "Fullstack Developer",
      "Hackathon Champion",
      "Creative Thinker",
      "Tech Leader",
    ];
  return (
    <div>
    <Sparkles>
        <LampEffect>
        <ColourfulText text="Hi There"  /> 
          <Typewriter/>

      </LampEffect>
      <div className="absolute top-[55vh] w-full flex justify-center">
  <div className="w-[600px]">
    <DotLottieReact
      src="https://lottie.host/6fcb24f6-e0e8-4705-8131-248bb073de55/NlJU0g5RHj.lottie"
      loop
      autoplay
    />
  </div>
</div>



      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl bg-black">
          <AuroraText>A.K.S. Thirumurugan</AuroraText>

        </h1>
        <WordRotate
                    className="mt-4 text-3xl font-semibold md:text-4xl text-gray-300"
                    words={texts}
                  />
                          <TypingAnimation className="mt-4 text-lg md:text-xl text-gray-400">
          "Turning Ideas into Reality with Code & Innovation."
        </TypingAnimation>
        </div>
              {/* About Section */}
              <div className='w-full flex flex-col-reverse justify-center sm:flex-row gap-4'>
      <Card className="mt-10 max-w-3xl bg-white/10 backdrop-blur-md rounded-lg p-4">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            <FlipText
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              word="About Me"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-gray-300">
          <p>
            Hi, I’m <span className="font-semibold text-white">A.K.S. Thirumurugan</span>, a 
            passionate <span className="text-blue-400">Full-Stack Developer</span> and 
            <span className="text-purple-400"> IoT Enthusiast</span>. I thrive on crafting scalable, 
            high-performance applications that blend innovation with usability.
          </p>
          <p className="mt-4">
          💬 I am equally passionate about collaborating with others and sharing knowledge—I believe the best innovations happen when people learn and grow together. My blend of technical expertise and creative problem-solving enables me to turn innovative ideas into high-quality, real-world solutions.
          </p>
          <p className="mt-4 text-glowText">
          💡 Need help with a project, hackathon, or just want to brainstorm ideas? Feel free to connect—I’m always happy to help! 🚀
          </p>
          <div className='w-full flex justify-evenly py-4'>
    
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="shadow-white shadow-md bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition duration-300"
      >
        Download CV <FaFileDownload />
      </a>
  
          <button className='gbtn' onClick={()=>router.push("/about")}>More about me..</button>
          </div>
        </CardContent>
      </Card>
      <Image
      src={"./Thiru.png"}
      width={400}
      height={400}
      alt='photo'
      className='img'
      />
      </div>
    <div className="gradient-glowing-text text-6xl mx-2 my-4">
  <h1 aria-hidden="true">PROJECTS <span>🖥️</span></h1>
  <h1>PROJECTS <span>🖥️</span></h1> 
</div> 
      <AnimatedPin projects={projects}/>
      <ShinyButton link='projects'>more...</ShinyButton>
    <div className="gradient-glowing-text text-6xl mx-4 my-4">
  <h1 aria-hidden="true">AWARDS <span>🏆</span></h1>
  <h1>AWARDS <span>🏆</span></h1>
</div> 
      <ThreeDCard cardData={awards}/>
      <ShinyButton link='awards'>more...</ShinyButton>
        


    </Sparkles>
    </div>
  )
}

export default page