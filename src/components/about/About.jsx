import React from 'react';

const About = () => {
  return (
    <>
      <style jsx>{`
        /* About section backgrounds */
        .about-section {
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-primary), var(--bg-secondary));
        }
        
        /* Dark theme about background - Pure black with colorful accents */
        [data-theme="dark"] .about-section {
          background: #000000 !important;
          position: relative;
        }
        
        /* Add colorful accents as pseudo-elements for dark theme */
        [data-theme="dark"] .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(138, 43, 226, 0.12) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 105, 180, 0.10) 0%, transparent 35%),
            radial-gradient(ellipse at 50% 50%, rgba(103, 58, 183, 0.15) 0%, transparent 45%),
            radial-gradient(ellipse at 30% 80%, rgba(233, 30, 99, 0.08) 0%, transparent 30%);
          pointer-events: none;
          z-index: 1;
        }
        
        /* Dark theme text colors */
        [data-theme="dark"] .about-title {
          color: #ffffff;
          text-shadow: 0 4px 20px rgba(138, 43, 226, 0.4);
        }
        
        [data-theme="dark"] .about-subtitle {
          color: #e2e8f0;
        }
        
        [data-theme="dark"] .about-description {
          color: #cbd5e1;
        }
        
        /* Dark theme gradient text */
        [data-theme="dark"] .dark-gradient-text {
          background: linear-gradient(
            135deg, 
            #8b5cf6 0%, 
            #ec4899 25%, 
            #06b6d4 50%, 
            #10b981 75%, 
            #f59e0b 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 300% 300%;
          animation: gradient-shift 8s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.6));
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Dark theme glass cards */
        [data-theme="dark"] .dark-glass-card {
          background: rgba(0, 0, 0, 0.6) !important;
          border: 1px solid rgba(138, 43, 226, 0.5) !important;
          box-shadow: 
            0 8px 32px rgba(138, 43, 226, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(20px);
        }
        
        [data-theme="dark"] .dark-glass-card:hover {
          background: rgba(138, 43, 226, 0.15) !important;
          border-color: rgba(255, 105, 180, 0.7) !important;
          box-shadow: 
            0 15px 60px rgba(138, 43, 226, 0.5),
            0 0 30px rgba(255, 105, 180, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-5px) scale(1.02);
        }
        
        /* Dark theme stats cards */
        [data-theme="dark"] .dark-stat-card {
          background: rgba(0, 0, 0, 0.7) !important;
          border: 1px solid rgba(138, 43, 226, 0.4);
          box-shadow: 
            0 4px 20px rgba(138, 43, 226, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="dark"] .dark-stat-card:hover {
          background: rgba(138, 43, 226, 0.2) !important;
          border-color: rgba(255, 105, 180, 0.6);
          box-shadow: 
            0 8px 30px rgba(138, 43, 226, 0.4),
            0 0 20px rgba(255, 105, 180, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        /* Dark theme timeline elements */
        [data-theme="dark"] .dark-timeline-icon {
          background: linear-gradient(135deg, #8b5cf6, #ec4899) !important;
          box-shadow: 
            0 4px 15px rgba(138, 43, 226, 0.4),
            0 0 20px rgba(255, 105, 180, 0.3);
        }
        
        [data-theme="dark"] .dark-timeline-icon:hover {
          box-shadow: 
            0 8px 25px rgba(138, 43, 226, 0.6),
            0 0 30px rgba(255, 105, 180, 0.5);
          transform: scale(1.15) rotate(5deg);
        }
        
        /* Dark theme timeline border */
        [data-theme="dark"] .dark-timeline-border {
          border-color: rgba(138, 43, 226, 0.3) !important;
        }
        
        /* Dark theme text colors */
        [data-theme="dark"] .dark-text-primary {
          color: #ffffff;
        }
        
        [data-theme="dark"] .dark-text-secondary {
          color: #e2e8f0;
        }
        
        [data-theme="dark"] .dark-text-tertiary {
          color: #cbd5e1;
        }
        
        [data-theme="dark"] .dark-text-muted {
          color: #94a3b8;
        }
        
        [data-theme="dark"] .dark-text-accent {
          color: #8b5cf6;
        }
        
        [data-theme="dark"] .dark-text-accent-hover:hover {
          color: #ec4899;
        }
        
        /* Dark theme background blobs */
        [data-theme="dark"] .dark-bg-blob-1 {
          background: radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%) !important;
        }
        
        [data-theme="dark"] .dark-bg-blob-2 {
          background: radial-gradient(circle, rgba(255, 105, 180, 0.12) 0%, transparent 70%) !important;
        }
        
        [data-theme="dark"] .dark-bg-blob-3 {
          background: radial-gradient(circle, rgba(103, 58, 183, 0.18) 0%, transparent 70%) !important;
        }
        
        /* Dark theme divider */
        [data-theme="dark"] .dark-divider {
          background: linear-gradient(to right, transparent, rgba(138, 43, 226, 0.6), rgba(255, 105, 180, 0.6), transparent) !important;
          height: 2px;
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.4);
        }
      `}</style>
      
      <section id="about" className="py-16 md:py-20 relative overflow-hidden about-section">
        {/* Refined Background Elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse dark-bg-blob-1"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-20 blur-3xl animate-pulse dark-bg-blob-2" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-15 blur-2xl animate-pulse dark-bg-blob-3" style={{animationDelay: '2s'}}></div>
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-800 tracking-tight about-title">
              <span className="dark-gradient-text">Discover My Story</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4 dark-divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed about-description">
              A glimpse into my journey, expertise, and the philosophy that drives my work.
            </p>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Main Content Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group dark-glass-card">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 dark-text-primary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700 dark-gradient-text">Architecting Digital Futures</span>
              </h3>
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed dark-text-secondary">
                <p>
                  With a rich background spanning over 5 years in web development, I craft exceptional digital narratives. My expertise lies in harmonizing aesthetic design with robust functionality, transforming visionary concepts into tangible, impactful solutions.
                </p>
                <p>
                  My philosophy is anchored in pristine code, intuitive user experiences, and user-centric design. I explore emerging technologies, contribute to open-source, and find inspiration in photography.
                </p>
              </div>
            
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group/stat dark-stat-card">
                  <div className="text-2xl mb-1 text-indigo-500 group-hover/stat:scale-110 transition-transform">
                    🚀
                  </div>
                  <h4 className="text-lg font-bold text-gray-700 dark-text-primary">75+</h4>
                  <p className="text-indigo-600 text-xs font-medium dark-text-accent">Innovative Projects</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group/stat dark-stat-card">
                  <div className="text-2xl mb-1 text-purple-500 group-hover/stat:scale-110 transition-transform">
                    🤝
                  </div>
                  <h4 className="text-lg font-bold text-gray-700 dark-text-primary">50+</h4>
                  <p className="text-purple-600 text-xs font-medium dark-text-accent">Satisfied Clients</p>
                </div>
              </div>
          </div>
          
            {/* Education & Experience Card */}
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark-glass-card">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 dark-text-primary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700 dark-gradient-text">Education & Experience</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0 w-10 h-10 mt-0.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md dark-timeline-icon">
                    <span className="text-white text-sm">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base text-gray-700 group-hover/item:text-indigo-600 transition-colors dark-text-primary dark-text-accent-hover">M.Sc. Advanced Computing</h4>
                    <p className="text-sm text-purple-600 font-medium dark-text-accent">Imperial College London • 2020-2021</p>
                    <p className="text-xs text-gray-500 mt-1 dark-text-muted">Focused on AI and Machine Learning.</p>
                  </div>
                </div>
                
                <div className="border-l-2 border-gray-100 ml-5 pl-4 dark-timeline-border">
                  <div className="h-4"></div>
                </div>
                
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0 w-10 h-10 mt-0.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md dark-timeline-icon">
                    <span className="text-white text-sm">💼</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base text-gray-700 group-hover/item:text-indigo-600 transition-colors dark-text-primary dark-text-accent-hover">Senior Developer</h4>
                    <p className="text-sm text-purple-600 font-medium dark-text-accent">Tech Solutions Inc. • 2021-Present</p>
                    <p className="text-xs text-gray-500 mt-1 dark-text-muted">Leading development of scalable web applications.</p>
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

export default About;
