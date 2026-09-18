'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Frontend interaction simulation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 relative bg-noise">
      {/* Background Lighting */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mt-3">
            Let's Work Together
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl font-light mt-4 leading-relaxed">
            Have a project in mind, a full-time engineering opportunity, or want to discuss technical ideas? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
              <h2 className="text-xl font-display font-bold text-white mb-4">Contact Information</h2>

              <a
                href="mailto:vishalratanshakya@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 border border-white/5 hover:border-sky-500/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Email Address</span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    vishalratanshakya@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:9084410891"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 border border-white/5 hover:border-sky-500/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Phone / Mobile</span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    +91 9084410891
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-100 border border-white/5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Location</span>
                  <span className="text-sm font-semibold text-white">Noida / India</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-4">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/vishal-ratan-shakya-487050298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-sky-400 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/vishalratanshakya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-sky-400 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-sky-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, Vishal Ratan Shakya will get back to you shortly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-white mb-2">Send a Message</h2>

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Project Details or Inquiry
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      className="w-full px-5 py-4 rounded-xl bg-surface-100 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-sky-400 text-black font-semibold text-sm hover:bg-white transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
