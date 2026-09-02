import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';

const projectsList: ProjectData[] = [
  {
    id: 'jarvis',
    title: 'Project Jarvis // SK AI Assistant',
    category: 'ai',
    categoryTag: 'AI & DESKTOP RUNTIME',
    badge: 'VOICE AI DAEMON',
    summary: 'Multi-modal desktop assistant and localized automation daemon executing voice commands and intelligent system tasks.',
    detailedDescription: 'Project Jarvis is a localized, high-resilience desktop automation daemon and voice assistant designed to bridge natural language processing with native operating system workflows. Built using an Electron runtime, React frontend, and a localized FastAPI background worker, it processes voice input, routes intent, and orchestrates system tasks with zero external exposure.',
    architecturePipeline: '[Voice / Audio Stream] ➔ [Intent Parser] ➔ [FastAPI Daemon] ➔ [OS Automation & Telemetry]',
    features: [
      'Localized background daemon operating with low system footprint',
      'Context-aware intent classification and sub-second speech processing',
      'Batch document transformation and file management routines',
      'Self-healing crash recovery and secure OS credential vaults'
    ],
    metrics: [
      { label: 'Latency', value: '< 250ms' },
      { label: 'Voice Precision', value: '98.5%' },
      { label: 'Memory Footprint', value: '< 85MB' }
    ],
    technologies: ['Electron', 'React 18', 'TypeScript', 'FastAPI', 'Python', 'Gemini API'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    repoUrl: 'https://github.com/sumeet-glitch',
    gradient: 'from-emerald-500/20 via-transparent to-transparent'
  },
  {
    id: 'ats-resume',
    title: 'Sumeet ATS Resume Pro',
    category: 'ai',
    categoryTag: 'FULL-STACK WEB & LLM',
    badge: 'ENTERPRISE AI PLATFORM',
    summary: 'Full-stack resume optimization platform and applicant tracking engine with semantic keyword match analytics.',
    detailedDescription: 'An enterprise-grade applicant tracking and resume optimization engine built with React and FastAPI. The application performs deep semantic parsing on multi-format resumes, matches candidates against strict job descriptions, flags formatting anomalies, and delivers AI-augmented career briefings.',
    architecturePipeline: '[Candidate Resume PDF/Docx] ➔ [ETL Parser] ➔ [LLM Analysis Engine] ➔ [Match Matrix & Insights]',
    features: [
      'Instant semantic scoring matching industry ATS standards',
      'Multi-format parser extracting structured JSON entities from PDF/Word',
      'AI-guided keyword optimizer highlighting skill gaps',
      'Secure user authentication and report export generation'
    ],
    metrics: [
      { label: 'Score Boost', value: '+45%' },
      { label: 'Parse Speed', value: '1.2s' },
      { label: 'ATS Accuracy', value: '99.1%' }
    ],
    technologies: ['FastAPI', 'React', 'Python', 'Tailwind CSS', 'PostgreSQL', 'LangChain'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    repoUrl: 'https://github.com/sumeet-glitch',
    gradient: 'from-cyan-500/20 via-transparent to-transparent'
  },
  {
    id: 'powerbi-bi',
    title: 'Power BI Executive Financial Suite',
    category: 'powerbi',
    categoryTag: 'BUSINESS INTELLIGENCE',
    badge: 'EXECUTIVE TELEMETRY',
    summary: 'Unified multi-site financial intelligence suite consolidating franchise expenses, student fee collections, and P&L variances.',
    detailedDescription: 'A multi-tier business intelligence platform consolidating regional operational expenses, fee collection cashflows, and dynamic budget variance models across dozens of institutional franchise branches. Replaced a 5-day manual reporting lag with instantaneous executive dashboards.',
    architecturePipeline: '[SQL Server & Ledger Feeds] ➔ [Power Query M ETL] ➔ [DAX Analytical Cubes] ➔ [Executive Dashboard]',
    features: [
      'Multi-branch P&L variance matrix with dynamic MoM and YoY calculations',
      'Automated data pipeline processing hundreds of thousands of ledger rows',
      'Role-based security views for regional directors and corporate leadership',
      'Automated scheduled refreshes eliminating manual workbook updates'
    ],
    metrics: [
      { label: 'Reporting Lag', value: '-5 Days' },
      { label: 'Decision Speed', value: '2x Faster' },
      { label: 'Data Scale', value: '500K+ Rows' }
    ],
    technologies: ['Power BI', 'DAX', 'Power Query (M)', 'SQL Server', 'Excel Power Pivot'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    gradient: 'from-amber-500/20 via-transparent to-transparent'
  },
  {
    id: 'geo-attendance',
    title: 'Mobile Attendance & Geo-Verification',
    category: 'mobile',
    categoryTag: 'SYSTEMS SECURITY & TELEMETRY',
    badge: 'SECURITY ENGINE',
    summary: 'Secure enterprise attendance verification platform featuring GPS perimeter fencing and camera authentication.',
    detailedDescription: 'An enterprise workforce compliance application providing verifiable on-site check-ins. Combines precise GPS perimeter geofencing with camera-based visual verification and timestamp telemetry, fully integrated with central payroll databases.',
    architecturePipeline: '[Mobile Device Telemetry] ➔ [Geo-Fencing Validator] ➔ [API Gateway] ➔ [Payroll Ledger Sync]',
    features: [
      'Sub-meter geofencing radius validation preventing spoofed check-ins',
      'Tamper-proof device signature and hardware-bound biometric verification',
      'Offline queuing with cryptographic synchronization on reconnection',
      'Automated discrepancy alerts sent to regional operations managers'
    ],
    metrics: [
      { label: 'Spoof Rate', value: '0.00%' },
      { label: 'Sync Latency', value: '< 500ms' },
      { label: 'Uptime', value: '99.98%' }
    ],
    technologies: ['React Native', 'Node.js', 'FastAPI', 'PostgreSQL', 'WebSockets'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    gradient: 'from-purple-500/20 via-transparent to-transparent'
  },
  {
    id: 'reconciliation',
    title: 'Automated Financial Reconciliation Engine',
    category: 'finance',
    categoryTag: 'FINANCIAL ENGINEERING',
    badge: 'AUDIT AUTOMATION',
    summary: 'Automated multi-ledger audit workbook reconciling purchase orders, supplier invoices, and department balances.',
    detailedDescription: 'A high-precision financial audit workbook designed to eliminate manual monthly spreadsheet reconciliations across educational franchise networks. Employs relational Power Pivot data models and Python automation scripts to cross-validate invoice items against approved purchase orders.',
    architecturePipeline: '[Vendor Invoices & Bank Ledgers] ➔ [Python ETL Script] ➔ [Variance Matrix] ➔ [Audited Close]',
    features: [
      'Automated discrepancy flagging prior to month-end ledger closing',
      'Consolidation of purchase orders, vendor invoices, and student fee rolls',
      'Eliminated 40% of administrative operational overhead',
      'Historical variance tracking and audit trail generation'
    ],
    metrics: [
      { label: 'Overhead Reduction', value: '40%' },
      { label: 'Audit Accuracy', value: '100%' },
      { label: 'Closing Time', value: '3x Faster' }
    ],
    technologies: ['Python', 'Power Pivot', 'DAX', 'SQL Server', 'VBA Automation'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    gradient: 'from-emerald-500/20 via-transparent to-transparent'
  },
  {
    id: 'swadeshi',
    title: 'Swadeshi Retail Inventory Management',
    category: 'retail',
    categoryTag: 'OPERATIONS & INVENTORY',
    badge: 'RETAIL INTELLIGENCE',
    summary: 'End-to-end retail and inventory intelligence suite streamlining SKU tracking, invoice validation, and POS telemetry.',
    detailedDescription: 'An operational retail platform engineered for high-velocity stock auditing and supplier validation. Tracks fast-moving consumer SKUs, flags margin discrepancies, and enforces supplier invoice matching to eliminate supplier overbilling.',
    architecturePipeline: '[POS Telemetry & Stock Scans] ➔ [Relational Inventory DB] ➔ [Margin Anomaly Engine] ➔ [Restock Order]',
    features: [
      'Live SKU telemetry tracking replenishment thresholds in real-time',
      'Direct purchase order matching against supplier invoices',
      'Margin leakage and inventory shrinkage anomaly detection',
      'Executive dashboard summarizing top-performing product categories'
    ],
    metrics: [
      { label: 'Shrinkage Reduction', value: '25%' },
      { label: 'Stockout Drop', value: '35%' },
      { label: 'SKU Capacity', value: '10,000+' }
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Power BI', 'Tailwind CSS'],
    liveUrl: 'https://sumeet-glitch.github.io/Sumeet-portfolio/',
    gradient: 'from-blue-500/20 via-transparent to-transparent'
  }
];

export const ProjectsBento: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory || (selectedCategory === 'ai' && (p.category === 'ai' || p.category === 'mobile')));

  return (
    <section id="projects" className="py-24 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header & Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// 04 PORTFOLIO WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0c0d12] border border-white/10 w-fit">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Full-Stack' },
              { id: 'powerbi', label: 'Power BI & BI' },
              { id: 'finance', label: 'Finance & Audit' },
              { id: 'retail', label: 'Retail & Ops' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                {/* Top Meta Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-400 font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      {proj.badge}
                    </span>
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors border border-white/10"
                      title="View System Architecture & Case Study"
                    >
                      <Layers className="w-4 h-4 text-emerald-400" />
                    </button>
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-normal mb-6">
                    {proj.summary}
                  </p>

                  {/* ASCII Pipeline Snippet */}
                  <div className="p-3 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-emerald-300 font-semibold mb-6 truncate shadow-inner">
                    {proj.architecturePipeline}
                  </div>
                </div>

                {/* Bottom Tech Tags & Action CTAs */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400 font-medium">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group/btn"
                    >
                      <span>View Architecture</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/10 transition-colors"
                          title="Live System"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
