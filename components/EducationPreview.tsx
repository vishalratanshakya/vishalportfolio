'use client';

import React from 'react';
import Link from 'next/link';
import { EDUCATIONS } from '@/data/experience';
import { GraduationCap, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

export const EducationPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#08090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Academic Foundation
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-3">
              Education &amp; Academics
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 md:mt-0">
            <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light">
              Formal degree qualifications in computer science, science, and secondary school education.
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-white transition-colors shrink-0"
            >
              <span>Full Timeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Compact Responsive Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EDUCATIONS.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5 leading-snug">
                  {edu.degree === 'Class 12th'
                    ? 'Class 12th — Intermediate'
                    : edu.degree === 'Class 10th'
                    ? 'Class 10th — High School'
                    : edu.degree}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-zinc-300 mb-3">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                <span className="truncate">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
