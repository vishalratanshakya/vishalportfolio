import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FullContactPage from './pages/FullContactPage';

// Admin Pages
import AdminHome from './pages/admin/AdminHome';
import AddProject from './pages/admin/AddProject';
import ManageProjects from './pages/admin/ManageProjects';
import AdminMessages from './pages/admin/AdminMessages';
import AdminSettings from './pages/admin/AdminSettings';

import PublicLayout from './components/PublicLayout';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from './components/admin/AdminLayout';


// Protected Route wrapper that redirects to login if not authenticated
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

// Admin Routes Wrapper
const AdminRoutes = () => (
  <AdminLayout>
    <Routes>
      <Route path="dashboard" element={<AdminHome />} />
      <Route path="add-project" element={<AddProject />} />
      <Route path="manage-projects" element={<ManageProjects />} />
      <Route path="messages" element={<AdminMessages />} />
      <Route path="settings" element={<AdminSettings />} />
      {/* Default admin path redirects to dashboard */}
      <Route path="" element={<Navigate to="dashboard" replace />} />
    </Routes>
  </AdminLayout>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        
        {/* Full Contact Page (without layout) */}
        <Route path="/full-contact" element={<FullContactPage />} />

        <Route path="/admin/login" element={<Login />} />
        
        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <AdminRoutes />
          </ProtectedRoute>
        } />

        {/* Catch-all route to redirect any unknown URLs to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


export default App;
