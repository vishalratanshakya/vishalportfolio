"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-base text-cyan-300">
            VS
          </span>
          <span className="hidden text-base sm:block">Vishal Ratan Shakya</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#060912]/95 px-5 py-5 md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
