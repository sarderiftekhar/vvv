import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and deliver projects according to schedule.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of combined experience.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Excellence Since 2025
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Verdant Value Ventures has been a trusted name in the construction industry for over 
              two decades. We pride ourselves on delivering exceptional craftsmanship, 
              innovative solutions, and personalized service that exceeds expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of skilled professionals brings together expertise in residential and 
              commercial construction, ensuring every project is completed with the highest 
              standards of quality, safety, and efficiency.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
              alt="Construction tools"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;