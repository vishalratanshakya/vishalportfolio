import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#05070b] px-5 py-20 text-slate-100 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Skills</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">My Toolkit</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          React, Next.js, Node.js, TypeScript, MongoDB, Firebase, Tailwind CSS, REST APIs, and modern product engineering.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
