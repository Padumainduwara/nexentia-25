// src/components/SmoothScroll.tsx
"use client";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = () => {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        
        // THIS IS THE FIX: The redundant requestAnimationFrame loop has been removed.
        // GSAP's ticker is the correct way to handle this when using ScrollTrigger.
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        });

        gsap.ticker.lagSmoothing(0);
        
        // Navbar links සඳහා smooth scroll
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        const handleClick = (e: Event) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (targetId) {
                lenis.scrollTo(targetId);
            }
        };

        anchorLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });

        // Cleanup function
        return () => {
            lenis.destroy();
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
        };

    }, [pathname]);

    return null;
}

export default SmoothScroll;