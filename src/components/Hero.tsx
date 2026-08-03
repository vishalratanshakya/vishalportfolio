"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

const roles = [
  "Building scalable web & mobile applications",
  "React.js · Next.js · Node.js Developer",
  "Cross-platform App Developer",
];

const socials = [
  { label: "GitHub", href: "https://github.com", icon: <FiGithub className="text-[#7dd3fc]" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <FiLinkedin className="text-[#60a5fa]" /> },
  { label: "Email", href: "mailto:vishalratanshakya@gmail.com", icon: <FiMail className="text-[#a78bfa]" /> },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.15),_transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── Left: text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Available for selected projects
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Full Stack Engineer
          </h1>
          <div className="mt-5 h-12 text-lg font-medium text-cyan-300 sm:text-xl">
            <span className="inline-block min-h-[1.7em]">{roles[currentRole]}</span>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
            I build scalable web and mobile applications from concept to deployment with a strong focus on React.js, Next.js, Node.js, TypeScript, MongoDB, Firebase, and modern product experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right: profile image card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Glow blob behind card */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-500/20 blur-[80px]" />

          {/* Card — image fills the entire box */}
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/25 shadow-[0_0_80px_rgba(34,211,238,0.14)]">
            {/* Profile image covers 100% of the card */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/profile.jpg"
                alt="Profile portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-center"
              />
              {/* Subtle bottom gradient so name text is readable */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Name / title overlaid at bottom of image */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
                <p className="text-lg font-semibold text-white drop-shadow-md">Vishal Ratan Shakya</p>
                <p className="mt-0.5 text-sm text-cyan-300 drop-shadow-md">Full Stack Engineer · React · Node.js</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
