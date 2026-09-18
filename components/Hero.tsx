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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Available for Full Stack & Mobile Engineering Roles</span>
            </div>

            {/* Editorial Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-8"
            >
              <span className="hero-line block text-zinc-400 font-normal text-2xl sm:text-4xl mb-2 font-mono">
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
            <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-10">
              "I build modern web and mobile applications with clean code, thoughtful interfaces and seamless user experiences."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <Link
                href="/projects"
                className="px-7 py-4 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all shadow-xl shadow-sky-500/15 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-7 py-4 rounded-full glass-panel border border-white/15 text-white font-medium text-sm hover:border-sky-400/50 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>About Me</span>
              </Link>

              <a
                href="/resume/Vishal_Ratan_Shakya_Resume.pdf"
                download="Vishal_Ratan_Shakya_Resume.pdf"
                className="px-7 py-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider hover:text-white hover:border-sky-400/50 transition-all flex items-center gap-2"
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={portraitRef}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-black/80 group"
            >
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface-100">
                <Image
                  src="/images/profile/vishal-portrait.jpg"
                  alt="Vishal Ratan Shakya"
                  fill
                  priority
                  className="object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Gradient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-80" />

                {/* Floating Card Info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">Full Stack & Mobile</p>
                      <p className="text-sm font-display font-semibold text-white mt-0.5">React • Next.js • Node • Flutter</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-sky-400" />
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
