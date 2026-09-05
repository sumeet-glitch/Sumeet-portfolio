import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';

const projectsList: ProjectData[] = [
  {
    id: 'sk-ai',
    projectNumber: '01',
    title: 'SK AI — Autonomous Desktop Assistant',
    category: 'ai',
    categoryTag: 'AUTONOMOUS DESKTOP AI',
    status: 'COMPLETED // UPGRADING',
    statusType: 'completed-upgrading',
    badge: 'PRODUCTION AGENT',
    summary: 'Functional autonomous desktop assistant operating with localized intent classification, system action execution, and self-upgrading pipelines.',
    detailedDescription: 'SK AI is an autonomous, localized desktop application and worker engine. Production release v1.0.54 is fully functional with native action executor, command manager, SQLite persistence, and speech synthesis. Currently undergoing active engineering toward v1.0.55 featuring enhanced self-learning evolution, universal orchestrator, and automated release gates.',
    architecturePipeline: '[Voice / Command Input] ➔ [Intent & Command Manager] ➔ [FastAPI / Python Daemon] ➔ [Native Action Executor & OS Engine]',
    features: [
      'Completed & functional desktop assistant with native Windows installer',
      'Sub-250ms localized intent classification and speech engine',
      'Action executor managing OS tasks, file discovery, and system telemetry',
      'Active v1.0.55 upgrade pipeline introducing safe self-modification gates'
    ],
    metrics: [
      { label: 'Current Release', value: 'v1.0.54' },
      { label: 'Next Build', value: 'v1.0.55' },
      { label: 'Execution', value: 'COMPLETED' }
    ],
    technologies: ['Python', 'Electron', 'FastAPI', 'SQLite', 'Speech Engine', 'NSIS'],
    liveUrl: '#home',
    gradient: 'from-emerald-500/20 via-transparent to-transparent'
  },
  {
    id: 'project-jarvis',
    projectNumber: '02',
    title: 'Project JARVIS — Localized AI Daemon',
    category: 'ai',
    categoryTag: 'VOICE AI & DESKTOP EMULATION',
    status: 'IN DEVELOPMENT',
    statusType: 'in-development',
    badge: 'ACTIVE BUILD',
    summary: 'In-development localized voice-driven AI daemon and desktop emulation agent built for real-time operating system control.',
    detailedDescription: 'Project Jarvis is an active, in-development desktop automation system designed to bridge continuous natural language audio processing with native OS action dispatch. Engineered with a localized Python core, multi-agent feedback loops, and persistent memory caches, it operates as an ongoing engineering build rather than a finished production release.',
    architecturePipeline: '[Continuous Voice Stream] ➔ [Hotword & Audio Router] ➔ [Jarvis Core Daemon] ➔ [OS Emulation & Subsystem Hooks]',
    features: [
      'Active development focused on low-latency voice command capture',
      'Integrated memory module and secure credential key isolation',
      'Desktop emulation routines for keyboard, mouse, and app dispatch',
      'Dynamic feedback loops for iterative command refinement'
    ],
    metrics: [
      { label: 'Project State', value: 'ACTIVE' },
      { label: 'Iteration', value: 'v3.0 Build' },
      { label: 'Execution', value: 'In-Dev' }
    ],
    technologies: ['Python', 'FastAPI', 'Desktop Emulation', 'Speech-to-Intent', 'Process Automation'],
    liveUrl: '#home',
    gradient: 'from-cyan-500/20 via-transparent to-transparent'
  },
  {
    id: 'classsync-suite',
    projectNumber: '03',
    title: 'SK-ClassSync-Suite — Smart Classroom Automation',
    category: 'automation',
    categoryTag: 'SMART CLASSROOM ORCHESTRATION',
    status: 'IN DEVELOPMENT // ACTIVE',
    statusType: 'in-development',
    badge: 'ACTIVE PROJECT',
    summary: 'Enterprise-grade autonomous classroom recording, digital board PDF export, and cloud content publishing orchestration platform.',
    detailedDescription: 'SK-ClassSync-Suite is a comprehensive classroom automation platform developed to orchestrate daily academic lecture capture across scheduled slot matrices (08:00–20:00 IST). It interfaces directly with OBS Studio v5 over WebSockets, automates Note 3 digital whiteboard PDF exports via OpenCV visual template matching, and manages disk-backed async upload queues to cloud CMS portals.',
    architecturePipeline: '[Daily Slot Matrix 08:00-20:00] ➔ [OBS WebSocket v5 Start/Stop] ➔ [Note 3 OpenCV Template Exporter] ➔ [Playwright Portal Uploader]',
    features: [
      '1-Year Hardware-Locked RSA-2048 licensing with hardware UUID binding',
      'OBS Studio WebSocket v5 automation for start, stop, and standardized naming',
      'Note 3 digital board auto-exporter using OpenCV visual template matching & pywinauto',
      'Autonomous daily classroom scheduler daemon tracking rooms G-7, G-3, G-4',
      'Playwright persistent-session CMS uploader with disk-backed queue management'
    ],
    metrics: [
      { label: 'Schedule Window', value: '08:00-20:00' },
      { label: 'RSA Security', value: '2048-Bit' },
      { label: 'Test Coverage', value: '93 Tests (100%)' }
    ],
    technologies: ['Python', 'OBS WebSocket v5', 'OpenCV', 'Playwright', 'pywinauto', 'PyAutoGUI', 'PyInstaller'],
    liveUrl: '#home',
    gradient: 'from-blue-500/20 via-transparent to-transparent'
  },
  {
    id: 'data-sheet-automation',
    projectNumber: '04',
    title: 'Data Sheet Automation Engine',
    category: 'automation',
    categoryTag: 'WORKFLOW & SPREADSHEET AUTOMATION',
    status: 'COMPLETED // ACTIVE',
    statusType: 'active',
    badge: 'PROCESS AUTOMATION',
    summary: 'Workflow automation initiative eliminating repetitive spreadsheet entries, data-sheet validation errors, and manual workbook reconciliation.',
    detailedDescription: 'An automation initiative engineered to replace error-prone, repetitive manual data-sheet work with structured, scripted ETL pipelines. Consolidates disparate daily entry workbooks, enforces schema consistency, validates formula outputs, and exports reconciled operational data sheets with zero human calculation mistakes.',
    architecturePipeline: '[Raw Operational Data Sheets] ➔ [Python OpenPyXL / Power Query ETL] ➔ [Validation & Anomaly Rules] ➔ [Clean Production Reports]',
    features: [
      'Automated multi-sheet consolidation and schema standardization',
      'Formula validation and anomaly detection catching transcription mismatches',
      'Significant reduction in manual data-entry turnaround time',
      'Clean, formatted exports ready for management audit and downstream reporting'
    ],
    metrics: [
      { label: 'Pipeline', value: 'OpenPyXL ETL' },
      { label: 'Validation', value: 'Formula Engine' },
      { label: 'Execution', value: 'Production' }
    ],
    technologies: ['Python', 'Power Query (M)', 'Excel Data Models', 'OpenPyXL', 'VBA Automation'],
    liveUrl: '#home',
    gradient: 'from-emerald-500/20 via-transparent to-transparent'
  },
  {
    id: 'studio-work-automation',
    projectNumber: '05',
    title: 'Studio Work Performance Automation',
    category: 'automation',
    categoryTag: 'OPERATIONAL TELEMETRY & STUDIO WORK',
    status: 'COMPLETED // ACTIVE',
    statusType: 'active',
    badge: 'STUDIO TELEMETRY',
    summary: 'Operational tracking and studio recording performance system monitoring faculty schedules, studio allocations, and content turnaround.',
    detailedDescription: 'An operational performance automation system managing academic recording studio sessions. Automates tracking of faculty entry dates, recording schedules, room assignments, session completion statuses, and recording turnaround times to maintain consistent broadcast throughput across multi-studio facilities.',
    architecturePipeline: '[Faculty Recording Schedule] ➔ [Daily Session Telemetry Logger] ➔ [Studio Throughput Validator] ➔ [Executive Performance Reports]',
    features: [
      'Standardized faculty code and recording slot tracking across studios',
      'Session completion telemetry with automated discrepancy flagging',
      'Automated studio utilization tracking to balance recording load',
      'Performance summaries tracking daily output against academic delivery deadlines'
    ],
    metrics: [
      { label: 'Telemetry', value: 'Active Tracking' },
      { label: 'Throughput', value: 'Automated' },
      { label: 'Scope', value: 'Multi-Studio' }
    ],
    technologies: ['Python', 'Excel Data Models', 'Power BI', 'ETL Pipelines', 'Operational Telemetry'],
    liveUrl: '#home',
    gradient: 'from-amber-500/20 via-transparent to-transparent'
  },
  {
    id: 'powerbi-suite',
    projectNumber: '06',
    title: 'Power BI Executive Financial Suite',
    category: 'bi',
    categoryTag: 'BUSINESS INTELLIGENCE & TELEMETRY',
    status: 'COMPLETED // PRODUCTION',
    statusType: 'production',
    badge: 'EXECUTIVE TELEMETRY',
    summary: 'Unified multi-site financial intelligence suite consolidating franchise expenses, fee collections, and P&L variance modeling.',
    detailedDescription: 'A multi-tier business intelligence platform consolidating regional operational expenses, fee collection cashflows, and dynamic budget variance models across dozens of institutional franchise branches. Replaced a 5-day manual reporting lag with instantaneous executive dashboards.',
    architecturePipeline: '[SQL Server & Ledger Feeds] ➔ [Power Query M ETL] ➔ [DAX Analytical Cubes] ➔ [Executive Dashboard]',
    features: [
      'Multi-branch P&L variance matrix with dynamic MoM and YoY calculations',
      'Automated data pipeline processing hundreds of thousands of ledger rows',
      'Role-based security views for regional directors and corporate leadership',
      'Automated scheduled refreshes eliminating manual workbook updates'
    ],
    metrics: [
      { label: 'Refresh Model', value: 'Scheduled' },
      { label: 'Model', value: 'DAX & M' },
      { label: 'Data Source', value: 'SQL Server' }
    ],
    technologies: ['Power BI', 'DAX', 'Power Query (M)', 'SQL Server', 'Excel Power Pivot'],
    liveUrl: '#home',
    gradient: 'from-amber-500/20 via-transparent to-transparent'
  },
  {
    id: 'ats-resume',
    projectNumber: '07',
    title: 'Sumeet ATS Resume Pro',
    category: 'ai',
    categoryTag: 'FULL-STACK WEB & LLM',
    status: 'COMPLETED // ACTIVE',
    statusType: 'active',
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
      { label: 'Parser', value: 'Semantic Engine' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Frontend', value: 'React' }
    ],
    technologies: ['FastAPI', 'React', 'Python', 'Tailwind CSS', 'PostgreSQL', 'LangChain'],
    liveUrl: '#home',
    gradient: 'from-cyan-500/20 via-transparent to-transparent'
  },
  {
    id: 'swadeshi-retail',
    projectNumber: '08',
    title: 'Swadeshi Retail Inventory Management',
    category: 'retail',
    categoryTag: 'OPERATIONS & INVENTORY',
    status: 'COMPLETED // PRODUCTION',
    statusType: 'production',
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
      { label: 'Tracking', value: 'SKU Telemetry' },
      { label: 'Verification', value: 'PO Match' },
      { label: 'Execution', value: 'Production' }
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Power BI', 'Tailwind CSS'],
    liveUrl: '#home',
    gradient: 'from-blue-500/20 via-transparent to-transparent'
  }
];

export const ProjectsBento: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-darkBg">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header matching Reference Video */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.18em] font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>// 04 PORTFOLIO WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((proj, idx) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                {/* Top Meta Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        {proj.projectNumber}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded border ${
                        proj.statusType === 'completed-upgrading'
                          ? 'bg-amber-500/10 border-amber-500/35 text-amber-400'
                          : proj.statusType === 'in-development'
                          ? 'bg-cyan-500/10 border-cyan-500/35 text-cyan-400'
                          : 'bg-emerald-500/10 border-emerald-500/35 text-emerald-400'
                      }`}>
                        {proj.status}
                      </span>
                    </div>

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
                      <button
                        onClick={() => setActiveModalProject(proj)}
                        className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/10 transition-colors"
                        title="Open Details Modal"
                      >
                        <ExternalLink className="w-4 h-4 text-emerald-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal (Zero GitHub presentation) */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
