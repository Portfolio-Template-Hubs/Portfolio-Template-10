import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();
  
  // Updated servicesData with enhanced gradients for both themes
  const servicesData = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Crafting responsive and high-performance websites using modern technologies like React, Next.js, and Node.js.',
      lightGradient: 'from-indigo-500 to-purple-600',
      darkGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      darkIconBg: 'from-violet-600 to-purple-700',
      glowColor: 'violet'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Building intuitive and engaging mobile applications for iOS and Android platforms using React Native and native technologies.',
      lightGradient: 'from-indigo-500 to-purple-600',
      darkGradient: 'from-purple-500 via-pink-500 to-rose-500',
      darkIconBg: 'from-purple-600 to-pink-700',
      glowColor: 'purple'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that are both aesthetically pleasing and highly functional, using tools like Figma and Adobe XD.',
      lightGradient: 'from-indigo-500 to-purple-600',
      darkGradient: 'from-pink-500 via-rose-500 to-orange-500',
      darkIconBg: 'from-pink-600 to-rose-700',
      glowColor: 'pink'
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      title: 'Cloud Solutions & DevOps',
      description: 'Implementing scalable cloud infrastructure and CI/CD pipelines on AWS, Azure, and GCP to ensure robust and efficient deployments.',
      lightGradient: 'from-indigo-500 to-purple-600',
      darkGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      darkIconBg: 'from-cyan-600 to-blue-700',
      glowColor: 'cyan'
    }
  ];

  return (
    <>
      <style jsx>{`
        /* Services Dark Theme Styles */
        [data-theme="dark"] #services {
          background: linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #111121 50%, #0a0a0f 75%, #000000 100%) !important;
        }
        
        /* Dark theme floating particles */
        .services-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          opacity: 0.7;
          animation: servicesFloat 6s infinite ease-in-out;
          pointer-events: none;
        }
        
        @keyframes servicesFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.7; 
          }
          25% { 
            transform: translateY(-40px) translateX(20px) rotate(90deg); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-80px) translateX(-10px) rotate(180deg); 
            opacity: 0.8; 
          }
          75% { 
            transform: translateY(-40px) translateX(-30px) rotate(270deg); 
            opacity: 0.9; 
          }
        }
        
        /* Dark theme glow effects */
        [data-theme="dark"] .services-glow-violet {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2);
        }
        
        [data-theme="dark"] .services-glow-purple {
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.2);
        }
        
        [data-theme="dark"] .services-glow-pink {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2);
        }
        
        [data-theme="dark"] .services-glow-cyan {
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2);
        }
        
        /* Dark theme card animations */
        [data-theme="dark"] .services-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        [data-theme="dark"] .services-card-hover:hover {
          transform: translateY(-12px) scale(1.03);
          background: rgba(0, 0, 0, 0.95) !important;
        }
        
        /* Dark theme shine effect */
        [data-theme="dark"] .services-shine {
          position: relative;
          overflow: hidden;
        }
        
        [data-theme="dark"] .services-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.6s;
        }
        
        [data-theme="dark"] .services-shine:hover::before {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }
        
        /* Dark theme icon glow */
        [data-theme="dark"] .services-icon-glow {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.6));
        }
        
        /* Dark theme text glow */
        [data-theme="dark"] .services-text-glow {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
      `}</style>
      
      <section 
        id="services" 
        className={`py-20 md:py-28 relative overflow-hidden transition-all duration-500 ${
          isDark 
            ? 'bg-black' 
            : 'bg-gray-50'
        }`}
      >
        {/* Background Elements */}
        {isDark ? (
          <>
            {/* Dark Theme Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
            </div>
            
            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="services-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`
                }}
              />
            ))}
          </>
        ) : (
          <>
            {/* Light Theme Background */}
            <div className="blob w-80 h-80 bg-indigo-100 absolute -top-20 -left-20 opacity-30 rounded-full filter blur-2xl animation-delay-300"></div>
            <div className="blob w-80 h-80 bg-purple-100 absolute -bottom-20 -right-20 opacity-30 rounded-full filter blur-2xl animation-delay-800"></div>
          </>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark 
                ? 'bg-black/80 border border-violet-500/30 text-violet-200 backdrop-blur-xl' 
                : 'bg-white/90 border border-indigo-200 text-indigo-600'
            }`}>
              <i className="fas fa-concierge-bell mr-2"></i>
              Professional Services
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${
              isDark ? 'services-text-glow' : ''
            }`}>
              <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? 'bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600'
              }`}>
                Services I Offer
              </span>
            </h2>
            
            {/* Divider */}
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-violet-500 to-pink-500' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}></div>
            
            {/* Description */}
            <p className={`mt-5 max-w-xl mx-auto text-md md:text-lg ${
              isDark 
                ? 'text-gray-300' 
                : 'text-gray-600'
            }`}>
              Leveraging my expertise to deliver comprehensive solutions tailored to your unique needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className={`p-6 md:p-8 rounded-xl text-center group transition-all duration-500 transform hover:-translate-y-3 ${
                  isDark 
                    ? `bg-black/80 border border-violet-500/20 backdrop-blur-xl services-card-hover services-shine services-glow-${service.glowColor}` 
                    : 'bg-white border border-gray-200 hover:border-indigo-400 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center shadow-md mb-5 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ${
                  isDark 
                    ? `bg-gradient-to-br ${service.darkIconBg} services-icon-glow` 
                    : `bg-gradient-to-br ${service.lightGradient}`
                }`}>
                  <i className={`${service.icon} text-white text-2xl md:text-3xl`}></i>
                </div>
                
                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-semibold mb-2 md:mb-3 transition-colors duration-300 ${
                  isDark 
                    ? 'text-white group-hover:text-violet-400' 
                    : 'text-gray-800 group-hover:text-indigo-600'
                }`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-gray-200' 
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {service.description}
                </p>
                
                {/* Dark theme only: Decorative elements */}
                {isDark && (
                  <>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-violet-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to Action (Dark theme only) */}
          {isDark && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                <i className="fas fa-rocket mr-2"></i>
                Ready to Start Your Project?
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;