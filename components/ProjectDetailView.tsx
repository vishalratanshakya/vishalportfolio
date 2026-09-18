import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, Layers, Calendar, User, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface CaseStudyProps {
  slug: string;
}

export function generateProjectMetadata(slug: string): Metadata {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Vishal Ratan Shakya`,
    description: project.description,
  };
}

export function ProjectDetailView({ slug }: CaseStudyProps) {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for transition
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-32 pb-24 relative bg-noise">
      {/* Background Subtle Ambient */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-sky-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 border-b border-white/10 pb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-400">
                Project {project.number}
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{project.category}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed mt-4 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Key Links */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-400 text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-sky-500/20"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-panel border border-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider hover:text-white hover:border-sky-400 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span>View Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Large Hero Banner */}
        <div className="rounded-3xl overflow-hidden border border-white/15 aspect-[16/9] relative mb-16 bg-surface-100 shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl glass-panel border border-white/10 mb-16 text-xs font-mono">
          <div>
            <span className="text-zinc-500 uppercase block mb-1">Role</span>
            <span className="text-white font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase block mb-1">Year</span>
            <span className="text-white font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase block mb-1">Category</span>
            <span className="text-sky-400 font-semibold">{project.category}</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase block mb-1">Status</span>
            <span className="text-emerald-400 font-semibold">Production Ready</span>
          </div>
        </div>

        {/* Deep Overview & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Project Overview</h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Key Technical Features</span>
              </h2>

              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Tech Stack & Metrics */}
          <div className="lg:col-span-5 space-y-8">
            {/* Tech Stack */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>Technology Stack</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Highlights */}
            {project.stats && (
              <div className="glass-panel p-8 rounded-3xl border border-white/10">
                <h3 className="text-xl font-display font-bold text-white mb-6">Performance & Highlights</h3>
                <div className="space-y-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3.5 rounded-xl bg-surface-100 border border-white/5">
                      <span className="text-xs font-mono text-zinc-400">{stat.label}</span>
                      <span className="text-sm font-bold text-sky-400">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-24">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Project Visuals & Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative bg-surface-100">
                <Image src={img} alt={`${project.title} screenshot ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Up Next Case Study</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{nextProject.title}</h3>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white hover:bg-sky-400 hover:text-black hover:border-sky-400 transition-all font-semibold text-xs uppercase tracking-wider flex items-center gap-2 group"
          >
            <span>View {nextProject.title}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
