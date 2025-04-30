import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuth } from '../../contexts/AuthContext';

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Close sidebar when route changes (especially on mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Determine if the current route is public home page
  const isHomePage = location.pathname === '/';
  
  // Full-width layout for homepage, with sidebar for authenticated routes
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        {isAuthenticated && !isHomePage && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 transition-all duration-300 ease-in-out ${isAuthenticated && !isHomePage ? 'md:ml-64' : ''}`}>
          <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;