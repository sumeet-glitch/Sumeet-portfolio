import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  FileText,
  Award,
  Check,
  Copy,
  X,
  Calendar,
  BadgeCheck,
  Maximize2,
} from 'lucide-react';

const assetBaseUrl = import.meta.env.BASE_URL;

interface CertItem {
  id: string;
  name: string;
  provider: string;
  category: 'ai' | 'bi' | 'software' | 'banking';
  categoryLabel: string;
  filePath: string;
  isPdf?: boolean;
  credentialId?: string;
  issueDate?: string;
  featured?: boolean;
  skills?: string[];
  accreditations?: string[];
  description?: string;
}

const flagshipCert: CertItem = {
  id: 'cadac-certified-consultant',
  name: 'Certified AI Data & Automation Consultant (CADAC™)',
  provider: 'Ira Skills · ICM Quantum™ Professional Certification',
  category: 'ai',
  categoryLabel: 'EXECUTIVE FLAGSHIP CREDENTIAL',
  filePath: `${assetBaseUrl}Certifications/cadac-ai-automation-consultant.jpeg`,
  credentialId: 'MGBBMZRZ6L1Q',
  issueDate: '6th September, 2026',
  featured: true,
  description:
    'Awarded for demonstrating verified proficiency across Artificial Intelligence, AI Automation, Data Analytics, Business Intelligence, Enterprise AI Solutions, Cloud Applications, and Digital Transformation.',
  skills: [
    'Artificial Intelligence',
    'AI Automation',
    'Data Analytics',
    'Business Intelligence',
    'Enterprise AI Solutions',
    'Cloud Applications',
    'Digital Transformation',
  ],
  accreditations: ['ISO 9001:2015', 'MSME Certified', 'N.S.D.C DIGITAL', 'ICM Quantum™'],
};

