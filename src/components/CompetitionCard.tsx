// src/components/CompetitionCard.tsx

"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CompetitionCardProps = {
  title: string;
  subtitle: string;
  logoSrc: string;
  slug: string;
};

const CompetitionCard = ({ title, subtitle, logoSrc, slug }: CompetitionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotate({ x: yPct * -12, y: xPct * 12 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className="group relative w-full h-80 rounded-2xl border border-purple-800/40 bg-gray-900/40 p-6 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden"
    >
      {/* Parallax Content Wrapper */}
      <div 
        style={{ transform: `translateX(${rotate.y * 0.8}px) translateY(${rotate.x * 0.8}px)`, transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"}}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="w-48 h-16 relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            <Image src={logoSrc} alt={`${title} logo`} layout="fill" objectFit="contain" />
        </div>
        <p className="font-sans text-gray-400 mt-4 uppercase tracking-widest text-sm">{subtitle}</p>
      </div>

      {/* Button Reveal */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div className="absolute bottom-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <Link href={`/competitions/${slug}`} className="font-orbitron bg-purple-600 text-white px-6 py-2 rounded-lg text-sm uppercase tracking-wider" data-cursor-hover>
            Explore Event
        </Link>
      </div>
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
};

export default CompetitionCard;
