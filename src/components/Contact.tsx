// src/components/Contact.tsx

"use client";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// සම්බන්ධීකාරකවරුන්ගේ දත්ත
const contactDetails = [
    { name: "Veronika Gaushi", role: "President", phone: "+94705380667" },
    { name: "Asisya Perera", role: "V. President", phone: "+94766935891" },
    { name: "Dimashi Ayodya", role: "V. President", phone: "+94718728178" },
    { name: "Janani Pabasara", role: "Secretary", phone: "+94773410662" },
];

// එක් එක් contact card එක සඳහා component එක
const ContactCard = ({ name, role, phone }: { name: string, role: string, phone: string }) => (
    <div className="contact-card border border-purple-800/40 bg-gray-900/40 p-6 rounded-lg text-center flex flex-col">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-purple-400 uppercase tracking-widest text-sm mt-1">{role}</p>
        </div>
        {/* THIS IS THE FIX: Added separate Call and WhatsApp links */}
        <div className="mt-4 font-sans text-lg text-gray-300">
            <span>{phone.replace(/(\+94)(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4')}</span>
            <div className="flex justify-center gap-6 mt-3 text-base">
                <a href={`tel:${phone}`} className="hover:text-purple-400 transition-colors" data-cursor-hover>
                    Call
                </a>
                <a 
                    href={`https://wa.me/${phone}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-purple-400 transition-colors" 
                    data-cursor-hover
                >
                    WhatsApp
                </a>
            </div>
        </div>
    </div>
);


const Contact = () => {
    const sectionRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-card", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
                opacity: 0,
                y: 100,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="w-full bg-black py-24">
            <div className="container mx-auto px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center text-purple-400 mb-16">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((person, i) => (
                        <ContactCard key={i} name={person.name} role={person.role} phone={person.phone} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;