import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Awards = () => {
  const { theme, isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeAward, setActiveAward] = useState(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const achievements = [
    {
      title: "Best Developer Award 2024",
      organization: "Tech Excellence Awards",
      description: "Recognized for outstanding contribution to web development and innovative solutions",
      date: "2024",
      icon: "fas fa-trophy",
      color: "from-yellow-400 to-amber-500",
      category: "Achievement",
      verification: "TEA-2024-001"
    },
    {
      title: "AWS Solutions Architect Professional",
      organization: "Amazon Web Services",
      description: "Certified professional in designing distributed applications and systems on AWS",
      date: "2023",
      icon: "fab fa-aws",
      color: "from-orange-400 to-red-500",
      category: "Certification",
      verification: "AWS-SAP-2023"
    },
    {
      title: "Google Developer Expert",
      organization: "Google",
      description: "Recognized as an expert in Angular and Google Cloud Platform technologies",
      date: "2023",
      icon: "fab fa-google",
      color: "from-blue-400 to-indigo-500",
      category: "Recognition",
      verification: "GDE-2023-ANG"
    },
    {
      title: "Open Source Contributor of the Year",
      organization: "GitHub",
      description: "Top 1% contributor with over 500+ contributions to open source projects",
      date: "2023",
      icon: "fab fa-github",
      color: "from-gray-600 to-gray-800",
      category: "Achievement",
      verification: "OSC-2023-TOP1"
    },
    {
      title: "React Advanced Certification",
      organization: "Meta",
      description: "Advanced certification in React development and state management patterns",
      date: "2022",
      icon: "fab fa-react",
      color: "from-cyan-400 to-blue-500",
      category: "Certification",
      verification: "META-RAC-2022"
    },
    {
      title: "Innovation in UI/UX Design",
      organization: "Design Awards International",
      description: "Awarded for exceptional user interface design and user experience innovation",
      date: "2022",
      icon: "fas fa-palette",
      color: "from-purple-400 to-pink-500",
      category: "Achievement",
      verification: "DAI-UIX-2022"
    }
  ];

  const stats = [
    { label: "Certifications", value: "8+", icon: "fas fa-certificate" },
    { label: "Awards Won", value: "12+", icon: "fas fa-award" },
    { label: "Years Experience", value: "5+", icon: "fas fa-calendar" },
    { label: "Projects Completed", value: "50+", icon: "fas fa-rocket" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .award-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0) scale(1);
        }
        
        .award-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .award-icon {
          transition: all 0.3s ease;
        }
        
        .award-card:hover .award-icon {
          transform: scale(1.2) rotate(5deg);
        }
        
        .floating-badge {
          animation: float-badge 6s ease-in-out infinite;
        }
        
        @keyframes float-badge {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s;
        }
        
        .shine-effect:hover::before {
          left: 100%;
        }
        
        .pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        .stats-counter {
          animation: count-up 2s ease-out;
        }
        
        @keyframes count-up {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .category-badge {
          position: relative;
          overflow: hidden;
        }
        
        .category-badge::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .category-badge:hover::after {
          left: 100%;
        }
        
        .morphing-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .award-modal {
          animation: modal-appear 0.3s ease-out;
        }
        
        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .parallax-element {
          transform: translate3d(0, 0, 0);
        }
        
        .verification-badge {
          animation: verification-glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes verification-glow {
          from {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
          }
          to {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4);
          }
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="awards" 
        className="py-20 relative overflow-hidden transition-all duration-500"
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #111121 50%, #0a0a0f 75%, #000000 100%)"
            : `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
              linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)
            `
        }}
      >
        {/* Dynamic Background Elements */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
            bottom: '10%',
            right: '5%',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Recognition</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Awards & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recognitions and certifications that validate my expertise and commitment to excellence in technology and innovation.
            </p>
          </div>

          {/* Stats Row */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="glass-morphism rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${stat.icon} text-white text-lg`}></i>
                  </div>
                  <div className="stats-counter text-3xl font-bold text-gray-900 mb-1" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={`award-card shine-effect bg-white rounded-2xl p-8 cursor-pointer group relative ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                onClick={() => setActiveAward(achievement)}
              >
                {/* Floating Badge */}
                <div className="floating-badge absolute -top-3 -right-3">
                  <div className={`category-badge px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${achievement.color}`}>
                    {achievement.category}
                  </div>
                </div>

                {/* Award Icon */}
                <div className="relative mb-6">
                  <div className="pulse-ring absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20"></div>
                  <div className={`award-icon inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} text-white relative z-10`}>
                    <i className={`${achievement.icon} text-2xl`}></i>
                  </div>
                </div>

                {/* Award Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-indigo-600 font-semibold text-sm mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-medium">
                    {achievement.date}
                  </span>
                  <div className="verification-badge inline-flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>Verified</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-arrow-right text-indigo-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Add Value to Your Team?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how my expertise and proven track record can contribute to your next project.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
              >
                <span>Let's Connect</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Award Detail Modal */}
        {activeAward && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveAward(null)}
          >
            <div 
              className="award-modal bg-white rounded-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveAward(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${activeAward.color} text-white mb-6`}>
                <i className={`${activeAward.icon} text-3xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {activeAward.title}
              </h3>
              
              <p className="text-indigo-600 font-semibold mb-4">
                {activeAward.organization}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {activeAward.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-calendar text-gray-400"></i>
                  <span className="text-gray-600">{activeAward.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <i className="fas fa-certificate"></i>
                  <span className="font-mono text-xs">{activeAward.verification}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Awards;

