"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVsco,
} from "react-icons/si";
import { FiKey } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <SiOpenjdk /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <SiVsco /> },
      { name: "REST APIs", icon: <FiKey /> },
      { name: "JWT Auth", icon: <FiKey /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A modern toolkit for building serious digital products"
          description="I combine strong frontend craft with scalable backend thinking to deliver polished, reliable software."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.05 }}
              className="rounded-[1.35rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0b1020]/80 px-3 py-2 text-sm text-slate-200 shadow-[0_0_24px_rgba(34,211,238,0.08)]"
                  >
                    <span className="text-cyan-300">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
