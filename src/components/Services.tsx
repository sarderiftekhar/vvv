import React from 'react';
import { Home, Building, Wrench, Paintbrush, Hammer, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, additions, and residential remodeling projects tailored to your vision.',
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, warehouses, and commercial facilities built to industry standards.',
    },
    {
      icon: Wrench,
      title: 'General Contracting',
      description: 'Complete project management from permits to final inspection, ensuring seamless execution.',
    },
    {
      icon: Paintbrush,
      title: 'Interior Renovations',
      description: 'Kitchen remodels, bathroom upgrades, flooring, and complete interior transformations.',
    },
    {
      icon: Hammer,
      title: 'Structural Work',
      description: 'Foundation work, framing, roofing, and structural repairs with expert craftsmanship.',
    },
    {
      icon: TreePine,
      title: 'Outdoor Living',
      description: 'Decks, patios, landscaping, and outdoor structures to enhance your property.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial buildings, we offer comprehensive construction 
            services with unmatched quality and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <Icon className="text-orange-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;