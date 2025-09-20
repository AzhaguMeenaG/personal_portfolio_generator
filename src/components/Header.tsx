import React from 'react';
import { Palette, Code, Download } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
              <Code className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Portfolio Generator</h1>
              <p className="text-primary-100">Create stunning personal portfolios in minutes</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-primary-100 bg-white/10 px-3 py-2 rounded-lg">
              <Palette className="w-4 h-4" />
              <span>8+ Templates</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-100 bg-white/10 px-3 py-2 rounded-lg">
              <Download className="w-4 h-4" />
              <span>ZIP Export</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-100 bg-white/10 px-3 py-2 rounded-lg">
              <Code className="w-4 h-4" />
              <span>Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
