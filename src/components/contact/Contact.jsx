import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle Animated Background Elements for White Theme */}
      <div className="blob w-96 h-96 bg-indigo-100 absolute -top-40 -right-40 opacity-30 rounded-full filter blur-2xl animation-delay-500"></div>
      <div className="blob w-96 h-96 bg-purple-100 absolute -bottom-40 -left-40 opacity-30 rounded-full filter blur-2xl animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto text-md md:text-lg">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input type="text" id="name" className="form-input w-full px-4 py-2.5 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" id="email" className="form-input w-full px-4 py-2.5 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input type="text" id="subject" className="form-input w-full px-4 py-2.5 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="Project inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea id="message" rows="4" className="form-input w-full px-4 py-2.5 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-md">
                Send Message
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
          
          {/* Contact Info & Social Links Combined */} 
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">Direct Contact Details</span>
              </h3>
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-center space-x-4 group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-md md:text-lg text-gray-700 group-hover/item:text-indigo-600 transition-colors">Email Address</h4>
                    <a href="mailto:alex.chen.dev@email.com" className="text-sm text-purple-600 hover:text-purple-700 transition-colors">alex.chen.dev@email.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                    <i className="fas fa-phone-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-md md:text-lg text-gray-700 group-hover/item:text-indigo-600 transition-colors">Phone Number</h4>
                    <a href="tel:+15551234567" className="text-sm text-purple-600 hover:text-purple-700 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group/item">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-md md:text-lg text-gray-700 group-hover/item:text-indigo-600 transition-colors">Current Location</h4>
                    <p className="text-sm text-gray-500">Innovate Hub, Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">Connect on Social Media</span>
              </h3>
              <div className="flex space-x-5 md:space-x-6 justify-center">
                <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-github fa-2x md:fa-3x"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-linkedin-in fa-2x md:fa-3x"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-dribbble fa-2x md:fa-3x"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-twitter fa-2x md:fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;