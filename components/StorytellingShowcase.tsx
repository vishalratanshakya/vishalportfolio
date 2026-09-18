'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StorytellingShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProjects = PROJECTS.slice(0, 6);

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
    <section ref={containerRef} className="py-28 relative bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Selected Work • 2025–2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-3">
              Crafted Digital Products
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light mt-4 md:mt-0">
            A curated collection of full-stack web applications and cross-platform mobile apps built with clean code and high performance.
          </p>
        </div>

        {/* Featured Editorial Project Cards 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-story-card glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle background glow per card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

              <div>
                {/* Project Image Preview */}
                <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] relative bg-surface-100 mb-6">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
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

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-sky-300 group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed mt-3 font-light line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Matching Reference Image */}
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

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium text-sm hover:bg-sky-400 hover:text-black hover:border-sky-400 transition-all duration-300 group shadow-lg"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
