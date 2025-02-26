"use client";
import React from "react";
import BackgroundBoxes from "../components/aceternity/BackgroundBoxes";
import ThreeDCard from "../components/aceternity/Card";
import LetterGlitch from '../components/GlitchBg'
import Hackathonlist from '../components/aceternity/Hackathon'
import DecryptedText from '../components/DecryptedText'

const Hackathons= () => {
    const hackathons = [
        {
          author: "Bhopal oist",
          title: "National level hackathon",
          description: "Compete with top AI engineers to solve real-world challenges using ML and AI.",
          image: "/hackathon/oist1.jpg",
          link: "/hackathon/ai-innovation",
          authorAvatar: "https://source.unsplash.com/50x50/?person",
        },
        {
          author: "Rec",
          title: "Devfest hackathon",
          description: "Build decentralized applications and showcase your blockchain skills.",
          image: "/hackathon/devs.jpg",
          link: "/hackathon/blockchain-hackfest",
          authorAvatar: "https://source.unsplash.com/50x50/?avatar",
        },
        {
          author: "rec",
          title: "Hackmageddon",
          description: "Solve cybersecurity puzzles and compete with ethical hackers worldwide.",
          image: "/hackathon/hm1.jpg",
          link: "/hackathon/cybersecurity",
          authorAvatar: "https://source.unsplash.com/50x50/?person,avatar",
        },
        {
          author: "Rathinam Engineering college",
          title: "Rathinam Hackathon",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/rathinam.jpg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
        {
          author: "REC",
          title: "Smart India Hackathon (Internal)",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/sih.jpeg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
        {
          author: "SRM",
          title: "Hack Summit",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/hack_summit.jpg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
        {
          author: "Sri Sai Ram",
          title: "Data Sprint 2.0",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/DataSprint.jpeg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
        {
          author: "Nit Calicut",
          title: "Hack 4 Good",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/h4g.jpg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
        {
          author: "Saveetha Engineering College",
          title: "Hack Hustle",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "/hackathon/hh.jpg",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
      ];

  return (
    <LetterGlitch >
      <div className="w-full mt-16 ">
      <DecryptedText
  text="HACKATHONS"
  speed={200}
  animateOn="view"
  revealDirection="start"
  className="text-white text-4xl  sm:text-5xl font-extrabold  mx-auto drop-shadow-[2px_2px_0px_rgba(0,255,0,1)] tracking-widest"
  encryptedClassName="text-white text-4xl sm:text-5xl font-extrabold drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] tracking-wide"
  parentClassName="flex justify-center items-center"
/>


</div>
      <Hackathonlist hackathons={hackathons} />
      </LetterGlitch>
  );
};

export default Hackathons;
