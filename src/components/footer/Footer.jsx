import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-10">
          <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Alex Chen
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">Projects</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm md:text-base">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 md:mt-10 pt-8 md:pt-10 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Alex Chen. Crafted with <i className="fas fa-heart text-indigo-500"></i> and code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;