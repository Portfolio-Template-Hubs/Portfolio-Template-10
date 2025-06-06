import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        
        .slide-down {
          animation: slideDown 0.3s ease-out;
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
      </nav>
    </>
  );
};

export default Navbar;