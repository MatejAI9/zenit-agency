import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Does Zenit Do?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We're not just another agency – we're your dedicated revenue partners. 
            Zenit Agency specializes in transforming OnlyFans creators into profitable businesses 
            through strategic management, proven marketing techniques, and 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Strategic Focus</h3>
            <p className="text-white opacity-90">
              We analyze your unique strengths and create tailored strategies that maximize your earning potential.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Complete Management</h3>
            <p className="text-white opacity-90">
              From content scheduling to fan interaction, we handle every aspect of your online presence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-white opacity-90">
              Our track record speaks for itself – consistent growth, higher earnings, and satisfied creators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;