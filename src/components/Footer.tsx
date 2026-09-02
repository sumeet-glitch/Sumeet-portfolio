import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // IST (Asia/Kolkata) Time
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(`${timeString} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      
      {/* ─── Giant Kinetic Stroke Watermark ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="font-display font-extrabold text-[15vw] leading-none tracking-tighter text-stroke-subtle block uppercase opacity-30">
          SUMEET
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-white/10 items-center justify-between">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
              <span className="text-white font-display font-bold text-2xl tracking-tight">
                Sumeet Kumar<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-md">
              Systems Architect, Full-Stack Engineer & AI Developer. Transforming enterprise data into high-performance intelligence.
            </p>
          </div>

          {/* Quick Telemetry Info */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-4">
            
            {/* Live IST Clock */}
            <div className="px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5 text-xs font-mono text-zinc-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Patna, India:</span>
              <span className="text-emerald-400 font-bold">{currentTime || '10:00:00 PM IST'}</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Social & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sumeet-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sumeet-kumar-86038010b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/919153579997?text=Hello%20Sumeet,%20I%20visited%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:sumit.kausik@gmail.com"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Engine Notice */}
          <div className="text-center sm:text-right">
            Engineered with React 18, Tailwind CSS & Framer Motion © 2026 Sumeet Kumar.
          </div>

        </div>

      </div>
    </footer>
  );
};