const certsList: CertItem[] = [
  flagshipCert,
  {
    id: 'pw-genai-devs',
    name: 'Generative AI for Developers',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification For Generative AI for Developers.jpg`,
    issueDate: '2024',
  },
  {
    id: 'pw-genai-copilot',
    name: 'Gen AI with Microsoft 365 & Copilot',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification For Gen AI with Microsoft 365 and Co-pilot.jpg`,
    issueDate: '2024',
  },
  {
    id: 'pw-genai-all',
    name: 'Generative AI for All',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification For Generative AI for All.jpg`,
    issueDate: '2024',
  },
  {
    id: 'gen-ai-mastery',
    name: 'Generative AI Tools & Enterprise Practice',
    provider: 'Advanced AI Program',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/GEN AI.jpeg`,
    issueDate: '2024',
  },
  {
    id: 'pw-react',
    name: 'React.Js - Basics to Advance',
    provider: 'Physics Wallah (PW Skills)',
    category: 'software',
    categoryLabel: 'SOFTWARE & FULL-STACK',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification For React.Js - Basics to Advance.jpg`,
    issueDate: '2024',
  },
  {
    id: 'deloitte-data',
    name: 'Data Analytics Job Simulation',
    provider: 'Deloitte',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/Deloitte Certification Data Analytics Job Simulation.jpg`,
    issueDate: '2024',
  },
  {
    id: 'pw-excel-finance',
    name: 'Excel for Finance & Financial Modeling',
    provider: 'Physics Wallah (PW Skills)',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification for Excel For Finance.jpg`,
    issueDate: '2024',
  },
  {
    id: 'pw-pvt-banking',
    name: 'Foundation Course in Private Banking',
    provider: 'Physics Wallah (PW Skills)',
    category: 'banking',
    categoryLabel: 'BANKING & OPERATIONS',
    filePath: `${assetBaseUrl}Certifications/Physics Wallah Certification For Foundation Course in Private Banking.jpg`,
    issueDate: '2024',
  },
  {
    id: 'powerbi-workshop',
    name: 'Power BI Data Analytics Workshop',
    provider: 'Professional Workshop',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/Certification Power BI Workshop.jpg`,
    issueDate: '2024',
  },
  {
    id: 'skill-nation-ai',
    name: 'Generative AI Tools Mastery',
    provider: 'Skill Nation',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/Certification Skill Nation Generative AI Tools .jpg`,
    issueDate: '2024',
  },
  {
    id: 'advance-data',
    name: 'Advance Certificates in Data Analysis',
    provider: 'Executive Analytics Institute',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/ADVANCE CERTIFICATES IN DATA ANALYSIS.jpeg`,
    issueDate: '2024',
  },
  {
    id: 'be10x-ai',
    name: 'AI Productivity & Automation Tools',
    provider: 'Be10X',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: `${assetBaseUrl}Certifications/BE 10X.jpeg`,
    issueDate: '2024',
  },
  {
    id: 'powerbi-mastery',
    name: 'Power BI Enterprise Specialization',
    provider: 'Professional Specialization',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/POWER BI.jpeg`,
    issueDate: '2024',
  },
  {
    id: 'cat-internship',
    name: 'Executive CAT Analytics Internship',
    provider: 'CAT Executive Program',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: `${assetBaseUrl}Certifications/Certification Of Participation Internship CAT.jpg`,
    issueDate: '2023',
  },
  {
    id: 'pw-skills-pdf',
    name: 'PW Skills Official Verification PDF',
    provider: 'Physics Wallah (PW Skills)',
    category: 'software',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: `${assetBaseUrl}Certifications/3c4ccf01-0a60-4ad8-82ff-4f815d7730cf.pdf`,
    isPdf: true,
  },
  {
    id: 'pw-skills-credential-pdf',
    name: 'Enterprise Credential Official Verification',
    provider: 'Verification Authority',
    category: 'software',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: `${assetBaseUrl}Certifications/6a3cf7f048e4848b51bff0d2.pdf`,
    isPdf: true,
  },
  {
    id: 'pvt-banking-pdf',
    name: 'Private Banking Foundation PDF Record',
    provider: 'Banking Education Institute',
    category: 'banking',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: `${assetBaseUrl}Certifications/FOUNDATION COURSES AT PVT BANKING.pdf`,
    isPdf: true,
  },
  {
    id: 'genai-copilot-pdf',
    name: 'Gen AI & Copilot Official PDF Record',
    provider: 'Professional Institute',
    category: 'ai',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: `${assetBaseUrl}Certifications/GEN AI WITH M365 & COPILOT.pdf`,
    isPdf: true,
  },
];

export const CertificationsBento: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const handleCopyId = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredCerts =
    activeCategory === 'all'
      ? certsList
      : certsList.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-darkBg">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>// 05 VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="text-zinc-400 font-mono text-xs md:text-sm mt-1">
              19 AUTHENTICATED PDF & HIGH-RES CERTIFICATE ARTIFACTS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0c0c0e] border border-white/10 w-fit">
            {[
              { id: 'all', label: 'All (19)' },
              { id: 'ai', label: 'Executive & AI (7)' },
              { id: 'bi', label: 'Power BI & Analytics (6)' },
              { id: 'software', label: 'Software & React (3)' },
              { id: 'banking', label: 'Banking & Finance (3)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── FLAGSHIP HERO SPOTLIGHT CARD: CADAC™ ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative group"
        >
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#12131a] via-[#0c0d12] to-[#07080b] border border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.08)] hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-all duration-500 overflow-hidden">
            {/* Ambient Background Gradient Mesh */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Credential Details & Accreditations */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                {/* Badge Header Row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold tracking-wider uppercase">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    FLAGSHIP EXECUTIVE CREDENTIAL
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wider uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED CONSULTANT
                  </span>
                </div>

                {/* Title & Organization */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                    Certified AI Data & Automation Consultant
                    <span className="text-amber-400"> (CADAC™)</span>
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-zinc-300">
                    ICM Quantum™ Professional Certification · Issued by <strong className="text-white">Ira Skills</strong>
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Conducted by Ira Skills and awarded in recognition of successful completion of the ICM Quantum™ Certified Professional Programme, demonstrating validated multi-domain proficiency.
                  </p>
                </div>

                {/* Accreditations Row */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mr-1">
                    Accredited:
                  </span>
                  {flagshipCert.accreditations?.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-zinc-300 font-mono text-[11px] tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-1.5">
                  {flagshipCert.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Telemetry & Action Bar */}
                <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/10">
                  {/* Credential ID Chip with Copy Action */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-black/50 border border-white/15">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">ID:</span>
                    <code className="text-xs font-mono font-bold text-amber-300">{flagshipCert.credentialId}</code>
                    <button
                      onClick={(e) => handleCopyId(flagshipCert.credentialId || '', e)}
                      title="Copy Credential ID"
                      aria-label="Copy Credential ID to clipboard"
                      className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    >
                      {copiedId === flagshipCert.credentialId ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {copiedId === flagshipCert.credentialId && (
                      <span className="text-[10px] font-mono text-emerald-400 pr-1 animate-pulse">Copied!</span>
                    )}
                  </div>

                  {/* Issue Date */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Issued: {flagshipCert.issueDate}</span>
                  </div>

                  {/* Quick Inspect Button */}
                  <button
                    onClick={() => setSelectedCert(flagshipCert)}
                    className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:scale-[1.02]"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Credential
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Preview Framing */}
              <div
                onClick={() => setSelectedCert(flagshipCert)}
                className="lg:col-span-5 relative cursor-pointer group/preview"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/80 border border-amber-400/30 group-hover/preview:border-amber-400/70 shadow-2xl transition-all duration-500 flex items-center justify-center p-2">
                  <img
                    src={flagshipCert.filePath}
                    alt={flagshipCert.name}
                    className="w-full h-full object-contain filter contrast-[1.03] group-hover/preview:scale-[1.03] transition-transform duration-500 rounded-lg"
                    loading="eager"
                  />
                  {/* Subtle Shimmer & Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      CLICK TO EXPAND
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
                  <span>Signatory: Deven U Pandey (Founder & CEO)</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── 3D INTERACTIVE CERTIFICATION CARDS GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className={`rounded-2xl p-4 bg-[#0c0c0e]/80 border cursor-pointer backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-black/80 relative overflow-hidden ${
                cert.featured
                  ? 'border-amber-400/40 hover:border-amber-400/70'
                  : 'border-white/10 hover:border-emerald-500/40'
              }`}
            >
              <div>
                {/* Header & Verification Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded uppercase ${
                      cert.featured
                        ? 'text-amber-300 bg-amber-500/10 border border-amber-500/20'
                        : 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    }`}
                  >
                    {cert.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Title & Provider */}
                <h3 className="text-sm font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-zinc-400 text-xs font-mono mb-4">
                  {cert.provider}
                </p>
              </div>

              {/* Thumbnail / Document Preview */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                {cert.isPdf ? (
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <FileText className="w-10 h-10 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono text-zinc-300">View Official PDF Record</span>
                  </div>
                ) : (
                  <img
                    src={cert.filePath}
                    alt={cert.name}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[2px]">
                  <span className="text-xs font-mono font-bold text-white">INSPECT DOCUMENT</span>
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── IN-APP CERTIFICATE LIGHTBOX MODAL ─── */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cert-modal-title"
                className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#0c0d12] border border-white/20 shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-white/[0.02]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 uppercase font-semibold">
                        {selectedCert.categoryLabel}
                      </span>
                      {selectedCert.issueDate && (
                        <span className="text-xs font-mono text-zinc-400">
                          · {selectedCert.issueDate}
                        </span>
                      )}
                    </div>
                    <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white font-display">
                      {selectedCert.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                      {selectedCert.provider}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content / Preview Frame */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
                  {selectedCert.isPdf ? (
                    <div className="w-full h-[65vh] flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#07080a] p-6 text-center">
                      <FileText className="w-16 h-16 text-emerald-400 mb-4" />
                      <h4 className="text-white text-base font-bold mb-2">Official PDF Verification Record</h4>
                      <p className="text-zinc-400 text-xs max-w-md mb-6">
                        This document is authenticated in PDF format. You can view or download the full resolution file directly in your browser.
                      </p>
                      <a
                        href={selectedCert.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open Official PDF Record
                      </a>
                    </div>
                  ) : (
                    <img
                      src={selectedCert.filePath}
                      alt={selectedCert.name}
                      className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                    />
                  )}
                </div>

                {/* Modal Footer */}
                <div className="flex flex-wrap items-center justify-between p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] gap-3">
                  <div className="flex items-center gap-3">
                    {selectedCert.credentialId && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 border border-white/15">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">ID:</span>
                        <code className="text-xs font-mono font-bold text-amber-300">{selectedCert.credentialId}</code>
                        <button
                          onClick={(e) => handleCopyId(selectedCert.credentialId || '', e)}
                          title="Copy Credential ID"
                          aria-label="Copy Credential ID"
                          className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        >
                          {copiedId === selectedCert.credentialId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-4 h-4" /> Authenticated Artifact
                    </span>
                  </div>

                  <a
                    href={selectedCert.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors border border-white/15"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
