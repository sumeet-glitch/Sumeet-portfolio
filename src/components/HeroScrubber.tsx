import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const assetBaseUrl = import.meta.env.BASE_URL;
const heroPortrait = `${assetBaseUrl}hero-portrait.webp`;

export const HeroScrubber: React.FC = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [scrubProgress, setScrubProgress] = useState<number>(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      if (!portraitRef.current) return;

      gsap.to(portraitRef.current, {
        y: -28,
        scale: 0.97,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
          onUpdate: (self) => setScrubProgress(Math.round(self.progress * 100)),
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44">
      <div className="hero-editorial-wash pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl"
          >
            <div className="mb-7 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
              <span className="h-px w-10 bg-emerald-400" />
              <span>Independent engineer · Patna, India</span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.7rem,9vw,8.5rem)] font-black leading-[0.84] tracking-[-0.085em] text-white">
              Software
              <span className="block text-emerald-400">with intent.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              I build intelligent products, workflow automation, and dependable AI systems for people who need their ideas to work in the real world.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-1 hover:bg-emerald-300"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-emerald-400/50 hover:bg-white/[0.06]"
              >
                About me
              </a>
            </div>

            <div className="mt-16 flex items-center gap-5 border-t border-white/10 pt-5 text-xs font-mono uppercase tracking-[0.16em] text-zinc-500">
              <span className="text-zinc-300">Scroll to explore</span>
              <ArrowDown className="h-4 w-4 text-emerald-400" />
              <span className="ml-auto hidden sm:inline">01 / 05</span>
              <div className="hidden h-1 w-20 overflow-hidden rounded-full bg-white/10 sm:block">
                <div className="h-full bg-emerald-400 transition-[width] duration-300" style={{ width: `${Math.max(scrubProgress, 4)}%` }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:justify-self-end"
          >
            <div ref={portraitRef} className="hero-editorial-portrait relative w-full max-w-[34rem] lg:max-w-[38rem]">
              <div className="absolute -inset-8 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#101114] shadow-2xl shadow-black/50">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent" aria-hidden="true" />
                <img
                  src={heroPortrait}
                  alt="Sumeet Kumar in a black jacket"
                  width="1023"
                  height="1537"
                  fetchPriority="high"
                  decoding="async"
                  className="block aspect-[2/3] w-full object-cover object-top grayscale-[0.08] contrast-[1.04] brightness-[0.96] transition-transform duration-700 hover:scale-[1.025]"
                  onError={(event) => {
                    event.currentTarget.src = `${assetBaseUrl}PIC/MY%20PIC.jpeg`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">Sumeet Kumar</p>
                    <p className="mt-2 text-sm text-zinc-200">AI systems · full-stack · automation</p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-sm">Available</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500">
                <span>Portrait / 001</span>
                <span>Built for useful things</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};