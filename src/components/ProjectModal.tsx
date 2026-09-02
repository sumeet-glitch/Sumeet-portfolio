import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitBranch, Layers, CheckCircle2, Terminal } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  badge: string;
  summary: string;
  detailedDescription: string;
  architecturePipeline: string;
  features: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  gradient: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0c0c0e] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/10"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Tag & Title */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 uppercase">
              {project.badge}
            </span>
            <span className="text-zinc-500 font-mono text-xs">
              // {project.categoryTag}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            {project.detailedDescription}
          </p>

          {/* Architecture Pipeline Flow Box */}
          <div className="mb-6 p-4 rounded-2xl bg-[#131317] border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE PIPELINE</span>
            </div>
            <div className="whitespace-pre py-1 font-semibold text-emerald-400">
              {project.architecturePipeline}
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-zinc-400 tracking-wider uppercase mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>ARCHITECTURAL CAPABILITIES & HIGHLIGHTS</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantified Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-emerald-400 font-mono font-bold text-lg">{m.value}</div>
                <div className="text-zinc-500 font-mono text-[10px] uppercase">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies Stack */}
          <div className="mb-8">
            <div className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-2">
              TECHNOLOGY STACK:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center gap-2"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-wider hover:bg-white/[0.08] transition-all flex items-center gap-2"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
