import React, { useState } from 'react';
import { Code, Server, Palette, Brain, Smartphone, Shield, Users, TrendingUp } from 'lucide-react';

const Skills = () => {
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
      bgPattern: "from-blue-50 to-indigo-100",
      frontColor: "text-blue-600",
      description: "Crafting pixel-perfect, responsive user interfaces with modern frameworks",
      skills: [
        { name: "React / Next.js / Vue.js", level: 96, color: "bg-blue-500" },
        { name: "TypeScript / JavaScript", level: 94, color: "bg-indigo-500" },
        { name: "Tailwind CSS / SASS", level: 98, color: "bg-purple-500" },
      ]
    },
    {
      category: "Backend Architecture",
      icon: Server,
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      bgPattern: "from-emerald-50 to-teal-100",
      frontColor: "text-emerald-600",
      description: "Building scalable, secure server-side solutions and robust APIs",
      skills: [
        { name: "Node.js / Express / NestJS", level: 92, color: "bg-emerald-500" },
        { name: "Python / Django / Flask", level: 90, color: "bg-teal-500" },
        { name: "Databases (SQL/NoSQL)", level: 93, color: "bg-cyan-500" },
      ]
    },
    {
      category: "Design & DevOps",
      icon: Palette,
      gradient: "from-pink-600 via-rose-600 to-orange-600",
      bgPattern: "from-pink-50 to-rose-100",
      frontColor: "text-pink-600",
      description: "Merging beautiful design with seamless deployment workflows",
      skills: [
        { name: "UI/UX (Figma, Adobe XD)", level: 95, color: "bg-pink-500" },
        { name: "DevOps (Docker, CI/CD)", level: 88, color: "bg-rose-500" },
        { name: "Cloud (AWS, Firebase)", level: 85, color: "bg-orange-500" },
      ]
    }
  ];

  const coreCompetencies = [
    { name: "AI & ML", icon: Brain, color: "from-violet-500 to-purple-600" },
    { name: "Mobile Dev", icon: Smartphone, color: "from-blue-500 to-cyan-600" },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-pink-600" },
    { name: "Agile & Scrum", icon: Users, color: "from-green-500 to-emerald-600" },
    { name: "Data Analytics", icon: TrendingUp, color: "from-yellow-500 to-orange-600" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            My Technical Arsenal
          </h2>
          <div className="relative">
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
            <div className="w-16 h-2 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full -mt-1"></div>
          </div>
          <p className="text-slate-600 mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
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
                  <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br ${categoryItem.bgPattern} border border-white/50 shadow-2xl`}>
                    <div className="h-full p-8 flex flex-col items-center justify-center text-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryItem.gradient} flex items-center justify-center shadow-xl mb-6 transform hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white text-3xl" />
                      </div>
                      <h3 className={`text-2xl font-bold ${categoryItem.frontColor} mb-4`}>
                        {categoryItem.category}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {categoryItem.description}
                      </p>
                      <div className="text-xs text-slate-500 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 animate-pulse"></span>
                        Click to explore skills
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br ${categoryItem.gradient} shadow-2xl`}>
                    <div className="h-full p-6 flex flex-col justify-center">
                      <div className="text-center mb-6">
                        <IconComponent className="text-white text-3xl mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-white">{categoryItem.category}</h3>
                      </div>
                      <div className="space-y-4">
                        {categoryItem.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white font-medium text-sm">{skill.name}</span>
                              <span className="text-white font-bold text-sm">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
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
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Core Competencies
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {coreCompetencies.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <h4 className="text-slate-700 font-semibold text-sm group-hover:text-slate-900 transition-colors">
                  {item.name}
                </h4>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
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