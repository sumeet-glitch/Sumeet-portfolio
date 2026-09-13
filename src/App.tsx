import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroScrubber } from './components/HeroScrubber';
import { AboutBento } from './components/AboutBento';
import { TechMarquee } from './components/TechMarquee';
import { ArchitectureRoadmap } from './components/ArchitectureRoadmap';
import { ProjectsBento } from './components/ProjectsBento';
import { CertificationsBento } from './components/CertificationsBento';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Keep the cinematic scroll feel while honoring accessibility preferences.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let animationFrameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    const params = new URLSearchParams(window.location.search);
    const scrollTimeouts: number[] = [];
    const scrollY = Number(params.get('scrollY'));
    if (Number.isFinite(scrollY) && scrollY >= 0) {
      scrollTimeouts.push(window.setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 100));
    }
    const scrollTarget = params.get('scroll');
    if (scrollTarget) {
      scrollTimeouts.push(window.setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      }, 100));
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-darkBg text-slate-100 min-h-screen overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Reference 00:00 Preloader Entry Sequence */}
      <Preloader />
      
      {/* Background Ambient Cyberpunk Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        <HeroScrubber />
        <AboutBento />
        <TechMarquee />
        <ArchitectureRoadmap />
        <ProjectsBento />
        <CertificationsBento />
        <ContactTerminal />
      </main>

      {/* Oversized Kinetic Footer */}
      <Footer />

    </div>
  );
};

export default App;
