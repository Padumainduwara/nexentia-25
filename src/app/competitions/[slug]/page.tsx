// src/app/competitions/[slug]/page.tsx

"use client";
import { competitionsData } from "@/data/competitions";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

// Sub-competition card එක
const SubCompetitionCard = ({ name, description }: { name: string, description: string }) => {
    return (
        <div className="subcomp-card border border-purple-800/40 bg-gray-900/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-gray-900/60">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">{name}</h3>
            <p className="font-sans text-gray-400 mb-6 flex-grow">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" data-cursor-hover>R & R</button>
                <button className="flex-1 px-4 py-2 bg-transparent border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" data-cursor-hover>Registration</button>
                <button className="flex-1 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300" data-cursor-hover>Submission</button>
            </div>
        </div>
    );
};

export default function CompetitionPage({ params }: { params: { slug: string } }) {
    const competition = competitionsData.find(c => c.slug === params.slug);
    const compRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({delay: 0.2});
            tl.from(".comp-hero-logo", { scale: 0.5, opacity: 0, duration: 1, ease: 'power3.out' })
              .from(".subcomp-card", { y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, "-=0.7");
        }, compRef);
        return () => ctx.revert();
    }, []);

    if (!competition) {
        return <div className="h-screen w-full flex items-center justify-center text-white">Competition not found.</div>;
    }

    return (
        <div ref={compRef} className="w-full bg-black font-orbitron pt-24 pb-16 min-h-screen overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                {/* Competition Hero Section */}
                <div className="comp-hero-logo text-center mb-16 relative flex justify-center items-center h-48">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent blur-3xl -z-10"></div>
                    <div className="w-full max-w-md h-32 relative">
                        <Image src={competition.logoSrc} alt={`${competition.title} logo`} layout="fill" objectFit="contain" />
                    </div>
                </div>
                
                {/* Sub-competitions Grid */}
                {competition.subCompetitions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competition.subCompetitions.map((sub, index) => (
                            <SubCompetitionCard key={index} name={sub.name} description={sub.description} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 font-sans py-16">
                        <p className="text-2xl mb-4">More details coming soon!</p>
                        <p>Stay tuned for updates on sub-competition categories.</p>
                    </div>
                )}


                <div className="text-center mt-24">
                    <Link href="/#categories" className="inline-block text-purple-400 border border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-black transition-colors duration-300" data-cursor-hover>
                        &larr; Back to All Categories
                    </Link>
                </div>
            </div>
        </div>
    );
}
