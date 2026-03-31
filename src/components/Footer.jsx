import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkBg border-t border-gray-800 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter inline-block mb-2">
              Vishal<span className="text-primary"> Ratan Shakya</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
              Building responsive, elegant, and secure digital experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
             <a href="https://github.com/vishalratanshakya" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cardBg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all">
               <FaGithub size={18} />
             </a>
             <a href="mailto:vishalratanshakya@gmail.com" className="w-10 h-10 rounded-full bg-cardBg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400 hover:bg-red-400/10 transition-all">
               <Mail size={18} />
             </a>
             <a href="https://linkedin.com/in/vishal-ratan-shakya-487050298" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cardBg border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 transition-all">
               <FaLinkedin size={18} />
             </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Vishal Ratan Shakya. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-1 text-sm text-gray-500">
            Made with <span className="text-red-500 mx-1">❤</span> using React & Node.js
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
