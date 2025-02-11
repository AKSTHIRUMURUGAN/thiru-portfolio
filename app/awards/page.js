"use client";
import React from "react";
import BackgroundBoxes from "../components/aceternity/BackgroundBoxes";
import ThreeDCard from "../components/aceternity/Card";
import LetterGlitch from '../components/GlitchBg'
import VortexEffect from '../components/aceternity/VortexFull'

const Awards = () => {
  const awards = [
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "First Prize",
      description: "Puratchiyalar Virudhu",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Second Prize",
      description: "Best Innovation Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "First Prize",
      description: "Puratchiyalar Virudhu",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Second Prize",
      description: "Best Innovation Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "https://l653gm296w.ufs.sh/f/dFnzg2mKvQrJlElUI7092EKtm30TR8c6pNCjdqPzw1if5BQH",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
  ];

  return (
    <VortexEffect>
      <ThreeDCard cardData={awards} />
      </VortexEffect>
  );
};

export default Awards;
