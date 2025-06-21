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
      author: "Bhopal OIST",
      title: "National Level Hackathon",
      description: "Runner-up with Best Performer and Usable Product Awards at OIST’s AI-focused national hackathon powered by Cybrom.",
      image: "/hackathon/oist1.jpg",
      link: "/hackathon/ai-innovation",
      authorAvatar: "/hackathon/oist1.jpg"
    },
    {
      author: "REC",
      title: "DevFest Hackathon",
      description: "Won First Prize in DevFest hackathon by DEVS Club of REC for building impactful real-world tech solutions.",
      image: "/hackathon/devs.jpg",
      link: "/hackathon/blockchain-hackfest",
      authorAvatar: "/hackathon/devs.jpg"
    },
    {
      author: "REC",
      title: "Hackmageddon 2024",
      description: "Top 6 team and Special Prize winner in Hackmageddon by IEEE CS, GDSC, IIC, and Intellexa at REC.",
      image: "/hackathon/hm1.jpg",
      link: "/hackathon/cybersecurity",
      authorAvatar: "/hackathon/hm1.jpg"
    },
    {
      author: "Rathinam College",
      title: "Innovate-Athon",
      description: "Secured Special Prize and Best Team Award at Innovate-Athon for creativity and teamwork in problem-solving.",
      image: "/hackathon/rathinam.jpg",
      link: "/hackathon/web3-revolution",
      authorAvatar: "/hackathon/rathinam.jpg"
    },
    {
      author: "REC",
      title: "SIH Internal Hackathon",
      description: "Ranked in Top 25 teams in AICTE Smart India Internal Hackathon 2024 conducted at REC.",
      image: "/hackathon/sih.jpeg",
      link: "/hackathon/sih-2024",
      authorAvatar: "/hackathon/sih.jpeg"
    },
    {
      author: "SRM University",
      title: "HackSummit 5.0",
      description: "Won the Sustainability Champion Award at SRM’s national-level HackSummit 5.0 for eco-focused innovation.",
      image: "/hackathon/hack_summit.jpg",
      link: "/hackathon/sustainability-hack",
      authorAvatar: "/hackathon/hack_summit.jpg"
    },
    {
      author: "Sai Ram Institute",
      title: "Data Sprint 2.0",
      description: "Secured First Place at Data Sprint 2.0 by Sai Ram Institute for building a data-driven tech solution.",
      image: "/hackathon/DataSprint.jpeg",
      link: "/hackathon/data-sprint",
      authorAvatar: "/hackathon/DataSprint.jpeg"
    },
    {
      author: "NIT Calicut",
      title: "Hack 4 Good",
      description: "Built impactful tech for social good at Hack 4 Good hackathon hosted by NIT Calicut.",
      image: "/hackathon/hfg.jpg",
      link: "/hackathon/hack4good",
      authorAvatar: "/hackathon/hfg.jpg"
    },
    {
      author: "Saveetha Engineering",
      title: "Hack Hustle",
      description: "Explored innovation in Web3 and AI at Hack Hustle powered by SEC with Lenovo and Acer.",
      image: "/hackathon/hh.jpg",
      link: "/hackathon/hack-hustle",
      authorAvatar: "/hackathon/hh.jpg"
    }
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
