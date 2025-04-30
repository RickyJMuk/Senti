import { Link, useLocation } from 'react-router-dom';
import { X, LayoutDashboard, Users, Banknote, BookOpen, Calendar, User, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { user } = useAuth();
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Funding', href: '/funding', icon: Banknote },
    { name: 'Mentorship', href: '/mentorship', icon: Users },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Profile', href: '/profile', icon: User },
  ];
  
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 flex-col bg-white shadow-lg transition-transform duration-300 md:translate-x-0 md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b px-4">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M2 12h5"></path>
              <path d="M17 12h5"></path>
              <path d="M12 2v5"></path>
              <path d="M12 17v5"></path>
              <circle cx="12" cy="12" r="7"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-xl font-bold text-primary-700">Senti</span>
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="flex flex-col px-4 py-4">
          <div className="mb-8 flex items-center">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <User className="h-6 w-6" />
              </div>
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      isActive ? "text-primary-600" : "text-gray-500 group-hover:text-primary-600"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto pt-4 border-t">
            <Link
              to="/settings"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
            >
              <Settings className="mr-3 h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-primary-600" />
              Settings
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;