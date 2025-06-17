import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "UI/UX Enthusiast", 
    "Creative Problem Solver",
    "Digital Innovator"
  ];

  useEffect(() => {
    const homeElement = heroRef.current;
    if (homeElement) {
      // Clear existing particles
      const existingParticles = homeElement.querySelectorAll('.particle');
      existingParticles.forEach(p => p.remove());

      // Create subtle floating particles
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        
        // Subtle particle colors
        const colors = [
          'rgba(99, 102, 241, 0.3)',
          'rgba(139, 92, 246, 0.3)',
          'rgba(236, 72, 153, 0.3)',
          'rgba(59, 130, 246, 0.3)',
          'rgba(168, 85, 247, 0.3)',
          'rgba(14, 165, 233, 0.3)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.filter = 'blur(0.5px)';
        homeElement.appendChild(particle);
      }

      // Mouse move effect
      const handleMouseMove = (e) => {
        const rect = homeElement.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      };

      homeElement.addEventListener('mousemove', handleMouseMove);
      
      // Trigger load animation
      setTimeout(() => setIsLoaded(true), 100);

      return () => {
        homeElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .particle {
          position: absolute;
          pointer-events: none;
          animation: float 15s infinite linear;
        }
        
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg) scale(0); opacity: 0; }
          10% { opacity: 1; transform: translateY(90vh) rotate(36deg) scale(1); }
          90% { opacity: 1; transform: translateY(-10vh) rotate(324deg) scale(1); }
          100% { transform: translateY(-20vh) rotate(360deg) scale(0); opacity: 0; }
        }
        
        .blob {
          animation: blob-float 12s ease-in-out infinite;
        }
        
        @keyframes blob-float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(20px, -20px) scale(1.05) rotate(45deg); }
          50% { transform: translate(-15px, 15px) scale(0.95) rotate(90deg); }
          75% { transform: translate(25px, 10px) scale(1.02) rotate(135deg); }
        }
        
        .floating-elements {
          animation: gentle-float 6s ease-in-out infinite;
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 8px 32px var(--shadow-color);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: var(--bg-secondary);
          border-color: var(--border-primary);
          box-shadow: 0 12px 40px var(--shadow-color);
          transform: translateY(-2px);
        }
        
        /* Dark theme glass cards - Enhanced with glow effects */
        [data-theme="dark"] .glass-card {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(138, 43, 226, 0.5);
          box-shadow: 
            0 8px 32px rgba(138, 43, 226, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
        }
        
        [data-theme="dark"] .glass-card:hover {
          background: rgba(138, 43, 226, 0.15);
          border-color: rgba(255, 105, 180, 0.7);
          box-shadow: 
            0 15px 60px rgba(138, 43, 226, 0.6),
            0 0 30px rgba(255, 105, 180, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .animate-in {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .aurora {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.02),
            rgba(139, 92, 246, 0.02),
            rgba(236, 72, 153, 0.02),
            rgba(59, 130, 246, 0.02)
          );
          background-size: 400% 400%;
          animation: aurora 15s ease-in-out infinite;
        }
        
        /* Dark theme aurora effect - Subtle on black background */
        [data-theme="dark"] .aurora {
          background: linear-gradient(
            45deg,
            rgba(138, 43, 226, 0.08) 0%,
            rgba(255, 105, 180, 0.06) 20%,
            rgba(103, 58, 183, 0.10) 40%,
            rgba(233, 30, 99, 0.05) 60%,
            rgba(156, 39, 176, 0.08) 80%,
            rgba(75, 0, 130, 0.06) 100%
          );
          background-size: 600% 600%;
          animation: aurora 12s ease-in-out infinite;
          opacity: 0.4;
          z-index: 2;
        }
        
        @keyframes aurora {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .magnetic-effect {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .magnetic-effect:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899) border-box;
          border: 2px solid transparent;
          border-radius: 50%;
        }
        
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        
        .btn-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }
        
        .btn-shine:hover::before {
          left: 100%;
        }
        
        .social-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-hover:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .profile-glow {
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3);
          animation: profile-pulse 3s infinite;
        }
        
        @keyframes profile-pulse {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
          70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        
        .text-rotation {
          animation: textFade 3s ease-in-out infinite;
        }
        
        @keyframes textFade {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-3px); }
        }

        .skill-tag {
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .decorative-grid {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        /* Dark theme decorative grid */
        [data-theme="dark"] .decorative-grid {
          background-image: 
            linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 105, 180, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        
        /* Hero section backgrounds */
        .hero-section {
          background: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #fafbff 50%, #f8fafc 100%);
        }
        
        /* Dark theme hero background - Pure black with subtle colorful accents */
        [data-theme="dark"] .hero-section {
          background: #000000 !important;
          position: relative;
        }
        
        /* Add colorful accents as pseudo-elements */
        [data-theme="dark"] .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 15% 25%, rgba(138, 43, 226, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 85% 75%, rgba(255, 105, 180, 0.12) 0%, transparent 35%),
            radial-gradient(ellipse at 50% 10%, rgba(103, 58, 183, 0.18) 0%, transparent 45%),
            radial-gradient(ellipse at 20% 90%, rgba(233, 30, 99, 0.10) 0%, transparent 30%),
            radial-gradient(ellipse at 70% 20%, rgba(156, 39, 176, 0.08) 0%, transparent 25%);
          pointer-events: none;
          z-index: 1;
        }
        
        /* Dark theme text colors - Enhanced with amazing effects */
        [data-theme="dark"] .hero-title {
          color: #ffffff;
          text-shadow: 
            0 0 20px rgba(138, 43, 226, 0.6),
            0 0 40px rgba(255, 105, 180, 0.4),
            0 4px 30px rgba(138, 43, 226, 0.8);
        }
        
        [data-theme="dark"] .hero-subtitle {
          color: #e2e8f0;
          text-shadow: 0 2px 15px rgba(138, 43, 226, 0.4);
        }
        
        [data-theme="dark"] .hero-description {
          color: #cbd5e1;
          text-shadow: 0 1px 10px rgba(255, 105, 180, 0.2);
        }
        
        /* Dark theme gradient text - Amazing animated gradient */
        [data-theme="dark"] .dark-gradient-text {
          background: linear-gradient(
            135deg, 
            #ff00ff 0%, 
            #8b5cf6 15%, 
            #00ffff 30%, 
            #ec4899 45%, 
            #ff6b6b 60%, 
            #4ecdc4 75%, 
            #45b7d1 90%, 
            #ff00ff 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 400% 400%;
          animation: gradient-shift 6s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.7));
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 300% 50%; }
        }
        
        /* Dark theme skill tags - Glowing tech badges */
        [data-theme="dark"] .skill-tag {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(138, 43, 226, 0.6);
          color: #ffffff;
          box-shadow: 
            0 4px 15px rgba(138, 43, 226, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="dark"] .skill-tag:hover {
          background: rgba(138, 43, 226, 0.3);
          border-color: rgba(255, 105, 180, 0.8);
          box-shadow: 
            0 10px 40px rgba(138, 43, 226, 0.6),
            0 0 25px rgba(255, 105, 180, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
        
        /* Dark theme buttons - Premium glowing buttons */
        [data-theme="dark"] .dark-primary-btn {
          background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #ff6b6b 100%);
          box-shadow: 
            0 15px 35px rgba(139, 92, 246, 0.5),
            0 5px 15px rgba(236, 72, 153, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="dark"] .dark-primary-btn:hover {
          background: linear-gradient(135deg, #a855f7 0%, #f472b6 50%, #ff8080 100%);
          box-shadow: 
            0 20px 50px rgba(139, 92, 246, 0.7),
            0 0 40px rgba(236, 72, 153, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-3px) scale(1.05);
        }
        
        [data-theme="dark"] .dark-secondary-btn {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(138, 43, 226, 0.7);
          color: #ffffff;
          box-shadow: 
            0 8px 25px rgba(138, 43, 226, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="dark"] .dark-secondary-btn:hover {
          background: rgba(138, 43, 226, 0.2);
          border-color: rgba(255, 105, 180, 0.8);
          box-shadow: 
            0 15px 40px rgba(138, 43, 226, 0.5),
            0 0 30px rgba(255, 105, 180, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        /* Dark theme social links - Glowing social icons */
        [data-theme="dark"] .social-hover {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(138, 43, 226, 0.4);
          color: #e2e8f0;
          box-shadow: 
            0 4px 15px rgba(138, 43, 226, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="dark"] .social-hover:hover {
          background: rgba(138, 43, 226, 0.25);
          border-color: rgba(255, 105, 180, 0.6);
          color: #ffffff;
          box-shadow: 
            0 10px 30px rgba(138, 43, 226, 0.6),
            0 0 25px rgba(255, 105, 180, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        /* Dark theme scroll indicator */
        [data-theme="dark"] .scroll-indicator {
          color: var(--text-muted);
        }
        
        /* Dark theme highlight spans - Glowing text highlights */
        [data-theme="dark"] .hero-highlight {
          background: rgba(138, 43, 226, 0.3) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 105, 180, 0.5);
          box-shadow: 
            0 0 15px rgba(138, 43, 226, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-shadow: 0 1px 10px rgba(138, 43, 226, 0.6);
        }
      `}</style>
      
      <section 
        id="home" 
        ref={heroRef} 
        className="min-h-screen flex items-center justify-center relative overflow-hidden md:py-20 hero-section"
      >
        {/* Decorative Grid */}
        <div className="decorative-grid absolute inset-0 opacity-30"></div>
        
        {/* Aurora Effect */}
        <div className="aurora"></div>
        
        {/* Subtle Animated Background Elements */}
        <div 
          className="blob w-80 h-80 absolute -top-40 -left-40 opacity-20 rounded-full filter blur-3xl"
          style={{ 
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="blob w-64 h-64 absolute -bottom-32 -right-32 opacity-15 rounded-full filter blur-3xl"
          style={{ 
            background: 'linear-gradient(135deg, #ec4899, #f97316)',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        />
        <div 
          className="blob w-56 h-56 absolute top-1/4 left-1/3 opacity-10 rounded-full filter blur-3xl"
          style={{ 
            background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
            animationDelay: '8s',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-20 max-w-5xl">
          {/* Profile Image */}
          <div className={`floating-elements ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden gradient-border profile-glow magnetic-effect relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Alex Chen" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <div className={`${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-gray-900 text-shadow leading-tight hero-title">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative dark-gradient-text">
                Alex Chen
              </span>
            </h1>
          </div>
          
          {/* Rotating Role Text */}
          <div className={`text-xl md:text-2xl lg:text-3xl mb-6 font-medium text-gray-600 hero-subtitle ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
            <span className="text-rotation" key={currentText}>
              {roles[currentText]}
            </span>
          </div>
          
          {/* Description */}
          <div className={`${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed hero-description">
              I craft <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md hero-highlight">elegant</span> and{' '}
              <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-md hero-highlight">efficient</span> digital solutions 
              that blend robust technology with user-centric design. Passionate about creating{' '}
              <span className="font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded-md hero-highlight">intuitive</span> experiences 
              that make a difference.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '1s' }}>
            <a 
              href="#projects" 
              className="group btn-shine bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-base hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 magnetic-effect shadow-lg relative overflow-hidden dark-primary-btn"
            >
              <div className="flex items-center space-x-2">
                <span className="relative z-10">View My Work</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300 relative z-10 text-sm"></i>
              </div>
            </a>
            <a 
              href="#contact" 
              className="group btn-shine glass-card border border-indigo-200 text-indigo-700 px-8 py-3 rounded-full font-semibold text-base hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 magnetic-effect relative overflow-hidden dark-secondary-btn"
            >
              <div className="flex items-center space-x-2">
                <span className="relative z-10">Get In Touch</span>
                <i className="fas fa-paper-plane relative z-10 text-sm"></i>
              </div>
            </a>
          </div>
          
          {/* Social Links */}
          <div className={`flex justify-center space-x-4 mb-10 ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '1.2s' }}>
            {[
              { icon: 'fab fa-github', color: 'hover:text-gray-700', bg: 'hover:bg-gray-50' },
              { icon: 'fab fa-linkedin', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
              { icon: 'fab fa-twitter', color: 'hover:text-sky-500', bg: 'hover:bg-sky-50' },
              { icon: 'fab fa-dribbble', color: 'hover:text-pink-500', bg: 'hover:bg-pink-50' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className={`social-hover glass-card p-3 rounded-xl text-gray-500 ${social.color} ${social.bg} transition-all duration-300 group`}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
              </a>
            ))}
          </div>
          
          {/* Skills Preview */}
          <div className={`${isLoaded ? 'animate-in' : ''}`} style={{ animationDelay: '1.6s' }}>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                { name: 'React', icon: 'fab fa-react', color: 'text-cyan-500' },
                { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
                { name: 'Python', icon: 'fab fa-python', color: 'text-blue-500' },
                { name: 'TypeScript', icon: 'fas fa-code', color: 'text-blue-600' },
                { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-500' },
                { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400' }
              ].map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-tag glass-card px-4 py-2 rounded-full text-sm font-medium text-gray-700 cursor-pointer group"
                  style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2">
                    <i className={`${skill.icon} ${skill.color} group-hover:animate-pulse text-sm`}></i>
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`mt-16 ${isLoaded ? 'animate-in' : ''}`} style={{ animationDelays: '2s' }}>
            <div className="scroll-indicator flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll to explore</span>
              <i className="fas fa-chevron-down text-lg"></i>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-60 blur-xl floating-elements"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full opacity-50 blur-lg floating-elements" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full opacity-40 blur-md floating-elements" style={{ animationDelay: '4s' }}></div>
      </section>
    </>
  );
};

export default Hero;