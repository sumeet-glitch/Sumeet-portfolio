import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between gap-4 md:gap-8 rounded-full border border-white/10 px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#09090b]/80 backdrop-blur-xl shadow-2xl shadow-black/80 border-emerald-500/20'
              : 'bg-[#0c0c0e]/60 backdrop-blur-lg'
          }`}
        >
          {/* Logo / Brand Signature */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white font-display font-bold text-lg tracking-tight"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:shadow-[0_0_12px_#10b981] transition-all duration-300" />
            <span className="group-hover:text-emerald-400 transition-colors">
              Sumeet<span className="text-emerald-500">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 group shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden p-6 rounded-2xl bg-[#0c0c0e]/95 backdrop-blur-2xl border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-mono text-zinc-300 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-black font-mono font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Terminal className="w-4 h-4" />
                  <span>DISPATCH MESSAGE</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
