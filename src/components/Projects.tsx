"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  image: string | null;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "NestHub",
    description: "Responsive real estate platform for buying, selling, and renting properties with search, authentication, and property management features.",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "#",
    github: "#",
    image: "/project-nesthub.png",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "TurboCart",
    description: "Cross-platform delivery app with customer, delivery partner, and admin modules for orders, tracking, payments, and notifications.",
    stack: ["React.js", "Node.js", "Firebase", "Payment Gateway Integration"],
    live: "#",
    github: "#",
    image: "/project-turbocart.png",
    gradient: "from-orange-500/20 via-amber-400/10 to-transparent",
  },
  {
    title: "Nexora",
    description: "On-demand home services platform connecting customers with providers through booking, management, and review flows.",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "#",
    github: "#",
    image: "/project-nexora.png",
    gradient: "from-violet-500/20 via-purple-400/10 to-transparent",
  },
  {
    title: "Rydo",
    description: "Ride-booking experience with live tracking, fare calculation, secure authentication, and driver management workflows.",
    stack: ["React.js", "Node.js", "Google Maps API", "Firebase"],
    live: "#",
    github: "#",
    image: "/project-rydo.png",
    gradient: "from-green-500/20 via-emerald-400/10 to-transparent",
  },
  {
    title: "Clothify",
    description: "Scalable e-commerce platform with carts, secure purchases, and cloud-based media handling.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Razorpay", "Cloudinary"],
    live: "#",
    github: "#",
    image: null,
    gradient: "from-pink-500/20 via-rose-400/10 to-transparent",
  },
  {
    title: "Digital BookShelf",
    description: "Book management system with favorites, protected APIs, ordering, and Redux-driven state management.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT"],
    live: "#",
    github: "#",
    image: null,
    gradient: "from-amber-500/20 via-yellow-400/10 to-transparent",
  },
];

/** SVG placeholder banners for projects without generated images */
const PlaceholderBanners: Record<string, React.ReactNode> = {
  Clothify: (
    <svg viewBox="0 0 400 112" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="clothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#831843" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="400" height="112" fill="url(#clothGrad)" rx="12" />
      {/* Shirt icon */}
      <g transform="translate(160,20)" fill="none" stroke="#f9a8d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4 L5 8 L0 16 L7 18 L7 36 L33 36 L33 18 L40 16 L35 8 L25 4 C25 8 15 8 15 4Z" />
      </g>
      {/* Cart icon */}
      <g transform="translate(200,24)" fill="none" stroke="#fb7185" strokeWidth="2.5" strokeLinecap="round">
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        <circle cx="10" cy="24" r="1.5" fill="#fb7185" stroke="none" />
        <circle cx="20" cy="24" r="1.5" fill="#fb7185" stroke="none" />
      </g>
      <text x="200" y="78" textAnchor="middle" fill="#fda4af" fontSize="13" fontFamily="sans-serif" fontWeight="600">Clothify · E-Commerce</text>
      <text x="200" y="96" textAnchor="middle" fill="#9f1239" fontSize="10" fontFamily="sans-serif">Stripe · Razorpay · Cloudinary</text>
    </svg>
  ),
  "Digital BookShelf": (
    <svg viewBox="0 0 400 112" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="400" height="112" fill="url(#bookGrad)" rx="12" />
      {/* Book icons */}
      {[148, 168, 188, 208, 228, 248].map((x, i) => (
        <rect key={i} x={x} y={22} width={14} height={36} rx="2"
          fill={["#fbbf24","#f59e0b","#d97706","#b45309","#fcd34d","#fbbf24"][i]}
          opacity="0.85" />
      ))}
      {/* Shelf */}
      <rect x="140" y="58" width="120" height="4" rx="2" fill="#92400e" />
      <text x="200" y="80" textAnchor="middle" fill="#fcd34d" fontSize="13" fontFamily="sans-serif" fontWeight="600">Digital BookShelf</text>
      <text x="200" y="97" textAnchor="middle" fill="#b45309" fontSize="10" fontFamily="sans-serif">Redux Toolkit · JWT · MongoDB</text>
    </svg>
  ),
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that blends product thinking with engineering depth"
          description="Each project reflects a strong focus on UI polish, architecture clarity, and dependable delivery."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                glareColor="#67e8f9"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  {/* Project preview image */}
                  <div className="relative mb-5 h-36 overflow-hidden rounded-[1rem] border border-white/10">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${project.gradient} bg-[#060912]`}>
                        {PlaceholderBanners[project.title]}
                      </div>
                    )}
                    {/* Overlay gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#060912]/80 to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-[#0b1020]/80 px-2.5 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={project.live} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300">
                      <FiGithub /> GitHub
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

