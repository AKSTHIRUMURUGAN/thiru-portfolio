"use client";
import React from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Image from "next/image";
import MultiStepLoaderEffect from './components/aceternity/MultiStepLoader'
import Globe from './components/uiLayout/Globe'
import { RiRocket2Line, RiBriefcaseLine } from "react-icons/ri";
import WarpBg from "./components/magicui/WrapBackground";
import FlickeringGridEffect from './components/magicui/FlickeringGrid'

export default function HeroScrollDemo() {
  const Visit = [
    { text: "👋 Hey there! Welcome to Thiru's World." },
    { text: "✨ Making your journey smooth and fun." },
    { text: "🛠️ Customizing the experience just for you..." },
    { text: "🔍 Ready to explore my projects, awards, and more?" },
    { text: "📖 Get to know my journey and inspirations!" },
    { text: "🍳 Cooking up the best experience for you..." },
    { text: "🎉 All set! Enjoy your adventure. 🚀" },
  ];
  const Hire = [
    { text: "🤝 Welcome! Evaluating my performance? Let's go!" },
    { text: "📂 Showcasing my best projects & achievements..." },
    { text: "🚀 Innovation-driven solutions that make an impact." },
    { text: "📊 Data-driven approach & problem-solving mindset." },
    { text: "💼 Proven expertise in Web Development,Iot." },
    { text: "🏆 Recognized in hackathons & industry challenges." },
    { text: "✅ Ready to be a valuable asset to your team or company!" },
  ];
  
  return (

    (
      <FlickeringGridEffect>
    <div className="w-full h-full min-h-screen flex flex-col overflow-hidden z-100">
      <ContainerScroll
        titleComponent={
          <>
            {/* <h1 className="text-4xl font-semibold text-white"> */}
            <h1 className='text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
              {/* DESIGN A MASTERPIECE */}
            {/* </h1> */}
              Welcome to the world of<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                THIRUMURUGAN 
              </span>
            </h1>
          </>
        }>
          <Globe/>
      </ContainerScroll>
      <div className=" text-white flex flex-col items-center justify-center px-6 pb-6" >
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center mb-6">
        🔍 What brings you here today?
      </h1>

      {/* Options List */}
      <ul className="text-lg text-gray-300 space-y-2 mb-6">
        <li className="flex items-center gap-2">
          <RiRocket2Line className="h-6 w-6 text-blue-400" /> Are you an <span className="text-white font-semibold">explorer?</span> (Want to explore my work and journey)
        </li>
        <li className="flex items-center gap-2">
          <RiBriefcaseLine className="h-6 w-6 text-yellow-400" /> Are you looking to <span className="text-white font-semibold">hire?</span> (Seeking a skilled professional)
        </li>
      </ul>

      {/* Choose Your Path */}
      <h2 className="text-2xl font-semibold text-center text-gray-200 mb-6">
        🚀 Choose Your Path
      </h2>

   {/* Buttons Section */}
   <div className="flex flex-col md:flex-row gap-6">
        {/* Visitor Card */}
        
          <MultiStepLoaderEffect loadingStates={Visit} text={"Visitor  🌎"} />


        {/* Hire Me Card */}
      
          <MultiStepLoaderEffect loadingStates={Hire} text={"Hire  🎯"} />


      </div>
    </div>
    </div>
    </FlickeringGridEffect>
    )
  );
}
