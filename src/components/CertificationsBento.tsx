import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, FileText } from 'lucide-react';

interface CertItem {
  id: string;
  name: string;
  provider: string;
  category: 'ai' | 'bi' | 'software' | 'banking';
  categoryLabel: string;
  filePath: string;
  isPdf?: boolean;
}

const certsList: CertItem[] = [
  {
    id: 'pw-genai-devs',
    name: 'Generative AI for Developers',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: './Certifications/Physics Wallah Certification For Generative AI for Developers.jpg',
  },
  {
    id: 'pw-genai-copilot',
    name: 'Gen AI with Microsoft 365 & Copilot',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: './Certifications/Physics Wallah Certification For Gen AI with Microsoft 365 and Co-pilot.jpg',
  },
  {
    id: 'pw-genai-all',
    name: 'Generative AI for All',
    provider: 'Physics Wallah (PW Skills)',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: './Certifications/Physics Wallah Certification For Generative AI for All.jpg',
  },
  {
    id: 'pw-react',
    name: 'React.Js - Basics to Advance',
    provider: 'Physics Wallah (PW Skills)',
    category: 'software',
    categoryLabel: 'SOFTWARE & FULL-STACK',
    filePath: './Certifications/Physics Wallah Certification For React.Js - Basics to Advance.jpg',
  },
  {
    id: 'deloitte-data',
    name: 'Data Analytics Job Simulation',
    provider: 'Deloitte',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/Deloitte Certification Data Analytics Job Simulation.jpg',
  },
  {
    id: 'pw-excel-finance',
    name: 'Excel for Finance & Financial Modeling',
    provider: 'Physics Wallah (PW Skills)',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/Physics Wallah Certification for Excel For Finance.jpg',
  },
  {
    id: 'pw-pvt-banking',
    name: 'Foundation Course in Private Banking',
    provider: 'Physics Wallah (PW Skills)',
    category: 'banking',
    categoryLabel: 'BANKING & OPERATIONS',
    filePath: './Certifications/Physics Wallah Certification For Foundation Course in Private Banking.jpg',
  },
  {
    id: 'powerbi-workshop',
    name: 'Power BI Data Analytics Workshop',
    provider: 'Professional Workshop',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/Certification Power BI Workshop.jpg',
  },
  {
    id: 'skill-nation-ai',
    name: 'Generative AI Tools Mastery',
    provider: 'Skill Nation',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: './Certifications/Certification Skill Nation Generative AI Tools .jpg',
  },
  {
    id: 'advance-data',
    name: 'Advance Certificates in Data Analysis',
    provider: 'Executive Analytics Institute',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/ADVANCE CERTIFICATES IN DATA ANALYSIS.jpeg',
  },
  {
    id: 'be10x-ai',
    name: 'AI Productivity & Automation Tools',
    provider: 'Be10X',
    category: 'ai',
    categoryLabel: 'GEN AI & LLMS',
    filePath: './Certifications/BE 10X.jpeg',
  },
  {
    id: 'powerbi-mastery',
    name: 'Power BI Enterprise Specialization',
    provider: 'Professional Specialization',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/POWER BI.jpeg',
  },
  {
    id: 'cat-internship',
    name: 'Executive CAT Analytics Internship',
    provider: 'CAT Executive Program',
    category: 'bi',
    categoryLabel: 'DATA & BI',
    filePath: './Certifications/Certification Of Participation Internship CAT.jpg',
  },
  {
    id: 'pw-skills-pdf',
    name: 'PW Skills Official Verification PDF',
    provider: 'Physics Wallah (PW Skills)',
    category: 'software',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: './Certifications/3c4ccf01-0a60-4ad8-82ff-4f815d7730cf.pdf',
    isPdf: true,
  },
  {
    id: 'pvt-banking-pdf',
    name: 'Private Banking Foundation PDF Record',
    provider: 'Banking Education Institute',
    category: 'banking',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: './Certifications/FOUNDATION COURSES AT PVT BANKING.pdf',
    isPdf: true,
  },
  {
    id: 'genai-copilot-pdf',
    name: 'Gen AI & Copilot Official PDF Record',
    provider: 'Professional Institute',
    category: 'ai',
    categoryLabel: 'OFFICIAL RECORD',
    filePath: './Certifications/GEN AI WITH M365 & COPILOT.pdf',
    isPdf: true,
  },
];

export const CertificationsBento: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCerts = activeCategory === 'all'
    ? certsList
    : certsList.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative bg-darkBg">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>// 05 VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Certifications & Industry Credentials
            </h2>
            <p className="text-zinc-400 font-mono text-xs md:text-sm mt-1">
              18 AUTHENTICATED PDF & HIGH-RES CERTIFICATE ARTIFACTS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0c0c0e] border border-white/10 w-fit">
            {[
              { id: 'all', label: 'All (18)' },
              { id: 'ai', label: 'Gen AI & Copilot' },
              { id: 'bi', label: 'Power BI & Analytics' },
              { id: 'software', label: 'Software & React' },
              { id: 'banking', label: 'Banking & Finance' },
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

        {/* 3D Interactive Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCerts.map((cert, idx) => (
            <motion.a
              key={cert.id}
              href={cert.filePath}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl p-4 bg-[#0c0c0e]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-black/80 relative overflow-hidden"
            >
              <div>
                {/* Header & Verification Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 uppercase">
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
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-[2px]">
                  <span className="text-xs font-mono font-bold text-white">OPEN DOCUMENT</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
