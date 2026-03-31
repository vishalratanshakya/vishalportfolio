import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config/api';

const Contact = ({ summary = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

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
    }
  ];

  return (
    <section id="contact" className="py-24 bg-cardBg relative border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Let's Work Together</h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's talk about your next project</h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              I'm open to full-time opportunities, internships, and exciting collaborations. 
              Feel free to reach out with your project ideas or just to say hi!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-xl hover:bg-darkBg transition-colors">
                  <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <a href={info.link} className="text-gray-400 hover:text-primary transition-colors text-base font-medium">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-darkBg border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl relative ${summary ? 'flex flex-col items-center justify-center text-center' : ''}`}
          >
            {!summary ? (
             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                      rows="4"
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>
                
                {status.msg && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {status.msg}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-blue-600 active:scale-95 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={20} className={loading ? 'animate-pulse' : ''} />
                </button>
             </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                      rows="4"
                      className="w-full bg-cardBg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>
                
                {status.msg && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {status.msg}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-blue-600 active:scale-95 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={20} className={loading ? 'animate-pulse' : ''} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
