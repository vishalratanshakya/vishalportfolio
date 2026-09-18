'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, Code2 } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#08090b]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 tracking-tight font-display text-xl font-bold text-white relative z-50"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-sky-500/10 group-hover:shadow-sky-500/30 transition-all duration-300">
              <div className="w-full h-full bg-[#08090b] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 font-mono text-sm font-black group-hover:text-white transition-colors">
                  VR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-sky-400 transition-colors">
                Vishal Ratan Shakya
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-300 rounded-full ${
                    isActive ? 'text-sky-400 font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-sky-500/10 border border-sky-500/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Resume Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume/Vishal_Ratan_Shakya_Resume.pdf"
              download="Vishal_Ratan_Shakya_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 hover:bg-sky-500 hover:text-black border border-white/10 hover:border-sky-400 text-zinc-200 transition-all duration-300 shadow-md group"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full glass-panel border border-white/10 text-zinc-300 hover:text-white transition-colors relative z-50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#08090b]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-28 md:hidden border-b border-white/10"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase border-b border-white/10 pb-3">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between text-2xl font-display font-semibold transition-all ${
                        isActive ? 'text-sky-400 pl-2 border-l-2 border-sky-400' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto w-full pt-8 border-t border-white/10">
              <a
                href="/resume/Vishal_Ratan_Shakya_Resume.pdf"
                download="Vishal_Ratan_Shakya_Resume.pdf"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-sky-500 text-black font-semibold text-sm shadow-lg shadow-sky-500/20 active:scale-95 transition-transform"
              >
                <span>Download Resume (PDF)</span>
                <Download className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono pt-2">
                <span>Vishal Ratan Shakya</span>
                <span>India</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
