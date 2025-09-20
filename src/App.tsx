import React, { useState } from 'react';
import { PortfolioData } from './types/portfolio';
import Header from './components/Header';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import ExportSection from './components/ExportSection';

const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    website: '',
    dateOfBirth: '',
    nationality: '',
    languages: [],
    availability: '',
    resumeUrl: '',
  },
  socialLinks: [],
  skills: [],
  experiences: [],
  projects: [],
  education: [],
  certifications: [],
  testimonials: [],
  achievements: [],
  theme: {
    primaryColor: '#3b82f6',
    secondaryColor: '#1e40af',
    accentColor: '#06b6d4',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    fontFamily: 'Inter',
    layout: 'modern',
    template: 'modern-light',
  },
};

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [activeSection, setActiveSection] = useState<string>('personal');

  const updatePortfolioData = (section: keyof PortfolioData, data: any) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-8rem)]">
            {/* Form Section */}
            <div className="flex flex-col space-y-6 h-full">
              <FormSection
                portfolioData={portfolioData}
                updatePortfolioData={updatePortfolioData}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </div>
            
            {/* Preview Section */}
            <div className="flex flex-col space-y-6 h-full">
              <div className="flex-1">
                <PreviewSection portfolioData={portfolioData} />
              </div>
              <div className="flex-shrink-0">
                <ExportSection portfolioData={portfolioData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '6s' }}></div>
      </div>
    </div>
  );
}

export default App;
