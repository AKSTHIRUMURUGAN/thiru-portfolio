"use client";
import React from "react";
import { Card, CardBody } from "@heroui/react"; // NextUI Card
import { motion } from "framer-motion"; // For animations
import StackIcon from "tech-stack-icons"; // Tech Stack Icons

const TechStack = () => {
  const techStackItems = [
    { name: "c", label: "C", isImage: true, imageUrl: "/images/logos/c.png" }, // Custom image for C
    { name: "c++", label: "C++", isImage: false },
    { name: "java", label: "Java", isImage: false },
    { name: "python", label: "Python", isImage: false },
    { name: "html5", label: "HTML5", isImage: false },
    { name: "css3", label: "CSS3", isImage: false },
    { name: "js", label: "JavaScript", isImage: false },
    { name: "reactjs", label: "React", isImage: false },
    { name: "reactquery", label: "React Query", isImage: false },
    { name: "nextjs", label: "Next.js", isImage: false },
    { name: "mongodb", label: "MongoDB", isImage: false },
    { name: "expressjs", label: "Express.js", isImage: true, imageUrl: "/images/logos/express.png" }, // Custom image for Express
    { name: "nodejs", label: "Node.js", isImage: false },
    { name: "redux", label: "Redux", isImage: false },
    { name: "tailwindcss", label: "Tailwind CSS", isImage: false },
    { name: "aws", label: "AWS", isImage: false },
    { name: "docker", label: "Docker", isImage: false },
    { name: "git", label: "Git", isImage: false },
    { name: "github", label: "GitHub", isImage: false },
    { name: "figma", label: "Figma", isImage: false },
    { name: "firebase", label: "Firebase", isImage: false },
    { name: "postman", label: "Postman", isImage: false },
    { name: "shadcnui", label: "ShadCN UI", isImage: false },
    { name: "zod", label: "Zod", isImage: false },
    { name: "prisma", label: "Prisma", isImage: false },
    { name: "arduino", label: "Arduino",isImage: true, imageUrl: "/images/logos/arduino.png" },
    { name: "blender", label: "Blender", isImage: true, imageUrl: "/images/logos/blender.png"},
    { name: "unity", label: "Unity", isImage: true, imageUrl: "/images/logos/unity.png" },
  ];

  return (
    <section className="py-12 px-4 z-10">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
        {techStackItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }} // Slight zoom-in effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-transparent">
              <CardBody className="flex flex-col items-center justify-center relative">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-100 transition-all"
                  whileHover={{
                    border: "4px solid rgba(59,130,246,0.7)", // Blue glowing effect
                    boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                  }}
                >
                  {!item.isImage ? (
                    <StackIcon
                      name={item.name}
                      className="w-12 h-12 text-gray-800"
                    />
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                </motion.div>

                {/* Name appears inside the circle on hover */}
                <motion.p
                  className="text-lg font-semibold text-gray-700 opacity-0 absolute"
                  whileHover={{ opacity: 1 }}
                >
                  {item.label}
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
