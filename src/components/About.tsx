"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    title: "B.Tech in Computer Science (Artificial Intelligence)",
    institution: "ABES Institute of Technology, Ghaziabad",
    period: "2022 – 2025",
  },
  {
    title: "Bachelor of Science (PCM)",
    institution: "S.N. Mahavidyalaya",
    period: "2019 – 2022",
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful products with modern engineering discipline"
          description="I’m a full stack engineer who enjoys turning complex product ideas into polished, scalable applications with strong UX and reliable architecture."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.06)] backdrop-blur-xl"
          >
            <p className="text-lg leading-8 text-slate-300">
              I’m a Full Stack Engineer with experience building scalable web and mobile applications from concept to deployment. My expertise spans React.js, Next.js, Node.js, JavaScript, TypeScript, MongoDB, and Firebase, along with hands-on experience building responsive interfaces with HTML, CSS, and Tailwind CSS. I enjoy solving complex technical challenges, designing polished user interfaces, developing secure REST APIs, integrating third-party services, and optimizing performance.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I believe in writing clean, maintainable code and building products that deliver an excellent user experience while creating real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[1.5rem] border border-white/10 bg-[#060912]/80 p-8"
          >
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-cyan-300">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
