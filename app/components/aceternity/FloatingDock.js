import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandHackerrank,
  IconBrandWhatsapp
,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockEffect() {
  const links = [



    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp 
        className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      href: "https://wa.me/+919600338406",
    },
    {
      title: "Gmail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:thirumuruganaksofficial@gmail.com",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/thirumuruganaks",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/thirumurugan374/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AKSTHIRUMURUGAN",
    },
    // {
    //   title: "Products",
    //   icon: (
    //     <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "Components",
    //   icon: (
    //     <IconBrandHackerrank
    //     className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    (<div className="flex items-center justify-center w-full mt-6">
      <FloatingDock
        items={links} />
    </div>)
  );
}
