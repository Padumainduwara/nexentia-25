// src/components/CompetitionCard.tsx

"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

type CompetitionCardProps = {
  title: string;
  subtitle: string;
  logoSrc: string;
  slug: string;
};

const CompetitionCard = ({ title, subtitle, logoSrc, slug }: CompetitionCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = gsap.utils.mapRange(0, height, -12, 12)(y);
    const rotateY = gsap.utils.mapRange(0, width, 12, -12)(x);

    gsap.to(ref.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.05,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    // ** THE FIX: Reverted card height to original size (h-80) **
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      className="group relative w-full h-80 rounded-2xl border border-purple-800/40 bg-gray-900/40 p-6 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        {/* ** THE FIX: Made the logo container even larger (w-64 h-32) ** */}
        <div className="w-64 h-32 relative transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            <Image src={logoSrc} alt={`${title} logo`} fill style={{ objectFit: "contain" }} />
        </div>
        <p className="font-sans text-gray-400 mt-4 uppercase tracking-widest text-xs sm:text-sm">{subtitle}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <div 
        style={{ transform: "translateZ(70px)" }}
        className="absolute bottom-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
      >
        <Link href={`/competitions/${slug}`} className="font-orbitron bg-purple-600 text-white px-6 py-2 rounded-lg text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.5)]" data-cursor-hover>
            Explore Event
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
