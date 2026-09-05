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
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
