import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Edit2, Trash2, ExternalLink, FolderKanban, X, Save, RefreshCw } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editModal, setEditModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const fetchProjects = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/projects');
            if (res.data.success) {
                setProjects(res.data.projects);
            }
        } catch (error) {
            toast.error('Failed to fetch projects');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            const token = localStorage.getItem('token');
            const res = await axios.delete(`http://localhost:5000/api/projects/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.data.success) {
                toast.success('Project deleted', { icon: '🗑️' });
                fetchProjects();
            }
        } catch (error) {
            toast.error('Deletion failed');
        }
    };

    const handleEdit = (project) => {
        setSelectedProject({ ...project, techStack: project.techStack.join(', ') });
        setEditModal(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put(`http://localhost:5000/api/projects/${selectedProject._id}`, selectedProject, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.data.success) {
                toast.success('Project updated!', { icon: '✨' });
                setEditModal(false);
                fetchProjects();
            }
        } catch (error) {
            toast.error('Update failed');
        }
    };

    if (loading) return <div className="flex justify-center py-20 animate-pulse"><RefreshCw size={48} className="text-blue-500 animate-spin" /></div>;

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-4">
                        <FolderKanban className="text-blue-500" size={32} />
                        Manage Projects
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg">Curate and maintain your portfolio projects.</p>
                </div>
                <div className="bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 text-sm font-bold tracking-widest uppercase">
                    {projects.length} Total Projects
                </div>
            </div>

            <div className="overflow-x-auto bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm group hover:border-gray-700/50 transition-all duration-300">
                <table className="w-full text-left">
                    <thead className="bg-gray-800/80 text-gray-400 text-xs font-black uppercase tracking-widest border-b border-gray-800">
                        <tr>
                            <th className="px-8 py-5">Image</th>
                            <th className="px-8 py-5">Project Details</th>
                            <th className="px-8 py-5 text-center">Tech Stack</th>
                            <th className="px-8 py-5 text-right w-48">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {projects.map((project) => (
                            <tr key={project._id} className="group/row hover:bg-gray-800/50 transition-colors duration-200">
                                <td className="px-8 py-6">
                                    <div className="w-20 h-20 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl group-hover/row:scale-110 transition-transform duration-300">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-3">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><FaGithub size={14} /></a>
                                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors"><ExternalLink size={14} /></a>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-gray-850 text-gray-400 text-[10px] font-bold rounded-lg uppercase tracking-tighter border border-gray-800/50 hover:border-blue-500/50 hover:text-white transition-all cursor-default">{tech}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <div className="flex justify-end gap-3 translate-x-2 opacity-0 group-hover/row:opacity-100 group-hover/row:translate-x-0 transition-all duration-300">
                                        <button onClick={() => handleEdit(project)} className="p-3 bg-blue-600/10 text-blue-500 hover:bg-blue-600 hover:text-white rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-90">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(project._id)} className="p-3 bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white rounded-2xl transition-all shadow-lg hover:shadow-red-500/20 active:scale-90">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {editModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-gray-950/80 animate-fade-in-fast">
                    <div className="bg-gray-900 border border-gray-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in">
                        <div className="px-8 py-6 bg-gray-800/50 flex justify-between items-center border-b border-gray-800">
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest flex items-center gap-4">
                                <Edit2 className="text-blue-500" size={24} />
                                Edit Project
                            </h2>
                            <button onClick={() => setEditModal(false)} className="p-3 hover:bg-red-500/10 text-gray-500 hover:text-red-500 rounded-2xl transition-all duration-300">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <form onSubmit={handleUpdate} className="p-10 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">Title</label>
                                    <input
                                        type="text"
                                        value={selectedProject.title}
                                        onChange={(e) => setSelectedProject({ ...selectedProject, title: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">Tech Stack</label>
                                    <input
                                        type="text"
                                        value={selectedProject.techStack}
                                        onChange={(e) => setSelectedProject({ ...selectedProject, techStack: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">Description</label>
                                <textarea
                                    value={selectedProject.description}
                                    onChange={(e) => setSelectedProject({ ...selectedProject, description: e.target.value })}
                                    rows="4"
                                    className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium resize-none"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">GitHub Link</label>
                                    <input
                                        type="url"
                                        value={selectedProject.githubLink}
                                        onChange={(e) => setSelectedProject({ ...selectedProject, githubLink: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">Live URL</label>
                                    <input
                                        type="url"
                                        value={selectedProject.liveDemoLink}
                                        onChange={(e) => setSelectedProject({ ...selectedProject, liveDemoLink: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest pl-1">Image URL</label>
                                <input
                                    type="text"
                                    value={selectedProject.imageUrl}
                                    onChange={(e) => setSelectedProject({ ...selectedProject, imageUrl: e.target.value })}
                                    className="w-full bg-gray-850 border border-gray-800 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-medium"
                                />
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-gray-800">
                                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20 active:scale-95">
                                    <Save size={20} /> Save Changes
                                </button>
                                <button type="button" onClick={() => setEditModal(false)} className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border border-gray-700 shadow-xl active:scale-95">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProjects;
