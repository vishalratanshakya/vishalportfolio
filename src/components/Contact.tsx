"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Thanks! Your message is ready to be sent via your preferred mail client.");
  };

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something outstanding together"
          description="Whether you need a polished web app, a scalable product experience, or a thoughtful implementation partner, I’m ready to help."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white">Direct contact</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <a href="mailto:vishalratanshakya@gmail.com" className="flex items-center gap-3 transition hover:text-cyan-300">
                <FiMail /> <span>vishalratanshakya@gmail.com</span>
              </a>
              <a href="tel:+919084410891" className="flex items-center gap-3 transition hover:text-cyan-300">
                <FiPhone /> <span>9084410891</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-300">
                <FiLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-white/10 bg-[#060912]/80 p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Email" type="email" />
            </div>
            <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" placeholder="Message" />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]" type="submit">
                Send Message
              </button>
              <a href="mailto:vishalratanshakya@gmail.com" className="text-sm text-slate-400 transition hover:text-cyan-300">
                Or email directly
              </a>
            </div>
            {status ? <p className="mt-4 text-sm text-cyan-300">{status}</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
