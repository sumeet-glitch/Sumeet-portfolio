import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Terminal, 
  Layers, 
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
  { name: 'Python', category: 'Language / Automation', icon: <Terminal className="w-4 h-4 text-amber-400" /> },
  { name: 'FastAPI', category: 'High-Perf Backend', icon: <Flame className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'React 18/19', category: 'Modern UI Suite', icon: <Atom className="w-4 h-4 text-cyan-400" />, highlight: true },
  { name: 'Next.js 14/15', category: 'App Router / SSR', icon: <Layers className="w-4 h-4 text-white" /> },
  { name: 'TypeScript', category: 'Type Safety', icon: <Code2 className="w-4 h-4 text-blue-400" /> },
  { name: 'Tailwind CSS', category: 'Design System', icon: <Sparkles className="w-4 h-4 text-teal-400" /> },
  { name: 'Docker', category: 'Containerization', icon: <Box className="w-4 h-4 text-blue-500" /> },
  { name: 'Electron', category: 'Desktop Apps', icon: <Cpu className="w-4 h-4 text-emerald-300" /> },
  { name: 'Node.js', category: 'Runtime Engine', icon: <Server className="w-4 h-4 text-green-500" /> },
  { name: 'PostgreSQL', category: 'Relational DB', icon: <Database className="w-4 h-4 text-indigo-400" /> },
  { name: 'PowerShell', category: 'OS Automation', icon: <Binary className="w-4 h-4 text-sky-400" /> },
];

const row2Items: TechItem[] = [
  { name: 'Generative AI', category: 'Copilot / RAG', icon: <Sparkles className="w-4 h-4 text-amber-300" />, highlight: true },
  { name: 'LLM Orchestration', category: 'LangChain / Agents', icon: <Bot className="w-4 h-4 text-emerald-400" />, highlight: true },
  { name: 'Prompt Engineering', category: 'Structured Output', icon: <Workflow className="w-4 h-4 text-purple-400" /> },
  { name: 'Power BI & DAX', category: 'Executive BI', icon: <BarChart3 className="w-4 h-4 text-amber-500" />, highlight: true },
  { name: 'Power Query (M)', category: 'ETL Engine', icon: <Database className="w-4 h-4 text-yellow-500" /> },
  { name: 'SQL Server', category: 'Enterprise DB', icon: <Server className="w-4 h-4 text-red-400" /> },
  { name: 'REST APIs & WebSockets', category: 'Protocols', icon: <Workflow className="w-4 h-4 text-cyan-400" /> },
  { name: 'Git & CI/CD', category: 'Version Control', icon: <GitBranch className="w-4 h-4 text-orange-400" /> },
  { name: 'FastAPI Daemon', category: 'Task Engine', icon: <Flame className="w-4 h-4 text-emerald-400" /> },
  { name: 'Financial Modeling', category: 'Ledger Audit', icon: <BarChart3 className="w-4 h-4 text-emerald-500" /> },
];

export const TechMarquee: React.FC = () => {
  return (
    <section id="arsenal" className="py-20 relative overflow-hidden bg-[#050505]">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>// 02 TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
          Technologies I Work With
        </h2>
        <p className="text-zinc-400 text-xs md:text-sm font-mono mt-1">
          BATTLE-TESTED STACK // SPEED-OPTIMIZED & SCALABLE
        </p>
      </div>

      {/* Infinite Marquee Rows Container with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden space-y-4">
        
        {/* Left & Right Gradient Mask Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...row1Items, ...row1Items].map((item, idx) => (
            <div
              key={`row1-${item.name}-${idx}`}
              className={`flex items-center gap-3 px-5 py-3 mx-2 rounded-2xl border transition-all duration-300 group cursor-default ${
                item.highlight
                  ? 'bg-emerald-500/[0.04] border-emerald-500/25 hover:border-emerald-400 hover:bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.08)]'
                  : 'bg-[#0c0c0e]/80 border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="p-2 rounded-xl bg-white/[0.05] border border-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-mono font-semibold text-xs tracking-wide group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...row2Items, ...row2Items].map((item, idx) => (
            <div
              key={`row2-${item.name}-${idx}`}
              className={`flex items-center gap-3 px-5 py-3 mx-2 rounded-2xl border transition-all duration-300 group cursor-default ${
                item.highlight
                  ? 'bg-amber-500/[0.04] border-amber-500/25 hover:border-amber-400 hover:bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.08)]'
                  : 'bg-[#0c0c0e]/80 border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="p-2 rounded-xl bg-white/[0.05] border border-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="text-white font-mono font-semibold text-xs tracking-wide group-hover:text-amber-400 transition-colors">
                  {item.name}
                </div>
                <div className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
