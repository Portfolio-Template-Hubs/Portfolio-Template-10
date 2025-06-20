import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription process
      setTimeout(() => {
        setSubscribed(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <footer className={`py-16 md:py-20 relative overflow-hidden ${
      isDark 
        ? "bg-black" 
        : "bg-gradient-to-b from-gray-50 to-gray-100"
    }`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      {isDark ? (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
          {/* Dark theme glow effects */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-purple-900 to-indigo-900"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-indigo-900 to-purple-900"></div>
        </>
      ) : (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className={`p-6 md:p-10 rounded-2xl mb-16 transform hover:-translate-y-1 transition-all duration-300 ${
          isDark 
            ? "bg-black border border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.7)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] hover:border-purple-800" 
            : "bg-white shadow-xl border border-gray-200 hover:shadow-2xl"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}>
                <span className={`text-transparent bg-clip-text ${
                  isDark 
                    ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400" 
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                }`}>Stay Updated</span>
              </h3>
              <p className={`mb-0 md:pr-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Subscribe to my newsletter for the latest updates on projects, tech insights, and exclusive content.
              </p>
            </div>
            <div className="lg:col-span-2">
              {subscribed ? (
                <div className={`p-4 rounded-lg flex items-center ${
                  isDark 
                    ? "bg-green-900/20 border border-green-800" 
                    : "bg-green-50 border border-green-100"
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    isDark ? "bg-green-900/50" : "bg-green-100"
                  }`}>
                    <i className={`fas fa-check ${isDark ? "text-green-400" : "text-green-500"}`}></i>
                  </div>
                  <p className={`font-medium m-0 ${isDark ? "text-green-400" : "text-green-800"}`}>
                    Thanks for subscribing!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className={`fas fa-envelope ${isDark ? "text-gray-500" : "text-gray-400"}`}></i>
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`form-input w-full pl-10 pr-4 py-3 rounded-l-lg shadow-sm ${
                        isDark 
                          ? "bg-gray-900 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500" 
                          : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      }`}
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`text-white px-6 py-3 rounded-r-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center group ${
                      isDark 
                        ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-700 hover:via-indigo-700 hover:to-pink-700 shadow-[0_4px_20px_rgba(139,92,246,0.5)]" 
                        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                      }`}
                  >
                    <span>Subscribe</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text ${
              isDark 
                ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400" 
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            }`}>
              Alex Chen
            </div>
            <p className={`text-sm md:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Crafting beautiful digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? "bg-gray-900 text-gray-400 hover:bg-indigo-900/50 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]" 
                  : "bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"
              }`}>
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? "bg-gray-900 text-gray-400 hover:bg-purple-900/50 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                  : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
              }`}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? "bg-gray-900 text-gray-400 hover:bg-pink-900/50 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                  : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-500"
              }`}>
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? "bg-gray-900 text-gray-400 hover:bg-blue-900/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-500"
              }`}>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 relative inline-block ${isDark ? "text-white" : "text-gray-800"}`}>
              Quick Links
              <div className={`absolute -bottom-1 left-0 w-1/2 h-0.5 rounded-full ${
                isDark 
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500" 
                  : "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Projects</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 relative inline-block ${isDark ? "text-white" : "text-gray-800"}`}>
              More
              <div className={`absolute -bottom-1 left-0 w-1/2 h-0.5 rounded-full ${
                isDark 
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500" 
                  : "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#testimonials" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-300 flex items-center group ${
                  isDark 
                    ? "text-gray-400 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}>
                  <i className={`fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300 ${
                    isDark ? "text-indigo-500" : "text-indigo-400"
                  }`}></i>
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 relative inline-block ${isDark ? "text-white" : "text-gray-800"}`}>
              Contact Info
              <div className={`absolute -bottom-1 left-0 w-1/2 h-0.5 rounded-full ${
                isDark 
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500" 
                  : "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}></div>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mr-3 mt-0.5 ${
                  isDark 
                    ? "bg-indigo-900/30 shadow-[0_0_10px_rgba(79,70,229,0.3)]" 
                    : "bg-indigo-100"
                }`}>
                  <i className={`fas fa-envelope text-sm ${
                    isDark ? "text-indigo-400" : "text-indigo-500"
                  }`}></i>
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>alex.chen.dev@email.com</span>
              </li>
              <li className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mr-3 mt-0.5 ${
                  isDark 
                    ? "bg-indigo-900/30 shadow-[0_0_10px_rgba(79,70,229,0.3)]" 
                    : "bg-indigo-100"
                }`}>
                  <i className={`fas fa-phone-alt text-sm ${
                    isDark ? "text-indigo-400" : "text-indigo-500"
                  }`}></i>
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center mr-3 mt-0.5 ${
                  isDark 
                    ? "bg-indigo-900/30 shadow-[0_0_10px_rgba(79,70,229,0.3)]" 
                    : "bg-indigo-100"
                }`}>
                  <i className={`fas fa-map-marker-alt text-sm ${
                    isDark ? "text-indigo-400" : "text-indigo-500"
                  }`}></i>
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>Innovate Hub, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className={`pt-8 md:pt-10 text-center ${
          isDark ? "border-t border-gray-800" : "border-t border-gray-200"
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm mb-4 md:mb-0 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              &copy; {new Date().getFullYear()} 
              <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? "bg-gradient-to-r from-purple-400 to-indigo-400" 
                  : "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}>Alex Chen</span>. 
              Crafted with 
              <i className={`fas fa-heart mx-1 animate-pulse ${
                isDark ? "text-pink-400" : "text-pink-500"
              }`}></i> 
              and code. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`transition-colors duration-300 text-sm ${
                isDark 
                  ? "text-gray-500 hover:text-indigo-400" 
                  : "text-gray-400 hover:text-indigo-500"
              }`}>Privacy Policy</a>
              <span className={isDark ? "text-gray-700" : "text-gray-300"}>|</span>
              <a href="#" className={`transition-colors duration-300 text-sm ${
                isDark 
                  ? "text-gray-500 hover:text-indigo-400" 
                  : "text-gray-400 hover:text-indigo-500"
              }`}>Terms of Service</a>
              <span className={isDark ? "text-gray-700" : "text-gray-300"}>|</span>
              <a href="#" className={`transition-colors duration-300 text-sm ${
                isDark 
                  ? "text-gray-500 hover:text-indigo-400" 
                  : "text-gray-400 hover:text-indigo-500"
              }`}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;