import React from 'react';
import { Shield, TrendingUp, Clock, Users, Heart, Headphones } from 'lucide-react';

const WhyHireUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Less Stress",
      description: "Focus on creating while we handle the business side completely."
    },
    {
      icon: TrendingUp,
      title: "Higher Income",
      description: "Our proven strategies consistently increase creator earnings by 200%+."
    },
    {
      icon: Clock,
      title: "Almost Passive Income",
      description: "Earn money around the clock with minimal daily involvement required."
    },
    {
      icon: Users,
      title: "Professional Growth",
      description: "Transform your content creation into a sustainable, professional business."
    },
    {
      icon: Heart,
      title: "Personal Approach",
      description: "Every creator gets a dedicated manager who understands their unique goals."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need guidance or support."
    }
  ];

  return (
    <section id="why-hire-us" className="py-16 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Hire Us?
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join hundreds of creators who've transformed their passion into profit with Zenit Agency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-white opacity-90 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-white mb-4">
            Ready to multiply your earnings?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;