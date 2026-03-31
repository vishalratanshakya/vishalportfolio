import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { PlusCircle, Upload, Link as LinkIcon, Code, Type, FileText } from 'lucide-react';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        techStack: '',
        githubLink: '',
        liveDemoLink: '',
        imageUrl: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('http://localhost:5000/api/projects', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                toast.success('Project added successfully!', {
                    style: { borderRadius: '12px' },
                    icon: '🚀'
                });
                setFormData({
                    title: '',
                    description: '',
                    techStack: '',
                    githubLink: '',
                    liveDemoLink: '',
                    imageUrl: '',
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to add project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
            <div>
                <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-4">
                    <PlusCircle className="text-blue-500" size={32} />
                    Add New Project
                </h1>
                <p className="text-gray-400 mt-2 text-lg">Bring your latest masterpiece to life!</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl space-y-8 shadow-2xl hover:border-blue-500/30 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                        <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                            <Type size={16} className="text-blue-400" /> Project Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter project title"
                            className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium"
                        />
                    </div>

                    <div className="space-y-3 group">
                        <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                            <Code size={16} className="text-blue-400" /> Tech Stack
                        </label>
                        <input
                            type="text"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleChange}
                            required
                            placeholder="e.g. React, Node.js, MongoDB"
                            className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-3 group">
                    <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                        <FileText size={16} className="text-blue-400" /> Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Detail your amazing project here..."
                        rows="4"
                        className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium resize-none"
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 group">
                        <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                            <LinkIcon size={16} className="text-blue-400" /> GitHub Link
                        </label>
                        <input
                            type="url"
                            name="githubLink"
                            value={formData.githubLink}
                            onChange={handleChange}
                            placeholder="https://github.com/..."
                            className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium"
                        />
                    </div>

                    <div className="space-y-3 group">
                        <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                            <LinkIcon size={16} className="text-blue-400" /> Live Demo Link
                        </label>
                        <input
                            type="url"
                            name="liveDemoLink"
                            value={formData.liveDemoLink}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-3 group">
                    <label className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
                        <Upload size={16} className="text-blue-400" /> Image URL
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="bg-gray-800/50 border border-gray-700/50 text-white p-4 rounded-2xl w-full focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 hover:bg-gray-800 placeholder:text-gray-500 font-medium"
                    />
                </div>

                {formData.imageUrl && (
                    <div className="relative group w-full h-56 bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
                        <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                        <span className="absolute bottom-4 left-6 text-white font-bold tracking-widest uppercase text-xs bg-blue-600 px-3 py-1 rounded-full shadow-lg">Preview</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5 rounded-2xl font-bold text-lg hover:from-blue-500 hover:to-indigo-600 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-widest"
                >
                    {loading ? (
                        <>
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                            <span>Publishing...</span>
                        </>
                    ) : (
                        <>
                            <PlusCircle size={24} />
                            Publish Project
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddProject;
