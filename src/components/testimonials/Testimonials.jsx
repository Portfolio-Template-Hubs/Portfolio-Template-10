import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();
  
  // Updated testimonialsData for both light and dark themes
  const testimonialsData = [
    {
      quote: "Alex transformed our vision into a stunning reality. His technical prowess and design sense are unmatched!",
      name: "Jane Doe",
      title: "CEO, Innovatech",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      gradient: "from-[#8A2BE2] to-[#FF69B4]"
    },
    {
      quote: "Working with Alex was a breeze. He's a true professional who delivers exceptional quality on time, every time.",
      name: "John Smith",
      title: "CTO, Tech Solutions Inc.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      gradient: "from-[#FF69B4] to-[#4B0082]"
    },
    {
      quote: "The attention to detail and commitment to user experience Alex brings is phenomenal. Highly recommended!",
      name: "Alice Brown",
      title: "Product Manager, Creative Co.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      gradient: "from-[#4B0082] to-[#8A2BE2]"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className={`py-20 md:py-28 relative overflow-hidden transition-all duration-500 ${
        isDark 
          ? 'testimonials-dark-bg' 
          : 'bg-gray-50'
      }`}
    >
      {/* Animated Background Elements - Different for Light/Dark */}
      {isDark ? (
        <>
          {/* Dark Theme Background Elements */}
          <div className="testimonials-dark-glow-1 w-96 h-96 absolute top-0 left-1/4 opacity-40 rounded-full animation-delay-300"></div>
          <div className="testimonials-dark-glow-2 w-96 h-96 absolute bottom-0 right-1/4 opacity-40 rounded-full animation-delay-800"></div>
          <div className="testimonials-dark-glow-3 w-80 h-80 absolute top-1/2 left-3/4 opacity-30 rounded-full animation-delay-1200"></div>
          
          {/* Floating Particles for Dark Theme */}
          <div className="testimonials-floating-particle absolute top-1/4 left-1/6" style={{animationDelay: '0s'}}></div>
          <div className="testimonials-floating-particle absolute top-3/4 right-1/6" style={{animationDelay: '2s'}}></div>
          <div className="testimonials-floating-particle absolute top-1/3 right-1/3" style={{animationDelay: '4s'}}></div>
        </>
      ) : (
        <>
          {/* Light Theme Background Elements */}
          <div className="blob w-96 h-96 bg-indigo-100 absolute top-0 left-1/4 opacity-30 rounded-full filter blur-2xl animation-delay-300"></div>
          <div className="blob w-96 h-96 bg-purple-100 absolute bottom-0 right-1/4 opacity-30 rounded-full filter blur-2xl animation-delay-800"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 transition-colors duration-300 ${
            isDark ? 'testimonials-title-dark' : 'text-gray-800'
          }`}>
            <span className={`text-transparent bg-clip-text ${
              isDark 
                ? 'testimonials-gradient-text-dark' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}>
              Words From My Clients
            </span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            isDark 
              ? 'testimonials-divider-dark' 
              : 'bg-gradient-to-r from-indigo-500 to-purple-600'
          }`}></div>
          <p className={`mt-5 max-w-xl mx-auto text-md md:text-lg transition-colors duration-300 ${
            isDark ? 'testimonials-description-dark' : 'text-gray-600'
          }`}>
            Discover what industry leaders and collaborators are saying about their experience working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className={`p-6 md:p-8 rounded-xl border transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden ${
                isDark 
                  ? 'testimonials-card-dark testimonials-card-hover-dark' 
                  : 'bg-white border-gray-200 hover:border-indigo-400 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Decorative Background Element */}
              <div className={`absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-300 blur-md ${
                isDark 
                  ? 'testimonials-card-glow-dark' 
                  : 'bg-gradient-to-br from-indigo-200 to-purple-200'
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-5 md:mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 md:mr-5 border-2 shadow-md transition-all duration-300 group-hover:scale-110 ${
                      isDark 
                        ? 'testimonials-avatar-border-dark testimonials-avatar-glow-dark' 
                        : 'border-indigo-300'
                    }`}
                  />
                  <div>
                    <h4 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isDark 
                        ? 'testimonials-name-dark group-hover:testimonials-name-hover-dark' 
                        : 'text-gray-800 group-hover:text-indigo-600'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm font-medium text-transparent bg-clip-text ${
                      isDark 
                        ? 'testimonials-title-gradient-dark' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                    }`}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                
                <p className={`italic leading-relaxed text-sm md:text-base relative pl-8 transition-colors duration-300 ${
                  isDark 
                    ? 'testimonials-quote-dark testimonials-quote-marks-dark' 
                    : 'text-gray-600'
                } before:content-['"'] before:absolute before:left-0 before:top-0 before:text-4xl before:opacity-80 after:content-['"'] after:absolute after:-bottom-4 after:right-0 after:text-4xl after:opacity-80 ${
                  isDark 
                    ? 'before:testimonials-quote-mark-dark after:testimonials-quote-mark-dark' 
                    : 'before:text-indigo-400 after:text-indigo-400'
                }`}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;