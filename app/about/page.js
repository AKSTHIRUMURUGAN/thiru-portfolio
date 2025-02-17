"use client"
import { useState, useEffect } from "react";
import React from 'react'
import ShootingStarsAndStarsBackground from "../components/aceternity/ShootingStars"
import TrueFocus from '../components/TrueFocus'
import TimelineEffect from '../components/aceternity/Timeline'
import FlipWordsEffect from '../components/aceternity/FlipWord'
import TextRevealCardEffect from '../components/aceternity/TextRevealCard'
import TextGenerate from '../components/aceternity/TextGenerate'
import MaskEffect from '../components/aceternity/MaskEffect'
import TechStack from '../components/TechStack'
import StackIcon from 'tech-stack-icons'
import IconCloudEffect from '../components/magicui/IconCloud'

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width to determine if it's mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <ShootingStarsAndStarsBackground>
      <div className='mt-16'>
        <TrueFocus 
sentence="About Me"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}

/>

</div>
<FlipWordsEffect/>
<TextGenerate/>
<TimelineEffect/>
<TextRevealCardEffect/>
{isMobile ? <IconCloudEffect /> : <TechStack />}
    </ShootingStarsAndStarsBackground>
  )
}

export default About