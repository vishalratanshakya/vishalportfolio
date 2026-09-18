'use client';

import React from 'react';
import Link from 'next/link';
import { EXPERIENCES, EDUCATIONS } from '@/data/experience';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

export const TimelinePreview: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050608] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Heading & Intro */}
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-3">
              Professional Work & Experience
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6 font-light">
              Hands-on software development experience across Noida software IT companies, developing React, Next.js, Node.js, and Flutter production systems.
            </p>

            <div className="mt-8">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-white transition-colors group"
              >
                <span>View Full Experience & Timeline</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className="glass-panel p-8 rounded-2xl border border-white/10 relative hover:border-sky-500/30 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">{exp.role}</span>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-sky-300 transition-colors mt-0.5">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-1 text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                  {exp.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Education Highlight */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-white">ABES Institute of Technology</h4>
                  <p className="text-xs font-mono text-zinc-400">B.Tech in CS (AI Specialization) • 2022–2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
