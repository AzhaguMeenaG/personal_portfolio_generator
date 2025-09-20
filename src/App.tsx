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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <FormSection
              portfolioData={portfolioData}
              updatePortfolioData={updatePortfolioData}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            <PreviewSection portfolioData={portfolioData} />
            <ExportSection portfolioData={portfolioData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
