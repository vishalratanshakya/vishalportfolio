import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Download, Mail, Phone, MapPin, Code2, Sparkles, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '@/data/experience';

export const metadata: Metadata = {
  title: 'About Me — Vishal Ratan Shakya',
  description:
    'Full-stack software developer experienced in building responsive web applications using React.js, Next.js, Node.js, Express.js, TypeScript, Flutter, and Dart.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 relative bg-noise">
      {/* Background Lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
            Personal Profile & Background
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mt-3">
            About Me
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl font-light mt-4 leading-relaxed">
            Full-stack software developer passionate about building scalable, pixel-perfect web applications and fluid cross-platform mobile apps.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 glass-panel p-4 rounded-3xl border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-surface-100">
                <Image
                  src="/images/profile/vishal-portrait.jpg"
                  alt="Vishal Ratan Shakya"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-2">
                  <span>LOCATION</span>
                  <span className="text-white">India</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-2">
                  <span>ROLE</span>
                  <span className="text-sky-400">Full Stack Developer</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>EMAIL</span>
                  <a href="mailto:vishalratanshakya@gmail.com" className="text-white hover:text-sky-400 transition-colors">
                    vishalratanshakya@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-12">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Biography & Philosophy</span>
              </h2>

              <div className="prose prose-invert max-w-none text-zinc-300 text-base sm:text-lg leading-relaxed font-light space-y-6">
                <p>
                  I am a Full-stack software developer experienced in building responsive web applications using <strong className="text-white font-medium">React.js, Next.js, Node.js, Express.js</strong>, and <strong className="text-white font-medium">TypeScript</strong>, along with cross-platform mobile applications using <strong className="text-white font-medium">Flutter</strong> and <strong className="text-white font-medium">Dart</strong>.
                </p>
                <p>
                  My engineering workflow encompasses designing clean REST APIs, modeling MongoDB collections, configuring Firebase services, integrating payment systems such as Cashfree, and translating complex product design requirements into accessible, responsive interfaces with Tailwind CSS and modern CSS animation systems.
                </p>
                <p>
                  I believe in writing maintainable, self-documenting code, adhering to Agile development workflows, testing endpoints rigorously with Postman, and continuously refining application startup time and UI render performance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href="/resume/Vishal_Ratan_Shakya_Resume.pdf"
                  download="Vishal_Ratan_Shakya_Resume.pdf"
                  className="px-6 py-3 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Technical Domains</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Full Stack Web Apps',
                    desc: 'End-to-end MERN & Next.js architectures with serverless routes, JWT auth, and MongoDB models.',
                  },
                  {
                    title: 'Cross-Platform Mobile',
                    desc: 'High-performance iOS and Android mobile apps engineered with Flutter, Dart, and Firebase.',
                  },
                  {
                    title: 'REST API & Payment Integration',
                    desc: 'Robust API endpoints tested in Postman and integrated with Cashfree payment gateways.',
                  },
                  {
                    title: 'Agile & Code Quality',
                    desc: 'Git version control, structured code reviews, sprint workflows, and accessibility standards.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-surface-100 border border-white/5">
                    <h3 className="text-base font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Education & Certifications</span>
              </h2>

              <div className="space-y-6">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.institution} className="p-5 rounded-2xl bg-surface-100 border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-base font-display font-bold text-white">{edu.institution}</h3>
                      <span className="text-xs font-mono text-sky-400">{edu.period}</span>
                    </div>
                    <p className="text-xs font-mono text-zinc-300 mb-1">{edu.degree}</p>
                    <p className="text-xs text-zinc-500">{edu.location} — {edu.details}</p>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3">Certifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.title} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                        <p className="font-semibold text-white mb-1">{cert.title}</p>
                        <p className="text-[10px] font-mono text-zinc-400">{cert.issuer} ({cert.year})</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
