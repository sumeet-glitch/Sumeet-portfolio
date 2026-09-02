import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Sparkles, Cpu, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rotatingTitles = [
  'CREATIVE DEVELOPER',
  'SYSTEMS ARCHITECT',
  'FULL-STACK ENGINEER',
  'AI & AUTOMATION LEAD',
];

export const HeroScrubber: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [scrubProgress, setScrubProgress] = useState<number>(0);

  // Rotating title interval (3.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3500);
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

      // 2. 3D Hologram Depth & Dynamic Rotation Scrub
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          rotateY: 15,
          rotateX: -10,
          scale: 0.96,
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

  // 3D Mouse Tilt Effect on Center Visual (Combined with Scroll Scrub)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient Cyberpunk Glow Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ─── LEFT COLUMN: Title & Rotating Lead ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Micro-label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-300 uppercase">
                HI, I'M SUMEET KUMAR
              </span>
            </div>

            {/* Main Rotating Headline */}
            <div className="min-h-[140px] md:min-h-[160px] flex flex-col justify-center">
              <span className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-1">
                // ACTIVE SPECIALIZATION
              </span>
              <div className="relative h-20 md:h-24 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-none absolute inset-0 flex items-center"
                  >
                    <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
                      {rotatingTitles[titleIndex]}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>

            {/* Sub-description */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 mb-8 font-sans max-w-md">
              Bridging high-performance software engineering, enterprise automation pipelines, and localized AI systems with 13+ years of battle-tested domain authority.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Bottom Timeline Scrub Indicator */}
            <div className="mt-12 flex items-center gap-3 text-zinc-400 font-mono text-[11px] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>GSAP SCRUB: {scrubProgress}%</span>
              <div className="w-24 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 transition-all duration-100"
                  style={{ width: `${scrubProgress}%` }}
                />
              </div>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400 ml-1" />
            </div>
          </motion.div>

          {/* ─── CENTER COLUMN: Interactive 3D Hologram / GSAP Scroll Scrubber ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-emerald-500/20 shadow-2xl shadow-black/90 group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-[22px] bg-[#0c0c0e] overflow-hidden flex flex-col justify-between p-6 border border-white/10">
                
                {/* Hidden / Attached Video Element for GSAP Scrubbing */}
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="auto"
                  className="hidden pointer-events-none"
                  src="data:video/mp4;base64,"
                />

                {/* Top Holographic Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SCRUB: {scrubProgress}%
                  </span>
                </div>

                {/* Center Portrait / Holographic Avatar Layer */}
                <div className="relative my-auto flex flex-col items-center justify-center">
                  <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-amber-500 to-cyan-500 shadow-[0_0_35px_rgba(16,185,129,0.3)]">
                    <img
                      src="./PIC/MY PIC.jpeg"
                      alt="Sumeet Kumar"
                      className="w-full h-full object-cover rounded-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
                  </div>

                  {/* Hologram Floating Badges */}
                  <div className="mt-4 text-center">
                    <h3 className="text-white font-display font-bold text-lg tracking-tight">
                      Sumeet Kumar
                    </h3>
                    <p className="text-emerald-400 font-mono text-xs tracking-wider">
                      Patna, India // +91 9153579997
                    </p>
                  </div>
                </div>

                {/* Bottom Chip Badges */}
                <div className="grid grid-cols-2 gap-2 z-10">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="text-left">
                      <div className="text-[9px] font-mono text-zinc-500 uppercase">EXPERIENCE</div>
                      <div className="text-xs font-mono font-semibold text-zinc-200">13+ Years</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="text-left">
                      <div className="text-[9px] font-mono text-zinc-500 uppercase">DELIVERY</div>
                      <div className="text-xs font-mono font-semibold text-zinc-200">50+ Enterprise</div>
                    </div>
                  </div>
                </div>

                {/* Cyber Grid Lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Micro-Specs & Architecture Focus ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-center text-left space-y-6"
          >
            {/* Focus Card 1 */}
            <div className="p-5 rounded-2xl bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2.5 mb-2 text-emerald-400 font-mono text-xs tracking-wider uppercase">
                <Layers className="w-4 h-4" />
                <span>// CORE ARCHITECTURE</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                Full-stack reactive frontends with Next.js & React coupled to resilient FastAPI/Node backend engines.
              </p>
            </div>

            {/* Focus Card 2 */}
            <div className="p-5 rounded-2xl bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-2.5 mb-2 text-amber-400 font-mono text-xs tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>// AI & AGENTIC SYSTEMS</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                Building voice-triggered desktop daemons (Project Jarvis), LLM summarizers, and enterprise ETL parsers.
              </p>
            </div>

            {/* Focus Card 3 */}
            <div className="p-5 rounded-2xl bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2.5 mb-2 text-cyan-400 font-mono text-xs tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>// FINANCIAL BI & DAX</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                Consolidated P&L dashboards and zero-intervention multi-ledger reconciliation engines.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
