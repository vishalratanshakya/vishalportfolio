"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com", icon: <FiGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <FiLinkedin /> },
  { label: "Email", href: "mailto:vishalratanshakya@gmail.com", icon: <FiMail /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04060a] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400/80">
            Connect
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Vishal Ratan Shakya
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Full stack engineer focused on building premium digital products with clean architecture, thoughtful UX, and dependable delivery.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Quick links
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Follow
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <FiArrowUpRight className="text-xs" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Vishal Ratan Shakya</p>
      </div>
    </footer>
  );
}
