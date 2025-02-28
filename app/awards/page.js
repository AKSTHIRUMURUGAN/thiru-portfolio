"use client";
import React from "react";
import BackgroundBoxes from "../components/aceternity/BackgroundBoxes";
import ThreeDCard from "../components/aceternity/Card";
import LetterGlitch from '../components/GlitchBg'
import VortexEffect from '../components/aceternity/VortexFull'
import SparklesText from '../components/aceternity/SparkleText'

const Awards = () => {
  const awards = [
    {
      imageSrc: "/awards/college/cybrom.jpg",
      title: "Runner up",
      description: ",National level hackathon-Bhopal,oist",
      link: "#",
    },
    {
      imageSrc: "/awards/college/datasprintwon.jpg",
      title: "First Price",
      description: "Data sprint 2.0",
      link: "#",
    },
    {
      imageSrc: "/awards/college/datasprint.jpg",
      title: "Data Sprint 2.0",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/devshackathon.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/fly91.jpg",
      title: "First Prize",
      description: "Puratchiyalar Virudhu",
      link: "#",
    },
    {
      imageSrc: "/awards/college/guviwr.jpg",
      title: "Second Prize",
      description: "Best Innovation Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/hackhustle.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/hackmageddonsp.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/hackmageddon.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/letsupgrade.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/rank1.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/rank2.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/srm_aaruush.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/svce.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/entreprenurship.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/gfg.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/solutionchallange.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/learnathon.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/hacktech.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/intellexa_ai.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/oneyes.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/fly91_internship.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/rathinam.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/automation_anywhere.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/aws.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/celonis.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/greate_learn.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/mathwork.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/microsoft_ai.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/microsoft_ml.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/mongodb_basics.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/mongodb_atlas.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/solutionchallange.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/twm.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/lets_upgrade.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/python_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/dsa_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/ml_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    //school
    {
      imageSrc: "/awards/college/microsoft_ml.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/mongodb_basics.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/mongodb_atlas.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/solutionchallange.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/twm.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/lets_upgrade.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/python_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/dsa_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/ml_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/microsoft_ml.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/mongodb_basics.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

    {
      imageSrc: "/awards/college/mongodb_atlas.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/solutionchallange.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/twm.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/lets_upgrade.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/python_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/dsa_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/college/ml_pe.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    //school

    {
      imageSrc: "/awards/school/abr.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/apj.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/apollo.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/assistwr.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/ccc.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/debate.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/drawing.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/essay.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/forest.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/ibr.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/ilam_vinyani.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/jeppiaar.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/jrc.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/mj_creation.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/national_anthem.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/periodic_table.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/quiz.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/rajya_puraskar.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/science_exhibition.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/scout.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/shapeai.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/techno_club.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/thirukkural.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/thulir.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/transport_department.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/veetukku_oru_vinyani.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/vkm.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/wbr.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/young_scientist.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },
    {
      imageSrc: "/awards/school/yssp.jpg",
      title: "Third Prize",
      description: "Community Excellence Award",
      link: "#",
    },

  ];

  return (
    <VortexEffect>
      <SparklesText/>
      <ThreeDCard cardData={awards} />
      </VortexEffect>
  );
};

export default Awards;
