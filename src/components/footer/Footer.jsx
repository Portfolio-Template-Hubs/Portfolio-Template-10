import React, { useState } from 'react';

const Footer = () => {
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
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 mb-16 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Stay Updated</span>
              </h3>
              <p className="text-gray-600 mb-0 md:pr-10">Subscribe to my newsletter for the latest updates on projects, tech insights, and exclusive content.</p>
            </div>
            <div className="lg:col-span-2">
              {subscribed ? (
                <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-check text-green-500"></i>
                  </div>
                  <p className="text-green-800 font-medium m-0">Thanks for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-gray-400"></i>
                    </div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full pl-10 pr-4 py-3 rounded-l-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" 
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md flex items-center justify-center group"
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
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Alex Chen
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Crafting beautiful digital experiences with passion and precision. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Projects</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              More
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group">
                  <i className="fas fa-chevron-right text-xs mr-2 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
              Contact Info
              <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <i className="fas fa-envelope text-indigo-500 text-sm"></i>
                </div>
                <span className="text-gray-600">alex.chen.dev@email.com</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <i className="fas fa-phone-alt text-indigo-500 text-sm"></i>
                </div>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <i className="fas fa-map-marker-alt text-indigo-500 text-sm"></i>
                </div>
                <span className="text-gray-600">Innovate Hub, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 md:pt-10 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Alex Chen</span>. Crafted with <i className="fas fa-heart text-pink-500 mx-1 animate-pulse"></i> and code. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 text-sm">Privacy Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 text-sm">Terms of Service</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-300 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;