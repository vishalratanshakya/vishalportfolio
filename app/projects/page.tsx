import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Case Studies — Vishal Ratan Shakya',
  description:
    'Explore 7 real full-stack web applications and cross-platform mobile apps engineered by Vishal Ratan Shakya, including Home Craft Services, TalentSpark, Rydo, SUJATA Fine Jewels, HomeNest, Blinkit App, and 360 Payz.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 relative bg-noise">
      {/* Ambient Lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
            Portfolio Showcase (7 Case Studies)
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mt-3">
            Featured Projects
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl font-light mt-4 leading-relaxed">
            Detailed case studies of production-grade web applications, Flutter mobile apps, multi-vendor marketplaces, and client platforms.
          </p>
        </div>

        {/* 3 Column Grid Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

              <div>
                {/* Image Preview Container */}
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative bg-surface-100 mb-6">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Details */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-sky-300 group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </h2>

                <p className="text-zinc-300 text-sm leading-relaxed mt-3 font-light line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Matching Reference Image */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs hover:bg-sky-400 hover:text-black transition-all group/btn"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs hover:text-white hover:border-white/30 transition-all"
                >
                  <span>Case Study</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
