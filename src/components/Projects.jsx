import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Loader2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const Projects = ({ summary = false }) => {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/projects`);
        if (res.data.success) {
          setProjects(res.data.projects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Use static data if no projects are in the DB yet
  const displayProjects = projects.length > 0 ? projects : [
    {
      _id: 'default-1',
      title: "Chlothify",
      description: "A fully functional e-commerce platform with user authentication, dynamic product listing, shopping cart functionality, and seamless user experience.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/vishalratanshakya",
      liveDemoLink: "#",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
      featured: true
    },
    {
      _id: 'default-2',
      title: "Digital Bookshelf",
      description: "A web application for users to manage their book collections, track reading progress, and discover new books efficiently.",
      techStack: ["React", "Express.js", "MongoDB"],
      githubLink: "https://github.com/vishalratanshakya",
      liveDemoLink: "#",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600",
      featured: false
    }
  ];

  const displayProjectsLimited = summary && displayProjects.length > 3 ? displayProjects.slice(0, 3) : displayProjects;

  if (loading && projects.length === 0) {
    return (
      <div className="py-24 bg-cardBg flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <section id="projects" className="py-24 bg-cardBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Featured Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Showcasing some of my recent work and creative solutions</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProjectsLimited.map((project, idx) => (
            <motion.div
              key={project._id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-darkBg border border-gray-800 rounded-[2rem] overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-700 italic">No Image Available</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-gray-900/80 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors border border-gray-700">
                     <FaGithub size={18} />
                   </a>
                   <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="p-3 bg-gray-900/80 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors border border-gray-700">
                     <ExternalLink size={18} />
                   </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-md text-[10px] font-bold uppercase tracking-widest leading-none">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
                   <a 
                     href={project.liveDemoLink}
                     target="_blank" 
                     rel="noreferrer" 
                     className="text-white text-sm font-bold flex items-center gap-2 group/btn"
                   >
                     View Project
                     <ArrowRight size={16} className="text-primary group-hover/btn:translate-x-1 transition-transform" />
                   </a>
                   {token && (
                     <Link to="/admin/manage-projects" className="text-[10px] font-bold uppercase tracking-wider bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">
                       Edit
                     </Link>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          {summary ? (
             <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-primary/20">
               View All Projects
               <ArrowRight size={20} />
             </Link>
          ) : (
             <a href="https://github.com/vishalratanshakya" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-800 rounded-2xl text-gray-300 hover:text-white hover:border-primary/50 transition-all duration-300 group shadow-2xl">
               Explore entire archive on GitHub
               <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
             </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
