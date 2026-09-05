import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpotlightCard } from './SpotlightCard';

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
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 w-fit mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-200 font-bold">
                HI, I'M SUMEET KUMAR
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold ml-1">
                // 🟢 OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Dynamic Kinetic Headline */}
            <div className="min-h-[160px] sm:min-h-[180px] md:min-h-[220px] flex flex-col justify-center">
              <span className="text-zinc-400 text-xs font-mono uppercase tracking-[0.18em] font-semibold mb-2">
                // SPECIALIZATION
              </span>
              <div className="relative h-28 sm:h-32 md:h-36 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-sm leading-none absolute inset-0 flex items-center"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            {/* GSAP Scroll Scrub Telemetry Indicator */}
            <div className="mt-8 flex items-center gap-3 text-zinc-400 font-mono text-xs uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-zinc-300 font-semibold">GSAP SCRUB: {scrubProgress}%</span>
              <div className="w-28 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 transition-all duration-100 shadow-[0_0_8px_#34d399]"
                  style={{ width: `${scrubProgress}%` }}
                />
              </div>
              <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" />
            </div>
          </motion.div>

          {/* ─── CENTER COLUMN: Center Hero Visual & Studio Spotlight ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center items-center relative"
          >
            <div
              ref={portraitRef}
              className="relative flex flex-col justify-center items-center w-full"
            >
              {/* Studio Radial Glow */}
              <div className="absolute w-[350px] h-[350px] bg-white/10 rounded-full blur-[90px] pointer-events-none -z-10" />
              <div className="absolute w-[280px] h-[280px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

              {/* Your Cutout Photo with gradient bottom mask */}
              <div className="relative w-full max-w-[420px] flex justify-center items-center">
                <img 
                  src="./hero-portrait.png" 
                  alt="Sumeet Kumar" 
                  className="w-full max-w-[420px] object-cover [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] filter contrast-110 brightness-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = './PIC/MY PIC.jpeg';
                  }}
                />
              </div>

              {/* Holographic Spec Badges */}
              <div className="w-full max-w-[340px] grid grid-cols-2 gap-2 mt-4 z-10">
                <div className="px-3.5 py-2 rounded-xl bg-cardBg border border-cardBorder backdrop-blur-xl flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">EXPERIENCE</div>
                    <div className="text-xs font-bold text-white">13+ Years</div>
                  </div>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-cardBg border border-cardBorder backdrop-blur-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">DELIVERY</div>
                    <div className="text-xs font-bold text-white">50+ Enterprise</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Bio Block & High-Contrast CTAs ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-center text-left space-y-6"
          >
            {/* Bio Block with Clear, High-Contrast Typography */}
            <SpotlightCard className="p-6">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>// CURRENT FOCUS & ARCHITECTURE</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                Engineering autonomous desktop AI agents, intelligent classroom automation, and enterprise workflow ecosystems with battle-tested resilience.
              </p>

              {/* Action Buttons: High-Contrast White + Glass Secondary */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#projects"
                  className="bg-white text-black font-semibold hover:bg-zinc-200 px-6 py-2.5 rounded-full transition-all duration-200 text-sm flex items-center gap-2 shadow-lg shadow-white/10"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white hover:bg-white/[0.12] transition-all duration-200 font-semibold text-sm flex items-center gap-2 backdrop-blur-md"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Contact Me</span>
                </a>
              </div>
            </SpotlightCard>

            {/* Architecture Micro-Cards */}
            <div className="grid grid-cols-1 gap-3">
              <SpotlightCard className="p-4 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Autonomous Desktop AI</h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1 font-normal">
                    SK AI (v1.0.54 completed / v1.0.55 upgrading) & Project Jarvis executing sub-250ms OS workflows.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Smart Classroom Automation</h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1 font-normal">
                    SK-ClassSync-Suite: Autonomous OBS WebSocket v5 control, Note 3 PDF export, and cloud uploads.
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
