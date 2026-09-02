import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>// 01 SYSTEM PROFILE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Architecting Resilient Code & Data Pipelines
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Card: Developer Portrait & Live Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-3xl p-6 bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Live Status Pill */}
            <div className="flex items-center justify-between mb-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">OPEN TO OPPORTUNITIES 2026</span>
              </div>
            </div>

            {/* Photo Framing */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black mb-6">
              <img
                src="./PIC/MY PIC.jpeg"
                alt="Sumeet Kumar"
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <div className="text-white font-display font-semibold text-sm">Sumeet Kumar</div>
                <div className="text-zinc-400 font-mono text-[11px]">Systems Architect & AI Lead</div>
              </div>
            </div>

            {/* Verification Stats */}
            <div className="grid grid-cols-2 gap-3 z-10">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-emerald-400 font-mono font-bold text-lg">13+ YRS</div>
                <div className="text-zinc-500 font-mono text-[10px] uppercase">Enterprise Exp</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-amber-400 font-mono font-bold text-lg">100%</div>
                <div className="text-zinc-500 font-mono text-[10px] uppercase">Audit Precision</div>
              </div>
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
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
            <div className="p-8 rounded-3xl bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-3 text-zinc-400 font-mono text-xs uppercase mb-3">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>EXECUTIVE BIO & DOMAIN PHILOSOPHY</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                "Turning fragmented data into intelligent, self-healing automation engines."
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans mb-6">
                With over <strong className="text-emerald-400">13 years of cross-functional experience</strong> across private banking, multi-site educational institutions, and retail operations, I build software that does not merely look modern—it reliably powers operational decisions.
              </p>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans mb-6">
                My engineering stack blends <strong>React, TypeScript, FastAPI, and Python</strong> with modern LLM orchestration layers and deep business intelligence architectures (Power BI DAX, Power Query M, SQL Server).
              </p>

              {/* Core Execution Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-xs font-mono uppercase">Full-Stack & Local Daemons</h4>
                    <p className="text-zinc-400 text-xs mt-1">
                      Architect of Project Jarvis (desktop automation daemon) and SKAI Intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-xs font-mono uppercase">Financial Automation & P&L</h4>
                    <p className="text-zinc-400 text-xs mt-1">
                      Built audit pipelines cutting reporting latency by 50% across franchise networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-center">
                <div className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">CORE TRACK</div>
                <div className="text-white font-display font-bold text-sm md:text-base">Full-Stack Engineering</div>
                <div className="text-emerald-400 font-mono text-xs mt-1">React / Next.js / TypeScript</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-center">
                <div className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">BACKEND & AI</div>
                <div className="text-white font-display font-bold text-sm md:text-base">FastAPI & LLM Workflows</div>
                <div className="text-amber-400 font-mono text-xs mt-1">Python / LangChain / Copilot</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-center">
                <div className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mb-1">BI & TELEMETRY</div>
                <div className="text-white font-display font-bold text-sm md:text-base">Power BI & DAX Modeling</div>
                <div className="text-cyan-400 font-mono text-xs mt-1">SQL / ETL / Relational Cubes</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
