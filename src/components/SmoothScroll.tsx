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
            lerp: 0.1, // Smoothness (lower is smoother)
            smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        
        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        requestAnimationFrame(raf);
        
        // Navbar links සඳහා
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if(targetId) {
                    lenis.scrollTo(targetId);
                }
            });
        });

        return () => {
            lenis.destroy();
        };

    }, [pathname]);

    return null;
}

export default SmoothScroll;