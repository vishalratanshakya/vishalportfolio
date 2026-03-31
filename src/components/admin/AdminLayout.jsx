import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import { Toaster } from 'react-hot-toast';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-900 overflow-hidden font-sans">
            <Toaster 
                position="top-right" 
                toastOptions={{
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #374151',
                        borderRadius: '12px'
                    },
                    success: {
                        iconTheme: {
                            primary: '#3b82f6',
                            secondary: '#fff',
                        },
                    },
                }}
            />
            
            {/* Sidebar with fixed width */}
            <AdminSidebar />
            
            {/* Main content area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <AdminNavbar />
                
                <main className="flex-1 overflow-y-auto px-10 py-10 bg-gray-950/20 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                    {children}
                    <div className="h-20 lg:h-0"></div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
