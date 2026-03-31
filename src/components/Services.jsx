import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutTemplate, Database, Rocket } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      icon: <LayoutTemplate size={32} />,
      title: "Frontend Development",
      desc: "Creating pixel-perfect, responsive, and interactive user interfaces using React and Tailwind CSS."
    },
    {
      icon: <Database size={32} />,
      title: "Full Stack Development",
      desc: "Building end-to-end web applications with robust Node.js/Express backends and MongoDB databases."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Web Design",
      desc: "Designing clean, modern, and user-centric layouts prioritizing user experience and accessibility."
    },
    {
      icon: <Rocket size={32} />,
      title: "Learning & Growth",
      desc: "Proactively learning new frameworks to adopt industry best practices and deliver standard code quality."
    }
  ];

  return (
    <section id="services" className="py-24 bg-darkBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">What I Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Services & Expertise</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cardBg border border-gray-800 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group shadow-lg"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
