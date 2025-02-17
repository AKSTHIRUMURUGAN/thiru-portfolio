"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { IconArticle, IconBriefcase2, IconBuildingSkyscraper, IconCertificate, IconHome, IconLibraryPhoto, IconMail, IconMenu2, IconMessage2, IconTrophy } from "@tabler/icons-react";

export default function NavbarEffect() {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center items-center z">
      <HoverBorderGradient
        containerClassName="w-fit max-w-4xl rounded-full bg-transparent"
        className="w-full bg-transparent"
      >
        <Navbar className="bg-transparent" />
      </HoverBorderGradient>
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-fit bg-transparent backdrop-blur-lg rounded-full sm:text-sm">
      {/* Menu for small screens */}
      <div className="sm:hidden">
        <Menu setActive={setActive}>
          <HoveredLink href="/home">
            <MenuItem setActive={setActive} active={active} item="Home" ><IconHome/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/about">
            <MenuItem setActive={setActive} active={active} item="About"><IconMessage2/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects"><IconBriefcase2/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact"><IconMail/></MenuItem>
          </HoveredLink>
          
          {/* 'More' section for small screens */}
          <MenuItem setActive={setActive} active={active} item="More">
            <div className="flex flex-col space-y-4 text-sm">
            <IconMenu2/>
              <HoveredLink href="/hackathons"><span><IconTrophy/></span>Hackathons</HoveredLink>
              <HoveredLink href="/awards"><span><IconCertificate/></span>Awards</HoveredLink>
              <HoveredLink href="/startup"><span><IconBuildingSkyscraper/></span>Startup</HoveredLink>
              <HoveredLink href="/gallery"><span><IconLibraryPhoto/></span>Gallery</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Menu for larger screens */}
      <div className="hidden sm:block">
        <Menu setActive={setActive}>
          <HoveredLink href="/home">
          <MenuItem setActive={setActive} active={active} item={"Home"} ><IconHome/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/about">
            <MenuItem setActive={setActive} active={active} item="About" ><IconMessage2/> </MenuItem>
          </HoveredLink>
          <HoveredLink href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects"><IconBriefcase2/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/hackathons">
            <MenuItem setActive={setActive} active={active} item="Hackathons"><IconTrophy/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/awards">
            <MenuItem setActive={setActive} active={active} item="Award"><IconCertificate/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/startup">
            <MenuItem setActive={setActive} active={active} item="Startup"><IconBuildingSkyscraper/></MenuItem>
          </HoveredLink>
          <HoveredLink href="/gallery">
            <MenuItem setActive={setActive} active={active} item="Gallery"><IconLibraryPhoto/></MenuItem>
          </HoveredLink>         
          <HoveredLink href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact"><IconMail/></MenuItem>
          </HoveredLink>
        </Menu>
      </div>
    </div>
  );
}
