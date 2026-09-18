import React from 'react';
import { Metadata } from 'next';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Code2, Layers, Database, CreditCard, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack — Vishal Ratan Shakya',
  description:
    'Interactive technology Matrix of Vishal Ratan Shakya across JavaScript, TypeScript, Dart, React.js, Next.js, Node.js, Express.js, Flutter, MongoDB, Firebase, and Cashfree.',
};

const CATEGORY_STYLES: Record<
  string,
  {
    gradient: string;
    border: string;
    hoverBorder: string;
    glow: string;
    badgeBg: string;
    textColor: string;
    icon: React.ReactNode;
    codeSymbol?: string;
  }
> = {
  Languages: {
    gradient: 'from-[#10141d] to-[#0a0d14]',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-400/60',
    glow: 'bg-blue-500/10',
    badgeBg: 'from-indigo-600 to-blue-600',
    textColor: 'text-blue-400',
    icon: <Code2 className="w-6 h-6 text-sky-400" />,
    codeSymbol: '</>',
  },
  'Frameworks & Libraries': {
    gradient: 'from-[#151124] to-[#0c0a17]',
    border: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-400/60',
    glow: 'bg-purple-500/10',
    badgeBg: 'from-purple-600 to-indigo-600',
    textColor: 'text-purple-400',
    icon: <Layers className="w-6 h-6 text-purple-400" />,
  },
  'Database & Cloud Services': {
    gradient: 'from-[#0f1d24] to-[#091117]',
    border: 'border-teal-500/30',
    hoverBorder: 'hover:border-teal-400/60',
    glow: 'bg-teal-500/10',
    badgeBg: 'from-teal-600 to-emerald-600',
    textColor: 'text-teal-400',
    icon: <Database className="w-6 h-6 text-teal-400" />,
  },
  'Payment Integration': {
    gradient: 'from-[#241a0d] to-[#120d06]',
    border: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-400/60',
    glow: 'bg-amber-500/10',
    badgeBg: 'from-amber-600 to-orange-600',
    textColor: 'text-amber-400',
    icon: <CreditCard className="w-6 h-6 text-amber-400" />,
  },
  'Tools & Workflows': {
    gradient: 'from-[#1e1024] to-[#0e0712]',
    border: 'border-fuchsia-500/30',
    hoverBorder: 'hover:border-fuchsia-400/60',
    glow: 'bg-fuchsia-500/10',
    badgeBg: 'from-fuchsia-600 to-pink-600',
    textColor: 'text-fuchsia-400',
    icon: <Wrench className="w-6 h-6 text-fuchsia-400" />,
  },
};

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-24 relative bg-[#060709] bg-noise min-h-screen">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              TECHNICAL CAPABILITIES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">&</span> Tech Matrix
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl font-light mt-4 leading-relaxed">
            A comprehensive breakdown of programming languages, frameworks, cloud databases, payment gateways, and software engineering methodologies I utilize.
          </p>
        </div>

        {/* Skill Matrix Line by Line Stack */}
        <div className="flex flex-col gap-12">
          {SKILL_CATEGORIES.map((category, idx) => {
            const style = CATEGORY_STYLES[category.title] || CATEGORY_STYLES['Languages'];
            const number = `0${idx + 1}`;

            return (
              <div
                key={category.title}
                className={`relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r ${style.gradient} border ${style.border} ${style.hoverBorder} transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-80 h-80 ${style.glow} rounded-full blur-[100px] pointer-events-none`} />

                <div>
                  {/* Category Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.badgeBg} p-[1px] shadow-lg shrink-0`}>
                        <div className="w-full h-full bg-[#0d111a] rounded-[15px] flex items-center justify-center">
                          {style.icon}
                        </div>
                      </div>
                      <div>
                        <span className={`text-xs font-mono ${style.textColor} font-semibold uppercase tracking-wider block`}>
                          CATEGORY {number}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white group-hover:text-white transition-colors">
                          {category.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 font-light mb-8 max-w-2xl leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Individual Skills Grid inside full-width category line */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${style.textColor.replace('text-', 'bg-')}`} />
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 ${style.textColor}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed pl-4">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {style.codeSymbol && (
                  <div className="absolute -bottom-6 -right-4 text-8xl font-mono text-blue-500/10 pointer-events-none select-none font-black">
                    {style.codeSymbol}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
