import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Star, Zap, Trophy, Code, Eye } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import { useTheme } from '../../contexts/ThemeContext';

const Projects = () => {
  const { theme, isDark } = useTheme();
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const projectData = [
    {
      title: "EcoCommerce Platform",
      description: "A cutting-edge e-commerce platform focusing on sustainability, connecting conscious consumers with eco-friendly brands and products.",
      longDescription: "Built with modern web technologies, this platform features advanced filtering, AI-powered product recommendations, and seamless checkout experience. The platform supports multiple payment gateways and includes seller dashboard for inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      date: "March 2024",
      status: "Live",
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      title: "TaskFlow Pro Dashboard",
      description: "A dynamic project management dashboard offering real-time collaboration, task tracking, and insightful analytics for enhanced productivity.",
      longDescription: "Comprehensive project management solution with real-time updates, team collaboration tools, advanced analytics, and customizable workflows. Features include Gantt charts, time tracking, and automated reporting.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["Vue.js", "Firebase", "Chart.js", "WebSocket"],
      date: "February 2024",
      status: "In Development",
      gradient: "from-purple-400 to-indigo-600"
    },
    {
      title: "HealthTrack AI App",
      description: "An intelligent mobile app for personalized fitness tracking and health monitoring, leveraging AI for actionable insights and recommendations.",
      longDescription: "AI-powered health monitoring application with machine learning algorithms for personalized fitness recommendations, nutrition tracking, and health insights. Integrates with wearable devices and provides detailed analytics.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["React Native", "Python", "TensorFlow", "AWS"],
      date: "January 2024",
      status: "Beta",
      gradient: "from-pink-400 to-rose-600"
    },
    {
      title: "CryptoTrader Dashboard",
      description: "Real-time cryptocurrency trading dashboard with advanced charting, portfolio management, and automated trading strategies.",
      longDescription: "Professional trading platform with real-time market data, technical analysis tools, portfolio tracking, and algorithmic trading capabilities. Features include risk management tools and social trading features.",
      imageUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["Next.js", "TypeScript", "Redis", "WebSocket"],
      date: "December 2023",
      status: "Live",
      gradient: "from-amber-400 to-orange-600"
    },
    {
      title: "Smart Home IoT System",
      description: "Comprehensive IoT solution for smart home automation with voice control, mobile app, and energy monitoring capabilities.",
      longDescription: "Complete smart home ecosystem with IoT device integration, voice assistant compatibility, energy usage analytics, and automated scheduling. Includes security features and remote monitoring capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["Arduino", "React", "MQTT", "Raspberry Pi"],
      date: "November 2023",
      status: "Prototype",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "AI Content Generator",
      description: "Advanced AI-powered content generation platform for blogs, social media, and marketing materials with SEO optimization.",
      longDescription: "Intelligent content creation platform using natural language processing and machine learning to generate high-quality, SEO-optimized content for various platforms and industries.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#",
      tags: ["Python", "OpenAI API", "Django", "PostgreSQL"],
      date: "October 2023",
      status: "Live",
      gradient: "from-violet-400 to-purple-600"
    }
  ];

  const getStatusConfig = (status) => {
    if (isDark) {
      // Dark theme status configurations with pure black backgrounds and neon glows
      switch (status) {
        case 'Live': 
          return { 
            color: 'bg-black/90 text-emerald-400 border-emerald-500/50 shadow-emerald-500/30', 
            icon: <Zap className="w-3 h-3" />,
            glow: 'shadow-emerald-500/40 shadow-lg'
          };
        case 'In Development': 
          return { 
            color: 'bg-black/90 text-cyan-400 border-cyan-500/50 shadow-cyan-500/30', 
            icon: <Code className="w-3 h-3" />,
            glow: 'shadow-cyan-500/40 shadow-lg'
          };
        case 'Beta': 
          return { 
            color: 'bg-black/90 text-amber-400 border-amber-500/50 shadow-amber-500/30', 
            icon: <Star className="w-3 h-3" />,
            glow: 'shadow-amber-500/40 shadow-lg'
          };
        case 'Prototype': 
          return { 
            color: 'bg-black/90 text-purple-400 border-purple-500/50 shadow-purple-500/30', 
            icon: <Trophy className="w-3 h-3" />,
            glow: 'shadow-purple-500/40 shadow-lg'
          };
        default: 
          return { 
            color: 'bg-black/90 text-gray-400 border-gray-500/50', 
            icon: <Eye className="w-3 h-3" />,
            glow: 'shadow-gray-500/40 shadow-lg'
          };
      }
    } else {
      // Light theme status configurations (original)
      switch (status) {
        case 'Live': 
          return { 
            color: 'bg-emerald-100 text-emerald-800 border-emerald-200 shadow-emerald-100', 
            icon: <Zap className="w-3 h-3" />,
            glow: 'shadow-emerald-500/20'
          };
        case 'In Development': 
          return { 
            color: 'bg-blue-100 text-blue-800 border-blue-200 shadow-blue-100', 
            icon: <Code className="w-3 h-3" />,
            glow: 'shadow-blue-500/20'
          };
        case 'Beta': 
          return { 
            color: 'bg-amber-100 text-amber-800 border-amber-200 shadow-amber-100', 
            icon: <Star className="w-3 h-3" />,
            glow: 'shadow-amber-500/20'
          };
        case 'Prototype': 
          return { 
            color: 'bg-purple-100 text-purple-800 border-purple-200 shadow-purple-100', 
            icon: <Trophy className="w-3 h-3" />,
            glow: 'shadow-purple-500/20'
          };
        default: 
          return { 
            color: 'bg-gray-100 text-gray-800 border-gray-200', 
            icon: <Eye className="w-3 h-3" />,
            glow: 'shadow-gray-500/20'
          };
      }
    }
  };

  const ProjectPage = ({ project }) => {
    const statusConfig = getStatusConfig(project.status);
    
    return (
      <div className={`h-full w-full ${project.bgPattern} p-6`}>
        <div className={`h-full rounded-2xl shadow-xl border overflow-hidden relative group transition-all duration-500 ${
          isDark 
            ? 'bg-black/95 border-purple-500/30 shadow-purple-500/20 hover:border-purple-400/50 hover:shadow-purple-500/30' 
            : 'bg-white border-gray-100'
        }`}>
          {/* Decorative Elements */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-transparent via-purple-500/50 to-transparent opacity-80' 
              : 'from-transparent via-gray-200 to-transparent opacity-60'
          }`}></div>
          <div className={`absolute top-4 left-4 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full blur-xl ${
            isDark ? 'opacity-30' : 'opacity-10'
          }`}></div>
          <div className={`absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl ${
            isDark ? 'opacity-20' : 'opacity-5'
          }`}></div>
          {isDark && (
            <>
              {/* Additional dark theme glow effects */}
              <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </>
          )}

          {/* Project Image Header */}
          <div className="relative h-48 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br z-10 ${
              isDark 
                ? 'from-black/40 to-purple-900/60' 
                : 'from-gray-900/20 to-gray-900/40'
            }`}></div>
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay transition-opacity duration-500 ${
              isDark 
                ? 'opacity-90 group-hover:opacity-75' 
                : 'opacity-80 group-hover:opacity-70'
            }`}></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className={`flex items-center px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-md ${statusConfig.color} ${statusConfig.glow} shadow-lg`}>
                {statusConfig.icon}
                <span className="ml-1.5">{project.status}</span>
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className={`text-2xl font-bold mb-2 tracking-tight ${
                isDark 
                  ? 'text-white drop-shadow-2xl' 
                  : 'text-white drop-shadow-lg'
              }`}>
                {project.title}
              </h3>
              <div className={`flex items-center text-sm font-medium ${
                isDark 
                  ? 'text-white/95' 
                  : 'text-white/90'
              }`}>
                <Calendar className="w-4 h-4 mr-2" />
                {project.date}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
            {/* Description */}
            <div className="mb-6 flex-grow">
              <p className={`leading-relaxed text-sm font-medium ${
                isDark 
                  ? 'text-gray-300' 
                  : 'text-gray-700'
              }`}>
                {project.longDescription}
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center ${
                isDark 
                  ? 'text-gray-400' 
                  : 'text-gray-500'
              }`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2 ${
                  isDark ? 'shadow-sm' : ''
                }`}></div>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm ${
                      isDark 
                        ? `bg-black/50 text-gray-200 border-purple-500/30 hover:border-purple-400/50 hover:bg-black/70 hover:text-white hover:shadow-purple-500/30` 
                        : `bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-800 border-gray-100 hover:border-gray-200`
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`pt-4 border-t ${
              isDark 
                ? 'border-purple-500/20' 
                : 'border-gray-100'
            }`}>
              <div className="flex space-x-3">
                <a 
                  href={project.liveLink}
                  className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl transition-all duration-300 text-sm font-bold transform hover:-translate-y-1 ${
                    isDark 
                      ? 'hover:shadow-xl hover:shadow-purple-500/30' 
                      : 'hover:shadow-lg hover:shadow-colored shadow-lg'
                  }`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a 
                  href={project.codeLink}
                  className={`flex-1 flex items-center justify-center px-4 py-3 border-2 rounded-xl transition-all duration-300 text-sm font-bold transform hover:-translate-y-1 ${
                    isDark 
                      ? 'border-purple-500/50 text-gray-300 hover:bg-purple-500/10 hover:border-purple-400/70 hover:text-white hover:shadow-lg hover:shadow-purple-500/20' 
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isDark 
              ? 'from-purple-500/10 via-cyan-500/5 to-transparent' 
              : 'from-white/5 to-transparent'
          }`}></div>
        </div>
      </div>
    );
  };

  const onPageChange = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <section 
      id='projects' 
      className={`py-32 relative overflow-hidden min-h-screen ${
        isDark ? 'projects-dark-theme' : ''
      }`} 
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #111121 50%, #0a0a0f 75%, #000000 100%)' 
          : `linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary), var(--bg-secondary))`
      }}
    >
      {/* Enhanced Background Elements */}
      <div className={`absolute inset-0 ${
        isDark ? 'opacity-20' : 'opacity-30'
      }`}>
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-cyan-500' 
            : 'bg-gradient-to-r from-blue-400 to-purple-500'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse delay-1000 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-500 to-pink-600' 
            : 'bg-gradient-to-r from-purple-400 to-pink-500'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full filter blur-3xl animate-pulse delay-500 ${
          isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-600' 
            : 'bg-gradient-to-r from-cyan-400 to-blue-500'
        }`}></div>
        {isDark && (
          <>
            {/* Additional dark theme floating elements */}
            <div className="absolute top-1/3 right-1/5 w-32 h-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full filter blur-2xl animate-pulse delay-2000 opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full filter blur-3xl animate-pulse delay-3000 opacity-30"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium mb-6 shadow-lg ${
            isDark 
              ? 'bg-black/50 border-purple-500/30 text-purple-300 shadow-purple-500/20' 
              : 'bg-white/80 border-gray-200 text-gray-600'
          }`}>
            <Star className={`w-4 h-4 mr-2 ${
              isDark ? 'text-purple-400' : 'text-yellow-500'
            }`} />
            Featured Projects Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className={`text-transparent bg-clip-text ${
              isDark 
                ? 'bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600' 
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
            }`}>
              Project Showcase
            </span>
          </h2>
          <div className={`w-40 h-1.5 mx-auto rounded-full mb-8 shadow-lg ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 shadow-purple-500/30' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${
            isDark 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            {isMobile 
              ? "Explore my carefully crafted digital experiences in this mobile-friendly showcase"
              : "Discover my carefully crafted digital experiences through this interactive portfolio notebook"
            }
          </p>
        </div>

        {isMobile ? (
          /* Mobile Grid Layout */
          <div className="max-w-sm mx-auto space-y-6">
            {projectData.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              
              return (
                <div key={index} className={`rounded-2xl shadow-xl border overflow-hidden relative group transition-all duration-500 ${
                  isDark 
                    ? 'bg-black/95 border-purple-500/30 shadow-purple-500/20 hover:border-purple-400/50 hover:shadow-purple-500/30' 
                    : 'bg-white border-gray-100'
                }`}>
                  {/* Decorative Elements */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    isDark 
                      ? 'from-transparent via-purple-500/50 to-transparent opacity-80' 
                      : 'from-transparent via-gray-200 to-transparent opacity-60'
                  }`}></div>
                  <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-full blur-xl ${
                    isDark ? 'opacity-30' : 'opacity-10'
                  }`}></div>
                  
                  {/* Project Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br z-10 ${
                      isDark 
                        ? 'from-black/40 to-purple-900/60' 
                        : 'from-gray-900/20 to-gray-900/40'
                    }`}></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay transition-opacity duration-500 ${
                      isDark 
                        ? 'opacity-90 group-hover:opacity-75' 
                        : 'opacity-80 group-hover:opacity-70'
                    }`}></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className={`flex items-center px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-md ${statusConfig.color} ${statusConfig.glow} shadow-lg`}>
                        {statusConfig.icon}
                        <span className="ml-1.5">{project.status}</span>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className={`text-xl font-bold mb-2 tracking-tight ${
                        isDark 
                          ? 'text-white drop-shadow-2xl' 
                          : 'text-white drop-shadow-lg'
                      }`}>
                        {project.title}
                      </h3>
                      <div className={`flex items-center text-sm font-medium ${
                        isDark 
                          ? 'text-white/95' 
                          : 'text-white/90'
                      }`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    {/* Description */}
                    <div className="mb-4">
                      <p className={`leading-relaxed text-sm font-medium ${
                        isDark 
                          ? 'text-gray-300' 
                          : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center ${
                        isDark 
                          ? 'text-gray-400' 
                          : 'text-gray-500'
                      }`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2 ${
                          isDark ? 'shadow-sm' : ''
                        }`}></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-2 py-1 rounded-lg text-xs font-semibold border ${
                              isDark 
                                ? 'bg-black/50 text-gray-200 border-purple-500/30 hover:border-purple-400/50 hover:bg-black/70' 
                                : `bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-800 border-gray-100`
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`pt-4 border-t ${
                      isDark 
                        ? 'border-purple-500/20' 
                        : 'border-gray-100'
                    }`}>
                      <div className="flex space-x-3">
                        <a 
                          href={project.liveLink}
                          className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl transition-all duration-300 text-sm font-bold ${
                            isDark 
                              ? 'hover:shadow-lg hover:shadow-purple-500/30' 
                              : 'hover:shadow-lg'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                        <a 
                          href={project.codeLink}
                          className={`flex-1 flex items-center justify-center px-4 py-3 border-2 rounded-xl transition-all duration-300 text-sm font-bold ${
                            isDark 
                              ? 'border-purple-500/50 text-gray-300 hover:bg-purple-500/10 hover:border-purple-400/70 hover:text-white' 
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                          }`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop Flipbook Layout */
          <div className="max-w-7xl mx-auto relative">
            <div className="flex justify-center">
              <div className="relative">
                {/* Book Shadow */}
                <div className="absolute inset-0 bg-black/10 blur-xl transform translate-y-4 scale-95 rounded-2xl"></div>
                
                <HTMLFlipBook
                  width={550}
                  height={633}
                  size="stretch"
                  minWidth={515}
                  maxWidth={600}
                  minHeight={400}
                  maxHeight={1033}
                  maxShadowOpacity={0.5}
                  showCover={false}
                  mobileScrollSupport={true}
                  onFlip={onPageChange}
                  className="demo-book"
                  ref={bookRef}
                  startPage={1}
                  flippingTime={1000}
                  usePortrait={false}
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={false}
                  useMouseEvents={true}
                  swipeDistance={0}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  style={{
                    margin: '0 auto',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {/* Project Pages */}
                  {projectData.map((project, index) => (
                    <div key={index} className="h-full w-full">
                      <ProjectPage project={project} />
                    </div>
                  ))}
                </HTMLFlipBook>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center mt-12 space-x-8">
              <button
                onClick={prevPage}
                className={`flex items-center px-8 py-4 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border font-medium ${
                  isDark 
                    ? 'bg-black/70 text-gray-300 border-purple-500/30 hover:bg-black/80 hover:border-purple-400/50 hover:text-white hover:shadow-purple-500/30' 
                    : 'bg-white/90 text-gray-700 border-gray-100 hover:bg-white'
                }`}
              >
                <ChevronLeft className="w-6 h-6 mr-2" />
                Previous
              </button>
              
              <div className="flex space-x-3">
                {[...Array(Math.ceil(projectData.length / 2))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => bookRef.current && bookRef.current.pageFlip().flip(index * 2)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === Math.floor((currentPage - 1) / 2)
                        ? (isDark 
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-12 shadow-lg shadow-purple-500/30' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 w-12 shadow-lg'
                        )
                        : (isDark 
                          ? 'bg-gray-700 hover:bg-purple-500/50 w-3 hover:scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400 w-3 hover:scale-125'
                        )
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className={`flex items-center px-8 py-4 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border font-medium ${
                  isDark 
                    ? 'bg-black/70 text-gray-300 border-purple-500/30 hover:bg-black/80 hover:border-purple-400/50 hover:text-white hover:shadow-purple-500/30' 
                    : 'bg-white/90 text-gray-700 border-gray-100 hover:bg-white'
                }`}
              >
                Next
                <ChevronRight className="w-6 h-6 ml-2" />
              </button>
            </div>

            {/* Enhanced Page Counter */}
            <div className="text-center mt-6">
              <span className={`inline-flex items-center px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium shadow-lg ${
                isDark 
                  ? 'bg-black/50 border-purple-500/30 text-purple-300 shadow-purple-500/20' 
                  : 'bg-white/80 border-gray-200 text-gray-600'
              }`}>
                Spread {Math.floor((currentPage - 1) / 2) + 1} of {Math.ceil(projectData.length / 2)}
              </span>
            </div>
          </div>
        )}
      </div>

      {!isMobile && (
        <style jsx>{`
          .demo-book {
            margin: 0 auto;
          }
          .demo-book > div {
            background: ${isDark ? '#000000' : 'white'};
            border-radius: 1rem;
            box-shadow: ${isDark 
              ? '0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.1)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            };
          }
          .page {
            background: ${isDark ? '#000000' : 'white'};
            border-radius: 1rem;
            box-shadow: ${isDark 
              ? '0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.1)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            };
            overflow: hidden;
          }
          .page-wrapper {
            padding: 0;
            background: ${isDark ? '#000000' : 'white'};
            border-radius: 1rem;
            box-shadow: ${isDark 
              ? '0 25px 50px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.1)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            };
          }
          .page-wrapper.animated {
            transition: transform 0.6s;
            transform-origin: left center;
          }
          .page-wrapper.animated.turned {
            transform: rotateY(-180deg);
          }
          .page-wrapper.animated.turned .page {
            transform: rotateY(180deg);
          }
          
          /* Dark theme specific styles */
          ${isDark ? `
          .projects-dark-theme {
            position: relative;
          }
          .projects-dark-theme::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
            pointer-events: none;
          }
          .projects-dark-theme .group:hover {
            transform: scale(1.02);
          }
          ` : ''}
        `}
      </style>
      )}
    </section>
  );
}

export default Projects;