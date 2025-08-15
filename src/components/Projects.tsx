import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Residential Complex',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      description: 'Luxury 50-unit residential complex with modern amenities and sustainable design.',
    },
    {
      title: 'Downtown Office Building',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
      description: '15-story office building featuring state-of-the-art technology and LEED certification.',
    },
    {
      title: 'Custom Family Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      description: '5,000 sq ft custom home with premium finishes and smart home integration.',
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg',
      description: '200,000 sq ft distribution center with advanced logistics systems.',
    },
    {
      title: 'Historic Renovation',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Complete restoration of 1920s historic building preserving original character.',
    },
    {
      title: 'Retail Shopping Center',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      description: '75,000 sq ft shopping center with mixed-use residential units above.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects that showcase our 
            commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
            View All Projects
            <ExternalLink className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;