// src/components/Countdown.tsx
"use client";
import { useEffect, useState, useLayoutEffect, useRef, useCallback, useMemo } from 'react'; // Import useMemo
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimeCard = ({ value, unit }: { value: number; unit: string }) => {
    return (
        <div className="flex flex-col items-center">
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
    // ** THE FIX: Memoize targetDate so it's only created once **
    const targetDate = useMemo(() => new Date('2025-10-02T14:00:00'), []);

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isClient, setIsClient] = useState(false);

    const calculateTimeLeft = useCallback(() => {
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
    }, [targetDate]);

    useEffect(() => {
        setIsClient(true); 

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    const sectionRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 85%", end: "bottom center", toggleActions: "play none none none" }});
            tl.from(".anim-title", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' })
              .from(".anim-subtitle", { y: 100, opacity: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
              .from(".anim-card", { y: 100, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, "-=0.6");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="countdown" ref={sectionRef} className="w-full bg-black py-16 sm:py-20 text-white text-center overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="anim-title text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-purple-400">
                    OPERATION IN MOTION
                </h2>
                <p className="anim-subtitle text-lg sm:text-xl md:text-2xl mt-4 mb-12 text-gray-300">
                    CLAIM YOUR PLACE NOW!
                </p>
                <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
                    {isClient ? (
                        <>
                            <div className="anim-card"><TimeCard value={timeLeft.days} unit="Days" /></div>
                            <div className="anim-card"><TimeCard value={timeLeft.hours} unit="Hours" /></div>
                            <div className="anim-card"><TimeCard value={timeLeft.minutes} unit="Minutes" /></div>
                            <div className="anim-card"><TimeCard value={timeLeft.seconds} unit="Seconds" /></div>
                        </>
                    ) : (
                        <>
                            <div className="anim-card"><TimeCard value={0} unit="Days" /></div>
                            <div className="anim-card"><TimeCard value={0} unit="Hours" /></div>
                            <div className="anim-card"><TimeCard value={0} unit="Minutes" /></div>
                            <div className="anim-card"><TimeCard value={0} unit="Seconds" /></div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Countdown;
