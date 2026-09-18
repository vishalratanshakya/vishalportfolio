'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Layers, Cloud, Database } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  return (
    <section className="py-28 relative bg-[#060709] border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-sky-400" />
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                TECHNICAL STACK
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              Capabilities <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">&</span> Expertise
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-3 leading-relaxed">
              I work with modern technologies to build fast, scalable and user-friendly applications across web and mobile platforms.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-sky-400 transition-colors mt-6 md:mt-0 group border-b border-zinc-700 pb-1 hover:border-sky-400"
          >
            <span>Explore Full Interactive Skill Matrix</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Main Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 01: Languages */}
          <div className="relative rounded-3xl p-7 bg-gradient-to-b from-[#10141d] to-[#0a0d14] border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[70px] pointer-events-none" />

            <div>
              {/* Top Category Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-[1px] shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full bg-[#0d111a] rounded-[15px] flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-sky-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider block">01</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                    Languages
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">5 core technologies</span>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {/* JavaScript */}
                <div className="p-3.5 rounded-2xl bg-[#131824]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center shrink-0">
                    JS
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">JavaScript</span>
                    <span className="text-[10px] font-mono text-zinc-400">(ES6+)</span>
                  </div>
                </div>

                {/* TypeScript */}
                <div className="p-3.5 rounded-2xl bg-[#131824]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    TS
                  </div>
                  <span className="text-xs font-bold text-white">TypeScript</span>
                </div>

                {/* Dart */}
                <div className="p-3.5 rounded-2xl bg-[#131824]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shrink-0">
                    <div className="w-full h-full bg-[#0d111a] rounded-[11px] flex items-center justify-center text-cyan-400 text-xs font-black">
                      ❖
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white">Dart</span>
                </div>

                {/* Java */}
                <div className="p-3.5 rounded-2xl bg-[#131824]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                    ☕
                  </div>
                  <span className="text-xs font-bold text-white">Java</span>
                </div>

                {/* HTML5 & CSS3 */}
                <div className="col-span-2 p-3.5 rounded-2xl bg-[#131824]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-blue-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                    53
                  </div>
                  <span className="text-xs font-bold text-white">HTML5 & CSS3</span>
                </div>
              </div>
            </div>

            {/* Decorative Code Symbol Overlay */}
            <div className="absolute -bottom-6 -right-4 text-7xl font-mono text-blue-500/10 pointer-events-none select-none font-black">
              &lt;/&gt;
            </div>
          </div>

          {/* Card 02: Frameworks & Libraries */}
          <div className="relative rounded-3xl p-7 bg-gradient-to-b from-[#151124] to-[#0c0a17] border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[70px] pointer-events-none" />

            <div>
              {/* Top Category Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-[1px] shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full bg-[#110d1f] rounded-[15px] flex items-center justify-center">
                    <Layers className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider block">02</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    Frameworks & Libraries
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">6 core technologies</span>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {/* React.js */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center font-bold shrink-0">
                    ⚛
                  </div>
                  <span className="text-xs font-bold text-white">React.js</span>
                </div>

                {/* Next.js */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-black font-black text-xs flex items-center justify-center shrink-0">
                    N
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">Next.js</span>
                    <span className="text-[10px] font-mono text-zinc-400">(App Router)</span>
                  </div>
                </div>

                {/* Node.js */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    JS
                  </div>
                  <span className="text-xs font-bold text-white">Node.js</span>
                </div>

                {/* Express.js */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-zinc-800 text-white font-mono text-xs flex items-center justify-center shrink-0">
                    ex
                  </div>
                  <span className="text-xs font-bold text-white">Express.js</span>
                </div>

                {/* Flutter */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 font-black text-xs flex items-center justify-center shrink-0">
                    F
                  </div>
                  <span className="text-xs font-bold text-white">Flutter</span>
                </div>

                {/* Tailwind CSS */}
                <div className="p-3.5 rounded-2xl bg-[#19142b]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-400/20 text-cyan-300 font-black text-xs flex items-center justify-center shrink-0">
                    ≈
                  </div>
                  <span className="text-xs font-bold text-white">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Database & Cloud Services */}
          <div className="relative rounded-3xl p-7 bg-gradient-to-b from-[#0f1d24] to-[#091117] border border-teal-500/30 hover:border-teal-400/60 transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[70px] pointer-events-none" />

            <div>
              {/* Top Category Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 p-[1px] shadow-lg shadow-teal-500/20">
                  <div className="w-full h-full bg-[#0c161c] rounded-[15px] flex items-center justify-center">
                    <Cloud className="w-7 h-7 text-teal-400" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider block">03</span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-teal-300 transition-colors">
                    Database & Cloud Services
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">3 core technologies</span>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-col gap-3 mt-8">
                {/* MongoDB */}
                <div className="p-3.5 rounded-2xl bg-[#112028]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 text-base flex items-center justify-center shrink-0">
                    🍃
                  </div>
                  <span className="text-xs font-bold text-white">MongoDB</span>
                </div>

                {/* Firebase */}
                <div className="p-3.5 rounded-2xl bg-[#112028]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 text-base flex items-center justify-center shrink-0">
                    🔥
                  </div>
                  <span className="text-xs font-bold text-white">Firebase</span>
                </div>

                {/* SQL / Relational DBs */}
                <div className="p-3.5 rounded-2xl bg-[#112028]/90 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">SQL / Relational DBs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
