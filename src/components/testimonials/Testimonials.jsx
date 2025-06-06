import React from 'react';

const Testimonials = () => {
  // Updated testimonialsData for white theme - removed specific gradient properties, will apply them uniformly in JSX
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
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle Animated Background Elements for White Theme */}
      <div className="blob w-96 h-96 bg-indigo-100 absolute top-0 left-1/4 opacity-30 rounded-full filter blur-2xl animation-delay-300"></div>
      <div className="blob w-96 h-96 bg-purple-100 absolute bottom-0 right-1/4 opacity-30 rounded-full filter blur-2xl animation-delay-800"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Words From My Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto text-md md:text-lg">
            Discover what industry leaders and collaborators are saying about their experience working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group relative overflow-hidden"
            >
              <div className={`absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
              <div className="relative z-10">
                <div className="flex items-center mb-5 md:mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 md:mr-5 border-2 border-indigo-300 shadow-md"/>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500`}>{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base relative pl-8 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-4xl before:text-indigo-400 before:opacity-80 after:content-['”'] after:absolute after:-bottom-4 after:right-0 after:text-4xl after:text-indigo-400 after:opacity-80">
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