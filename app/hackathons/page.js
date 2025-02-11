"use client";
import React from "react";
import BackgroundBoxes from "../components/aceternity/BackgroundBoxes";
import ThreeDCard from "../components/aceternity/Card";
import LetterGlitch from '../components/GlitchBg'
import Hackathonlist from '../components/aceternity/Hackathon'

const Hackathons= () => {
    const hackathons = [
        {
          author: "Hackathon 1",
          title: "AI Innovation Challenge",
          description: "Compete with top AI engineers to solve real-world challenges using ML and AI.",
          image: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
          link: "/hackathon/ai-innovation",
          authorAvatar: "https://source.unsplash.com/50x50/?person",
        },
        {
          author: "Hackathon 2",
          title: "Blockchain Hackfest",
          description: "Build decentralized applications and showcase your blockchain skills.",
          image: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
          link: "/hackathon/blockchain-hackfest",
          authorAvatar: "https://source.unsplash.com/50x50/?avatar",
        },
        {
          author: "Hackathon 3",
          title: "Cybersecurity Challenge",
          description: "Solve cybersecurity puzzles and compete with ethical hackers worldwide.",
          image: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
          link: "/hackathon/cybersecurity",
          authorAvatar: "https://source.unsplash.com/50x50/?person,avatar",
        },
        {
          author: "Hackathon 4",
          title: "Web3 Revolution",
          description: "Explore the power of Web3, DeFi, and Smart Contracts in this hackathon.",
          image: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
          link: "/hackathon/web3-revolution",
          authorAvatar: "https://source.unsplash.com/50x50/?crypto",
        },
      ];

  return (
    <LetterGlitch >
      <Hackathonlist hackathons={hackathons} />
      </LetterGlitch>
  );
};

export default Hackathons;
