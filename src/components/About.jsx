import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = ({ summary = false }) => {
  const cards = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "MERN Stack Focus",
      desc: "Specializing in MongoDB, Express, React, and Node.js for robust solutions."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Continuous Learner",
      desc: "Always exploring new technologies and improving my coding skills."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Passionate Coder",
      desc: "I love turning complex problems into simple, beautiful, and intuitive designs."
    }
  ];

  return (
    <section id="about" className="py-24 bg-darkBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Discover</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">About Me</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className={`grid ${summary ? 'lg:grid-cols-1 max-w-4xl mx-auto' : 'lg:grid-cols-2'} gap-12 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`space-y-6 ${summary ? 'text-center flex flex-col items-center' : ''}`}
          >
            <h3 className={`text-2xl font-semibold text-gray-100 flex items-center gap-3 ${summary ? 'justify-center' : 'justify-start'}`}>
              <User className="text-primary" />
              Professional Summary
            </h3>
            <p className={`text-gray-400 text-lg leading-relaxed ${summary ? 'text-center' : 'text-left'}`}>
              Hello! I'm an enthusiastic and detail-oriented <span className="text-white font-medium">Full Stack Web Developer</span> fresh out of university, specialized in the MERN stack. Based in Noida, Uttar Pradesh, I am eager to contribute to innovative projects and grow alongside experienced professionals.
            </p>
            {!summary && (
              <p className="text-gray-400 text-lg leading-relaxed">
                My journey into web development has equipped me with a strong foundation in modern frontend libraries like React and solid backend principles using Node.js. What I lack in years of corporate experience, I make up for with dedication, adaptability, and a rapid learning curve.
              </p>
            )}
            {summary && (
               <div className="mt-8">
                 <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg">
                   Read More About Me
                 </Link>
               </div>
            )}
          </motion.div>

          {!summary && (
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-1 gap-6"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-cardBg border border-gray-800 p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300 shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-darkBg p-3 rounded-lg group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{card.title}</h4>
                    <p className="text-gray-400">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
