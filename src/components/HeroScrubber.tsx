import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpotlightCard } from './SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const rotatingTitles = [
  'CREATIVE DEVELOPER',
  'FULL STACK ENGINEER',
  'SCALABLE SYSTEMS',
  'AI & AUTOMATION LEAD',
];

export const HeroScrubber: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrubProgress, setScrubProgress] = useState<number>(0);

  // Rotating title interval (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // GSAP ScrollTrigger Scrubbing Engine
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Video Scroll-Scrub
      if (videoRef.current) {
        const video = videoRef.current;
        const setupVideoScrub = () => {
          gsap.to(video, {
            currentTime: video.duration || 5,
            ease: 'none',
            scrollTrigger: {
              trigger: '#home',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              onUpdate: (self) => {
                setScrubProgress(Math.round(self.progress * 100));
              },
            },
          });
        };

        if (video.readyState >= 1) {
          setupVideoScrub();
        } else {
          video.addEventListener('loadedmetadata', setupVideoScrub, { once: true });
        }
      }

      // 2. Center Portrait Frame Zoom & Smooth Perspective Scrub
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
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

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
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-300 font-bold">
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

          {/* ─── CENTER COLUMN: Center Hero Visual & Picture Spotlight ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center items-center relative"
          >
            {/* Glowing Studio Backlight behind Portrait */}
            <div className="absolute inset-0 bg-radial-gradient from-white/15 via-white/5 to-transparent blur-3xl -z-10 rounded-full scale-125 pointer-events-none" />
            <div className="absolute w-72 h-72 rounded-full bg-emerald-500/20 blur-2xl -z-10 animate-pulse pointer-events-none" />

            <div
              ref={portraitRef}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-emerald-500/30 shadow-[0_8px_35px_rgb(0,0,0,0.8)] group transition-transform duration-200"
            >
              <div className="relative w-full h-full rounded-[22px] bg-[#0c0d12]/95 overflow-hidden flex flex-col justify-between p-5 border border-white/15 backdrop-blur-xl">
                
                {/* Hidden video element for scroll scrub timeline */}
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="auto"
                  className="hidden pointer-events-none"
                  src="data:video/mp4;base64,"
                />

                {/* Top Status Bar */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-400 font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE // 2026
                  </span>
                </div>

                {/* Center Portrait Image with Smooth Gradient Bottom Mask */}
                <div className="relative my-auto flex flex-col items-center justify-center pt-2">
                  <div className="relative w-44 h-48 sm:w-48 sm:h-52 overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-black">
                    <img
                      src="./PIC/MY PIC.jpeg"
                      alt="Sumeet Kumar - Systems Architect"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                      }}
                      className="w-full h-full object-cover object-top filter contrast-110 brightness-105 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* Identification Chip */}
                  <div className="mt-3 text-center">
                    <h2 className="text-white font-extrabold text-xl tracking-tight">
                      Sumeet Kumar
                    </h2>
                    <p className="text-zinc-300 font-mono text-xs uppercase tracking-[0.18em] font-semibold mt-0.5">
                      Systems Architect & Full-Stack Lead
                    </p>
                  </div>
                </div>

                {/* Bottom Spec Pills */}
                <div className="grid grid-cols-2 gap-2 z-10">
                  <div className="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">EXPERIENCE</div>
                      <div className="text-xs font-bold text-white">13+ Years</div>
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">DELIVERY</div>
                      <div className="text-xs font-bold text-white">50+ Enterprise</div>
                    </div>
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
                <span>// CORE FOCUS: SCALABLE ARCHITECTURE</span>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                Engineering high-performance web applications, voice-driven AI platforms, and automated workflow ecosystems with deep zero-trust foundations.
              </p>

              {/* Action Buttons: High-Contrast White + Glass Secondary */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#projects"
                  className="bg-white text-black font-semibold hover:bg-zinc-200 px-6 py-2.5 rounded-full transition-all duration-200 text-sm flex items-center gap-2 shadow-lg shadow-white/10"
                >
                  <span>Explore Work</span>
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
                  <h3 className="text-white font-bold text-sm tracking-tight">AI & Voice Agents</h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1 font-normal">
                    Project Jarvis & SKAI Intelligence running sub-100ms intent classification and OS automation.
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Financial BI & ETL</h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mt-1 font-normal">
                    Multi-ledger reconciliation engines processing 50K+ records with zero human error.
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
