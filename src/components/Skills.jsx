import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Git & GitHub", level: 85 },
        { name: "Postman", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-cardBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">My Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Technical Skills</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-darkBg border border-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-800 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                       <span className="text-gray-300 font-medium">{skill.name}</span>
                       <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
