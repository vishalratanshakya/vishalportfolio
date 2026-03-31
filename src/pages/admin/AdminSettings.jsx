import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Settings, User, Lock, Mail, Save, ShieldCheck, RefreshCw, Smartphone } from 'lucide-react';

const AdminSettings = () => {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Vishal Ratan Shakya',
        email: 'vishal@example.com',
        role: 'Full Stack Developer',
    });

    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            toast.success('Settings synchronized!', { icon: '⚙️' });
            setLoading(false);
        }, 1200);
    };

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            toast.error('Passcodes do not match!');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            toast.success('Security matrix updated!', { icon: '🔒' });
            setPasswords({ current: '', new: '', confirm: '' });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-20">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-4">
                    <Settings className="text-blue-500" size={32} />
                    System Settings
                </h1>
                <p className="text-gray-400 text-lg">Configure your administrative workspace environment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Profile Overview Card */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] p-10 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50"></div>
                        <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-indigo-700 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 text-white text-4xl font-black shadow-2xl shadow-blue-500/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            V
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">{profile.name}</h2>
                        <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-8 italic">{profile.role}</p>
                        
                        <div className="space-y-4 pt-6 border-t border-gray-800">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Security Tier</span>
                                <span className="text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">Level 5</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Session Status</span>
                                <span className="text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">Active</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-850 border border-gray-800 rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-gray-800 pb-4">
                            <ShieldCheck className="text-green-500" size={18} />
                            Security Integrity
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-gray-850 rounded-xl border border-gray-800 text-gray-500 group-hover:text-blue-400 transition-colors">
                                    <Smartphone size={16} />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold tracking-wide">2FA Verification</h4>
                                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">Multi-factor enabled</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-gray-850 rounded-xl border border-gray-800 text-gray-500 group-hover:text-blue-400 transition-colors">
                                    <ShieldCheck size={16} />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold tracking-wide">API Guardian</h4>
                                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mt-1">TLS 1.3 Active</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Settings Panels */}
                <div className="lg:col-span-2 space-y-10">
                    {/* General Settings */}
                    <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] p-10 shadow-2xl relative">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-4">
                            <User className="text-blue-500" size={24} />
                            Administrative Profile
                        </h3>
                        
                        <form onSubmit={handleProfileUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs font-black uppercase tracking-widest pl-2">Display Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors duration-300" size={18} />
                                    <input
                                        type="text"
                                        value={profile.name}
                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-bold tracking-wide"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs font-black uppercase tracking-widest pl-2">Email Identity</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors duration-300" size={18} />
                                    <input
                                        type="email"
                                        value={profile.email}
                                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-bold tracking-wide"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 pt-6">
                                <button type="submit" disabled={loading} className="w-full md:w-auto px-10 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-50">
                                    {loading ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
                                    Commit Synchronisation
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Authentication Settings */}
                    <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                        
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-4">
                            <Lock className="text-blue-500" size={24} />
                            Access Protocols
                        </h3>
                        
                        <form onSubmit={handlePasswordUpdate} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-gray-500 text-xs font-black uppercase tracking-widest pl-2">System Passcode</label>
                                <input
                                    type="password"
                                    placeholder="Enter current password"
                                    value={passwords.current}
                                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                    className="w-full bg-gray-850 border border-gray-800 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-bold italic"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs font-black uppercase tracking-widest pl-2">New Access ID</label>
                                    <input
                                        type="password"
                                        placeholder="Min 8 characters"
                                        value={passwords.new}
                                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-bold italic"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-gray-500 text-xs font-black uppercase tracking-widest pl-2">Confirm Identity</label>
                                    <input
                                        type="password"
                                        placeholder="Repeat new password"
                                        value={passwords.confirm}
                                        onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                        className="w-full bg-gray-850 border border-gray-800 text-white px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-bold italic"
                                    />
                                </div>
                            </div>
                            <div className="pt-6">
                                <button type="submit" disabled={loading} className="w-full md:w-auto px-10 bg-gray-100 hover:bg-white text-gray-900 py-4 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 disabled:opacity-50">
                                    {loading ? <RefreshCw className="animate-spin text-gray-900" size={20} /> : <ShieldCheck size={20} />}
                                    Recalibrate Access Matrix
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
