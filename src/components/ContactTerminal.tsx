import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MessageSquare, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const ContactTerminal: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const fullName = `${firstName} ${lastName}`.trim() || 'Guest Developer / Recruiter';
  const displayEmail = email || 'client@enterprise.com';
  const displayMessage = message || 'Inquiry regarding AI systems architecture and full-stack engineering...';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sumit.kausik@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#F59E0B', '#3B82F6', '#FFFFFF']
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (method === 'whatsapp') {
        const text = encodeURIComponent(
          `Hello Sumeet,\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message || 'I visited your portfolio and would like to discuss a project/role.'}`
        );
        window.open(`https://wa.me/919153579997?text=${text}`, '_blank');
      } else {
        const mailtoLink = `mailto:sumit.kausik@gmail.com?subject=${encodeURIComponent(
          `Portfolio Inquiry from ${fullName}`
        )}&body=${encodeURIComponent(
          `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050505] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>// 06 DISPATCH WORK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Let's Build Something Exceptional.
          </h2>
          <p className="text-zinc-400 font-mono text-xs md:text-sm mt-2 max-w-xl">
            Direct communication gateway. Real-time telemetry CLI syncing with your dispatch parameters.
          </p>
        </div>

        {/* Split Screen: Left Terminal + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── LEFT: Live Mirror Terminal ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl p-6 bg-[#0c0c0e]/95 border border-white/10 backdrop-blur-xl shadow-2xl relative font-mono text-xs"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-zinc-500 ml-2 font-mono">bash: dispatch_payload.sh</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                STATUS: LISTENING
              </span>
            </div>

            {/* Live Terminal Output Block */}
            <div className="space-y-3 text-zinc-300">
              <div className="text-zinc-500">
                // Sumeet.io Engineering Dispatch Terminal v2.4
              </div>
              <div className="text-emerald-400">
                $ init_secure_handshake --target="Sumeet Kumar" --proto=TLS1.3
              </div>
              <div className="text-zinc-400">
                [OK] Connected to +91 9153579997 // sumit.kausik@gmail.com
              </div>

              {/* JSON Live Payload */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-1 text-emerald-300">
                <div className="text-zinc-500">// payload_process [ACTIVE_BUFFER]</div>
                <div><span className="text-purple-400">const</span> payload = &#123;</div>
                <div className="pl-4">
                  <span className="text-zinc-400">"client_name":</span>{' '}
                  <span className="text-amber-300">"{fullName}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"dispatch_channel":</span>{' '}
                  <span className="text-cyan-300">"{displayEmail}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"message_buffer":</span>{' '}
                  <span className="text-emerald-300">"{displayMessage}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"destination":</span>{' '}
                  <span className="text-zinc-200">"Sumeet Kumar // Patna, India (IST)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"dispatch_status":</span>{' '}
                  <span className="text-emerald-400 font-bold">"READY_TO_TRANSMIT"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Action Contact Chips */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] text-zinc-500 uppercase">DIRECT DISPATCH LINKS:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-zinc-300 text-[11px]">sumit.kausik@gmail.com</span>
                    </div>
                    <span className="text-[10px] text-zinc-500">
                      {copiedEmail ? 'Copied!' : 'Copy'}
                    </span>
                  </button>

                  <a
                    href="https://wa.me/919153579997?text=Hello%20Sumeet,%20I%20visited%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-zinc-300 text-[11px]">+91 9153579997</span>
                    </div>
                    <span className="text-[10px] text-emerald-400">WhatsApp ↗</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ─── RIGHT: Minimalist Interactive Dispatch Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#0c0c0e]/95 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, 'whatsapp')}>
              
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-mono text-xs uppercase mb-1.5">
                    First Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#131317] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-sm"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 font-mono text-xs uppercase mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#131317] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-zinc-400 font-mono text-xs uppercase mb-1.5">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane.doe@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#131317] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-zinc-400 font-mono text-xs uppercase mb-1.5">
                  Message / Requirements <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, architecture challenge, or open role..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#131317] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-sm resize-none"
                />
              </div>

              {/* Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING...' : 'DISPATCH ON WHATSAPP'}</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleFormSubmit(e, 'email')}
                  disabled={isSubmitting}
                  className="py-3.5 px-6 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>SEND DIRECT EMAIL</span>
                </button>
              </div>

              {/* Status Indicator */}
              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2 mt-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Payload prepared! Channel client opened successfully.</span>
                </div>
              )}

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
