import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Briefcase, MessageCircle, Activity, ArrowRight, ExternalLink, PlusCircle, Download, FileText, UploadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import API_BASE_URL from '../../config/api';

const AdminHome = () => {
    const [stats, setStats] = useState({ projects: 0, messages: 0 });
    const [recentProjects, setRecentProjects] = useState([]);
    const [recentMessages, setRecentMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const handleResumeUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            toast.error('Please upload a PDF file');
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        setUploading(true);
        const toastId = toast.loading('Uploading resume...');

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            };

            const res = await axios.post(`${API_BASE_URL}/api/admin/resume`, formData, config);

            if (res.data.success) {
                toast.success('Resume updated successfully!', { id: toastId });
                // Trigger a re-render or just let it be since it's a physical file change
            }
        } catch (error) {
            console.error('Upload error:', error);
            toast.error(error.response?.data?.message || 'Upload failed', { id: toastId });
        } finally {
            setUploading(false);
        }
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = { headers: { Authorization: `Bearer ${token}` } };
                
                const [projectsRes, messagesRes] = await Promise.all([
                    axios.get(`${API_BASE_URL}/api/projects`),
                    axios.get(`${API_BASE_URL}/api/contact`, config)
                ]);

                if (projectsRes.data.success) {
                    setStats(prev => ({ ...prev, projects: projectsRes.data.projects.length }));
                    setRecentProjects(projectsRes.data.projects.slice(0, 3));
                }

                if (messagesRes.data.success) {
                    setStats(prev => ({ ...prev, messages: messagesRes.data.messages.length }));
                    setRecentMessages(messagesRes.data.messages.slice(0, 3));
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const cards = [
        { label: 'Total Projects', value: stats.projects, icon: <Briefcase size={24} className="text-blue-400" />, color: 'blue' },
        { label: 'Total Messages', value: stats.messages, icon: <MessageCircle size={24} className="text-purple-400" />, color: 'purple' },
        { label: 'Recent Activity', value: 'High', icon: <Activity size={24} className="text-green-400" />, color: 'green' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Welcome, Vishal Ratan Shakya</h1>
                    <p className="text-gray-400 mt-2 text-lg">Your portfolio overview and recent updates.</p>
                </div>
                <div className="flex items-center gap-4">
                    <input 
                        type="file" 
                        id="resume-upload" 
                        className="hidden" 
                        accept=".pdf"
                        onChange={handleResumeUpload}
                        disabled={uploading}
                    />
                    <label 
                        htmlFor="resume-upload"
                        className={`flex items-center gap-2 px-6 py-3 ${uploading ? 'bg-gray-700 opacity-50' : 'bg-indigo-600 hover:bg-indigo-500'} text-white rounded-xl transition-all font-semibold shadow-lg shadow-indigo-500/20 cursor-pointer`}
                    >
                        {uploading ? (
                            <Activity size={18} className="animate-pulse" />
                        ) : (
                            <UploadCloud size={18} />
                        )}
                        {uploading ? 'Uploading...' : 'Upload Resume'}
                    </label>

                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl hover:bg-gray-700 transition-all font-semibold shadow-lg"
                    >
                        <FileText size={18} className="text-blue-400" />
                        View Live
                    </a>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <div key={card.label} className="bg-gray-900 border border-gray-800 p-8 rounded-3xl group hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl bg-${card.color}-500/10 group-hover:bg-${card.color}-500/20 transition-colors duration-300`}>
                                {card.icon}
                            </div>
                            <span className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                                <ArrowRight size={20} />
                            </span>
                        </div>
                        <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-widest text-xs">{card.label}</h3>
                        <p className="text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">{card.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {/* Recent Projects */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Briefcase className="text-blue-500" size={24} />
                            Recent Projects
                        </h2>
                        <Link to="/admin/manage-projects" className="text-blue-400 hover:text-blue-300 text-sm font-semibold hover:underline flex items-center gap-2 transition-all duration-300">
                            See all <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {recentProjects.length > 0 ? recentProjects.map((project) => (
                            <div key={project._id} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 border border-transparent hover:border-gray-700/50 group">
                                <div className="w-16 h-16 bg-gradient-to-tr from-gray-800 to-gray-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                    {project.imageUrl ? (
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <Briefcase size={24} className="text-gray-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold text-white truncate">{project.title}</h4>
                                    <p className="text-gray-400 text-sm truncate mt-1">Tech Stack: {project.techStack.join(', ')}</p>
                                </div>
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-300 shadow-lg shadow-blue-500/5">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        )) : (
                            <div className="p-10 text-center text-gray-500 bg-gray-950/20 rounded-2xl border-2 border-dashed border-gray-800">
                                <PlusCircle className="mx-auto mb-4 text-gray-600" size={40} />
                                <p>No projects found. Add your first masterpiece!</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Messages */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <MessageCircle className="text-purple-500" size={24} />
                            Recent Messages
                        </h2>
                        <Link to="/admin/messages" className="text-purple-400 hover:text-purple-300 text-sm font-semibold hover:underline flex items-center gap-2 transition-all duration-300">
                            See all <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {recentMessages.length > 0 ? recentMessages.map((msg) => (
                            <div key={msg._id} className="p-5 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 border border-transparent hover:border-gray-700/50 group relative">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-xl shadow-purple-500/10 transform group-hover:rotate-3 transition-transform duration-300">
                                            {msg.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base leading-tight">{msg.name}</h4>
                                            <p className="text-gray-400 text-xs mt-0.5">{new Date(msg.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 italic bg-gray-850 px-2 py-1 rounded-md">{msg.email}</span>
                                </div>
                                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed bg-gray-950/30 p-3 rounded-xl border border-gray-800/50 mt-2">{msg.message}</p>
                            </div>
                        )) : (
                            <div className="p-10 text-center text-gray-500 bg-gray-950/20 rounded-2xl border-2 border-dashed border-gray-800">
                                <MessageCircle className="mx-auto mb-4 text-gray-600" size={40} />
                                <p>No messages received yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
