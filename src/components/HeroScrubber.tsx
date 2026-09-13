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
      <div className="hero-map-grid absolute inset-x-0 top-1/2 h-[28rem] -translate-y-1/2 pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-28 right-6 hidden xl:block text-right font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        <span className="block text-emerald-400/70">Portfolio / 2026</span>
        <span className="block mt-2">Signal 001 — Online</span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN: Title & Rotating Lead ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left relative z-10"
          >
            {/* Sub-badge: HI, I'M SUMEET KUMAR with Live Green Indicator */}
            <div className="hero-kicker inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 w-fit mb-4 sm:mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981] shrink-0" />
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-200 font-bold whitespace-nowrap">
                HI, I'M SUMEET KUMAR
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold ml-1 hidden xl:inline">
                // 🟢 OPEN FOR OPPORTUNITIES
              </span>
            </div>

            {/* Dynamic Kinetic Headline */}
            <div className="min-h-[150px] sm:min-h-[190px] md:min-h-[230px] flex flex-col justify-center">
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.18em] font-semibold mb-1">
                // AI SYSTEMS / HUMAN OUTCOMES
              </span>
              <div className="relative h-32 sm:h-40 md:h-52 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-[-0.075em] text-white drop-shadow-sm leading-[0.86] absolute inset-0 flex items-center whitespace-nowrap"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-300">
              I design and build intelligent software for ambitious teams—turning complex operations into clear, fast, human experiences.
            </p>

            {/* GSAP Scroll Scrub Telemetry Indicator */}
            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-zinc-400 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-zinc-300 font-semibold whitespace-nowrap">GSAP SCRUB: {scrubProgress}%</span>
              <div className="w-16 sm:w-28 h-1.5 rounded-full bg-white/10 overflow-hidden shrink-0">
                <div
                  className="h-full bg-emerald-400 transition-all duration-100 shadow-[0_0_8px_#34d399]"
                  style={{ width: `${scrubProgress}%` }}
                />
              </div>
              <ArrowDown className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="hero-primary-cta inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-1 hover:bg-emerald-300">
                Explore the work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-emerald-400/50 hover:bg-white/[0.08]">
                Start a conversation
              </a>
            </div>
          </motion.div>

          {/* ─── CENTER COLUMN: Center Hero Visual & Studio Spotlight ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center items-center relative my-4 lg:my-0"
          >
            <div
              ref={portraitRef}
              className="relative flex flex-col justify-center items-center w-full max-w-[40rem]"
            >
              {/* Studio Radial Spotlight + animated orbit system */}
              <div className="absolute w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none -z-10" />
              <div className="absolute w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />
              <div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
              <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
              <span className="hero-orbit-dot hero-orbit-dot--one" aria-hidden="true" />
              <span className="hero-orbit-dot hero-orbit-dot--two" aria-hidden="true" />

              {/* Portrait frame */}
              <div className="hero-camera-deck relative w-full max-w-[360px] sm:max-w-[430px] md:max-w-[500px] aspect-[4/5] flex justify-center items-end rounded-[2.5rem] border border-white/20 bg-white/[0.035] shadow-2xl shadow-emerald-950/30 overflow-hidden hero-portrait-frame">
                <div className="absolute inset-3 rounded-[2rem] border border-white/10 pointer-events-none z-10" />
                <div className="absolute inset-0 z-10 pointer-events-none hero-corner-marks" aria-hidden="true" />
                <div className="absolute top-6 left-7 right-7 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 z-10">
                  <span>Subject / SK-01</span>
                  <span>Frame {String(portraitFrame + 1).padStart(2, '0')} / 08</span>
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
                  className="hero-portrait-image relative z-[1] w-full h-full object-cover object-top filter contrast-110 brightness-105 transition-transform duration-700 hover:scale-[1.045]"
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
              <div className="relative z-20 mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur-xl" aria-label="Select portrait frame">
                {portraitFrames.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show portrait frame ${index + 1}`}
                    aria-pressed={portraitFrame === index}
                    onClick={() => { setPortraitFrame(index); setPortraitErrorCount(0); }}
                    className={`h-2 rounded-full transition-all ${portraitFrame === index ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
