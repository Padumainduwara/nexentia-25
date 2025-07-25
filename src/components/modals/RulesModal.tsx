// src/components/modals/RulesModal.tsx

"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RuleSection } from '@/data/rrData';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: RuleSection[];
  pdfUrl: string;
}

const RulesModal = ({ isOpen, onClose, title, content, pdfUrl }: RulesModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(modalRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
      });
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999] flex justify-center items-end opacity-0"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl h-[90vh] bg-gray-900/80 border-t-2 border-purple-500 rounded-t-3xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex-shrink-0 p-6 flex items-center justify-between border-b border-gray-700">
          <h2 className="text-2xl font-bold text-purple-300 font-orbitron">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            data-cursor-hover
          >
            <svg xmlns="http://www.w.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </header>

        {/* Content */}
        <div className="flex-grow p-8 overflow-y-auto font-sans text-gray-300">
          {/* ** THE FIX: Check if 'content' is a valid array before mapping ** */}
          {Array.isArray(content) ? (
            content.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-cyan-300 mb-4 font-orbitron">{section.title}</h3>
                <ul className="space-y-3 list-disc list-inside">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>Rules & Regulations are currently unavailable.</p>
          )}
        </div>

        {/* Footer */}
        <footer className="flex-shrink-0 p-6 border-t border-gray-700 bg-gray-900/50">
          <a
            href={pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
            data-cursor-hover
          >
            Download PDF
          </a>
        </footer>
      </div>
    </div>
  );
};

export default RulesModal;
