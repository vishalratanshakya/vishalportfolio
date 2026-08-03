"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const certifications = [
  "Web Developer Internship Certificate",
  "MERN Stack Development Certificate",
  "Java Internship Certificate",
];

export default function Certifications() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 sm:p-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that reflect hands-on technical growth"
          description="A mix of internship experience and structured training across modern development stacks."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-[#060912]/80 px-4 py-5 text-center text-sm font-medium text-slate-200"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
