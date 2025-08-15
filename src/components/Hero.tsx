import React from 'react';
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Your
              <span className="block text-orange-500">Dreams Into</span>
              Reality
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              With over 25 years of experience, Verdant Value Ventures delivers exceptional 
              quality in residential and commercial construction projects. From concept 
              to completion, we build with precision, integrity, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors group">
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-orange-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-orange-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Wrench className="text-orange-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;