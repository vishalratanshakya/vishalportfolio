import { Search, Bell, User, LogOut, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    };

    return (
        <header className="h-16 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-50">
            <div className="flex items-center gap-10">
                <Link to="/" className="flex items-center gap-4 group">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">Vishal Ratan Shakya</span>
                    <div className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50 flex items-center gap-2 text-xs text-gray-400 group-hover:text-white group-hover:border-blue-500/30 transition-all">
                        <ExternalLink size={12} />
                        View Site
                    </div>
                </Link>
                
                <div className="relative group w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search dashboard..." 
                        className="bg-gray-800/50 border border-gray-700/50 text-gray-100 pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full transition-all duration-300 group-hover:bg-gray-800"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-300">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-900"></span>
                </button>
                
                <div className="h-8 w-[1px] bg-gray-800 mx-2"></div>
                
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-semibold text-gray-100">Administrator</span>
                        <span className="text-xs text-gray-400">vishal@example.com</span>
                    </div>
                    <div className="relative group">
                        <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center p-1 cursor-pointer transform hover:rotate-3 transition-transform duration-300">
                            <User className="text-white" size={20} />
                        </div>
                        
                        <div className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <button 
                                onClick={() => window.location.href = '/admin/settings'}
                                className="w-full text-left px-4 py-3 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-3"
                            >
                                <User size={16} />
                                Profile Settings
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors flex items-center gap-3 border-t border-gray-800"
                            >
                                <LogOut size={16} />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;
