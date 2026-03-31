import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/WhatsApp Image 2026-03-31 at 1.42.07 PM.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative bg-[#090b14]">
      {/* Background radial gradient overlay if needed */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="w-full px-6 lg:px-16 xl:px-24 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full mt-10">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <span className="text-base">🚀</span>
              <span className="text-green-400 font-medium text-sm">Discover the Future of Web Development</span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
              Hi, I'm <br className="hidden lg:block xl:hidden" /><span className="text-green-400">Vishal Ratan</span> <span className="text-cyan-400">Shakya</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              I build exceptional digital experiences with modern web technologies. Let's create something amazing together!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="group bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/resume.pdf"
                download
                className="text-gray-400 hover:text-white px-4 py-4 rounded-xl font-medium transition-colors flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative lg:ml-auto w-full"
          >
            <div className="relative w-full max-w-[350px] xl:max-w-[450px] aspect-square lg:aspect-auto lg:h-[450px] xl:h-[550px] rounded-[2.5rem]">
               {/* Glowing Background Frame */}
               <div className="absolute -inset-2 bg-gradient-to-br from-green-400 via-transparent to-cyan-400 rounded-[2.5rem] blur-2xl opacity-60 z-0"></div>
               
               {/* Hard border container */}
               <div className="relative z-10 w-full h-full bg-[#161a28] p-4 lg:p-6 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden border border-gray-700/50">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-900 relative flex items-center justify-center">
                     <img 
                       src={profileImg} 
                       alt="Vishal Ratan Shakya" 
                       className="w-full h-full object-cover transform scale-[1.1] hover:scale-[1.15] transition-transform duration-700 brightness-95 contrast-105"
                       style={{ objectPosition: 'center 10%' }}
                     />
                     {/* Professional dark edge vignette to mask the original background */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#111827_100%)] pointer-events-none opacity-80"></div>
                     <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#090b14] via-[#090b14]/60 to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
