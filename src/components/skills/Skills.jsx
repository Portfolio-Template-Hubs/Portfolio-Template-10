import React, { useState } from 'react';
import { Code, Server, Palette, Brain, Smartphone, Shield, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skillsData = [
    {
      category: "Frontend Mastery",
      icon: Code,
      gradient: "from-blue-600 via-purple-600 to-indigo-700",
      darkGradient: "from-violet-500 via-purple-500 to-indigo-600",
      bgPattern: "from-blue-50 to-indigo-100",
      darkBgPattern: "from-gray-900/90 to-black/95",
      frontColor: "text-blue-600",
      darkFrontColor: "text-violet-400",
      description: "Crafting pixel-perfect, responsive user interfaces with modern frameworks",
      skills: [
        { name: "React / Next.js / Vue.js", level: 96, color: "bg-blue-500", darkColor: "bg-violet-500" },
        { name: "TypeScript / JavaScript", level: 94, color: "bg-indigo-500", darkColor: "bg-purple-500" },
        { name: "Tailwind CSS / SASS", level: 98, color: "bg-purple-500", darkColor: "bg-indigo-500" },
      ]
    },
    {
      category: "Backend Architecture",
      icon: Server,
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      darkGradient: "from-emerald-500 via-cyan-500 to-blue-600",
      bgPattern: "from-emerald-50 to-teal-100",
      darkBgPattern: "from-gray-900/90 to-black/95",
      frontColor: "text-emerald-600",
      darkFrontColor: "text-emerald-400",
      description: "Building scalable, secure server-side solutions and robust APIs",
      skills: [
        { name: "Node.js / Express / NestJS", level: 92, color: "bg-emerald-500", darkColor: "bg-emerald-500" },
        { name: "Python / Django / Flask", level: 90, color: "bg-teal-500", darkColor: "bg-cyan-500" },
        { name: "Databases (SQL/NoSQL)", level: 93, color: "bg-cyan-500", darkColor: "bg-blue-500" },
      ]
    },
    {
      category: "Design & DevOps",
      icon: Palette,
      gradient: "from-pink-600 via-rose-600 to-orange-600",
      darkGradient: "from-pink-500 via-rose-500 to-red-600",
      bgPattern: "from-pink-50 to-rose-100",
      darkBgPattern: "from-gray-900/90 to-black/95",
      frontColor: "text-pink-600",
      darkFrontColor: "text-pink-400",
      description: "Merging beautiful design with seamless deployment workflows",
      skills: [
        { name: "UI/UX (Figma, Adobe XD)", level: 95, color: "bg-pink-500", darkColor: "bg-pink-500" },
        { name: "DevOps (Docker, CI/CD)", level: 88, color: "bg-rose-500", darkColor: "bg-rose-500" },
        { name: "Cloud (AWS, Firebase)", level: 85, color: "bg-orange-500", darkColor: "bg-red-500" },
      ]
    }
  ];

  const coreCompetencies = [
    { name: "AI & ML", icon: Brain, color: "from-violet-500 to-purple-600", darkColor: "from-violet-400 to-purple-500" },
    { name: "Mobile Dev", icon: Smartphone, color: "from-blue-500 to-cyan-600", darkColor: "from-blue-400 to-cyan-500" },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-pink-600", darkColor: "from-red-400 to-pink-500" },
    { name: "Agile & Scrum", icon: Users, color: "from-green-500 to-emerald-600", darkColor: "from-green-400 to-emerald-500" },
    { name: "Data Analytics", icon: TrendingUp, color: "from-yellow-500 to-orange-600", darkColor: "from-yellow-400 to-orange-500" },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 md:py-32 relative overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-black' : ''
      }`} 
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #111121 50%, #0a0a0f 75%, #000000 100%)'
          : `linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary), var(--bg-secondary))` 
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            {/* Dark theme particles */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
            {/* Additional dark theme effects */}
            <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-gradient-to-r from-rose-500/15 to-orange-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
            {/* Glowing dots */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-violet-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-40 left-40 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-40 right-40 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent'
          }`}>
            My Technical Arsenal
          </h2>
          <div className="relative">
            <div className={`w-32 h-2 mx-auto rounded-full transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500'
                : 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500'
            }`}></div>
            <div className={`w-16 h-2 mx-auto rounded-full -mt-1 transition-all duration-500 ${
              isDark 
                ? 'bg-gradient-to-r from-pink-400 to-violet-400'
                : 'bg-gradient-to-r from-pink-400 to-rose-400'
            }`}></div>
          </div>
          <p className={`mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed transition-all duration-500 ${
            isDark 
              ? 'text-gray-300'
              : 'text-slate-600'
          }`}>
            Interactive showcase of cutting-edge technologies and methodologies I master to create exceptional digital experiences
          </p>
        </div>
        
        {/* Flip Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
          {skillsData.map((categoryItem, index) => {
            const IconComponent = categoryItem.icon;
            const isFlipped = flippedCards[index];
            
            return (
              <div key={index} className="perspective-1000 h-80">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                  onClick={() => toggleCard(index)}
                >
                  {/* Front of Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl transition-all duration-500 ${
                    isDark 
                      ? `bg-gradient-to-br ${categoryItem.darkBgPattern} border border-violet-500/30 shadow-2xl shadow-violet-500/20`
                      : `bg-gradient-to-br ${categoryItem.bgPattern} border border-white/50 shadow-2xl`
                  }`}>
                    <div className="h-full p-8 flex flex-col items-center justify-center text-center">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl mb-6 transform hover:scale-110 transition-all duration-300 ${
                        isDark 
                          ? `bg-gradient-to-br ${categoryItem.darkGradient} shadow-lg shadow-violet-500/30`
                          : `bg-gradient-to-br ${categoryItem.gradient}`
                      }`}>
                        <IconComponent className="text-white text-3xl" />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                        isDark 
                          ? categoryItem.darkFrontColor
                          : categoryItem.frontColor
                      }`}>
                        {categoryItem.category}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-6 transition-all duration-500 ${
                        isDark 
                          ? 'text-gray-300'
                          : 'text-slate-600'
                      }`}>
                        {categoryItem.description}
                      </p>
                      <div className={`text-xs flex items-center transition-all duration-500 ${
                        isDark 
                          ? 'text-gray-400'
                          : 'text-slate-500'
                      }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                          isDark 
                            ? 'bg-gradient-to-r from-violet-400 to-purple-400'
                            : 'bg-gradient-to-r from-blue-400 to-purple-400'
                        }`}></span>
                        Click to explore skills
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl transition-all duration-500 ${
                    isDark 
                      ? `bg-gradient-to-br ${categoryItem.darkGradient} shadow-2xl shadow-violet-500/30`
                      : `bg-gradient-to-br ${categoryItem.gradient} shadow-2xl`
                  }`}>
                    <div className="h-full p-6 flex flex-col justify-center">
                      <div className="text-center mb-6">
                        <IconComponent className="text-white text-3xl mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">{categoryItem.category}</h3>
                      </div>
                      <div className="space-y-4">
                        {categoryItem.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className={`backdrop-blur-sm rounded-lg p-3 transition-all duration-300 ${
                            isDark 
                              ? 'bg-black/40 border border-white/10'
                              : 'bg-white/20'
                          }`}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white font-medium text-sm">{skill.name}</span>
                              <span className="text-white font-bold text-sm">{skill.level}%</span>
                            </div>
                            <div className={`h-2 rounded-full overflow-hidden ${
                              isDark 
                                ? 'bg-black/50'
                                : 'bg-white/30'
                            }`}>
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                  isDark ? skill.darkColor : skill.color
                                }`}
                                style={{ 
                                  width: isFlipped ? `${skill.level}%` : '0%',
                                  transitionDelay: `${skillIndex * 200}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="text-center mb-12">
          <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent'
          }`}>
            Core Competencies
          </h3>
          <div className={`w-24 h-1 mx-auto rounded-full transition-all duration-500 ${
            isDark 
              ? 'bg-gradient-to-r from-violet-500 to-purple-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {coreCompetencies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`group relative p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  isDark 
                    ? 'bg-black/60 backdrop-blur-sm border border-violet-500/30 hover:border-violet-400/50 hover:shadow-violet-500/20'
                    : 'bg-white/80 backdrop-blur-sm border border-white/50'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-all duration-300 ${
                  isDark 
                    ? `bg-gradient-to-br ${item.darkColor} shadow-lg shadow-violet-500/20`
                    : `bg-gradient-to-br ${item.color}`
                }`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <h4 className={`font-semibold text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-white'
                    : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {item.name}
                </h4>
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  isDark 
                    ? `bg-gradient-to-br ${item.darkColor}`
                    : `bg-gradient-to-br ${item.color}`
                }`}></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Skills;