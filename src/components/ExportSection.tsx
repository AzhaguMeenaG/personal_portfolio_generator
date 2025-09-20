import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Download, Code, FileText, Palette, Archive } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface ExportSectionProps {
  portfolioData: PortfolioData;
}

const ExportSection: React.FC<ExportSectionProps> = ({ portfolioData }) => {
  const generateHTML = () => {
    const { personalInfo, theme, skills, experiences, projects, education, socialLinks } = portfolioData;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo.name || 'Portfolio'} - ${personalInfo.title || 'Professional'}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=${theme.fontFamily.replace(' ', '+')}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: '${theme.fontFamily}', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .header {
            background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor});
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .nav {
            background: #f8f9fa;
            padding: 20px 0;
            text-align: center;
        }
        
        .nav a {
            color: #666;
            text-decoration: none;
            margin: 0 20px;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav a:hover {
            color: ${theme.primaryColor};
        }
        
        .section {
            padding: 60px 0;
        }
        
        .section h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: ${theme.primaryColor};
            text-align: center;
        }
        
        .about {
            background: white;
        }
        
        .about p {
            font-size: 1.1rem;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        
        .skills {
            background: #f8f9fa;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }
        
        .skill-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        
        .skill-bar {
            width: 100%;
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .skill-progress {
            height: 100%;
            background: ${theme.primaryColor};
            transition: width 0.3s ease;
        }
        
        .experience {
            background: white;
        }
        
        .exp-item {
            border-left: 4px solid ${theme.primaryColor};
            padding-left: 20px;
            margin-bottom: 30px;
        }
        
        .exp-item h3 {
            font-size: 1.3rem;
            margin-bottom: 5px;
        }
        
        .exp-item .company {
            color: #666;
            font-weight: 500;
        }
        
        .exp-item .date {
            color: #999;
            font-size: 0.9rem;
        }
        
        .projects {
            background: #f8f9fa;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .project-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
        }
        
        .project-card h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
            color: ${theme.primaryColor};
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 15px 0;
        }
        
        .tech-tag {
            background: ${theme.secondaryColor};
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .project-links {
            margin-top: 20px;
        }
        
        .project-links a {
            color: ${theme.primaryColor};
            text-decoration: none;
            margin-right: 20px;
            font-weight: 500;
        }
        
        .education {
            background: white;
        }
        
        .edu-item {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        
        .edu-item h3 {
            font-size: 1.3rem;
            margin-bottom: 5px;
        }
        
        .edu-item .institution {
            color: #666;
            font-weight: 500;
        }
        
        .contact {
            background: #f8f9fa;
        }
        
        .contact-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 40px;
        }
        
        .contact-info p {
            margin-bottom: 10px;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-links a {
            font-size: 1.5rem;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        
        .social-links a:hover {
            opacity: 0.7;
        }
        
        .footer {
            background: ${theme.secondaryColor};
            color: white;
            text-align: center;
            padding: 30px 0;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .nav a {
                display: block;
                margin: 10px 0;
            }
            
            .section h2 {
                font-size: 2rem;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>${personalInfo.name || 'Your Name'}</h1>
            <p>${personalInfo.title || 'Your Professional Title'}</p>
        </div>
    </header>

    <nav class="nav">
        <div class="container">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <main>
        <section id="about" class="section about">
            <div class="container">
                <h2>About Me</h2>
                <p>${personalInfo.bio || 'Tell your story here...'}</p>
            </div>
        </section>

        ${skills.length > 0 ? `
        <section id="skills" class="section skills">
            <div class="container">
                <h2>Skills</h2>
                <div class="skills-grid">
                    ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span>${skill.name}</span>
                            <span>${skill.level}/5</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${(skill.level / 5) * 100}%"></div>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        ${experiences.length > 0 ? `
        <section id="experience" class="section experience">
            <div class="container">
                <h2>Experience</h2>
                ${experiences.map(exp => `
                <div class="exp-item">
                    <h3>${exp.position}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</p>
                    <p>${exp.description}</p>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        ${projects.length > 0 ? `
        <section id="projects" class="section projects">
            <div class="container">
                <h2>Projects</h2>
                <div class="projects-grid">
                    ${projects.map(project => `
                    <div class="project-card">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
                            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">GitHub</a>` : ''}
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        ${education.length > 0 ? `
        <section id="education" class="section education">
            <div class="container">
                <h2>Education</h2>
                ${education.map(edu => `
                <div class="edu-item">
                    <h3>${edu.degree} in ${edu.field}</h3>
                    <p class="institution">${edu.institution}</p>
                    <p class="date">${edu.startDate} - ${edu.endDate || 'Present'}${edu.gpa ? ` • GPA: ${edu.gpa}` : ''}</p>
                    ${edu.description ? `<p>${edu.description}</p>` : ''}
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        <section id="contact" class="section contact">
            <div class="container">
                <h2>Contact</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <p><strong>Email:</strong> ${personalInfo.email || 'your@email.com'}</p>
                        <p><strong>Phone:</strong> ${personalInfo.phone || 'Your Phone'}</p>
                        <p><strong>Location:</strong> ${personalInfo.location || 'Your Location'}</p>
                    </div>
                    <div>
                        <h3>Connect with me</h3>
                        <div class="social-links">
                            ${socialLinks.map(link => `<a href="${link.url}" target="_blank" title="${link.platform}">${link.icon}</a>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 ${personalInfo.name || 'Your Name'}. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
  };

  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.personalInfo.name || 'portfolio'}-portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadJSON = () => {
    const json = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.personalInfo.name || 'portfolio'}-data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadReadme = () => {
    const readme = `# ${portfolioData.personalInfo.name || 'Portfolio'} Portfolio

## About
${portfolioData.personalInfo.bio || 'Professional portfolio website'}

## Features
- Responsive design
- Modern UI/UX
- Customizable theme
- Mobile-friendly

## Technologies Used
${portfolioData.skills.map(skill => `- ${skill.name}`).join('\n')}

## Projects
${portfolioData.projects.map(project => `### ${project.name}\n${project.description}\nTechnologies: ${project.technologies.join(', ')}`).join('\n\n')}

## Contact
- Email: ${portfolioData.personalInfo.email || 'your@email.com'}
- Phone: ${portfolioData.personalInfo.phone || 'Your Phone'}
- Location: ${portfolioData.personalInfo.location || 'Your Location'}

## Social Links
${portfolioData.socialLinks.map(link => `- [${link.platform}](${link.url})`).join('\n')}

---
Generated with Portfolio Generator
`;

    const blob = new Blob([readme], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateCSS = () => {
    const { theme } = portfolioData;
    return `/* Portfolio Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: '${theme.fontFamily}', sans-serif;
  line-height: 1.6;
  color: ${theme.textColor};
  background-color: ${theme.backgroundColor};
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor});
  color: white;
  padding: 60px 0;
  text-align: center;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.nav {
  background: #f8f9fa;
  padding: 20px 0;
  text-align: center;
}

.nav a {
  color: #666;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: ${theme.primaryColor};
}

.section {
  padding: 60px 0;
}

.section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${theme.primaryColor};
  text-align: center;
}

.about {
  background: ${theme.backgroundColor};
}

.about p {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.skills {
  background: #f8f9fa;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.skill-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: ${theme.primaryColor};
  transition: width 0.3s ease;
}

.experience {
  background: ${theme.backgroundColor};
}

.exp-item {
  border-left: 4px solid ${theme.primaryColor};
  padding-left: 20px;
  margin-bottom: 30px;
}

.exp-item h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.exp-item .company {
  color: #666;
  font-weight: 500;
}

.exp-item .date {
  color: #999;
  font-size: 0.9rem;
}

.projects {
  background: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: ${theme.primaryColor};
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.tech-tag {
  background: ${theme.secondaryColor};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  margin-top: 20px;
}

.project-links a {
  color: ${theme.primaryColor};
  text-decoration: none;
  margin-right: 20px;
  font-weight: 500;
}

.education {
  background: ${theme.backgroundColor};
}

.edu-item {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.edu-item h3 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.edu-item .institution {
  color: #666;
  font-weight: 500;
}

.contact {
  background: #f8f9fa;
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.contact-info p {
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  font-size: 1.5rem;
  text-decoration: none;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 0.7;
}

.footer {
  background: ${theme.secondaryColor};
  color: white;
  text-align: center;
  padding: 30px 0;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .nav a {
    display: block;
    margin: 10px 0;
  }
  
  .section h2 {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}`;
  };

  const generateJS = () => {
    return `// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const animateSkillBars = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !bar.classList.contains('animated')) {
        bar.classList.add('animated');
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    });
  };

  // Throttle scroll event
  let ticking = false;
  
  function updateOnScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        animateSkillBars();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', updateOnScroll);
  
  // Initial check
  animateSkillBars();

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Mobile menu toggle (if needed)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});`;
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    
    // Add HTML file
    zip.file('index.html', generateHTML());
    
    // Add CSS file
    zip.file('styles.css', generateCSS());
    
    // Add JavaScript file
    zip.file('script.js', generateJS());
    
    // Add README
    const readme = `# ${portfolioData.personalInfo.name || 'Portfolio'} Portfolio

## About
${portfolioData.personalInfo.bio || 'Professional portfolio website'}

## Features
- Responsive design
- Modern UI/UX
- Customizable theme
- Mobile-friendly

## Technologies Used
${portfolioData.skills.map(skill => `- ${skill.name}`).join('\n')}

## Projects
${portfolioData.projects.map(project => `### ${project.name}\n${project.description}\nTechnologies: ${project.technologies.join(', ')}`).join('\n\n')}

## Contact
- Email: ${portfolioData.personalInfo.email || 'your@email.com'}
- Phone: ${portfolioData.personalInfo.phone || 'Your Phone'}
- Location: ${portfolioData.personalInfo.location || 'Your Location'}

## Social Links
${portfolioData.socialLinks.map(link => `- [${link.platform}](${link.url})`).join('\n')}

## Deployment Instructions

1. Extract the zip file
2. Upload all files to your web hosting service
3. Ensure index.html is in the root directory
4. Your portfolio will be live!

## File Structure
- index.html - Main portfolio page
- styles.css - All styling and responsive design
- script.js - Interactive features and animations
- README.md - This documentation

---
Generated with Portfolio Generator
`;
    zip.file('README.md', readme);
    
    // Generate and download zip
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${portfolioData.personalInfo.name || 'portfolio'}-portfolio.zip`);
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Portfolio</h3>
      <p className="text-sm text-gray-600 mb-6">
        Download your portfolio in different formats to deploy or share.
      </p>

      <div className="space-y-4">
        <button
          onClick={downloadZip}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Archive className="w-5 h-5" />
          <span>Download Complete Portfolio (ZIP)</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={downloadHTML}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Code className="w-4 h-4" />
            <span>HTML Only</span>
          </button>

          <button
            onClick={downloadJSON}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Data (JSON)</span>
          </button>
        </div>

        <button
          onClick={downloadReadme}
          className="w-full btn-secondary flex items-center justify-center space-x-2"
        >
          <FileText className="w-4 h-4" />
          <span>Download README</span>
        </button>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-900 mb-2">🚀 Deployment Tips</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>ZIP Download:</strong> Complete portfolio with HTML, CSS, JS, and README</li>
          <li>• <strong>Free Hosting:</strong> GitHub Pages, Netlify, or Vercel</li>
          <li>• <strong>Custom Domain:</strong> Connect your own domain name</li>
          <li>• <strong>Backup:</strong> Save JSON file to restore your data later</li>
        </ul>
      </div>
    </div>
  );
};

export default ExportSection;
