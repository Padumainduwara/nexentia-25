// src/components/CompetitionPageClient.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, useMemo } from "react"; // Added useMemo
import gsap from "gsap";
import { Competition } from "@/data/competitions";
import RulesModal from "./modals/RulesModal";
import { rrData, RuleSection } from "@/data/rrData";

interface CompetitionPageClientProps {
  competition: Competition;
}

// Card for standard sub-competitions
const SubCompetitionCard = ({ name, description, onRulesClick }: { name: string; description: string; onRulesClick: () => void; }) => {
  return (
    <div className="subcomp-card flex flex-col border border-purple-800/40 bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-gray-900/60">
      <h3 className="text-2xl font-bold text-purple-300 mb-4">{name}</h3>
      <p className="font-sans text-gray-400 mb-6 flex-grow">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <button onClick={onRulesClick} className="flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" data-cursor-hover>
          R & R
        </button>
        <button className="flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" data-cursor-hover>
          Registration
        </button>
        <button className="flex-1 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300" data-cursor-hover>
          Submission
        </button>
      </div>
    </div>
  );
};

// Main component for the page
export default function CompetitionPageClient({ competition }: CompetitionPageClientProps) {
  const compRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, content: RuleSection[], pdfUrl: string} | null>(null);

  // ** THE FIX: Find all rules for this competition only once **
  const competitionRules = useMemo(() => {
    return rrData.find(r => r.slug === competition.slug);
  }, [competition.slug]);

  const handleOpenRules = (subCompetitionName: string) => {
    if (competitionRules) {
      const subRules = competitionRules.rules.find(sr => sr.subCompetitionName === subCompetitionName);
      if (subRules && subRules.content) {
        setModalContent({
          title: `${competition.title}: ${subCompetitionName}`,
          content: subRules.content,
          pdfUrl: competitionRules.pdfUrl,
        });
        setIsModalOpen(true);
      } else {
        alert("Rules & Regulations for this specific event are not yet available.");
      }
    } else {
      alert("Rules & Regulations for this competition category are not yet available.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useLayoutEffect(() => {
    // ... animations ...
  }, []);

  const isMostPopularAward = competition.slug === 'most-popular';

  return (
    <>
      <div ref={compRef} className="w-full bg-black font-orbitron pt-32 pb-16 min-h-screen overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="comp-hero-logo text-center mb-16 relative flex justify-center items-center h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent blur-3xl -z-10"></div>
            <div className="w-full max-w-lg h-36 relative">
              <Image src={competition.logoSrc} alt={`${competition.title} logo`} fill style={{ objectFit: "contain" }} priority />
            </div>
          </div>

          {isMostPopularAward ? (
            <div className="text-center max-w-2xl mx-auto">
              <p className="anim-fade-in font-sans text-lg text-gray-300 leading-relaxed mb-12">
                This special award recognizes the ICT Society that garners the most support from the community.
              </p>
              <div className="anim-fade-in flex flex-col sm:flex-row gap-6 justify-center">
                <button onClick={() => handleOpenRules('Most Popular School ICT Society')} className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg" data-cursor-hover>
                  R & R
                </button>
                <button className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 text-lg" data-cursor-hover>
                  Live Leaderboard
                </button>
              </div>
            </div>
          ) : competition.subCompetitions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competition.subCompetitions.map((sub, index) => (
                <SubCompetitionCard 
                  key={index} 
                  name={sub.name} 
                  description={sub.description} 
                  onRulesClick={() => handleOpenRules(sub.name)}
                />
              ))}
            </div>
          ) : (
            <div className="anim-fade-in text-center text-gray-400 font-sans py-16">
              <p className="text-2xl mb-4">More details coming soon!</p>
            </div>
          )}

          <div className="text-center mt-24">
            <Link href="/#categories" className="inline-block text-purple-400 border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-black transition-colors duration-300" data-cursor-hover>
              &larr; Back to All Categories
            </Link>
          </div>
        </div>
      </div>
      
      {modalContent && (
        <RulesModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalContent.title}
          content={modalContent.content}
          pdfUrl={modalContent.pdfUrl}
        />
      )}
    </>
  );
}
