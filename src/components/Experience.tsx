"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    role: "Full Stack Engineer",
    period: "Present",
    bullets: [
      "Develop scalable web and mobile applications using React.js, Next.js, Node.js, MongoDB, and Firebase.",
      "Work across the full software development lifecycle: requirement analysis, UI/UX implementation, backend development, REST API integration, database design, testing, deployment, and maintenance.",
      "Collaborate with cross-functional teams to deliver reliable, production-ready software with excellent user experience.",
    ],
  },
  {
    role: "Web Developer Intern",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js following modern UI practices.",
      "Collaborated with backend developers to integrate RESTful APIs and dynamic data rendering.",
      "Tested and debugged frontend components for cross-browser compatibility.",
      "Optimized UI performance for improved application responsiveness and loading speed.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A steady track record of product delivery and technical growth"
          description="My experience blends frontend polish, backend reliability, and a product-minded approach to delivery."
        />

        <div className="relative border-l border-cyan-400/20 pl-6 sm:pl-10">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative mb-10 rounded-[1.3rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -left-[1.62rem] top-6 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#060912]" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-sm font-medium text-cyan-300">{item.period}</span>
              </div>
              <ul className="mt-4 space-y-3 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
