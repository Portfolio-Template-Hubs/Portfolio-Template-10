import React from 'react';

const Services = () => {
  // Updated servicesData for white theme - removed specific color properties, will apply them uniformly in JSX
  const servicesData = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Crafting responsive and high-performance websites using modern technologies like React, Next.js, and Node.js.',
      gradient: 'from-[#FF69B4] to-[#8A2BE2]',
      borderColor: 'border-[#FF69B4]/30'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'Building intuitive and engaging mobile applications for iOS and Android platforms using React Native and native technologies.',
      gradient: 'from-[#8A2BE2] to-[#4B0082]',
      borderColor: 'border-[#8A2BE2]/30'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that are both aesthetically pleasing and highly functional, using tools like Figma and Adobe XD.',
      gradient: 'from-[#4B0082] to-[#FF69B4]',
      borderColor: 'border-[#4B0082]/30'
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      title: 'Cloud Solutions & DevOps',
      description: 'Implementing scalable cloud infrastructure and CI/CD pipelines on AWS, Azure, and GCP to ensure robust and efficient deployments.',
      gradient: 'from-[#FF69B4] to-[#8A2BE2]',
      borderColor: 'border-[#FF69B4]/30'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle Animated Background Elements for White Theme */}
      <div className="blob w-80 h-80 bg-indigo-100 absolute -top-20 -left-20 opacity-30 rounded-full filter blur-2xl animation-delay-300"></div>
      <div className="blob w-80 h-80 bg-purple-100 absolute -bottom-20 -right-20 opacity-30 rounded-full filter blur-2xl animation-delay-800"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Services I Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto text-md md:text-lg">
            Leveraging my expertise to deliver comprehensive solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 md:p-8 rounded-xl text-center group border border-gray-200 hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md mb-5 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl md:text-3xl`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;