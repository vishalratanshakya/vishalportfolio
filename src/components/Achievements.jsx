import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2 } from 'lucide-react';

const Achievements = () => {
  const milestones = [
    {
      icon: <GraduationCap size={28} />,
      title: "B.Tech Graduate",
      desc: "Successfully completed Bachelor of Technology degree with strong fundamentals."
    },
    {
      icon: <Award size={28} />,
      title: "MERN Stack Internship",
      desc: "Gained practical experience developing scalable apps during specialized internship."
    },
    {
      icon: <Code2 size={28} />,
      title: "Multiple Projects Built",
      desc: "Designed, developed, and launched over 5 full-stack web applications."
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-darkBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Background</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Milestones & Growth</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch perspective-1000">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="flex-1 bg-gradient-to-br from-cardBg to-darkBg border border-gray-800 p-8 rounded-3xl text-center hover:border-primary/50 transition-colors shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="w-16 h-16 mx-auto bg-gray-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
