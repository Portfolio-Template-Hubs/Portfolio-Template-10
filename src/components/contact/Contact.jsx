import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

// Add Contact-specific dark theme styles
const ContactStyles = () => (
  <style jsx>{`
    /* Contact Dark Theme Enhancement Styles */
    [data-theme="dark"] #contact {
      background: linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #111121 50%, #0a0a0f 75%, #000000 100%) !important;
    }
    
    /* Enhanced floating particles for Contact section */
    [data-theme="dark"] .contact-floating-particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: linear-gradient(45deg, #8b5cf6, #ec4899);
      border-radius: 50%;
      opacity: 0.8;
      animation: contactFloatEnhanced 8s infinite ease-in-out;
      pointer-events: none;
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
    }
    
    @keyframes contactFloatEnhanced {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
        opacity: 0.8; 
      }
      25% { 
        transform: translateY(-60px) translateX(40px) rotate(90deg) scale(1.2); 
        opacity: 1; 
      }
      50% { 
        transform: translateY(-120px) translateX(-30px) rotate(180deg) scale(0.8); 
        opacity: 0.6; 
      }
      75% { 
        transform: translateY(-60px) translateX(-50px) rotate(270deg) scale(1.1); 
        opacity: 0.9; 
      }
    }
    
    /* Enhanced background glows for Contact section */
    [data-theme="dark"] .contact-dark-glow-1 {
      animation: contactGlow1Enhanced 12s ease-in-out infinite alternate;
    }
    
    [data-theme="dark"] .contact-dark-glow-2 {
      animation: contactGlow2Enhanced 14s ease-in-out infinite alternate;
    }
    
    [data-theme="dark"] .contact-dark-glow-3 {
      animation: contactGlow3Enhanced 16s ease-in-out infinite alternate;
    }
    
    @keyframes contactGlow1Enhanced {
      0%, 100% { 
        transform: translateX(0px) translateY(0px) scale(1) rotate(0deg); 
        opacity: 0.5; 
      }
      50% { 
        transform: translateX(50px) translateY(-30px) scale(1.2) rotate(180deg); 
        opacity: 0.8; 
      }
    }
    
    @keyframes contactGlow2Enhanced {
      0%, 100% { 
        transform: translateX(0px) translateY(0px) scale(1) rotate(0deg); 
        opacity: 0.6; 
      }
      50% { 
        transform: translateX(-40px) translateY(40px) scale(1.1) rotate(-180deg); 
        opacity: 0.9; 
      }
    }
    
    @keyframes contactGlow3Enhanced {
      0%, 100% { 
        transform: translateX(0px) translateY(0px) scale(1) rotate(0deg); 
        opacity: 0.4; 
      }
      50% { 
        transform: translateX(30px) translateY(-50px) scale(0.9) rotate(360deg); 
        opacity: 0.7; 
      }
    }
    
    /* Contact form card enhancements */
    [data-theme="dark"] .contact-form-container-dark {
      background: rgba(0, 0, 0, 0.95) !important;
      border: 1px solid rgba(139, 92, 246, 0.3) !important;
      backdrop-filter: blur(30px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    [data-theme="dark"] .contact-form-container-dark:hover {
      background: rgba(0, 0, 0, 0.98) !important;
      border-color: rgba(139, 92, 246, 0.5) !important;
      box-shadow: 0 35px 70px rgba(0, 0, 0, 0.8), 0 0 60px rgba(139, 92, 246, 0.2);
    }
    
    /* Contact stat cards */
    [data-theme="dark"] .contact-stat-card-dark {
      background: rgba(0, 0, 0, 0.9) !important;
      border: 1px solid rgba(139, 92, 246, 0.3) !important;
      backdrop-filter: blur(25px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    [data-theme="dark"] .contact-stat-card-dark:hover {
      background: rgba(0, 0, 0, 0.98) !important;
      border-color: rgba(139, 92, 246, 0.5) !important;
      box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3) !important;
      transform: scale(1.05) translateY(-8px) !important;
    }
    
    /* Contact form field enhancements for dark theme */
    [data-theme="dark"] .form-input:focus,
    [data-theme="dark"] .form-select:focus,
    [data-theme="dark"] .form-textarea:focus {
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2), 0 0 30px rgba(139, 92, 246, 0.3) !important;
    }
    
    /* Enhanced gradient text for Contact */
    [data-theme="dark"] .contact-gradient-text-dark {
      background: linear-gradient(135deg, #ffffff 0%, #8b5cf6 20%, #a855f7 40%, #ec4899 60%, #06b6d4 80%, #ffffff 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: contactTextShineEnhanced 4s ease-in-out infinite;
    }
    
    @keyframes contactTextShineEnhanced {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Contact submit button enhancement */
    [data-theme="dark"] form button[type="submit"] {
      background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #ec4899 50%, #06b6d4 75%, #8b5cf6 100%) !important;
      background-size: 300% 300% !important;
      animation: contactButtonGradientEnhanced 4s ease infinite !important;
      box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.2) !important;
    }
    
    [data-theme="dark"] form button[type="submit"]:hover {
      box-shadow: 0 20px 50px rgba(139, 92, 246, 0.6), 0 0 70px rgba(139, 92, 246, 0.4) !important;
      transform: translateY(-6px) scale(1.02) !important;
    }
    
    @keyframes contactButtonGradientEnhanced {
      0%, 100% { background-position: 0% 50%; }
      33% { background-position: 50% 0%; }
      66% { background-position: 100% 50%; }
    }
    
    /* Contact section pure black override */
    [data-theme="dark"] #contact {
      background: #000000 !important;
    }
    
    /* Contact radial gradient overlay for depth */
    [data-theme="dark"] .contact-dark-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 60%),
                  radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 60%),
                  radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 60%);
      pointer-events: none;
      z-index: 1;
    }
  `}</style>
);

