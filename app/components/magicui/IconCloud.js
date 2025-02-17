import { IconCloud } from "./ui/icon-cloud";

const slugs = [
    "c++",
    "python",
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "blender",
  "arduino",
  "mongodb",
  "unity",
  "postman",
  "redux",
  "reactquery"
];

export default function IconCloudEffect() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden z-10">
        <div className="w-fit h-fit glassmorphism">
      <IconCloud images={images} />
      </div>
    </div>
  );
}
