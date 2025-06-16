import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Star, Zap, Trophy, Code, Eye } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';

const Projects = () => {
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
  };

  const ProjectPage = ({ project }) => {
    const statusConfig = getStatusConfig(project.status);
    
    return (
      <div className={`h-full w-full ${project.bgPattern} p-6`}>
        <div className="h-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative group">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60"></div>
          <div className={`absolute top-4 left-4 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-xl`}></div>
          <div className={`absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-2xl`}></div>

          {/* Project Image Header */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40 z-10"></div>
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70`}></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className={`flex items-center px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-md ${statusConfig.color} ${statusConfig.glow} shadow-lg`}>
                {statusConfig.icon}
                <span className="ml-1.5">{project.status}</span>
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center text-white/90 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {project.date}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
            {/* Description */}
            <div className="mb-6 flex-grow">
              <p className="text-gray-700 leading-relaxed text-sm font-medium">
                {project.longDescription}
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2`}></div>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-800 rounded-lg text-xs font-semibold border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex space-x-3">
                <a 
                  href={project.liveLink}
                  className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-bold transform hover:-translate-y-1 hover:shadow-colored shadow-lg`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a 
                  href={project.codeLink}
                  className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm font-bold transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
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
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-lg">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Featured Projects Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Project Showcase
            </span>
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
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
                <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60"></div>
                  <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-xl`}></div>
                  
                  {/* Project Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40 z-10"></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70`}></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className={`flex items-center px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-md ${statusConfig.color} ${statusConfig.glow} shadow-lg`}>
                        {statusConfig.icon}
                        <span className="ml-1.5">{project.status}</span>
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed text-sm font-medium">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2`}></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-2 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-800 rounded-lg text-xs font-semibold border border-gray-100`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex space-x-3">
                        <a 
                          href={project.liveLink}
                          className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-bold`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                        <a 
                          href={project.codeLink}
                          className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm font-bold"
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
                className="flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white border border-gray-100 font-medium"
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
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-12 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3 hover:scale-125'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className="flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white border border-gray-100 font-medium"
              >
                Next
                <ChevronRight className="w-6 h-6 ml-2" />
              </button>
            </div>

            {/* Enhanced Page Counter */}
            <div className="text-center mt-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-lg">
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
            background: white;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          .page {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            overflow: hidden;
          }
          .page-wrapper {
            padding: 0;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
        `}
      </style>
      )}
    </section>
  );
}

export default Projects;