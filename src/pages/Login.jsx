import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft, Mail, Key, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Server connection failed.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col items-center justify-center p-4 selection:bg-primary selection:text-white">
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-cardBg border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-indigo-500"></div>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Lock className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Login</h2>
          <p className="text-gray-400 text-sm">Sign in to access dashboard services</p>
        </div>
        
        {error && (
          <div className="mb-6 text-red-500 text-sm text-center bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Password</label>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 text-white rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-blue-600 active:scale-95 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2 mt-4 disabled:opacity-70"
          >
            {isLoading ? (
               <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : 'Secure Login'}
          </button>
        </form>

        {/* <div className="mt-8 text-center text-sm text-gray-400 bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
          <p className="mb-1 text-gray-300 font-medium">Demo Admin Credentials:</p>
          <p>Email: <span className="text-white font-mono tracking-tight">vishalratanshakya@gmail.com</span></p>
          <p>Password: <span className="text-white font-mono tracking-tight">vishal9084@</span></p>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Login;
