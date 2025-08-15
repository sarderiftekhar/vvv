import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/Logo.png" 
                alt="Verdant Value Ventures" 
                className="h-14 w-auto"
              />
              <span className="text-xl text-green-600 ml-4 tracking-wider montserrat-elegant">Verdant Value Ventures</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={16} className="mr-2 text-orange-600" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail size={16} className="mr-2 text-orange-600" />
              <span>info@verdantvalueventures.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-orange-600" />
                <span>info@verdantvalueventures.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;