import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const FullContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', msg: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Server error. Please try again later.' });
    }
    setLoading(false);
    
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "vishalratanshakya@gmail.com",
      link: "mailto:vishalratanshakya@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      value: "+91 9084410891",
      link: "tel:+919084410891"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      title: "Location",
      value: "Noida, Uttar Pradesh",
      link: "#"
    },
    {
      icon: <div className="w-6 h-6 text-blue-400 flex items-center justify-center font-bold">in</div>,
      title: "LinkedIn",
      value: "vishal-ratan-shakya-487050298",
      link: "https://linkedin.com/in/vishal-ratan-shakya-487050298"
    }
  ];

  return (
    <div className="min-h-screen bg-[#090b14] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's <span className="text-green-400">Connect</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-all"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{info.title}</h4>
                    <a href={info.link} className="text-gray-400 hover:text-primary transition-colors text-lg font-medium">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 mb-8">
                <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>
              
              {status.msg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                >
                  {status.msg}
                </motion.div>
              )}
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={20} className={loading ? 'animate-pulse' : ''} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FullContactPage;