const Contact = () => {
  const { isDark } = useTheme();
  
  // Enhanced form state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [activeField, setActiveField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  
  // Time updates
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  
  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 6) return { text: "Working Late? Let's Chat! 🌙", icon: "🌙", color: "from-purple-400 to-blue-400" };
    if (hour < 12) return { text: "Good Morning! Ready to Create? ☀️", icon: "☀️", color: "from-yellow-400 to-orange-400" };
    if (hour < 17) return { text: "Good Afternoon! Let's Build! 🌤️", icon: "🌤️", color: "from-blue-400 to-cyan-400" };
    if (hour < 21) return { text: "Good Evening! Still Dreaming? 🌅", icon: "🌅", color: "from-orange-400 to-pink-400" };
    return { text: "Night Owl? Perfect Time to Plan! 🦉", icon: "🦉", color: "from-indigo-400 to-purple-400" };
  };
  
  const greeting = getTimeBasedGreeting();
  
  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, success: false, error: null });
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ submitted: true, submitting: false, success: true, error: null });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', service: '', message: '', budget: '', timeline: '' });
        setFormStatus({ submitted: false, submitting: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };


  return (
    <>
      <ContactStyles />
      <section 
        id="contact" 
        className={`min-h-screen py-20 relative overflow-hidden ${
          isDark 
            ? 'bg-black contact-dark-bg' 
            : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50'
        }`}
      >
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isDark 
                ? 'bg-black/80 text-violet-300 border border-violet-500/30 backdrop-blur-xl contact-greeting-dark' 
                : 'bg-purple-100 text-purple-700 border border-purple-200'
            }`}>
              {greeting.icon} {greeting.text}
            </span>
          </div>
          
          <h1 
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${
              isDark ? 'text-white contact-title-dark' : 'text-gray-900'
            }`}
          >
            Let's Create
            <br />
            <span className={`text-transparent bg-clip-text ${
              isDark 
                ? 'bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 contact-gradient-text-dark'
                : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
            }`}>
              Something Epic
            </span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300 contact-description-primary-dark' : 'text-gray-600'
            }`}
          >
            Ready to transform your wildest ideas into stunning digital experiences? 
            Let's collaborate and build something that makes people say "WOW!" 🚀
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {[
              { icon: "⚡", label: "24h Response", value: "Guaranteed" },
              { icon: "🎯", label: "Projects Completed", value: "50+" },
              { icon: "⭐", label: "Client Satisfaction", value: "100%" },
              { icon: "🌍", label: "Global Reach", value: "Worldwide" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl backdrop-blur-sm border ${
                  isDark 
                    ? 'bg-black/60 border-violet-500/20 hover:bg-black/80 contact-stat-card-dark' 
                    : 'bg-white/60 border-white/20 hover:bg-white/80'
                } transition-all duration-300`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-lg font-bold ${
                  isDark ? 'text-white contact-stat-number-dark' : 'text-gray-800'
                }`}>{stat.value}</div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-300 contact-stat-label-dark' : 'text-gray-600'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-xl border shadow-2xl ${
              isDark 
                ? 'bg-black/90 border-violet-500/30 contact-form-container-dark' 
                : 'bg-white/70 border-white/20'
            }`}>
              {formStatus.success ? (
                  <div
                    className="text-center py-12"
                  >
                    <div
                      className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center mb-8"
                    >
                      <span className="text-4xl text-white">✨</span>
                    </div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className={`text-lg mb-8 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Thanks for reaching out! I'll get back to you within 24 hours with some exciting ideas.
                    </p>
                    <button
                      onClick={() => setFormStatus({ submitted: false, submitting: false, success: false, error: null })}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Send Another Message 📨
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                    <h3 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-4 ${
                      isDark 
                        ? 'bg-gradient-to-r from-violet-400 to-pink-400'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                        Start Your Journey 🚀
                      </h3>
                      <p className={`text-lg ${
                        isDark ? 'text-gray-300 contact-description-secondary-dark' : 'text-gray-600'
                      }`}>
                        Tell me about your vision and let's make magic happen!
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="group">
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          What should I call you? ✨
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setActiveField('name')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg form-input ${
                              isDark 
                                ? 'bg-black/80 border-violet-500/30 text-white placeholder-gray-400 focus:border-violet-500 focus:bg-black/90' 
                                : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-white'
                            } ${activeField === 'name' ? 'scale-105' : ''}`}
                            placeholder="Your awesome name"
                            required
                          />
                          <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 rounded ${
                            isDark 
                              ? 'bg-gradient-to-r from-violet-500 to-pink-500' 
                              : 'bg-gradient-to-r from-purple-500 to-pink-500'
                          } ${activeField === 'name' ? 'w-full' : 'w-0'}`} />
                        </div>
                      </div>
                      
                      {/* Email Field */}
                      <div className="group">
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          How can I reach you? 📧
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg form-input ${
                              isDark 
                                ? 'bg-black/80 border-violet-500/30 text-white placeholder-gray-400 focus:border-pink-500 focus:bg-black/90' 
                                : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:bg-white'
                            } ${activeField === 'email' ? 'scale-105' : ''}`}
                            placeholder="your@email.com"
                            required
                          />
                          <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 rounded ${
                            isDark 
                              ? 'bg-gradient-to-r from-pink-500 to-orange-500' 
                              : 'bg-gradient-to-r from-pink-500 to-orange-500'
                          } ${activeField === 'email' ? 'w-full' : 'w-0'}`} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Service Field */}
                      <div className="group">
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          What do you need? 🎯
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('service')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg form-select ${
                            isDark 
                              ? 'bg-black/80 border-violet-500/30 text-white focus:border-cyan-500 focus:bg-black/90' 
                              : 'bg-white/80 border-gray-200 text-gray-900 focus:border-cyan-500 focus:bg-white'
                          } ${activeField === 'service' ? 'scale-105' : ''}`}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web-app">Web Application 💻</option>
                          <option value="mobile-app">Mobile App 📱</option>
                          <option value="website">Website Design 🎨</option>
                          <option value="ecommerce">E-commerce Store 🛒</option>
                          <option value="consultation">Consultation 💡</option>
                          <option value="other">Something Else 🚀</option>
                        </select>
                      </div>
                      
                      {/* Budget Field */}
                      <div className="group">
                        <label className={`block text-sm font-medium mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          What's your budget? 💰
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('budget')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg form-select ${
                            isDark 
                              ? 'bg-black/80 border-violet-500/30 text-white focus:border-green-500 focus:bg-black/90' 
                              : 'bg-white/80 border-gray-200 text-gray-900 focus:border-green-500 focus:bg-white'
                          } ${activeField === 'budget' ? 'scale-105' : ''}`}
                          required
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000 💡</option>
                          <option value="5k-15k">$5,000 - $15,000 🚀</option>
                          <option value="15k-50k">$15,000 - $50,000 💎</option>
                          <option value="50k-plus">$50,000+ 🏆</option>
                          <option value="discuss">Let's discuss! 💬</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Message Field */}
                    <div className="group relative">
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Tell me about your vision! 💭
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        rows={6}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg resize-none form-textarea ${
                          isDark 
                            ? 'bg-black/80 border-violet-500/30 text-white placeholder-gray-400 focus:border-indigo-500 focus:bg-black/90' 
                            : 'bg-white/80 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white'
                        } ${activeField === 'message' ? 'scale-105' : ''}`}
                        placeholder="Describe your dream project in detail... What problems are you solving? Who's your target audience? What makes you excited about this idea? The more details, the better I can help! ✨"
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 rounded ${
                        isDark 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                          : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                      } ${activeField === 'message' ? 'w-full' : 'w-0'}`} />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-6 text-white text-xl font-bold rounded-xl transition-all duration-300 hover:shadow-2xl disabled:opacity-70 relative overflow-hidden group ${
                        isDark 
                          ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-500 hover:via-purple-500 hover:to-pink-500' 
                          : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {formStatus.submitting ? (
                          <>
                            <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending Magic...</span>
                          </>
                        ) : (
                          <>
                            <span>Let's Create Magic Together</span>
                            <span>🚀</span>
                          </>
                        )}
                      </span>
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-r from-violet-700 via-purple-700 to-pink-700' 
                          : 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600'
                      }`} />
                    </button>
                  </form>
                )}
            </div>
          </div>
          
          {/* Contact Information & Social */}
          <div className="h-full">
            <div 
              className={`h-full p-8 md:p-12 rounded-3xl backdrop-blur-xl border shadow-2xl flex flex-col ${
                isDark 
                  ? 'bg-black/90 border-violet-500/30 contact-form-container-dark' 
                  : 'bg-white/70 border-white/20'
              }`}
            >
              {/* Contact Info Section */}
              <div className="mb-8">
                <h3 className={`text-3xl font-bold text-transparent bg-clip-text mb-6 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                }`}>
                  💬 Let's Connect
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: "📧",
                      title: "Email Me",
                      content: "hello@yourportfolio.com",
                      subtitle: "24h response guaranteed",
                      gradient: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: "📍",
                      title: "Location",
                      content: "San Francisco, CA",
                      subtitle: "Available worldwide remotely",
                      gradient: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: "⚡",
                      title: "Availability",
                      content: "Ready to start!",
                      subtitle: "Mon-Fri, 9am-6pm PST",
                      gradient: "from-orange-500 to-red-500"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-300 group ${
                        isDark ? 'hover:bg-black/50' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-base mb-1 ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>{item.title}</h4>
                        <p className={`font-medium mb-1 text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{item.content}</p>
                        <p className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text mb-4 ${
                  isDark 
                    ? 'bg-gradient-to-r from-pink-400 to-orange-400' 
                    : 'bg-gradient-to-r from-pink-500 to-orange-500'
                }`}>
                  🌟 Follow My Journey
                </h3>
                
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    { name: "GitHub", icon: "fab fa-github", color: "from-gray-700 to-gray-900", url: "#" },
                    { name: "Twitter", icon: "fab fa-twitter", color: "from-blue-400 to-blue-600", url: "#" },
                    { name: "LinkedIn", icon: "fab fa-linkedin", color: "from-blue-600 to-blue-800", url: "#" },
                    { name: "Dribbble", icon: "fab fa-dribbble", color: "from-pink-500 to-pink-700", url: "#" },
                    { name: "Instagram", icon: "fab fa-instagram", color: "from-purple-500 via-pink-500 to-orange-500", url: "#" },
                    { name: "Behance", icon: "fab fa-behance", color: "from-blue-800 to-indigo-900", url: "#" },
                    { name: "Medium", icon: "fab fa-medium", color: "from-gray-800 to-black", url: "#" },
                    { name: "YouTube", icon: "fab fa-youtube", color: "from-red-500 to-red-700", url: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      onMouseEnter={() => setHoveredSocial(index)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className={`group relative p-4 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center overflow-hidden ${
                        isDark 
                          ? `bg-gradient-to-br ${social.color} hover:shadow-violet-500/25` 
                          : `bg-gradient-to-br ${social.color}`
                      }`}
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      <i 
                        className={`${social.icon} text-lg mb-1 relative z-10`}
                      />
                      <span className="text-xs font-bold relative z-10">{social.name}</span>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 ${
                        isDark ? 'group-hover:opacity-70' : 'group-hover:opacity-50'
                      }`} />
                    </a>
                  ))}
                </div>
                
                {/* Bottom CTA - pushed to bottom */}
                <div className="mt-auto pt-6 text-center border-t border-gray-200/20">
                  <p 
                    className={`text-base font-medium mb-4 ${
                      isDark ? 'text-gray-300 contact-description-primary-dark' : 'text-gray-600'
                    }`}
                  >
                    ✨ Ready to build something extraordinary? ✨
                  </p>
                  <button 
                    className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg ${
                      isDark 
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 hover:shadow-violet-500/25' 
                        : 'bg-gradient-to-r from-pink-500 to-orange-500'
                    }`}
                  >
                    <span>Join the Adventure</span>
                    <span>🚀</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;