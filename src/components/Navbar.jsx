import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutDashboard, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAdmin = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#090b14]/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="w-full px-6 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center relative">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50 relative">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-green-400">Vishal Ratan </span>
              <span className="text-cyan-400">Shakya</span>
            </Link>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center z-50 relative">
            <div className="flex space-x-8 items-center">
              <Link to="/" className={`transition-colors duration-300 font-semibold text-base lg:text-lg ${
                location.pathname === '/' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}>Home</Link>
              <Link to="/projects" className={`transition-colors duration-300 font-semibold text-base lg:text-lg ${
                location.pathname === '/projects' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}>Projects</Link>
              <Link to="/skills" className={`transition-colors duration-300 font-semibold text-base lg:text-lg ${
                location.pathname === '/skills' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}>Skills</Link>
              <Link to="/about" className={`transition-colors duration-300 font-semibold text-base lg:text-lg ${
                location.pathname === '/about' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}>About</Link>
              <Link to="/contact" className={`transition-colors duration-300 font-semibold text-base lg:text-lg ${
                location.pathname === '/contact' ? 'text-green-400' : 'text-gray-300 hover:text-white'
              }`}>Contact</Link>
            </div>
          </div>
          
          {/* Admin Indicator (Desktop) */}
          <div className="hidden md:flex items-center justify-end min-w-[60px] z-50 relative">
            {isAdmin ? (
               <Link to="/admin/dashboard" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold flex items-center gap-2">
                 <LayoutDashboard size={18} />
                 <span>Dashboard</span>
               </Link>
            ) : (
               <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold flex items-center gap-2">
                 <User size={18} />
                 <span>Admin</span>
               </Link>
            )}
          </div>
          
          {/* Mobile menu button & Admin Indicator */}
          <div className="md:hidden flex items-center z-50 relative">
            {isAdmin ? (
               <Link to="/admin/dashboard" className="mr-4 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold">
                 Dashboard
               </Link>
            ) : (
               <Link to="/admin/login" className="mr-4 text-gray-400 hover:text-white transition-colors duration-300 font-semibold">
                 Admin
               </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#090b14]/98 backdrop-blur-xl border-b border-gray-800 shadow-2xl z-40"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              <Link to="/" onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${
                location.pathname === '/' ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}>Home</Link>
              <Link to="/projects" onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${
                location.pathname === '/projects' ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}>Projects</Link>
              <Link to="/skills" onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${
                location.pathname === '/skills' ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}>Skills</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${
                location.pathname === '/about' ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-xl font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-green-400' : 'text-gray-200 hover:text-green-400'
              }`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
