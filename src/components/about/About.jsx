import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-primary), var(--bg-secondary))` }}>
      {/* Refined Background Elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-15 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-800 tracking-tight">
            Discover My Story
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A glimpse into my journey, expertise, and the philosophy that drives my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">Architecting Digital Futures</span>
            </h3>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                With a rich background spanning over 5 years in web development, I craft exceptional digital narratives. My expertise lies in harmonizing aesthetic design with robust functionality, transforming visionary concepts into tangible, impactful solutions.
              </p>
              <p>
                My philosophy is anchored in pristine code, intuitive user experiences, and user-centric design. I explore emerging technologies, contribute to open-source, and find inspiration in photography.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group/stat">
                <div className="text-2xl mb-1 text-indigo-500 group-hover/stat:scale-110 transition-transform">
                  🚀
                </div>
                <h4 className="text-lg font-bold text-gray-700">75+</h4>
                <p className="text-indigo-600 text-xs font-medium">Innovative Projects</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group/stat">
                <div className="text-2xl mb-1 text-purple-500 group-hover/stat:scale-110 transition-transform">
                  🤝
                </div>
                <h4 className="text-lg font-bold text-gray-700">50+</h4>
                <p className="text-purple-600 text-xs font-medium">Satisfied Clients</p>
              </div>
            </div>
          </div>
          
          {/* Education & Experience Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">Education & Experience</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group/item">
                <div className="flex-shrink-0 w-10 h-10 mt-0.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white text-sm">🎓</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base text-gray-700 group-hover/item:text-indigo-600 transition-colors">M.Sc. Advanced Computing</h4>
                  <p className="text-sm text-purple-600 font-medium">Imperial College London • 2020-2021</p>
                  <p className="text-xs text-gray-500 mt-1">Focused on AI and Machine Learning.</p>
                </div>
              </div>
              
              <div className="border-l-2 border-gray-100 ml-5 pl-4">
                <div className="h-4"></div>
              </div>
              
              <div className="flex items-start space-x-4 group/item">
                <div className="flex-shrink-0 w-10 h-10 mt-0.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-white text-sm">💼</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base text-gray-700 group-hover/item:text-indigo-600 transition-colors">Senior Developer</h4>
                  <p className="text-sm text-purple-600 font-medium">Tech Solutions Inc. • 2021-Present</p>
                  <p className="text-xs text-gray-500 mt-1">Leading development of scalable web applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;