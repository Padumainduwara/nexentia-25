// src/components/Countdown.tsx
"use client";
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeCard = ({ value, unit }: { value: number; unit: string }) => {
    return (
        <div className="flex flex-col items-center">
            {/* Responsive font size and padding */}
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-purple-400 bg-gray-900/50 p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border border-purple-800/50 min-w-[70px] sm:min-w-[100px] text-center">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm md:text-lg uppercase tracking-widest mt-3 text-gray-400">
                {unit}
            </div>
        </div>
    );
}

const Countdown = () => {
    const targetDate = new Date('2025-03-20T09:00:00');

    const calculateTimeLeft = () => { /* ... no changes here ... */
        const difference = +targetDate - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => { /* ... no changes here ... */
        const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()); }, 1000);
        return () => clearTimeout(timer);
    });

    const sectionRef = useRef(null);
    useLayoutEffect(() => { /* ... no changes here ... */
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 85%", end: "bottom center", toggleActions: "play none none none" }});
            tl.from(".anim-title", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' })
              .from(".anim-subtitle", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
              .from(".anim-card", { y: 100, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, "-=0.6");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        // Added an id for linking from navbar
        <section id="countdown" ref={sectionRef} className="w-full bg-black py-16 sm:py-20 text-white text-center overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="anim-title text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-purple-400">
                    OPERATION IN MOTION
                </h2>
                <p className="anim-subtitle text-lg sm:text-xl md:text-2xl mt-4 mb-12 text-gray-300">
                    CLAIM YOUR PLACE NOW!
                </p>
                <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
                    <div className="anim-card"><TimeCard value={timeLeft.days} unit="Days" /></div>
                    <div className="anim-card"><TimeCard value={timeLeft.hours} unit="Hours" /></div>
                    <div className="anim-card"><TimeCard value={timeLeft.minutes} unit="Minutes" /></div>
                    <div className="anim-card"><TimeCard value={timeLeft.seconds} unit="Seconds" /></div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;