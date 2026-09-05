import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rotatingTitles = [
  'AI SYSTEMS',
  'AUTOMATION',
  'SOFTWARE',
  'INTELLIGENT PRODUCTS',
];

export const HeroScrubber: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [scrubProgress, setScrubProgress] = useState<number>(0);

  // Rotating title interval (2.8 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // GSAP ScrollTrigger Scrubbing Engine
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Center Portrait Frame Zoom & Smooth Perspective Scrub
      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          scale: 0.94,
          rotateY: 10,
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
            onUpdate: (self) => {
              setScrubProgress(Math.round(self.progress * 100));
            },
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-start lg:justify-center overflow-hidden"
    >
      {/* Ambient Cyberpunk Glow Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-emerald-500/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[400px] bg-white/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ─── LEFT COLUMN: Title & Rotating Lead ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            {/* Sub-badge: HI, I'M SUMEET KUMAR with Live Green Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 w-fit mb-4 sm:mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981] shrink-0" />
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-200 font-bold whitespace-nowrap">
                HI, I'M SUMEET KUMAR
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold ml-1 hidden xl:inline">
                // 🟢 OPEN FOR OPPORTUNITIES
              </span>
            </div>

            {/* Dynamic Kinetic Headline */}
            <div className="min-h-[80px] sm:min-h-[110px] md:min-h-[140px] flex flex-col justify-center">
              <span className="text-zinc-400 text-xs font-mono uppercase tracking-[0.18em] font-semibold mb-1">
                // SPECIALIZATION
              </span>
              <div className="relative h-16 sm:h-20 md:h-28 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-sm leading-none absolute inset-0 flex items-center whitespace-nowrap"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            {/* GSAP Scroll Scrub Telemetry Indicator */}
            <div className="mt-4 sm:mt-8 flex items-center gap-2.5 sm:gap-3 text-zinc-400 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-zinc-300 font-semibold whitespace-nowrap">GSAP SCRUB: {scrubProgress}%</span>
              <div className="w-16 sm:w-28 h-1.5 rounded-full bg-white/10 overflow-hidden shrink-0">
                <div
                  className="h-full bg-emerald-400 transition-all duration-100 shadow-[0_0_8px_#34d399]"
                  style={{ width: `${scrubProgress}%` }}
                />
              </div>
              <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400 shrink-0" />
            </div>
          </motion.div>

          {/* ─── CENTER COLUMN: Center Hero Visual & Studio Spotlight ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center items-center relative my-4 lg:my-0"
          >
            <div
              ref={portraitRef}
              className="relative flex flex-col justify-center items-center w-full"
            >
              {/* Studio Radial Spotlight matching Reference Video */}
              <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] bg-white/10 rounded-full blur-[90px] pointer-events-none -z-10" />
              <div className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

              {/* Cutout Photo with radial mask resting on baseline */}
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] flex justify-center items-center">
                <img 
                  src="./hero-portrait.png" 
                  alt="Sumeet Kumar" 
                  className="w-full object-cover [mask-image:radial-gradient(ellipse_at_50%_48%,black_38%,transparent_74%)] filter contrast-110 brightness-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = './PIC/MY PIC.jpeg';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Editorial Focus & Clean Action Pills matching Reference Video ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-between h-full py-4 text-left space-y-8"
          >
            {/* Ambient Track Ticker matching Reference Top Right */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 w-fit text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-1">
                <span className="w-1 h-3 bg-emerald-400 animate-pulse" />
                <span className="w-1 h-4 bg-emerald-400 animate-pulse delay-75" />
                <span className="w-1 h-2 bg-emerald-400 animate-pulse delay-150" />
              </div>
              <span className="text-[11px] tracking-wider uppercase text-zinc-400">
                SYSTEM TELEMETRY // ACTIVE
              </span>
            </div>

            {/* Editorial Focus Block */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold">
                CURRENT FOCUS & ARCHITECTURE
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                Specialized in high-performance web applications, autonomous desktop AI daemons, and intelligent workflow automation systems.
              </p>
            </div>

            {/* Action Pill Buttons matching Reference Bottom Right */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="#projects"
                className="bg-white text-black font-semibold hover:bg-zinc-200 px-7 py-3 rounded-full transition-all duration-200 text-xs uppercase tracking-wider font-mono shadow-lg shadow-white/10 flex items-center gap-2"
              >
                <span>See My Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-white/[0.06] border border-white/15 text-white hover:bg-white/[0.12] transition-all duration-200 text-xs uppercase tracking-wider font-mono font-semibold"
              >
                <span>Let's Talk</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
