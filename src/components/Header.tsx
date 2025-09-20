import React, { useState, useEffect } from 'react';
import { Palette, Code, Download, Sparkles, Zap, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Palette, text: '8+ Templates', color: 'from-pink-500 via-purple-500 to-indigo-500' },
    { icon: Download, text: 'ZIP Export', color: 'from-emerald-500 via-teal-500 to-cyan-500' },
    { icon: Shield, text: 'Responsive', color: 'from-blue-500 via-sky-500 to-cyan-500' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
        : 'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 floating-animation ${
              isScrolled 
                ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Code className={`w-8 h-8 transition-all duration-300 icon-hover ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <div className="slide-in">
              <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Portfolio Generator
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-primary-100'
              }`}>
                Create stunning personal portfolios in minutes
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-white/10 text-primary-100 hover:bg-white/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-1 rounded-lg bg-gradient-to-r ${feature.color} transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full floating-animation"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-4 left-1/3 w-16 h-16 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>
    </header>
  );
};

export default Header;
