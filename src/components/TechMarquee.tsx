import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Terminal, 
  Workflow, 
  Sparkles, 
  Bot, 
  BarChart3, 
  GitBranch, 
  Box, 
  Server, 
  Atom, 
  Flame, 
  Binary 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const row1Items: TechItem[] = [
  { name: 'Python', category: 'Language / Automation', icon: <Terminal className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'FastAPI', category: 'High-Perf Backend', icon: <Flame className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'Electron', category: 'Desktop AI Runtimes', icon: <Cpu className="w-4 h-4 text-cyan-400" />, highlight: true },
  { name: 'React 18', category: 'Modern UI Systems', icon: <Atom className="w-4 h-4 text-cyan-400" />, highlight: true },
  { name: 'TypeScript', category: 'Type Safety', icon: <Code2 className="w-4 h-4 text-blue-400" /> },
  { name: 'Tailwind CSS', category: 'Design System', icon: <Sparkles className="w-4 h-4 text-teal-400" /> },
  { name: 'OpenCV', category: 'Computer Vision / RPA', icon: <Cpu className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'Playwright', category: 'Web Automation', icon: <Workflow className="w-4 h-4 text-purple-400" /> },
  { name: 'PyAutoGUI', category: 'OS RPA Engine', icon: <Binary className="w-4 h-4 text-amber-400" /> },
  { name: 'OBS WebSocket v5', category: 'Media Orchestration', icon: <Box className="w-4 h-4 text-blue-500" />, highlight: true },
  { name: 'Docker', category: 'Containerization', icon: <Box className="w-4 h-4 text-blue-400" /> },
];

const row2Items: TechItem[] = [
  { name: 'Generative AI', category: 'Copilot / RAG', icon: <Sparkles className="w-4 h-4 text-emerald-300" />, highlight: true },
  { name: 'LLM Orchestration', category: 'LangChain / Agents', icon: <Bot className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'Prompt Engineering', category: 'Structured Output', icon: <Workflow className="w-4 h-4 text-purple-400" /> },
  { name: 'Power BI & DAX', category: 'Executive BI', icon: <BarChart3 className="w-4 h-4 text-amber-400" />, highlight: true },
  { name: 'Power Query (M)', category: 'ETL Engine', icon: <Database className="w-4 h-4 text-yellow-400" /> },
  { name: 'PostgreSQL & SQLite', category: 'Relational DBs', icon: <Database className="w-4 h-4 text-indigo-400" /> },
  { name: 'SQL Server', category: 'Enterprise DB', icon: <Server className="w-4 h-4 text-red-400" /> },
  { name: 'REST & WebSockets', category: 'Async Protocols', icon: <Workflow className="w-4 h-4 text-cyan-400" /> },
  { name: 'Git & CI/CD', category: 'Release Pipelines', icon: <GitBranch className="w-4 h-4 text-orange-400" /> },
  { name: 'RSA-2048 Licensing', category: 'Hardware Cryptography', icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
  { name: 'Financial Modeling', category: 'Multi-Ledger Audit', icon: <BarChart3 className="w-4 h-4 text-emerald-400" /> },
];

export const TechMarquee: React.FC = () => {
  const renderCard = (item: TechItem, idx: number, tone: 'emerald' | 'amber', duplicate = false) => (
    <article
      key={`${tone}-${item.name}-${idx}`}
      tabIndex={duplicate ? -1 : 0}
      aria-hidden={duplicate}
      className={`tech-marquee-card group flex min-w-[220px] items-center gap-3 rounded-2xl border px-4 py-3.5 backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
        item.highlight
          ? tone === 'emerald'
            ? 'border-emerald-500/35 bg-emerald-500/[0.08] shadow-[0_0_24px_rgba(16,185,129,0.12)] hover:border-emerald-400 hover:bg-emerald-500/15'
            : 'border-amber-500/35 bg-amber-500/[0.08] shadow-[0_0_24px_rgba(245,158,11,0.12)] hover:border-amber-400 hover:bg-amber-500/15'
          : 'border-white/15 bg-[#0c0d12]/90 hover:border-white/30 hover:bg-white/[0.08]'
      }`}
    >
      <div className="rounded-xl border border-white/10 bg-white/[0.06] p-2.5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 group-focus:-rotate-6 group-focus:scale-110">
        {item.icon}
      </div>
      <div className="min-w-0 text-left">
        <div className={`truncate font-mono text-xs font-bold tracking-wide transition-colors ${tone === 'emerald' ? 'group-hover:text-emerald-400' : 'group-hover:text-amber-400'}`}>
          {item.name}
        </div>
        <div className="mt-0.5 truncate font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
          {item.category}
        </div>
      </div>
    </article>
  );

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative overflow-hidden bg-darkBg py-24">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto mb-12 max-w-7xl px-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>// 02 TECHNICAL ARSENAL // LIVE STACK</span>
        </div>
        <h2 id="expertise-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Technologies I Work With
        </h2>
        <p className="text-zinc-300 text-sm font-mono uppercase tracking-[0.18em] font-semibold mt-1">
          PRODUCTION STACK // DESKTOP AI, WORKFLOW AUTOMATION & FULL-STACK SYSTEMS
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
          A practical engineering stack for building AI products, resilient APIs, data workflows, computer-vision automation, and polished interfaces.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-emerald-300">AI engineering</span>
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5 text-cyan-300">Automation systems</span>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1.5 text-amber-300">BI & data operations</span>
        </div>
      </div>

      {/* Infinite Marquee Rows Container with Gradient Fade Edges */}
      <div className="relative w-full space-y-4 overflow-hidden" aria-label="Technology stack carousel. Hover or focus to pause.">
        
        {/* Left & Right Gradient Mask Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="tech-marquee-track flex w-max animate-marquee-left hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]" role="list">
          {[...row1Items, ...row1Items].map((item, idx) => (
            <div key={`row1-wrap-${item.name}-${idx}`} className="mx-2" role="listitem">{renderCard(item, idx, 'emerald', idx >= row1Items.length)}</div>
          ))}
        </div>
        {/* Row 2: Right to Left Marquee */}
        <div className="tech-marquee-track flex w-max animate-marquee-right hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]" role="list">
          {[...row2Items, ...row2Items].map((item, idx) => (
            <div key={`row2-wrap-${item.name}-${idx}`} className="mx-2" role="listitem">{renderCard(item, idx, 'amber', idx >= row2Items.length)}</div>
          ))}
        </div>

      </div>
    </section>
  );
};
