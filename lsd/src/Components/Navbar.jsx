import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav links with purple color scheme
  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Dyslexia Support', icon: <AcademicCapIcon className="w-5 h-5 text-[#800080]" /> },
        { name: 'ADHD Coaching', icon: <UserGroupIcon className="w-5 h-5 text-[#800080]" /> },
        { name: 'Consultation', icon: <PhoneIcon className="w-5 h-5 text-[#800080]" /> }
      ]
    },
    { name: 'Providers', path: '/providers' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all bg-white duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with purple gradient */}
          <Link to="/" className="flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-[#800080]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#800080] to-[#FF00FF] bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>

          {/* Desktop Navigation - Purple themed */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#800080] font-semibold'
                      : 'text-gray-700 hover:text-[#800080] dark:text-gray-300'
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <svg className="ml-1 h-4 w-4 text-[#800080]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>

                {/* Purple dropdown menu */}
                {link.subLinks && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-[#1E1E1E] shadow-lg ring-1 ring-[#800080]/20 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="py-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#800080]/10 dark:text-gray-300 dark:hover:bg-[#800080]/20"
                        >
                          <span className="mr-2">{subLink.icon}</span>
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-[#800080]/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-[#FFD700]" />
              ) : (
                <MoonIcon className="h-6 w-6 text-[#800080]" />
              )}
            </button>

            <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#800080] hover:bg-[#9C27B0] transition-all">
              Contact Us
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-[#800080]/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-[#800080]" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-[#800080]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - Purple themed */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#800080]/20 bg-white p-2 shadow-lg rounded-lg">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-[#800080]/10 text-[#800080]'
                      : 'text-gray-700 hover:bg-[#800080]/5 dark:text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>

                {link.subLinks && (
                  <div className="pl-6 mt-1 space-y-1">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to="#"
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-[#800080]/5 dark:text-gray-400 rounded-md"
                      >
                        <span className="mr-2">{subLink.icon}</span>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}