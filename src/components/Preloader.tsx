import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // 1.2s smooth load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          onComplete?.();
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060709] select-none pointer-events-auto"
        >
          {/* Subtle Ambient Grid in Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Ambient Glow */}
          <div className="absolute w-[500px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

          {/* Center Content: Giant Perspective Percentage Counter */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Top Minimal Brand Tag */}
            <div className="mb-4 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
              SUMEET KUMAR // PORTFOLIO INITIALIZING
            </div>

            {/* Kinetic Perspective Counter */}
            <div className="relative flex items-center justify-center">
              <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] font-mono">
                {progress}%
              </span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-56 sm:w-72 h-1 rounded-full bg-white/10 mt-6 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-white shadow-[0_0_12px_#10b981]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Status Telemetry Text */}
            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-400 tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{progress < 100 ? 'LOADING ASSETS & ARCHITECTURE' : 'SYSTEM READY'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
