import React from 'react';
import { PortfolioData } from '../types/portfolio';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SkillsForm from './forms/SkillsForm';
import ExperienceForm from './forms/ExperienceForm';
import ProjectsForm from './forms/ProjectsForm';
import EducationForm from './forms/EducationForm';
import SocialLinksForm from './forms/SocialLinksForm';
import CertificationsForm from './forms/CertificationsForm';
import TestimonialsForm from './forms/TestimonialsForm';
import AchievementsForm from './forms/AchievementsForm';
import ThemeForm from './forms/ThemeForm';

interface FormSectionProps {
  portfolioData: PortfolioData;
  updatePortfolioData: (section: keyof PortfolioData, data: any) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'personal', label: 'Personal Info', icon: '👤' },
  { id: 'social', label: 'Social Links', icon: '🔗' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'certifications', label: 'Certifications', icon: '🏆' },
  { id: 'testimonials', label: 'Testimonials', icon: '💬' },
  { id: 'achievements', label: 'Achievements', icon: '⭐' },
  { id: 'theme', label: 'Theme', icon: '🎨' },
];

const FormSection: React.FC<FormSectionProps> = ({
  portfolioData,
  updatePortfolioData,
  activeSection,
  setActiveSection,
}) => {
  const renderForm = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <PersonalInfoForm
            data={portfolioData.personalInfo}
            updateData={(data) => updatePortfolioData('personalInfo', data)}
          />
        );
      case 'social':
        return (
          <SocialLinksForm
            data={portfolioData.socialLinks}
            updateData={(data) => updatePortfolioData('socialLinks', data)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={portfolioData.skills}
            updateData={(data) => updatePortfolioData('skills', data)}
          />
        );
      case 'experience':
        return (
          <ExperienceForm
            data={portfolioData.experiences}
            updateData={(data) => updatePortfolioData('experiences', data)}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            data={portfolioData.projects}
            updateData={(data) => updatePortfolioData('projects', data)}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={portfolioData.education}
            updateData={(data) => updatePortfolioData('education', data)}
          />
        );
      case 'certifications':
        return (
          <CertificationsForm
            data={portfolioData.certifications}
            updateData={(data) => updatePortfolioData('certifications', data)}
          />
        );
      case 'testimonials':
        return (
          <TestimonialsForm
            data={portfolioData.testimonials}
            updateData={(data) => updatePortfolioData('testimonials', data)}
          />
        );
      case 'achievements':
        return (
          <AchievementsForm
            data={portfolioData.achievements}
            updateData={(data) => updatePortfolioData('achievements', data)}
          />
        );
      case 'theme':
        return (
          <ThemeForm
            data={portfolioData.theme}
            updateData={(data) => updatePortfolioData('theme', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Sections</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === section.id
                  ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="text-lg mb-1">{section.icon}</div>
              <div>{section.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="card">
        {renderForm()}
      </div>
    </div>
  );
};

export default FormSection;
