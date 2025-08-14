import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"; // Updated import path

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Replacing Skeleton with an image
const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
  />
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <ImageHeader src="src\public\assets\md2.jfif" alt="Dawn of Innovation" />, // Example local image
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <ImageHeader src="/assets/digital-revolution.jpg" alt="Digital Revolution" />, // Example local image
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <ImageHeader src="/assets/art-of-design.jpg" alt="Art of Design" />, // Example local image
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <ImageHeader src="/assets/power-of-communication.jpg" alt="Power of Communication" />, // Example local image
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <ImageHeader src="/assets/pursuit-of-knowledge.jpg" alt="Pursuit of Knowledge" />, // Example local image
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <ImageHeader src="/assets/joy-of-creation.jpg" alt="Joy of Creation" />, // Example local image
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageHeader src="/assets/spirit-of-adventure.jpg" alt="Spirit of Adventure" />, // Example local image
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
