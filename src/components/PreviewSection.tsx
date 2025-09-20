import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Eye, Smartphone, Monitor } from 'lucide-react';

interface PreviewSectionProps {
  portfolioData: PortfolioData;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ portfolioData }) => {
  const [viewMode, setViewMode] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  const renderPreview = () => {
    const { personalInfo, theme, skills, experiences, projects, education, socialLinks, certifications, testimonials, achievements } = portfolioData;

    return (
      <div 
        className="bg-white min-h-screen"
        style={{ 
          fontFamily: theme.fontFamily,
          '--primary-color': theme.primaryColor,
          '--secondary-color': theme.secondaryColor,
        } as React.CSSProperties}
      >
        {/* Header */}
        <header 
          className="py-8 px-6 text-white"
          style={{ backgroundColor: theme.primaryColor }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {personalInfo.profileImage && (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                />
              )}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {personalInfo.name || 'Your Name'}
                </h1>
                <p className="text-xl opacity-90 mb-2">
                  {personalInfo.title || 'Your Title'}
                </p>
                <p className="opacity-80">
                  {personalInfo.location || 'Your Location'}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-primary-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-primary-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-primary-600 transition-colors">Education</a>
              {certifications.length > 0 && <a href="#certifications" className="text-gray-700 hover:text-primary-600 transition-colors">Certifications</a>}
              {testimonials.length > 0 && <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>}
              {achievements.length > 0 && <a href="#achievements" className="text-gray-700 hover:text-primary-600 transition-colors">Achievements</a>}
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-8 space-y-12">
          {/* About Section */}
          <section id="about">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primaryColor }}>
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.bio || 'Tell your story here...'}
            </p>
          </section>

          {/* Skills Section */}
          {skills.length > 0 && (
            <section id="skills">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${(skill.level / 5) * 100}%`,
                          backgroundColor: theme.primaryColor 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Experience Section */}
          {experiences.length > 0 && (
            <section id="experience">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-l-4 pl-4" style={{ borderColor: theme.primaryColor }}>
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </p>
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {projects.length > 0 && (
            <section id="projects">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full text-white"
                          style={{ backgroundColor: theme.secondaryColor }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-primary-600 hover:text-primary-800 text-sm"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-primary-600 hover:text-primary-800 text-sm"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <section id="education">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate || 'Present'}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                    {edu.description && (
                      <p className="mt-2 text-gray-700">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {certifications.length > 0 && (
            <section id="certifications">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
                    )}
                    {cert.description && (
                      <p className="mt-2 text-gray-700">{cert.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials Section */}
          {testimonials.length > 0 && (
            <section id="testimonials">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position && `${testimonial.position} at `}
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    {testimonial.rating && (
                      <div className="flex items-center mt-3">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`text-lg ${i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements Section */}
          {achievements.length > 0 && (
            <section id="achievements">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      {achievement.imageUrl && (
                        <img
                          src={achievement.imageUrl}
                          alt={achievement.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primaryColor }}>
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> {personalInfo.email || 'your@email.com'}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> {personalInfo.phone || 'Your Phone'}
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> {personalInfo.location || 'Your Location'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Connect with me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="text-2xl hover:opacity-70 transition-opacity"
                      title={link.platform}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="py-6 text-white text-center"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          <p>&copy; 2024 {personalInfo.name || 'Your Name'}. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded ${viewMode === 'tablet' ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Tablet View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded ${viewMode === 'desktop' ? 'bg-primary-100 text-primary-700' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Desktop View"
            >
              <Monitor className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className={`bg-gray-100 p-2 text-center text-sm text-gray-600 ${getViewportClass()}`}>
            <Eye className="w-4 h-4 inline mr-1" />
            Preview Mode
          </div>
          <div className="overflow-auto max-h-96">
            <div className={getViewportClass()}>
              {renderPreview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
