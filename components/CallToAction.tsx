'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-28 relative bg-[#050608] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Technical Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind or want to collaborate?
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-6 font-light leading-relaxed">
            Whether you need a full-stack web app built from scratch, a cross-platform Flutter mobile application, or a developer for your engineering team — I’d love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2 group"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="mailto:vishalratanshakya@gmail.com"
              className="px-8 py-4 rounded-full glass-panel border border-white/15 text-white font-medium text-sm hover:border-sky-400/50 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>vishalratanshakya@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
