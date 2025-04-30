import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../utils/cn';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={onMenuClick}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 12h5"></path>
                <path d="M17 12h5"></path>
                <path d="M12 2v5"></path>
                <path d="M12 17v5"></path>
                <circle cx="12" cy="12" r="7"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="text-xl font-bold text-primary-700">Senti</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/funding" 
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                >
                  Funding
                </Link>
                <Link 
                  to="/mentorship" 
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                >
                  Mentorship
                </Link>
              </>
            )}
          </nav>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="relative ml-3">
                <div className="flex items-center gap-4">
                  <Link
                    to="/profile"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
                  >
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                    <span className="ml-2 hidden md:inline-block">{user?.name}</span>
                  </Link>
                  
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Logout</span>
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={cn(
                    "btn btn-outline",
                    "hidden sm:inline-flex"
                  )}
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;