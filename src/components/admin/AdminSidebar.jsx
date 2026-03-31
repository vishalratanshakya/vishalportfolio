import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, FolderKanban, MessageSquare, Settings, LogOut, Globe } from 'lucide-react';

const AdminSidebar = () => {
    const navItems = [
        { name: 'View Website', path: '/', icon: <Globe size={20} /> },
        { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Add Project', path: '/admin/add-project', icon: <PlusCircle size={20} /> },
        { name: 'Manage Projects', path: '/admin/manage-projects', icon: <FolderKanban size={20} /> },
        { name: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} /> },
        { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    };

    return (
        <aside className="w-64 bg-gray-900 text-gray-100 min-h-screen flex flex-col border-r border-gray-800">
            <div className="p-6">
                <h1 className="text-xl font-bold text-white tracking-wider uppercase">ADMIN PANEL</h1>
            </div>

            <nav className="flex-1 px-4 space-y-2 py-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                isActive 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`
                        }
                    >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
