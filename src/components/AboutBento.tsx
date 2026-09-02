import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, CheckCircle2, TrendingUp, Sparkles, Terminal, Code2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header with High Contrast */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>// 01 SYSTEM PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Architecting Resilient Code & Scalable AI Systems
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Card: Developer Portrait with Subtle Inner Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <SpotlightCard className="p-6 flex flex-col justify-between h-full group">
              {/* Live Status Pill */}
              <div className="flex items-center justify-between mb-6 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>🟢 OPEN TO OPPORTUNITIES 2026</span>
                </div>
              </div>

              {/* Photo Framing with Rounded-2xl & Subtle Inner Border Glow */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/20 bg-black mb-6 shadow-inner shadow-white/10 group-hover:border-emerald-500/40 transition-colors duration-500">
                <img
                  src="./PIC/MY PIC.jpeg"
                  alt="Sumeet Kumar"
                  className="w-full h-full object-cover filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                  <div className="text-white font-bold text-sm tracking-tight">Sumeet Kumar</div>
                  <div className="text-zinc-300 font-mono text-xs uppercase tracking-wider font-medium">
                    Patna, India // +91 9153579997
                  </div>
                </div>
              </div>

              {/* High-Contrast Verification Stats */}
              <div className="grid grid-cols-2 gap-3 z-10">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-mono font-extrabold text-xl">13+ YRS</div>
                  <div className="text-zinc-300 font-mono text-xs uppercase tracking-wider font-semibold mt-0.5">
                    Enterprise Exp
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-amber-400 font-mono font-extrabold text-xl">100%</div>
                  <div className="text-zinc-300 font-mono text-xs uppercase tracking-wider font-semibold mt-0.5">
                    Audit Precision
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Panel: Deep Bio & Quantified Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between gap-6"
          >
            {/* Upper Bio Card */}
            <SpotlightCard className="p-8">
              <div className="flex items-center gap-2.5 text-zinc-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>EXECUTIVE BIO & DOMAIN PHILOSOPHY</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Hello, I'm Sumeet Kumar
              </h3>
              
              <p className="text-zinc-300 text-base leading-relaxed font-normal mb-4">
                "Turning fragmented data into intelligent, self-healing automation engines."
              </p>
              
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal mb-6">
                With over <strong className="text-white font-semibold">13 years of battle-tested domain authority</strong> across private banking, multi-site education, and enterprise retail, I engineer software that does not merely look modern—it eliminates operational bottlenecks and guarantees 99.9% uptime.
              </p>

              {/* Core Execution Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-zinc-100 font-bold text-sm md:text-base">
                      Full-Stack Systems & Local Daemons
                    </h4>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mt-1 font-normal">
                      Architect of Project Jarvis (desktop OS automation) and SKAI multi-model summarizers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-zinc-100 font-bold text-sm md:text-base">
                      Financial Automation & P&L Telemetry
                    </h4>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mt-1 font-normal">
                      Automated audit pipelines cutting reconciliation latency by 50% across franchise networks.
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* 3 Large, Legible Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/[0.04] border border-white/10 px-4 py-3.5 rounded-xl text-zinc-200 text-sm font-medium flex items-center gap-3 hover:border-emerald-500/30 transition-all">
                <Code2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Core Track</div>
                  <div className="text-white font-bold text-sm">Full-Stack / Core Track</div>
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/10 px-4 py-3.5 rounded-xl text-zinc-200 text-sm font-medium flex items-center gap-3 hover:border-amber-500/30 transition-all">
                <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Tech Stack</div>
                  <div className="text-white font-bold text-sm">React, Node, Python</div>
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/10 px-4 py-3.5 rounded-xl text-zinc-200 text-sm font-medium flex items-center gap-3 hover:border-cyan-500/30 transition-all">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Architecture</div>
                  <div className="text-white font-bold text-sm">Scalable AI / Architecture</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
