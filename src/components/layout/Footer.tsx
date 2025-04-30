import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 12h5"></path>
                <path d="M17 12h5"></path>
                <path d="M12 2v5"></path>
                <path d="M12 17v5"></path>
                <circle cx="12" cy="12" r="7"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="text-xl font-bold text-primary-700">Senti</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Connecting social entrepreneurs in Mombasa County with funding, mentorship, and market networks.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/funding" className="text-sm text-gray-600 hover:text-primary-600">
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-sm text-gray-600 hover:text-primary-600">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-gray-600 hover:text-primary-600">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-primary-600">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-600 hover:text-primary-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-gray-600 hover:text-primary-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-gray-600 hover:text-primary-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Senti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;