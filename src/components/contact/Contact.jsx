import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  // State for form submission status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  // State for active input field
  const [activeField, setActiveField] = useState(null);
  
  // State for animated background particles
  const [particles, setParticles] = useState([]);
  
  // State for floating elements
  const [floatingElements, setFloatingElements] = useState([]);
  
  // Current time state for dynamic greeting
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Generate particles and floating elements for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 12 + 3,
          color: `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 255)}, 0.15)`,
          duration: Math.random() * 25 + 15
        });
      }
      setParticles(newParticles);
    };
    
    const generateFloatingElements = () => {
      const elements = [];
      const icons = ['💡', '🚀', '⭐', '💎', '🎨', '🔥', '✨', '💫'];
      for (let i = 0; i < 8; i++) {
        elements.push({
          id: i,
          icon: icons[i],
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 10
        });
      }
      setFloatingElements(elements);
    };
    
    generateParticles();
    generateFloatingElements();
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timeInterval);
  }, []);

  // Get dynamic greeting based on time
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning! ☀️";
    if (hour < 17) return "Good Afternoon! 🌤️";
    return "Good Evening! 🌙";
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle input focus
  const handleFocus = (field) => {
    setActiveField(field);
  };
  
  // Handle input blur
  const handleBlur = () => {
    setActiveField(null);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
      });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Enhanced Dynamic Animated Background Elements */}
      {particles.map(particle => (
        <motion.div 
          key={particle.id}
          className="absolute rounded-full opacity-40 filter blur-xl"
          style={{
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
          }}
          animate={{
            x: [0, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 150 - 75, 0],
            scale: [1, Math.random() * 0.8 + 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Floating Emoji Elements */}
      {floatingElements.map(element => (
        <motion.div 
          key={element.id}
          className="absolute text-2xl opacity-30 pointer-events-none select-none"
          style={{
            top: `${element.y}%`,
            left: `${element.x}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20 md:mb-24"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-4 font-medium"
          >
            {getGreeting()}
          </motion.p>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-6 text-gray-900 relative inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-600 animate-gradient-x">
              Let's Create Magic
            </span>
            <motion.div 
              className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 rounded-full"
              animate={{ 
                scaleX: [0.5, 1, 0.5],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              Ready to turn your wildest ideas into digital reality? 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're dreaming of the next breakthrough app, a stunning website that stops scrollers in their tracks, or a digital experience that makes people say "whoa" - I'm here to make it happen. Let's build something extraordinary together! ✨
            </p>
          </motion.div>
          
          {/* Animated Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mt-12 md:mt-16"
          >
            {[
              { number: "50+", label: "Projects Delivered", icon: "🚀" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24h", label: "Response Time", icon: "⚡" },
              { number: "3+", label: "Years Experience", icon: "💎" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Form Header Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
            
            <AnimatePresence mode="wait">
              {formStatus.submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="text-center py-20 space-y-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center shadow-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-5xl text-white"
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                      Message Sent! 🎉
                    </h3>
                    <p className="text-xl text-gray-700 font-medium">Thanks for reaching out!</p>
                    <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                      I've received your message and I'm excited about your project. I'll get back to you within 24 hours with some ideas! ⚡
                    </p>
                  </div>
                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setFormStatus({submitted: false, submitting: false, info: { error: false, msg: null }});
                        setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Send Another Message 📨
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                    >
                      Schedule a Call 📞
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 relative z-10" 
                  onSubmit={handleSubmit}
                >
                  <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
                      Start Your Project Journey 🚀
                    </h3>
                    <p className="text-gray-600 text-lg">Tell me about your vision and let's make it happen!</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <motion.div 
                      className={`group transition-all duration-300 ${activeField === 'name' ? 'transform -translate-y-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label htmlFor="name" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'name' ? 'text-blue-600' : 'text-gray-700'}`}>
                        What should I call you? ✨
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 ${activeField === 'name' ? 'text-blue-500' : 'text-gray-400'}`}>
                          <i className="fas fa-user text-lg"></i>
                        </div>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          required
                          className="form-input w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium text-black" 
                          placeholder="Your awesome name" 
                        />
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full ${activeField === 'name' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </motion.div>
                    
                    {/* Email Field */}
                    <motion.div 
                      className={`group transition-all duration-300 ${activeField === 'email' ? 'transform -translate-y-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label htmlFor="email" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'email' ? 'text-purple-600' : 'text-gray-700'}`}>
                        How can I reach you? 📧
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 ${activeField === 'email' ? 'text-purple-500' : 'text-gray-400'}`}>
                          <i className="fas fa-envelope text-lg"></i>
                        </div>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          className="form-input w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-pink-500 focus:ring-pink-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium text-black" 
                          placeholder="your@email.com" 
                        />
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full ${activeField === 'email' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Budget Field */}
                    <motion.div 
                      className={`group transition-all duration-300 ${activeField === 'budget' ? 'transform -translate-y-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label htmlFor="budget" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'budget' ? 'text-green-600' : 'text-gray-700'}`}>
                        Project Budget Range 💰
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 ${activeField === 'budget' ? 'text-green-500' : 'text-gray-400'}`}>
                          <i className="fas fa-dollar-sign text-lg"></i>
                        </div>
                        <select 
                          id="budget" 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          onFocus={() => handleFocus('budget')}
                          onBlur={handleBlur}
                          required
                          className="form-select w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-green-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium text-black appearance-none"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000 💡</option>
                          <option value="5k-15k">$5,000 - $15,000 🚀</option>
                          <option value="15k-50k">$15,000 - $50,000 💎</option>
                          <option value="50k-plus">$50,000+ 🏆</option>
                          <option value="lets-discuss">Let's discuss! 💬</option>
                        </select>
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 rounded-full ${activeField === 'budget' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </motion.div>
                    
                    {/* Timeline Field */}
                    <motion.div 
                      className={`group transition-all duration-300 ${activeField === 'timeline' ? 'transform -translate-y-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <label htmlFor="timeline" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'timeline' ? 'text-orange-600' : 'text-gray-700'}`}>
                        When do you need this? ⏰
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 ${activeField === 'timeline' ? 'text-orange-500' : 'text-gray-400'}`}>
                          <i className="fas fa-clock text-lg"></i>
                        </div>
                        <select 
                          id="timeline" 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          onFocus={() => handleFocus('timeline')}
                          onBlur={handleBlur}
                          required
                          className="form-select w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium text-black appearance-none"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP - Rush job ⚡</option>
                          <option value="1-month">Within 1 month 📅</option>
                          <option value="2-3-months">2-3 months 📈</option>
                          <option value="3-6-months">3-6 months 🎯</option>
                          <option value="flexible">I'm flexible 🤝</option>
                        </select>
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 rounded-full ${activeField === 'timeline' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Subject Field */}
                  <motion.div 
                    className={`group transition-all duration-300 ${activeField === 'subject' ? 'transform -translate-y-2' : ''}`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="subject" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'subject' ? 'text-pink-600' : 'text-gray-700'}`}>
                      What's your project about? 🎯
                    </label>
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 ${activeField === 'subject' ? 'text-pink-500' : 'text-gray-400'}`}>
                        <i className="fas fa-lightbulb text-lg"></i>
                      </div>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className="form-input w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-pink-500 focus:ring-pink-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium" 
                        placeholder="E.g., Revolutionary App Idea, Dream Website, etc." 
                      />
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-300 rounded-full ${activeField === 'subject' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </motion.div>
                  
                  {/* Message Field */}
                  <motion.div 
                    className={`group transition-all duration-300 ${activeField === 'message' ? 'transform -translate-y-2' : ''}`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="message" className={`block text-sm font-semibold mb-3 transition-colors duration-200 ${activeField === 'message' ? 'text-indigo-600' : 'text-gray-700'}`}>
                      Tell me your vision! 💭
                    </label>
                    <div className="relative">
                      <div className={`absolute top-5 left-0 pl-5 flex items-start pointer-events-none transition-colors duration-300 ${activeField === 'message' ? 'text-indigo-500' : 'text-gray-400'}`}>
                        <i className="fas fa-comments text-lg"></i>
                      </div>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        rows="6" 
                        required
                        className="form-textarea w-full pl-14 pr-5 py-5 rounded-2xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 shadow-lg transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg font-medium text-black resize-none" 
                        placeholder="Describe your dream project in detail... What problems are you solving? Who's your target audience? What makes you excited about this idea? The more details, the better I can help! ✨"
                      ></textarea>
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 rounded-full ${activeField === 'message' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </motion.div>
                  
                  {/* Submit Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={formStatus.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-600 text-white px-10 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center space-x-3 relative overflow-hidden group disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 via-pink-600/50 to-orange-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></span>
                    {formStatus.submitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3">
                        <span>Let's Make Magic Together</span>
                        <i className="fas fa-paper-plane text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 relative inline-block">
                Let's Connect
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-2xl text-white">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:hello@yourportfolio.com" className="text-blue-600 hover:text-purple-600 transition-colors duration-300 font-medium">hello@yourportfolio.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl text-white">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">San Francisco, California</p>
                    <p className="text-gray-500 text-sm mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-3 rounded-2xl text-white">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Availability</h4>
                    <p className="text-gray-600">Response within 24 hours</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri: 9am - 6pm PST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-6 relative inline-block">
                Follow Me
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                {[
                  { icon: "fab fa-github", color: "from-gray-700 to-gray-900", label: "GitHub" },
                  { icon: "fab fa-twitter", color: "from-blue-400 to-blue-600", label: "Twitter" },
                  { icon: "fab fa-linkedin", color: "from-blue-600 to-blue-800", label: "LinkedIn" },
                  { icon: "fab fa-dribbble", color: "from-pink-500 to-pink-700", label: "Dribbble" },
                  { icon: "fab fa-instagram", color: "from-purple-500 via-pink-500 to-orange-500", label: "Instagram" },
                  { icon: "fab fa-behance", color: "from-blue-800 to-blue-900", label: "Behance" },
                  { icon: "fab fa-medium", color: "from-gray-800 to-black", label: "Medium" },
                  { icon: "fab fa-youtube", color: "from-red-500 to-red-700", label: "YouTube" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <i className={`${social.icon} text-2xl mb-2`}></i>
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;