import React from 'react'
import AnimatedPin from '../components/aceternity/Pin'
import Squares from '../components/GridBg'
import GradientText from '../components/GradientText'
import WarpBg from '../components/magicui/WrapBackground'


const page = () => {
  const projects = [
    {
      title: "TechBuddy Space - Peer-Learning Platform",
      href: "https://techbuddyspace.xyz",
      imageSrc: "/projects/tbspace.png",
      description: "Theme-based peer learning platform using AOS animations and glassmorphism UI for immersive tech education.",
    },
    {
      title: "Professional Portfolio",
      href: "https://www.thirumuruganaks.me/",
      imageSrc: "/projects/portfolio.png",
      description: "Creative personal portfolio showcasing skills, projects, and professional milestones with modern UI design.",
    },
    {
      title: "ParkWiz - Smart Parking Solution",
      href: "https://parkwiz.vercel.app/",
      imageSrc: "/projects/parkwiz.png",
      description: "Smart parking system with real-time updates, digital booking, and secure payment features.",
    },
    {
      title: "Nourish Net - Food Redistribution",
      href: "https://nouris-net-v1.vercel.app/",
      imageSrc: "/projects/nn.png",
      description: "Connects donors and receivers to reduce food waste and combat hunger through a social platform.",
    },
    {
      title: "Thiru Cart - E-commerce Platform",
      href: "https://thirucart.netlify.app/",
      imageSrc: "/projects/thiru_cart.png",
      description: "Fully responsive MERN-based e-commerce website with all essential shopping and payment functionalities.",
    },
    {
      title: "ClubHub - Event Management",
      href: "https://clubhubdevs.vercel.app/",
      imageSrc: "/projects/clubhub.png",
      description: "Central hub to manage, track, and discover all university club events and activities efficiently.",
    },
    {
      title: "DrugValve - Pharmacy Network",
      href: "https://drugvalve.vercel.app/",
      imageSrc: "/projects/drugvalve.png",
      description: "Pharmacy ecosystem streamlining medicine delivery across patients, pharmacies, and warehouses.",
    },
    {
      title: "ETLSID - Multilingual Learning Platform",
      href: "https://etlsid.netlify.app/",
      imageSrc: "/projects/etlsid_lp.png",
      description: "Gamified education for disabled students, supporting multiple languages and interactive learning tools.",
    },
    {
      title: "ETLSID - English Version",
      href: "https://etlsidrec.vercel.app/",
      imageSrc: "/projects/etlsid.png",
      description: "English interface of ETLSID offering engaging educational games for special needs learners.",
    },
    {
      title: "ETLSID - Tamil Version",
      href: "https://etlsidrectamil.vercel.app/",
      imageSrc: "/projects/etlsid_tamil.png",
      description: "Tamil version of the ETLSID platform with localized educational games and visual learning aids.",
    },
    {
      title: "ETLSID - Hindi Version",
      href: "https://etlsidrechindi.vercel.app/",
      imageSrc: "/projects/etlsid_hindi.png",
      description: "Hindi version of ETLSID providing inclusive learning tools for intellectually disabled students.",
    },
    {
      title: "BOTSHA 2024 - Robotics Symposium",
      href: "https://botsha.netlify.app/",
      imageSrc: "/projects/botsha.png",
      description: "Event site for a national robotics symposium hosted by Rajalakshmi Engineering College.",
    },
    {
      title: "3D Portfolio Clone",
      href: "https://thiruportfolio.netlify.app/",
      imageSrc: "/projects/portfolio_clone.png",
      description: "3D portfolio built with React Three Fiber, inspired by JS Mastery's modern web animations.",
    },
    {
      title: "Result Summary Component",
      href: "https://ressum.vercel.app/",
      imageSrc: "/projects/ressum.png",
      description: "Frontend Mentor challenge: Summary UI card with responsive layout and clean data display.",
    },
    {
      title: "Perfume Product Card",
      href: "https://prc-1.netlify.app/",
      imageSrc: "/projects/prc.png",
      description: "Elegant Chanel perfume card UI designed for Frontend Mentor’s beginner-level challenge.",
    },
    {
      title: "NFT Preview Card",
      href: "https://nft-preview-card-1.netlify.app/",
      imageSrc: "/projects/nft_card.png",
      description: "Frontend Mentor challenge: NFT collectible preview with hover effects and clean layout.",
    },
    {
      title: "Interactive Rating Component",
      href: "https://interactive-rating-component-1.netlify.app/",
      imageSrc: "/projects/irc.png",
      description: "Simple feedback rating system built with HTML, CSS, and JavaScript (Frontend Mentor challenge).",
    },
    {
      title: "Order Summary Component",
      href: "https://order-summary-component-1-new.netlify.app/",
      imageSrc: "/projects/osc.png",
      description: "Responsive subscription summary card challenge with modern layout and call-to-action design.",
    },
    {
      title: "Stats Preview Card",
      href: "https://starus-preview-card.netlify.app/",
      imageSrc: "/projects/spc.png",
      description: "Analytics preview component highlighting key data metrics with elegant, responsive design.",
    },
    {
      title: "ParkVeu - Location Testing",
      href: "https://parkveulocation.netlify.app/",
      imageSrc: "/projects/pvl.png",
      description: "Prototype testing location tracking for navigation within smart parking management systems.",
    },
    {
      title: "TechBuddy Space - Prototype",
      href: "https://techbuddyspace.netlify.app/",
      imageSrc: "/projects/tbs.png",
      description: "Initial animated version of TechBuddy platform with experimental themes and transitions.",
    }
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
  className="text-5xl md:text-7xl font-extrabold bg-transparent mt-16 z-50"
>
  <h1>PROJECTS</h1>
</GradientText>
      <AnimatedPin projects={projects}/>
      {/* </Squares> */}
      </WarpBg>
  )
}

export default page