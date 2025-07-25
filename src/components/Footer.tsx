// src/components/Footer.tsx

"use client"; // Add "use client" to use hooks
import { useLayoutEffect, useRef } from 'react'; // Import hooks
import Link from "next/link";
import Image from "next/image";
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Activate ScrollTrigger

// SVG Icon for Email
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const Footer = () => {
    const footerRef = useRef(null); // Create a ref for the footer element

    // ** THE FIX: Added smooth entry animation for the footer columns **
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-col", {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%", // Start animation when footer is 90% in view
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // Animate each column one after the other
                ease: 'power3.out',
            });
        }, footerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="w-full bg-gray-900/40 border-t border-purple-800/40 text-gray-400 font-sans">
            <div className="container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                
                {/* Column 1: Logos and Description */}
                <div className="footer-col flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                        <div className="relative h-8 w-28">
                            <Image src="/nexentia-logo.png" alt="Nexentia Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className="relative h-12 w-12">
                            <Image src="/sjclogo.png" alt="School Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className="relative h-12 w-14">
                             <Image src="/jicts-logo.png" alt="JICTS Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                    </div>
                    <p className="text-sm">
                        Nexentia, the flagship ICT Day of St. Joseph&apos;s Girls&apos; School, is an inter-school event celebrating future tech and digital innovation.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#about" className="hover:text-purple-400 transition-colors" data-cursor-hover>About</Link></li>
                        <li><Link href="#categories" className="hover:text-purple-400 transition-colors" data-cursor-hover>Categories</Link></li>
                        <li><Link href="#countdown" className="hover:text-purple-400 transition-colors" data-cursor-hover>Countdown</Link></li>
                        <li><Link href="#contact" className="hover:text-purple-400 transition-colors" data-cursor-hover>Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div className="footer-col">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Contact Us</h3>
                    <p className="text-sm">Josephian ICT Society,<br/>St. Joseph&apos;s Girls&apos; School,<br/>Nugegoda.</p>
                    
                    <a href="mailto:jictsofficial@gmail.com" className="inline-flex items-center gap-2 mt-2 text-sm hover:text-purple-400 transition-colors" data-cursor-hover>
                        <MailIcon />
                        <span>jictsofficial@gmail.com</span>
                    </a>
                </div>

                {/* Column 4: Inquiry */}
                 <div className="footer-col">
                    <h3 className="font-orbitron text-lg font-bold text-white mb-4 uppercase">Looking for Something?</h3>
                    <p className="text-sm">Feel free to reach out to us for any inquiries or support. We&apos;re here to help!</p>
                </div>
            </div>

            {/* Bottom Bar with Copyright and Developer Credit */}
            <div className="w-full border-t border-purple-800/40 py-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved by JICTS</p>
                
                <p className="text-xs text-gray-500 mt-2">
                    Designed & Developed by{' '}
                    <a 
                        href="https://padumainduwara.me" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors font-semibold"
                        data-cursor-hover
                    >
                        Paduma Induwara
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
