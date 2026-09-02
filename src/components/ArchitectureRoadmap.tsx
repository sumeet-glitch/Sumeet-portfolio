import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, Cloud } from 'lucide-react';

interface PhaseStep {
  step: string;
  badge: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

const executionSteps: PhaseStep[] = [
  {
    step: '01',
    badge: 'PHASE 01',
    title: 'Frontend Engineering',
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    color: 'emerald',
    borderColor: 'border-emerald-500/30',
    description: 'Responsive user interfaces, reactive state graphs, 60fps micro-animations, and WCAG accessibility standards.',
    technologies: ['React 18/19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    deliverables: ['Modular component libraries', 'Sub-second page load speeds', 'Custom Bento UI paradigms'],
  },
  {
    step: '02',
    badge: 'PHASE 02',
    title: 'Backend & API Design',
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    color: 'cyan',
    borderColor: 'border-cyan-500/30',
    description: 'FastAPI and Node.js microservices, relational schemas, secure session management, and zero-trust sanitization.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQL Server', 'REST / WebSockets'],
    deliverables: ['Sub-50ms endpoint latencies', 'Parameterized SQL queries', 'Asynchronous task queues'],
  },
  {
    step: '03',
    badge: 'PHASE 03',
    title: 'AI & Automation',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    color: 'amber',
    borderColor: 'border-amber-500/30',
    description: 'Custom LLM integration, agentic intent routing, structured retrieval pipelines (RAG), and local desktop daemons.',
    technologies: ['LangChain', 'Gemini API', 'Prompt Engineering', 'Electron Daemon', 'Power Query'],
    deliverables: ['Project Jarvis local agent', 'Contextual document synthesis', 'Automated reconciliation scripts'],
  },
  {
    step: '04',
    badge: 'PHASE 04',
    title: 'CI/CD & Deployment',
    icon: <Cloud className="w-5 h-5 text-purple-400" />,
    color: 'purple',
    borderColor: 'border-purple-500/30',
    description: 'Containerized service topologies, automated static builds, edge CDN caching, and process monitoring.',
    technologies: ['Docker', 'GitHub Actions', 'GitHub Pages', 'PowerShell', 'GitOps'],
    deliverables: ['Automated zero-downtime deploys', 'Hardened production bundles', 'Continuous quality gating'],
  },
];

export const ArchitectureRoadmap: React.FC = () => {
  return (
    <section id="architecture" className="py-24 relative bg-[#070709]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>// 03 SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Core Execution Root Map
            </h2>
          </div>
          <div className="text-zinc-400 font-mono text-xs md:text-sm max-w-md">
            Disciplined four-tier lifecycle governing every product release from concept to production edge delivery.
          </div>
        </div>

        {/* 4-Column Bento Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 bg-[#0c0c0e]/90 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:${step.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/60`}
            >
              <div>
                {/* Step Counter & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                    {step.step} / {step.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans mb-6">
                  {step.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {step.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Block */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-2">
                  KEY DELIVERABLES:
                </div>
                <ul className="space-y-1">
                  {step.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="text-[11px] font-sans text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle Ambient Glow Effect on Hover */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
