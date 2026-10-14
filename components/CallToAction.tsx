'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#050608] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Technical Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Work Together
          </h2>

          <p className="text-zinc-400 text-sm sm:text-lg mt-4 sm:mt-6 font-light leading-relaxed max-w-xl mx-auto">
            Have a project idea or a developer opportunity? Let&apos;s connect and discuss how I can contribute.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-sky-400 text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2 group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="mailto:vishalratanshakya@gmail.com"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass-panel border border-white/15 text-white font-medium text-xs sm:text-sm hover:border-sky-400/50 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>vishalratanshakya@gmail.com</span>
            </a>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-white/10">
            <a
              href="https://linkedin.com/in/vishal-ratan-shakya-487050298"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/vishalratanshakya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
