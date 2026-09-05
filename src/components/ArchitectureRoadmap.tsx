import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, Cloud } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

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
    borderColor: 'border-emerald-500/40',
    description: 'Responsive user interfaces, reactive state graphs, 60fps micro-animations, and WCAG accessibility standards.',
    technologies: ['React 18/19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    deliverables: ['Modular component libraries', 'Fast interactive rendering', 'Custom Bento UI paradigms'],
  },
  {
    step: '02',
    badge: 'PHASE 02',
    title: 'Backend & API Design',
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    description: 'FastAPI and Node.js microservices, relational schemas, secure session management, and zero-trust sanitization.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQL Server', 'REST / WebSockets'],
    deliverables: ['Low-latency API architecture', 'Parameterized SQL queries', 'Asynchronous task queues'],
  },
  {
    step: '03',
    badge: 'PHASE 03',
    title: 'AI & Automation',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    color: 'amber',
    borderColor: 'border-amber-500/40',
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
    borderColor: 'border-purple-500/40',
    description: 'Containerized service topologies, automated static builds, edge CDN caching, and process monitoring.',
    technologies: ['Docker', 'CI/CD Pipelines', 'Edge CDN', 'PowerShell', 'GitOps'],
    deliverables: ['Automated zero-downtime deploys', 'Hardened production bundles', 'Continuous quality gating'],
  },
];

export const ArchitectureRoadmap: React.FC = () => {
  return (
    <section id="architecture" className="py-24 relative bg-darkBg">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 03 SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Core Execution Root Map
            </h2>
          </div>
          <div className="text-zinc-300 font-mono text-xs md:text-sm max-w-md font-semibold">
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
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                <div>
                  {/* Step Counter & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/15 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-300 font-bold px-3 py-1 rounded-full bg-white/[0.05] border border-white/15">
                      {step.step} / {step.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {step.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables Block */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-zinc-400 font-semibold mb-2.5">
                    KEY DELIVERABLES:
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="text-xs font-sans text-zinc-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
