"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";



export default function ThreeDCard({cardData}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-transparent relative group/card hover:shadow-2xl shadow-emerald-500/[0.1] border-white/[0.2] w-fit h-fit rounded-xl p-6 border">
            <CardItem translateZ="100" className="w-full mt-2">
              <Image
                src={card.imageSrc}
                height="500"
                width="500"
                className="h-fit w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>

            <div className="flex justify-center items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              >
                <Link href={card.link}>More Details</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
