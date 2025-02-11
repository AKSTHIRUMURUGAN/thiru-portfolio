"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function NavbarEffect() {
  return (
    <div className="fixed top-2 left-0 w-full flex justify-center items-center z-50">
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
            <MenuItem setActive={setActive} active={active} item="Home" />
          </HoveredLink>
          <HoveredLink href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </HoveredLink>
          <HoveredLink href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </HoveredLink>
          <HoveredLink href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </HoveredLink>
          
          {/* 'More' section for small screens */}
          <MenuItem setActive={setActive} active={active} item="More">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hackathons">Hackathons</HoveredLink>
              <HoveredLink href="/awards">Awards</HoveredLink>
              <HoveredLink href="/startup">Startup</HoveredLink>
              <HoveredLink href="/gallery">Gallery</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Menu for larger screens */}
      <div className="hidden sm:block">
        <Menu setActive={setActive}>
          <HoveredLink href="/home">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </HoveredLink>
          <HoveredLink href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </HoveredLink>
          <HoveredLink href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </HoveredLink>
          <HoveredLink href="/hackathons">
            <MenuItem setActive={setActive} active={active} item="Hackathons" />
          </HoveredLink>
          <HoveredLink href="/awards">
            <MenuItem setActive={setActive} active={active} item="Award" />
          </HoveredLink>
          <HoveredLink href="/startup">
            <MenuItem setActive={setActive} active={active} item="Startup" />
          </HoveredLink>
          <HoveredLink href="/gallery">
            <MenuItem setActive={setActive} active={active} item="Gallery" />
          </HoveredLink>         
          <HoveredLink href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </HoveredLink>
        </Menu>
      </div>
    </div>
  );
}
