import React from 'react';
import { Camera, Users, Megaphone, DollarSign } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "You create content with our guidance and strategic direction."
    },
    {
      icon: Users,
      title: "Account Managing",
      description: "We manage all social media channels and interact with your fans."
    },
    {
      icon: Megaphone,
      title: "Promoting",
      description: "We attract fans through proven social media strategies."
    },
    {
      icon: DollarSign,
      title: "Monetizing",
      description: "We funnel fans to your OnlyFans account and maximize your earnings."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Does Zenit Do It?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process transforms your content into consistent revenue streams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center flex-grow">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;