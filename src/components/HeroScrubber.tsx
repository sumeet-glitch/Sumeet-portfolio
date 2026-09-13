import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const assetBaseUrl = import.meta.env.BASE_URL;

const rotatingTitles = [
  'AI SYSTEMS',
  'AUTOMATION',
  'SOFTWARE',
  'INTELLIGENT PRODUCTS',
];

const portraitFrames = Array.from({ length: 8 }, (_, index) =>
  `${assetBaseUrl}PIC/${index + 1}picofme.webp`,
);
const portraitFallbacks = [
  `${assetBaseUrl}hero-portrait.webp`,
  `${assetBaseUrl}PIC/my-pic.webp`,
];

export const HeroScrubber: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [scrubProgress, setScrubProgress] = useState<number>(0);
  const [portraitFrame, setPortraitFrame] = useState<number>(0);
  const [portraitErrorCount, setPortraitErrorCount] = useState<number>(0);

  // Rotating title interval (2.8 seconds)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setPortraitFrame((prev) => (prev + 1) % portraitFrames.length);
    }, 3600);

    return () => window.clearInterval(timer);
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
      {/* Ambient studio light + editorial index */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-emerald-500/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[400px] bg-white/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-28 right-6 hidden xl:block text-right font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        <span className="block text-emerald-400/70">Portfolio / 2026</span>
        <span className="block mt-2">Signal 001 — Online</span>
      </div>

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
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.18em] font-semibold mb-1">
                // I BUILD THE UNUSUAL
              </span>
              <div className="relative h-16 sm:h-20 md:h-28 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase tracking-[-0.06em] text-white drop-shadow-sm leading-none absolute inset-0 flex items-center whitespace-nowrap"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              I turn ambitious ideas into fast, intelligent products that feel clear, human, and a little bit magical.
            </p>

            {/* GSAP Scroll Scrub Telemetry Indicator */}
            <div className="mt-5 sm:mt-8 flex items-center gap-2.5 sm:gap-3 text-zinc-400 font-mono text-xs uppercase tracking-[0.16em]">
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
              {/* Studio Radial Spotlight + animated orbit system */}
              <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] bg-white/10 rounded-full blur-[90px] pointer-events-none -z-10" />
              <div className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />
              <div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
              <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
              <span className="hero-orbit-dot hero-orbit-dot--one" aria-hidden="true" />
              <span className="hero-orbit-dot hero-orbit-dot--two" aria-hidden="true" />

              {/* Portrait frame */}
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] aspect-[4/5] flex justify-center items-end rounded-[2.5rem] border border-white/15 bg-white/[0.035] shadow-2xl shadow-emerald-950/30 overflow-hidden hero-portrait-frame">
                <div className="absolute inset-3 rounded-[2rem] border border-white/10 pointer-events-none z-10" />
                <div className="absolute top-6 left-7 right-7 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 z-10">
                  <span>Subject / SK-01</span>
                  <span>Live feed</span>
                </div>
                <img
                  src={portraitErrorCount === 0
                    ? portraitFrames[portraitFrame]
                    : portraitFallbacks[Math.min(portraitErrorCount - 1, portraitFallbacks.length - 1)]}
                  alt="Sumeet Kumar" 
                  width="1024"
                  height="1024"
                  decoding="async"
                  fetchPriority="high"
                  className="hero-portrait-image relative z-[1] w-full h-full object-cover object-top filter contrast-110 brightness-105 transition-transform duration-700 hover:scale-[1.04]"
                  onError={() => {
                    setPortraitErrorCount((current) => Math.min(current + 1, portraitFallbacks.length));
                  }}
                />
                <div className="absolute bottom-5 left-7 right-7 z-10 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300">Sumeet Kumar</div>
                    <div className="mt-1 text-xs text-zinc-300">AI product builder</div>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-mono text-[10px]">SK</div>
                </div>
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
                BUILDING SYSTEMS // THAT MOVE
              </span>
            </div>

            {/* Editorial Focus Block */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold">
                CURRENT FOCUS & ARCHITECTURE
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal max-w-sm">
                Full-stack engineer and AI systems architect working across autonomous desktop agents, workflow automation, and high-performance web experiences.
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
