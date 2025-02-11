"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { Meteors } from "../ui/meteors";

export default function HackathonList({hackathons}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {hackathons.map((hackathon, index) => (
        <div key={index} className="relative">
          {/* Background Gradient acts as a border */}
          <BackgroundGradient className="rounded-[22px] p-[2px]">
            <div className="relative bg-black rounded-[20px] overflow-hidden">
              {/* Meteor Effect as Background */}
              <div className="absolute inset-0 pointer-events-none">
                <Meteors number={20} />
              </div>

              {/* Main Card Content */}
              <FollowerPointerCard title={<TitleComponent title={hackathon.author} avatar={hackathon.authorAvatar} />}>
                <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-transparent hover:shadow-xl border border-zinc-100 flex flex-col h-full">
                  
                  {/* Image Section */}
                  <div className="w-full aspect-[16/10] bg-transparent rounded-t-lg overflow-hidden relative">
                    <Image
                      src={hackathon.image}
                      alt={hackathon.title}
                      width={400}
                      height={250}
                      objectFit="cover"
                      className="group-hover:scale-95 transform object-cover transition duration-300"
                      unoptimized
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="font-bold my-2 text-lg text-white">{hackathon.title}</h2>
                    <p className="font-normal text-sm text-gray-300 flex-grow">{hackathon.description}</p>

                    {/* See Full Button */}
                    <div className="mt-4">
                      <a href={hackathon.link} className="block text-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg text-sm">
                        See Full
                      </a>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            </div>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
}

// Sample Hackathon Data


const TitleComponent = ({ title, avatar }) => (
  <div className="flex space-x-2 items-center">
    <Image src={avatar} height={30} width={30} alt="author" className="rounded-full border-2 border-white" unoptimized />
    <p className="text-sm font-semibold">{title}</p>
  </div>
);
