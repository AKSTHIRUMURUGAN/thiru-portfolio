"use client";
import React from "react";
import BackgroundBoxes from "../components/aceternity/BackgroundBoxes";
import ThreeDCard from "../components/aceternity/Card";
import LetterGlitch from '../components/GlitchBg'
import VortexEffect from '../components/aceternity/VortexFull'
import SparklesText from '../components/aceternity/SparkleText'

const Awards = () => {
  const awards = [
    // ===== COLLEGE CERTIFICATES (38) =====
    {
      "imageSrc": "/awards/college/cybrom.jpg",
      "title": "Runner Up",
      "description": "Secured Runner-Up position in the prestigious National Level Hackathon organized by Cybrom at OIST, Bhopal."
    },
    {
      "imageSrc": "/awards/college/datasprintwon.jpg",
      "title": "First Prize",
      "description": "Achieved First Place in Data Sprint 2.0, a competitive tech event hosted by Sai Ram Institute of Technology."
    },
    {
      "imageSrc": "/awards/college/datasprint.jpg",
      "title": "Certificate of Participation",
      "description": "Recognized for active participation in Data Sprint 2.0 hosted by Sai Ram Institute of Technology."
    },
    {
      "imageSrc": "/awards/college/devshackathon.jpg",
      "title": "First Prize",
      "description": "Winner of DevFest'23 Hackathon conducted by Devs Clubs of REC, in collaboration with TEC and IIC."
    },
    {
      "imageSrc": "/awards/college/fly91.jpg",
      "title": "Certificate of Appreciation",
      "description": "Honored for backend development contributions during the 72-hour Fly91 Innovation Program, powered by Just Udo Aviation Pvt. Ltd and REC."
    },
    {
      "imageSrc": "/awards/college/guviwr.jpg",
      "title": "Guinness World Record Event",
      "description": "Proud participant in the Guinness World Record for the most users attending an online programming session, hosted by GUVI in association with AICTE, NEAT, and BUDDI.AI."
    },
    {
      "imageSrc": "/awards/college/hackhustle.jpg",
      "title": "Hack Hustle 24",
      "description": "Participated in Hack Hustle 2024, a high-impact hackathon powered by SEC, Lenovo, Acer, and The Tech Society."
    },
    {
      "imageSrc": "/awards/college/hackmageddonsp.jpg",
      "title": "Special Prize",
      "description": "Earned Special Prize at HACKMAGEDDON, an intra-college hackathon organized by IEEE CS with support from Intellexa, UI Phoria, IIC, and GDSC."
    },
    {
      "imageSrc": "/awards/college/hackmageddon.jpg",
      "title": "HACKMAGEDDON-2024",
      "description": "Recognized for outstanding participation in HACKMAGEDDON-2024, a tech innovation fest conducted by IEEE CS and REC collaborators."
    },
    {
      "imageSrc": "/awards/college/letsupgrade.jpg",
      "title": "Gold Student Ambassador",
      "description": "Awarded Gold Student Ambassador title for exemplary leadership and outreach as a campus representative for Let's Upgrade."
    },
    {
      "imageSrc": "/awards/college/rank1.jpg",
      "title": "First Rank",
      "description": "Achieved First Rank in the second semester, demonstrating top-tier academic excellence and dedication."
    },
    {
      "imageSrc": "/awards/college/rank2.jpg",
      "title": "Second Rank",
      "description": "Secured Second Rank in the third semester, showcasing consistent academic performance and growth."
    }
    ,
    {
      "imageSrc": "/awards/college/srm_aaruush.jpg",
      "title": "Sustainability Champion",
      "description": "Award at Hack Summit 5.0 by Team Aaruush for focusing on sustainability in project"
    },
    {
      "imageSrc": "/awards/college/svce.jpg",
      "title": "Hackerrupt'24",
      "description": "National Level 24-hour Hackathon participation at Sri Venkateswara College of Engineering"
    },
    {
      "imageSrc": "/awards/college/entreprenurship.jpg",
      "title": "NPTEL Certification",
      "description": "Entrepreneurship course by IIT Madras with score of 76%"
    },
    {
      "imageSrc": "/awards/college/gfg.jpg",
      "title": "Workshop Completion",
      "description": "Summer Training Program technical workshop by GeeksforGeeks"
    },
    {
      "imageSrc": "/awards/college/solutionchallange.jpg",
      "title": "Solution Challenge 2024",
      "description": "Project submission for Google Developer Student Clubs competition"
    },
    {
      "imageSrc": "/awards/college/learnathon.jpg",
      "title": "Learnathon 2023",
      "description": "Participation in ICT Academy's Learnathon with partners including Microsoft, AWS, Google"
    },
    {
      "imageSrc": "/awards/college/hacktech.jpg",
      "title": "Hack-Teck 2.0",
      "description": "16-hour hybrid hackathon by GDSC of Sri Krishna Arts And Science College"
    },
    {
      "imageSrc": "/awards/college/intellexa_ai.jpg",
      "title": "Web Master",
      "description": "Appointed as Web Master for Intellexa AI at Rajalakshmi Engineering College"
    },
    {
      "imageSrc": "/awards/college/oneyes.jpg",
      "title": "Internship Offer",
      "description": "Full Stack Development Intern at OneYes Infotech Solutions"
    },
    {
      "imageSrc": "/awards/college/fly91_internship.jpg",
      "title": "Internship Completion",
      "description": "6-week internship with Fly91 developing an Admin Application as Front End Developer"
    },
    {
      "imageSrc": "/awards/college/rathinam.jpg",
      "title": "Innovate-athon",
      "description": "Recognition at Rathinam College event for creativity and problem-solving skills"
    },
    {
      "imageSrc": "/awards/college/automation_anywhere.jpg",
      "title": "Certificate of Completion",
      "description": "Introducing Robotic Process Automation (RPA) course by Automation Anywhere"
    },
    {
      "imageSrc": "/awards/college/aws.jpg",
      "title": "AWS Academy Graduate",
      "description": "AWS Academy Cloud Security Foundations course (20 hours)"
    },
    {
      "imageSrc": "/awards/college/celonis.jpg",
      "title": "Celonis Foundations",
      "description": "Foundational learning in Celonis process mining technology"
    },
    {
      "imageSrc": "/awards/college/greate_learn.jpg",
      "title": "Certificate of Completion",
      "description": "Android Application Development course by Great Learning Academy"
    },
    {
      "imageSrc": "/awards/college/mathwork.jpg",
      "title": "Computer Vision Onramp",
      "description": "100% completion of MathWorks self-paced training course"
    },
    {
      "imageSrc": "/awards/college/microsoft_ai.jpg",
      "title": "AI Builder Challenge",
      "description": "Microsoft Learn AI Builder Challenge completion through ICT Academy"
    },
    {
      "imageSrc": "/awards/college/microsoft_ml.jpg",
      "title": "Machine Learning Challenge",
      "description": "Microsoft Learn Machine Learning Challenge completion through ICT Academy"
    },
    {
      "imageSrc": "/awards/college/mongodb_basics.jpg",
      "title": "MongoDB Basics",
      "description": "Course completion through ICT Academy Learnathon"
    },
    {
      "imageSrc": "/awards/college/mongodb_atlas.jpg",
      "title": "MongoDB Atlas",
      "description": "Getting Started with MongoDB Atlas course completion"
    },
    {
      "imageSrc": "/awards/college/twm.jpg",
      "title": "Full Stack Internship",
      "description": "3-month Full Stack Web Development internship at The Website Makers"
    },
    {
      "imageSrc": "/awards/college/lets_upgrade.jpg",
      "title": "Postman API Fundamentals",
      "description": "Student Expert Certification from LetsUpgrade (2-day course)"
    },
    {
      "imageSrc": "/awards/college/python_pe.jpg",
      "title": "Python for Beginners",
      "description": "Course completion certificate from Perfect eLearning"
    },
    {
      "imageSrc": "/awards/college/dsa_pe.jpg",
      "title": "Data Structures in Python",
      "description": "Course completion certificate from Perfect eLearning"
    },
    {
      "imageSrc": "/awards/college/ml_pe.jpg",
      "title": "Machine Learning in Python",
      "description": "Course completion certificate from Perfect eLearning"
    },
    {
      "imageSrc": "/awards/college/guvi.jpg",
      "title": "Campus Ambassador",
      "description": "GUVI's Campus Ambassador Program"
    },
  
    // ===== SCHOOL CERTIFICATES (30) =====
    {
      "imageSrc": "/awards/school/abr.jpg",
      "title": "Asia Book of Records",
      "description": "Participated in 'Maximum Payloads Launched at Single Venue' record event"
    },
    {
      "imageSrc": "/awards/school/apj.jpg",
      "title": "APJ Abdul Kalam Webinar",
      "description": "Participated in World Environment Day webinar by Dr. APJ Abdul Kalam Foundation"
    },
    {
      "imageSrc": "/awards/school/apollo.jpg",
      "title": "Photoshop Certification",
      "description": "Completed Adobe Photoshop course at Apollo Computer Education with A+ grade"
    },
    {
      "imageSrc": "/awards/school/assistwr.jpg",
      "title": "World Record Participation",
      "description": "Launched 100 Femto satellites with Space Zone India and APJ Abdul Kalam Foundation"
    },
    {
      "imageSrc": "/awards/school/ccc.jpg",
      "title": "Space Research Challenge",
      "description": "Participated in APJ Abdul Kalam Space Research Payload Cubes Challenge 2021"
    },
    {
      "imageSrc": "/awards/school/debate.jpg",
      "title": "Debate Competition",
      "description": "Participated in Independence Day debate competition at The Town Hall, Arakkonam"
    },
    {
      "imageSrc": "/awards/school/drawing.jpg",
      "title": "Drawing Competition",
      "description": "Participated in Independence Day drawing competition at The Town Hall, Arakkonam"
    },
    {
      "imageSrc": "/awards/school/essay.jpg",
      "title": "Essay Competition",
      "description": "Participated in essay writing competition"
    },
    {
      "imageSrc": "/awards/school/forest.jpg",
      "title": "Wildlife Week Competition",
      "description": "Participated in Wildlife Week competitions organized by Vellore Forest Division"
    },
    {
      "imageSrc": "/awards/school/ibr.jpg",
      "title": "India Book of Records",
      "description": "Participated in 'Lightest Payload Launched' record event (13g payload)"
    },
    {
      "imageSrc": "/awards/school/ilam_vinyani.jpg",
      "title": "Ilam Vingyani 2021",
      "description": "State-level science event participation at Rameswaram"
    },
    {
      "imageSrc": "/awards/school/jeppiaar.jpg",
      "title": "Space Quiz",
      "description": "Participated in space quiz organized by Jeppiaar Institute of Technology"
    },
    {
      "imageSrc": "/awards/school/jrc.jpg",
      "title": "Junior Red Cross",
      "description": "Participated in district-level competitions by Indian Red Cross Society"
    },
    {
      "imageSrc": "/awards/school/mj_creation.jpg",
      "title": "World Record Participation",
      "description": "Dr. APJ Abdul Kalam Remembrance E-Album world record attempt"
    },
    {
      "imageSrc": "/awards/school/national_anthem.jpg",
      "title": "Rashtragaan Initiative",
      "description": "Ministry of Culture's national anthem singing record attempt"
    },
    {
      "imageSrc": "/awards/school/periodic_table.jpg",
      "title": "State Science Seminar",
      "description": "Seminar on Periodic Table's impact on human welfare (VITM Bengaluru & TN Govt)"
    },
    {
      "imageSrc": "/awards/school/quiz.jpg",
      "title": "Quiz Competition",
      "description": "Award winner in quiz competition organized by Dream India Educational Trust"
    },
    {
      "imageSrc": "/awards/school/rajya_puraskar.jpg",
      "title": "Rajya Puraskar",
      "description": "Awarded by Bharat Scouts & Guides for service and achievement"
    },
    {
      "imageSrc": "/awards/school/science_exhibition.jpg",
      "title": "Science Exhibition",
      "description": "Presented project on 'Sustainable Agriculture Practices' at district level"
    },
    {
      "imageSrc": "/awards/school/scout.jpg",
      "title": "Scouts Judging Competition",
      "description": "Zonal Level Standard Judging Competition participation"
    },
    {
      "imageSrc": "/awards/school/shapeai.jpg",
      "title": "ShapeAI Appreciation",
      "description": "Certificate of Appreciation for community support from ShapeAI"
    },
    {
      "imageSrc": "/awards/school/techno_club.jpg",
      "title": "Techno Club Participation",
      "description": "District-level techno-club event for RAA project participation"
    },
    {
      "imageSrc": "/awards/school/thirukkural.jpg",
      "title": "Thirukkural World Record",
      "description": "24-hour continuous Thirukkural recitation world record attempt"
    },
    {
      "imageSrc": "/awards/school/thulir.jpg",
      "title": "Thulir Talent Test",
      "description": "State-level talent test participation organized by Tamil Nadu Science Forum"
    },
    {
      "imageSrc": "/awards/school/transport_department.jpg",
      "title": "Road Safety Awareness",
      "description": "Participation in Road Safety Week program by TN Transport Department"
    },
    {
      "imageSrc": "/awards/school/veetukku_oru_vinyani.jpg",
      "title": "Innovation Competition",
      "description": "2nd Runner Up in 'Veetukku Oru Vinyani' district-level competition"
    },
    {
      "imageSrc": "/awards/school/vkm.jpg",
      "title": "Kalam Remembrance",
      "description": "Dr. APJ Abdul Kalam remembrance world record participation"
    },
    {
      "imageSrc": "/awards/school/wbr.jpg",
      "title": "World Book of Records",
      "description": "Mass Femto satellites construction event participation"
    },
    {
      "imageSrc": "/awards/school/young_scientist.jpg",
      "title": "Young Scientist",
      "description": "Independence Day Young Scientist event participation"
    },
    {
      "imageSrc": "/awards/school/yssp.jpg",
      "title": "Young Scientists Program",
      "description": "2-week YSSP 2019 participation by TN Science Council"
    }
  ];

  return (
    <VortexEffect>
      <SparklesText/>
      <ThreeDCard cardData={awards} />
      </VortexEffect>
  );
};

export default Awards;
