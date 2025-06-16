import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Calendar, Award, Briefcase, GraduationCap, 
  Rocket, Star, TrendingUp, Code, Heart, Zap, 
  Trophy, Target, Sparkles, ArrowRight, Clock,
  BookOpen, Users, Building, Coffee, Mountain
} from 'lucide-react';

const TimelineJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef();
  const itemRefs = useRef([]);

  const journeyData = [
    {
      id: 1,
      year: '2019',
      title: 'The Beginning',
      subtitle: 'First Line of Code',
      description: 'Started my coding journey with curiosity and determination. Wrote my first "Hello World" program and fell in love with the magic of programming.',
      icon: <Code className="w-6 h-6" />,
      category: 'Learning',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      achievements: ['HTML & CSS Mastery', 'JavaScript Basics', 'First Website'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      year: '2020',
      title: 'Academic Excellence',
      subtitle: 'Computer Science Degree',
      description: 'Pursued Computer Science with passion, diving deep into algorithms, data structures, and software engineering principles.',
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Education',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      achievements: ['Dean\'s List', 'Data Structures & Algorithms', 'Software Engineering'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      year: '2021',
      title: 'First Breakthrough',
      subtitle: 'Internship & Real Projects',
      description: 'Landed my first internship and worked on real-world projects. Learned about teamwork, code reviews, and industry best practices.',
      icon: <Briefcase className="w-6 h-6" />,
      category: 'Professional',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      achievements: ['React Development', 'Team Collaboration', 'Agile Methodology'],
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      year: '2022',
      title: 'Skill Mastery',
      subtitle: 'Full-Stack Development',
      description: 'Mastered full-stack development, built multiple projects, and started contributing to open-source communities.',
      icon: <Rocket className="w-6 h-6" />,
      category: 'Growth',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      achievements: ['MERN Stack', 'Open Source Contributor', '10+ Projects'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      year: '2023',
      title: 'Recognition',
      subtitle: 'Awards & Achievements',
      description: 'Received recognition for outstanding work, won hackathons, and started mentoring junior developers.',
      icon: <Trophy className="w-6 h-6" />,
      category: 'Achievement',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      achievements: ['Hackathon Winner', 'Best Developer Award', 'Mentor Role'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      year: '2024',
      title: 'Current Journey',
      subtitle: 'Innovation & Leadership',
      description: 'Currently leading innovative projects, exploring cutting-edge technologies like AI/ML, and building solutions that make a difference.',
      icon: <Mountain className="w-6 h-6" />,
      category: 'Present',
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      achievements: ['AI/ML Integration', 'Team Leadership', 'Innovation Driver'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const categoryIcons = {
    Learning: <BookOpen className="w-4 h-4" />,
    Education: <GraduationCap className="w-4 h-4" />,
    Professional: <Building className="w-4 h-4" />,
    Growth: <TrendingUp className="w-4 h-4" />,
    Achievement: <Award className="w-4 h-4" />,
    Present: <Sparkles className="w-4 h-4" />
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-8 shadow-lg">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            My Journey Through Time
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              Timeline
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
              Journey
            </span>
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            From writing my first line of code to leading innovative projects - discover the milestones, 
            achievements, and experiences that shaped my journey as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative" ref={timelineRef}>
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hidden md:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg md:hidden"></div>

          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`relative mb-16 md:mb-24 cursor-pointer group ${
                  isLeft 
                    ? 'md:w-1/2 md:pr-8' 
                    : 'md:w-1/2 md:pl-8 md:ml-auto'
                }`}
                onClick={() => handleItemClick(index)}
              >
                {/* Timeline Node */}
                <div className={`absolute w-6 h-6 rounded-full border-4 border-white shadow-xl z-20 transition-all duration-500 top-8 ${
                  isLeft 
                    ? 'md:right-[-12px] left-8 ml-[-12px] md:left-auto md:ml-0' 
                    : 'md:left-[-12px] left-8 ml-[-12px] md:ml-0'
                } ${
                  isVisible ? `bg-gradient-to-r ${item.color} scale-110` : 'bg-gray-300'
                }`}>
                  <div className={`absolute inset-0 rounded-full animate-ping ${isVisible ? `bg-gradient-to-r ${item.color} opacity-30` : 'opacity-0'}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isActive ? 'scale-105' : 'hover:scale-102'}`}>
                  <div className={`${item.bgColor} backdrop-blur-sm rounded-3xl shadow-2xl border ${item.borderColor} overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                    isActive ? 'ring-4 ring-blue-500/30 shadow-blue-500/20' : ''
                  }`}>
                    {/* Card Header with Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 mix-blend-overlay`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800 shadow-lg`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.year}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`flex items-center px-3 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-xs font-bold shadow-lg`}>
                          {categoryIcons[item.category]}
                          <span className="ml-1.5">{item.category}</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, idx) => (
                            <span 
                              key={idx}
                              className={`px-3 py-1.5 bg-gradient-to-r ${item.color} bg-opacity-10 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className={`group/btn flex items-center px-6 py-3 bg-gradient-to-r ${item.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-bold transform hover:-translate-y-1 hover:shadow-colored shadow-lg`}>
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Stats */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Years of Journey', value: '5+', icon: <Clock className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
            { label: 'Major Milestones', value: '6', icon: <Target className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
            { label: 'Skills Mastered', value: '20+', icon: <Zap className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
            { label: 'Projects Built', value: '50+', icon: <Rocket className="w-6 h-6" />, color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110`}>
                {stat.icon}
              </div>
              <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        .hover\:shadow-colored:hover {
          box-shadow: 0 20px 40px -12px rgba(59, 130, 246, 0.4);
        }
        .shadow-colored {
          box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default TimelineJourney;

