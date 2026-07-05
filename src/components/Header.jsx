import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, Briefcase, User, LogOut, Code, Megaphone } from 'lucide-react';
import { getDbItem, setDbItem } from '../utils/mockDb';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [agencyDropdown, setAgencyDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Watch for auth changes
  useEffect(() => {
    const checkAuth = () => {
      const user = getDbItem('digivibe_current_user', null);
      setCurrentUser(user);
    };
    checkAuth();
    // Add event listener for storage changes
    window.addEventListener('storage', checkAuth);
    // Custom trigger event watcher
    window.addEventListener('auth_change', checkAuth);
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('auth_change', checkAuth);
    };
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('digivibe_current_user');
    window.dispatchEvent(new Event('auth_change'));
    navigate('/');
  };

  // Close menus on page route changes
  useEffect(() => {
    setIsOpen(false);
    setAgencyDropdown(false);
    setCoursesDropdown(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="logo-font text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-orange-200 to-brand-orange bg-clip-text text-transparent">
                digivibe
              </span>
              <span className="bg-brand-orange text-[9px] font-bold text-black uppercase px-1.5 py-0.5 rounded tracking-widest">
                Agency & Academy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Capsule Bar */}
          <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1.5 shadow-lg backdrop-blur-md hover:border-brand-orange/20 transition-all duration-300">
            <Link to="/" className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${location.pathname === '/' ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              Home
            </Link>
            
            <Link to="/about" className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${location.pathname === '/about' ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              About Us
            </Link>

            {/* Agency Hover Dropdown */}
            <div className="relative" 
                 onMouseEnter={() => setAgencyDropdown(true)}
                 onMouseLeave={() => setAgencyDropdown(false)}>
              <button className={`flex items-center space-x-1 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none ${location.pathname.startsWith('/services') ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                <span>Agency</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              
              {agencyDropdown && (
                <div className="absolute left-0 w-64 mt-2 bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-2 animate-fade-in backdrop-blur-xl">
                  <Link to="/services/website-development" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <Code className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Website Development</p>
                      <p className="text-xs text-gray-400">Custom web apps & ecommerce</p>
                    </div>
                  </Link>
                  <Link to="/services/digital-marketing" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <Megaphone className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Digital Marketing</p>
                      <p className="text-xs text-gray-400">Google, Meta Ads & Strategy</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Academy Course Catalog Dropdown */}
            <div className="relative"
                 onMouseEnter={() => setCoursesDropdown(true)}
                 onMouseLeave={() => setCoursesDropdown(false)}>
              <button className={`flex items-center space-x-1 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none ${location.pathname.startsWith('/courses') ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                <span>Academy</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              
              {coursesDropdown && (
                <div className="absolute left-0 w-72 mt-2 bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-2 animate-fade-in backdrop-blur-xl">
                  <div className="px-3 py-1 text-[10px] font-bold text-brand-orange tracking-widest uppercase border-b border-white/5 mb-1 pb-1">
                    Certification Programs
                  </div>
                  <Link to="/courses" className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <GraduationCap className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">All Courses</p>
                      <p className="text-[11px] text-gray-400">Browse academy programs</p>
                    </div>
                  </Link>
                  <Link to="/courses?cat=AI/ML/DS/DA" className="block px-3 py-1.5 text-xs text-gray-300 hover:text-brand-orange rounded hover:bg-white/5">
                    Artificial Intelligence & Data Science
                  </Link>
                  <Link to="/courses?cat=Full Stack Development" className="block px-3 py-1.5 text-xs text-gray-300 hover:text-brand-orange rounded hover:bg-white/5">
                    Full Stack Web Dev (MERN)
                  </Link>
                  <Link to="/courses?cat=Digital Marketing" className="block px-3 py-1.5 text-xs text-gray-300 hover:text-brand-orange rounded hover:bg-white/5">
                    Performance Ads & SEO
                  </Link>
                  <Link to="/courses?cat=HR" className="block px-3 py-1.5 text-xs text-gray-300 hover:text-brand-orange rounded hover:bg-white/5">
                    HR Management
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${location.pathname === '/blog' ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              Blogs
            </Link>

            <Link to="/contact" className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${location.pathname === '/contact' ? 'text-black bg-brand-orange shadow-md shadow-brand-orange/20 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              Contact
            </Link>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <span className="text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  ID: {currentUser.studentId || 'Admin'}
                </span>
                
                {currentUser.email === 'admin@digivibe.in' ? (
                  <Link to="/admin" className="text-xs font-semibold uppercase tracking-wider text-brand-yellow hover:text-white bg-brand-yellow/10 border border-brand-yellow/30 px-4 py-2 rounded-full transition-all">
                    Admin Portal
                  </Link>
                ) : (
                  <Link to="/dashboard" className="text-xs font-semibold uppercase tracking-wider text-brand-orange hover:text-white bg-brand-orange/10 border border-brand-orange/30 px-4 py-2 rounded-full transition-all">
                    Dashboard
                  </Link>
                )}

                <button onClick={handleLogout} className="text-gray-400 hover:text-white p-2 focus:outline-none" title="Log Out">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/verify" className="text-xs text-gray-400 hover:text-white px-3 py-2">
                  Verify Certificate
                </Link>
                <Link to="/auth" className="bg-white text-black hover:bg-brand-orange hover:text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:scale-105">
                  Student Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-brand-dark px-4 pt-2 pb-6 space-y-3">
          <Link to="/" className="block px-3 py-2 text-base font-semibold hover:text-brand-orange border-b border-white/5">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 text-base font-semibold hover:text-brand-orange border-b border-white/5">
            About Us
          </Link>
          
          <div className="px-3 py-1 text-[11px] font-bold text-brand-orange tracking-widest uppercase">
            Agency Services
          </div>
          <Link to="/services/website-development" className="block px-6 py-1.5 text-sm hover:text-brand-orange text-gray-300">
            Website Development
          </Link>
          <Link to="/services/digital-marketing" className="block px-6 py-1.5 text-sm hover:text-brand-orange text-gray-300">
            Digital Marketing
          </Link>

          <div className="px-3 py-1 text-[11px] font-bold text-brand-orange tracking-widest uppercase">
            Academy Programs
          </div>
          <Link to="/courses" className="block px-6 py-1.5 text-sm hover:text-brand-orange text-gray-300">
            All Certification Courses
          </Link>

          <Link to="/blog" className="block px-3 py-2 text-base font-semibold hover:text-brand-orange border-b border-white/5">
            Blogs
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-semibold hover:text-brand-orange border-b border-white/5">
            Contact
          </Link>
          <Link to="/verify" className="block px-3 py-2 text-base font-semibold hover:text-brand-orange border-b border-white/5">
            Verify Certificate
          </Link>

          {currentUser ? (
            <div className="pt-4 px-3 flex flex-col space-y-3">
              <span className="text-xs text-gray-400 font-mono">
                Student ID: {currentUser.studentId || 'Admin'}
              </span>
              {currentUser.email === 'admin@digivibe.in' ? (
                <Link to="/admin" className="text-center bg-brand-yellow text-black font-bold py-2 rounded-lg">
                  Admin Panel
                </Link>
              ) : (
                <Link to="/dashboard" className="text-center bg-brand-orange text-white font-bold py-2 rounded-lg">
                  Student Dashboard
                </Link>
              )}
              <button onClick={handleLogout} className="flex items-center justify-center space-x-2 text-gray-400 py-2 border border-white/10 rounded-lg hover:text-white">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="pt-4 px-3">
              <Link to="/auth" className="block text-center bg-white text-black font-bold py-2.5 rounded-full uppercase tracking-wider text-xs">
                Student Login
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
