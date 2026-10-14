'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download, Sparkles, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(headlineRef.current?.querySelectorAll('.hero-line') || [], { opacity: 0, y: 45 }, { opacity: 1, y: 0, stagger: 0.15 }, '-=0.6')
        .fromTo(portraitRef.current, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1.2 }, '-=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-noise"
    >
      {/* Background Lighting & Radial Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill Badge with Location */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-6 sm:mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Available for Full Stack &amp; Mobile Roles • India</span>
            </div>

            {/* Editorial Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8"
            >
              <span className="hero-line block text-zinc-400 font-normal text-xl sm:text-3xl mb-2 font-mono">
                Hello, I am
              </span>
              <span className="hero-line block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Vishal Ratan
              </span>
              <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                Shakya.
              </span>
            </h1>

            {/* Professional Statement */}
            <div className="space-y-3 max-w-xl mb-8 sm:mb-10 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              <p>
                I build modern web and mobile applications with thoughtful interfaces, reliable functionality, and clean, maintainable code.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                From e-commerce experiences to on-demand service platforms, I enjoy turning ideas into practical digital products using React, Next.js, Node.js, and Flutter.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
              <Link
                href="/projects"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-sky-400 text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-xl shadow-sky-500/15 flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass-panel border border-white/15 text-white font-medium text-xs sm:text-sm hover:border-sky-400/50 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>About Me</span>
              </Link>

              <a
                href="/resume/vishalratan-cv.pdf"
                download="vishalratan-cv.pdf"
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider hover:text-white hover:border-sky-400/50 transition-all flex items-center gap-2"
              >
                <span>Resume</span>
                <Download className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10 w-full max-w-md">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Connect</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/vishal-ratan-shakya-487050298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/vishalratanshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-sky-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div
              ref={portraitRef}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/80 group"
            >
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface-100">
                <Image
                  src="/images/profile/vishal-portrait.jpg"
                  alt="Vishal Ratan Shakya — Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-80" />

                {/* Floating Card Info */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">Full Stack Developer</p>
                      <p className="text-xs sm:text-sm font-display font-semibold text-white mt-0.5">React • Next.js • Node • Flutter</p>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-12 flex justify-between items-center text-xs text-zinc-500 font-mono">
        <span>SCROLL TO EXPLORE STORY</span>
        <div className="flex items-center gap-2 animate-bounce">
          <span>SCROLL</span>
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </div>
      </div>
    </section>
  );
};
