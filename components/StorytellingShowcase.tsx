'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StorytellingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const FEATURED_SLUGS = ['sujata-fine-jewels', 'homecraft-services', '360-payz'];
  const featuredProjects = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean) as typeof PROJECTS;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal project cards on scroll
      const cards = containerRef.current?.querySelectorAll('.project-story-card');
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 relative bg-[#08090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Selected Work · 2025–2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-3">
              Selected Projects
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light mt-4 md:mt-0 leading-relaxed">
            A selection of web and mobile projects spanning e-commerce, on-demand services, and client-focused digital experiences. Explore the interfaces, functionality, and technologies behind each project.
          </p>
        </div>

        {/* Featured Project Cards (Exactly 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-story-card glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle background glow per card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

              <div>
                {/* Project Image Preview */}
                <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] relative bg-surface-100 mb-5 sm:mb-6">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Meta & Details */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-2.5 font-light line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs hover:text-white hover:border-white/30 transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs hover:bg-sky-400 hover:text-black transition-all group/btn"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-sky-400 hover:text-black hover:border-sky-400 transition-all duration-300 group shadow-lg"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
