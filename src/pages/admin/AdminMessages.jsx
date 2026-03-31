import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MessageSquare, Mail, User, Calendar, RefreshCw, ChevronRight } from 'lucide-react';

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5000/api/contact', {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.data.success) {
                setMessages(res.data.messages);
            }
        } catch (error) {
            toast.error('Failed to fetch messages');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    if (loading) return <div className="flex justify-center py-20 animate-pulse"><RefreshCw size={48} className="text-purple-500 animate-spin" /></div>;

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-4">
                        <MessageSquare className="text-purple-500" size={32} />
                        Inbox Messages
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg">Communication from your portfolio visitors.</p>
                </div>
                <div className="bg-purple-600/10 text-purple-400 px-4 py-2 rounded-full border border-purple-500/20 text-sm font-bold tracking-widest uppercase shadow-lg shadow-purple-500/5">
                    {messages.length} Total Messages
                </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-sm group hover:border-gray-700/50 transition-all duration-500 p-2">
                <div className="overflow-hidden rounded-[2rem]">
                    <table className="w-full text-left">
                        <thead className="bg-gray-850/80 text-gray-400 text-xs font-black uppercase tracking-[0.2em] border-b border-gray-800">
                            <tr>
                                <th className="px-10 py-6">Sender Details</th>
                                <th className="px-10 py-6">Message Content</th>
                                <th className="px-10 py-6 text-right">Received Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {messages.map((msg) => (
                                <tr key={msg._id} className="group/row hover:bg-gray-850 transition-all duration-300">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-xl shadow-purple-500/10 transform transition-transform group-hover/row:scale-110 group-hover/row:rotate-3">
                                                {msg.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg leading-tight uppercase tracking-wide group-hover/row:text-purple-400 transition-colors duration-300">{msg.name}</h4>
                                                <div className="flex items-center gap-2 text-gray-500 text-xs mt-1 font-medium italic">
                                                    <Mail size={12} className="text-purple-500" />
                                                    {msg.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 max-w-xl">
                                        <div className="bg-gray-950/40 p-4 rounded-2xl border border-gray-800/50 group-hover/row:border-purple-500/20 group-hover/row:bg-gray-950/60 transition-all duration-300 relative group/msg">
                                            <p className="text-gray-300 text-sm leading-relaxed italic line-clamp-3">
                                                "{msg.message}"
                                            </p>
                                            <div className="absolute top-1/2 -right-3 -translate-y-1/2 opacity-0 group-hover/row:opacity-100 transition-all duration-300 translate-x-2 group-hover/row:translate-x-0">
                                                <ChevronRight className="text-purple-500" size={24} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right font-medium text-gray-500 whitespace-nowrap">
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-white font-bold text-sm tracking-widest">{new Date(msg.createdAt).toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}</span>
                                            <span className="text-[10px] uppercase font-black tracking-widest text-gray-600 flex items-center gap-2">
                                                <Calendar size={10} />
                                                {new Date(msg.createdAt).getFullYear()}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {messages.length === 0 && (
                <div className="py-20 text-center animate-fade-in-up">
                    <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700 shadow-2xl">
                        <MessageSquare className="text-gray-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Workspace In Silence</h3>
                    <p className="text-gray-500 italic">Messages from the void will appear here when they arrive.</p>
                </div>
            )}
        </div>
    );
};

export default AdminMessages;
