import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMobileMenuOpen(false);
  };

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    setIsThemeMenuOpen(false);
    // You can add theme application logic here
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'testimonials'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const smoothScrollHandler = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        setIsMobileMenuOpen(false);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScrollHandler);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollHandler);
      });
    };
  }, []);

  const navLinks = [
    { href: "#home", text: "Home", icon: "fas fa-home" },
    { href: "#about", text: "About", icon: "fas fa-user" },
    { href: "#skills", text: "Skills", icon: "fas fa-code" },
    { href: "#projects", text: "Projects", icon: "fas fa-folder-open" },
    { href: "#contact", text: "Contact", icon: "fas fa-envelope" },
    { href: "#testimonials", text: "Testimonials", icon: "fas fa-star" },
  ];

  return (
    <>
      <style jsx>{`
        .nav-blur {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .nav-shadow {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }
        
        .nav-link:hover::before {
          left: 100%;
        }
        
        .active-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        
        .nav-link.active .active-indicator {
          width: 80%;
        }
        
        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }
        
        .mobile-menu-backdrop {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .menu-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-icon.open {
          transform: rotate(180deg);
        }
        
        .mobile-nav-item {
          transform: translateX(-100px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-nav-item.show {
          transform: translateX(0);
          opacity: 1;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
          }
        }
        
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        .fade-in-right {
          animation: fadeInRight 0.5s ease-out;
        }
        
        .pulse-glow {
          animation: pulseGlow 2s infinite;
        }
        
        .float-up {
          animation: floatUp 3s ease-in-out infinite;
        }
        
        .sidebar-item:hover {
          transform: translateX(5px);
        }
        
        .gradient-border {
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
          padding: 2px;
          border-radius: 12px;
        }
        
        .gradient-border-inner {
          background: white;
          border-radius: 10px;
          padding: 12px;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .theme-button {
          position: relative;
          overflow: hidden;
        }
        
        .theme-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s;
        }
        
        .theme-button:hover::before {
          left: 100%;
        }
      `}</style>
      
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out slide-down
                    ${isScrolled 
                      ? 'bg-white/80 nav-blur nav-shadow border-b border-white/20' 
                      : 'bg-transparent'
                    }
                    ${isMobileMenuOpen ? 'bg-white/90 nav-blur nav-shadow' : ''}`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="group flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center logo-glow transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xl">AC</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  Alex Chen
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`nav-link relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 group
                              ${activeSection === link.href.slice(1)
                                ? 'text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 active'
                                : isScrolled || isMobileMenuOpen 
                                  ? 'text-gray-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50' 
                                  : 'text-gray-800 hover:text-indigo-600 hover:bg-white/30'
                              }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <i className={`${link.icon} text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></i>
                    <span>{link.text}</span>
                  </div>
                  <div className="active-indicator"></div>
                </a>
              ))}
              
              {/* Theme Toggle Dropdown */}
              <div className="relative ml-4">
                <button
                  onClick={toggleThemeMenu}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-200
                              ${isScrolled || isMobileMenuOpen 
                                ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                                : 'text-gray-800 hover:text-indigo-600 hover:bg-white/30'
                              }`}
                >
                  <i className="fas fa-palette text-lg"></i>
                </button>
                
                {isThemeMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Choose Theme</div>
                    {[
                      { name: 'Light', value: 'light', icon: 'fas fa-sun', color: 'text-yellow-500' },
                      { name: 'Dark', value: 'dark', icon: 'fas fa-moon', color: 'text-indigo-500' },
                      { name: 'Auto', value: 'auto', icon: 'fas fa-adjust', color: 'text-gray-500' }
                    ].map((theme) => (
                      <button
                        key={theme.value}
                        onClick={() => changeTheme(theme.value)}
                        className={`w-full flex items-center px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200
                                    ${currentTheme === theme.value ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'}`}
                      >
                        <i className={`${theme.icon} ${theme.color} mr-3`}></i>
                        <span>{theme.name}</span>
                        {currentTheme === theme.value && (
                          <i className="fas fa-check ml-auto text-indigo-600"></i>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sidebar Toggle */}
              <button
                onClick={toggleSidebar}
                className={`ml-4 p-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-200
                            ${isScrolled || isMobileMenuOpen 
                              ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                              : 'text-gray-800 hover:text-indigo-600 hover:bg-white/30'
                            }`}
              >
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu} 
                className={`relative p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-200
                            ${isScrolled || isMobileMenuOpen 
                              ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                              : 'text-gray-800 hover:text-indigo-600 hover:bg-white/30'
                            }`}
                aria-expanded={isMobileMenuOpen}
              >
                <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                  <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-500 ease-out
                      ${isMobileMenuOpen 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                      } 
                      bg-white/95 mobile-menu-backdrop flex flex-col justify-center items-center`}
        >
          <div className="space-y-6 text-center">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={toggleMobileMenu} 
                className={`mobile-nav-item block text-gray-800 hover:text-indigo-600 px-8 py-4 rounded-2xl text-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 group
                            ${isMobileMenuOpen ? 'show' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <i className={`${link.icon} text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></i>
                  <span>{link.text}</span>
                </div>
              </a>
            ))}
          </div>
          
          {/* Close button */}
          <button 
            onClick={toggleMobileMenu} 
            className="absolute top-8 right-8 p-3 text-gray-500 hover:text-indigo-600 text-2xl rounded-full hover:bg-indigo-50 transition-all duration-300"
          >
            <i className="fas fa-times"></i>
          </button>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        
        {/* Enhanced Sidebar */}
        <div 
          className={`fixed top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200 transition-transform duration-500 ease-out z-50
                      ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quick Access
              </h3>
              <button 
                onClick={toggleSidebar}
                className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-300"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="p-6 space-y-6 overflow-y-auto h-full pb-20">
            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Navigation</h4>
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    onClick={toggleSidebar}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:scale-105
                                ${activeSection === link.href.slice(1) 
                                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border-l-4 border-indigo-600' 
                                  : 'text-gray-700 hover:text-indigo-600'
                                }`}
                  >
                    <i className={`${link.icon} mr-3 text-sm group-hover:scale-110 transition-transform duration-300`}></i>
                    <span className="font-medium">{link.text}</span>
                    <i className="fas fa-chevron-right ml-auto text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Actions */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group">
                  <i className="fas fa-download text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                  <p className="text-sm font-medium text-blue-700">Download CV</p>
                </button>
                <button className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-300 group">
                  <i className="fas fa-phone text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                  <p className="text-sm font-medium text-green-700">Call Me</p>
                </button>
                <button className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group">
                  <i className="fas fa-share-alt text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                  <p className="text-sm font-medium text-purple-700">Share</p>
                </button>
                <button className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg hover:from-pink-100 hover:to-pink-200 transition-all duration-300 group">
                  <i className="fas fa-bookmark text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300"></i>
                  <p className="text-sm font-medium text-pink-700">Bookmark</p>
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Connect With Me</h4>
              <div className="flex space-x-3">
                {[
                  { icon: 'fab fa-linkedin', color: 'text-blue-600', bg: 'hover:bg-blue-50' },
                  { icon: 'fab fa-github', color: 'text-gray-800', bg: 'hover:bg-gray-50' },
                  { icon: 'fab fa-twitter', color: 'text-blue-400', bg: 'hover:bg-blue-50' },
                  { icon: 'fab fa-instagram', color: 'text-pink-600', bg: 'hover:bg-pink-50' }
                ].map((social, index) => (
                  <button 
                    key={index}
                    className={`p-3 rounded-full ${social.bg} ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Theme Selector */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Theme</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Light', value: 'light', icon: 'fas fa-sun', color: 'text-yellow-500', bg: 'bg-yellow-50' },
                  { name: 'Dark', value: 'dark', icon: 'fas fa-moon', color: 'text-indigo-500', bg: 'bg-indigo-50' },
                  { name: 'Auto', value: 'auto', icon: 'fas fa-adjust', color: 'text-gray-500', bg: 'bg-gray-50' }
                ].map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => changeTheme(theme.value)}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 border-2
                                ${currentTheme === theme.value 
                                  ? `${theme.bg} border-current ${theme.color}` 
                                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                  >
                    <i className={`${theme.icon} text-lg mb-1`}></i>
                    <p className="text-xs font-medium">{theme.name}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Recent Activity */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { action: 'Updated Portfolio', time: '2 hours ago', icon: 'fas fa-code' },
                  { action: 'New Project Added', time: '1 day ago', icon: 'fas fa-plus-circle' },
                  { action: 'Skills Updated', time: '3 days ago', icon: 'fas fa-wrench' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <i className={`${activity.icon} text-indigo-600 text-xs`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar Backdrop */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={toggleSidebar}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;