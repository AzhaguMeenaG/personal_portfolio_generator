import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { User, Link, Zap, Briefcase, Rocket, GraduationCap, Award, MessageCircle, Star, Palette } from 'lucide-react';
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
  { id: 'personal', label: 'Personal Info', icon: User, color: 'from-blue-500 via-cyan-500 to-teal-500' },
  { id: 'social', label: 'Social Links', icon: Link, color: 'from-purple-500 via-pink-500 to-rose-500' },
  { id: 'skills', label: 'Skills', icon: Zap, color: 'from-yellow-500 via-orange-500 to-red-500' },
  { id: 'experience', label: 'Experience', icon: Briefcase, color: 'from-green-500 via-emerald-500 to-teal-500' },
  { id: 'projects', label: 'Projects', icon: Rocket, color: 'from-red-500 via-pink-500 to-purple-500' },
  { id: 'education', label: 'Education', icon: GraduationCap, color: 'from-indigo-500 via-blue-500 to-cyan-500' },
  { id: 'certifications', label: 'Certifications', icon: Award, color: 'from-amber-500 via-yellow-500 to-orange-500' },
  { id: 'testimonials', label: 'Testimonials', icon: MessageCircle, color: 'from-teal-500 via-cyan-500 to-blue-500' },
  { id: 'achievements', label: 'Achievements', icon: Star, color: 'from-pink-500 via-rose-500 to-red-500' },
  { id: 'theme', label: 'Theme', icon: Palette, color: 'from-violet-500 via-purple-500 to-indigo-500' },
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
    <div className="space-y-6 h-full">
      {/* Navigation */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold gradient-text">Portfolio Sections</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`nav-item group ${
                activeSection === section.id ? 'active' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} transition-all duration-300 group-hover:scale-110`}>
                <section.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs font-medium text-center">{section.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="card flex-1 min-h-0">
        <div className="fade-in">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
