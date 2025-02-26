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
      title: "My Portfolio",
      href: "https://www.thirumuruganaks.me/",
      imageSrc: "/projects/portfolio.png",
      description:
        "This is my portfolio",
    },
    {
      title: "Parkwiz",
      href: "https://parkwiz.vercel.app/",
      imageSrc: "/projects/parkwiz.png",
      description:
        "One stop solution for parking",
    },
    {
      title: "Thiru Cart",
      href: "https://thirucart.netlify.app/",
      imageSrc: "/projects/thiru_cart.png",
      description:
        "This is my ecommerce website",
    },

    {
      title: "ClubHub",
      href: "https://clubhubdevs.vercel.app/",
      imageSrc: "/projects/clubhub.png",
      description:
        "It is one stop solution , to organise all club events",
    },
    {
      title: "Drug Valve",
      href: "https://drugvalve.vercel.app/",
      imageSrc: "/projects/drugvalve.png",
      description:
        "It is the project which connects patient, pharmacy,warehouse.",
    },
    {
      title: "ETLSID-Landing Page",
      href: "https://etlsid.netlify.app/",
      imageSrc: "/projects/etlsid_lp.png",
      description:
        " - Developed a gamified learning platform for intellectually disabled students.",
    },
    {
      title: "ETLSID-English",
      href: "https://etlsidrec.vercel.app/",
      imageSrc: "/projects/etlsid.png",
      description:
        " - Developed a gamified learning platform for intellectually disabled students.",
    },
    {
      title: "ETLSID-Tamil",
      href: "https://etlsidrectamil.vercel.app/",
      imageSrc: "/projects/etlsid_tamil.png",
      description:
        " - Developed a gamified learning platform for intellectually disabled students.",
    },
    {
      title: "ETLSID-Hindi",
      href: "https://etlsidrechindi.vercel.app/",
      imageSrc: "/projects/etlsid_hindi.png",
      description:
        " - Developed a gamified learning platform for intellectually disabled students.",
    },
    {
      title: "Botsha 2024",
      href: "https://botsha.netlify.app/",
      imageSrc: "/projects/botsha.png",
      description:
        "Botsha is the national level symposium conducted by the department Robotics & Autmation",
    },
    {
      title: "Thiru Portfolio 3d Clone",
      href: "https://thiruportfolio.netlify.app/",
      imageSrc: "/projects/portfolio_clone.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },
    {
      title: "Result Summary",
      href: "https://ressum.vercel.app/",
      imageSrc: "/projects/ressum.png",
      description:
        "Take a challage from fronted-mentor and do a result summary page.",
    },
    {
      title: "Product Review Card",
      href: "https://prc-1.netlify.app/",
      imageSrc: "/projects/prc.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },
    {
      title: "NFT Card",
      href: "https://nft-preview-card-1.netlify.app/",
      imageSrc: "/projects/nft_card.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },
    {
      title: "Interactive Rating Component",
      href: "https://interactive-rating-component-1.netlify.app/",
      imageSrc: "/projects/irc.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },
    {
      title: "Order Summary Card",
      href: "https://order-summary-component-1-new.netlify.app/",
      imageSrc: "/projects/osc.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },
    
    {
      title: "Status Preview Card",
      href: "https://starus-preview-card.netlify.app/",
      imageSrc: "/projects/spc.png",
      description:
        "This is also a challange taken from frontend mentor,Product review card responsive for moile and desktop.",
    },

    {
      title: "Parkveu Location (testing)",
      href: "https://parkveulocation.netlify.app/",
      imageSrc: "/projects/pvl.png",
      description:
        "It is the first step to testing location, part of parkveu it is only for testing purpose",
    },

    {
      title: "Tech Buddy Space (Initial..)",
      href: "https://techbuddyspace.netlify.app/",
      imageSrc: "/projects/tbs.png",
      description:
        "It is a edutech start up,sample page",
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