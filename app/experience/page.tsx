import React from 'react';
import { Metadata } from 'next';
import { EXPERIENCES, EDUCATIONS } from '@/data/experience';
import { Calendar, CheckCircle2, Download, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work Experience & History — Vishal Ratan Shakya',
  description:
    'Detailed career history and software developer roles at Meganods IT Solutions and TradesFolks Pvt. Ltd., specializing in React, Next.js, Node.js, and Flutter.',
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 relative bg-noise">
      {/* Background Lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
            Professional History
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mt-3">
            Work Experience
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl font-light mt-4 leading-relaxed">
            An editorial timeline of my engineering roles, deliverables, technology integrations, and company contributions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-16 mb-24">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all relative overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-400">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{exp.location}</span>
                  </div>

                  <h2 className="text-3xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h2>

                  <p className="text-xl font-display font-semibold text-zinc-300 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="mt-6 text-base text-zinc-300 font-light leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="mt-8">
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
                  Key Responsibilities & Scope
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light p-4 rounded-2xl bg-surface-100 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack used */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2">
                  Technologies:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-2">
              Education & Qualifications
            </h2>
            <p className="text-zinc-400 text-base font-light mt-2">
              Academic foundation across computer science, science, and secondary school education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATIONS.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-sky-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-display font-medium text-zinc-300 mb-3">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed pt-4 border-t border-white/5">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white">Need a copy of my resume?</h3>
            <p className="text-zinc-400 text-sm mt-1">Download my formal PDF resume for complete work credentials.</p>
          </div>
          <a
            href="/resume/vishalratan-cv.pdf"
            download="vishalratan-cv.pdf"
            className="px-7 py-4 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-sky-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
