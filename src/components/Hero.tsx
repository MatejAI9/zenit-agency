import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="onlyfans1.png" 
          alt="" 
          className="w-96 h-96 object-contain opacity-20 blur-sm"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative">
            {/* Background accents */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute top-20 right-1/4 w-24 h-24 bg-pink-100 rounded-full opacity-20 -z-10"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We <span className="text-blue-500">Manage</span>, You Enjoy The <span className="text-pink-500">Income</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              <strong>At Zenit Agency, we specialize in full-service OnlyFans management.</strong> From content strategy and social media growth to messaging and monetization — we handle every aspect of your account. Our mission is simple: we turn your content into passive income while you focus on creating. You create – we grow, promote, and profit.
            </p>
            
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Earning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
