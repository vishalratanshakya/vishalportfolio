'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-24 pb-12 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Main Statement */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
                Let's Build Something Exceptional
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-4 leading-tight">
                Ready to bring your next product vision to life?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-6 max-w-md leading-relaxed font-light">
                Available for full-time full stack software development roles, high-impact web & mobile applications, and technical consultations.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all shadow-lg shadow-sky-500/10 group"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links & Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Me', href: '/about' },
                { label: 'All Projects', href: '/projects' },
                { label: 'Experience', href: '/experience' },
                { label: 'Tech Stack & Skills', href: '/skills' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
              Direct Contact
            </span>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <a
                href="mailto:vishalratanshakya@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-sky-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-500/30">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <span>vishalratanshakya@gmail.com</span>
              </a>

              <a
                href="tel:9084410891"
                className="flex items-center gap-3 text-zinc-300 hover:text-sky-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-sky-500/30">
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <span>+91 9084410891</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-sky-400" />
                </div>
                <span>Noida / India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://linkedin.com/in/vishal-ratan-shakya-487050298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/vishalratanshakya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Vishal Ratan Shakya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed & Engineered with Next.js & GSAP</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-sky-400 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
