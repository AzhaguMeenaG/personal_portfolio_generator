# Portfolio Generator

A comprehensive, TypeScript-based React application for generating stunning personal portfolio websites. Create professional portfolios with multiple templates, live preview, and complete export functionality including ZIP downloads.

## ✨ Features

- **🎨 8+ Beautiful Templates**: Modern Light, Modern Dark, Creative Vibrant, Professional Blue, Minimal Clean, Tech Gradient, Warm Sunset, Ocean Breeze
- **📱 Fully Responsive**: Mobile-first design with tablet and desktop preview modes
- **👁️ Live Preview**: Real-time preview with instant theme switching
- **📄 Comprehensive Sections**: Personal info, skills, experience, projects, education, certifications, testimonials, achievements, and social links
- **💾 Multiple Export Options**: Complete ZIP download with HTML, CSS, JS, and README files
- **⚡ Modern Tech Stack**: Built with TypeScript, React, and Tailwind CSS
- **🎯 User-Friendly**: Intuitive step-by-step interface with form validation
- **🚀 Ready to Deploy**: Generated portfolios are production-ready

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📖 How to Use

### 1. Personal Information
Fill in your comprehensive details including name, title, contact information, bio, website, date of birth, nationality, languages, availability status, and resume URL.

### 2. Social Links
Add your social media profiles and professional links with platform-specific icons.

### 3. Skills
List your technical skills with proficiency levels (1-5 scale) and categorize them.

### 4. Experience
Add your work experience with detailed descriptions, achievements, and current status.

### 5. Projects
Showcase your projects with technologies used, live links, GitHub URLs, and featured status.

### 6. Education
Include your educational background, degrees, institutions, and achievements.

### 7. Certifications
Add professional certifications with issuing organizations, dates, and credential IDs.

### 8. Testimonials
Include recommendations from colleagues, clients, or supervisors with ratings.

### 9. Achievements
Showcase awards, recognitions, and professional milestones.

### 10. Theme Selection
- Choose from 8+ pre-designed templates
- Customize colors, fonts, and layouts
- Preview changes in real-time

### 11. Preview & Export
- Use live preview with mobile/tablet/desktop views
- Download complete portfolio as ZIP file
- Export individual files (HTML, JSON, README)

## 🎨 Available Templates

### Business Templates
- **Modern Light**: Clean and contemporary design with light colors
- **Professional Blue**: Corporate and trustworthy design
- **Ocean Breeze**: Calm and professional with ocean-inspired colors

### Creative Templates
- **Creative Vibrant**: Bold and colorful design for creative professionals
- **Warm Sunset**: Warm and inviting colors for personal brands

### Tech Templates
- **Modern Dark**: Sleek dark theme with vibrant accents
- **Tech Gradient**: Modern gradient design for tech professionals

### Minimal Templates
- **Minimal Clean**: Simple and elegant with focus on content

### Customization Options
- **Color Schemes**: Each template includes primary, secondary, accent, background, and text colors
- **Fonts**: Inter, Roboto, Open Sans, Lato, Poppins, Montserrat
- **Layouts**: Modern, Classic, Minimal, Creative, Professional, Dark

## 📁 Project Structure

```
portfolio_generator/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── PersonalInfoForm.tsx
│   │   │   ├── SkillsForm.tsx
│   │   │   ├── ExperienceForm.tsx
│   │   │   ├── ProjectsForm.tsx
│   │   │   ├── EducationForm.tsx
│   │   │   ├── SocialLinksForm.tsx
│   │   │   ├── CertificationsForm.tsx
│   │   │   ├── TestimonialsForm.tsx
│   │   │   ├── AchievementsForm.tsx
│   │   │   └── ThemeForm.tsx
│   │   ├── Header.tsx
│   │   ├── FormSection.tsx
│   │   ├── PreviewSection.tsx
│   │   └── ExportSection.tsx
│   ├── data/
│   │   └── templates.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🔧 Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Create React App** - Build tooling and development server

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom` - Core React library
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework
- `lucide-react` - Icon library
- `jszip` - ZIP file generation
- `file-saver` - File download functionality

### Development Dependencies
- `@types/react` & `@types/react-dom` - TypeScript definitions
- `@types/jszip` - TypeScript definitions for JSZip
- `@types/file-saver` - TypeScript definitions for file-saver
- `react-scripts` - Build and development tools

## 🚀 Deployment

### Option 1: Static Hosting
1. Run `npm run build`
2. Upload the `build` folder to any static hosting service
3. Popular options: Netlify, Vercel, GitHub Pages

### Option 2: GitHub Pages
1. Build the project: `npm run build`
2. Push the `build` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 3: Traditional Web Hosting
1. Download the complete ZIP file from the generator
2. Extract the ZIP file
3. Upload all files (HTML, CSS, JS) to your web server
4. Ensure index.html is in the root directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🎯 Future Enhancements

- [ ] Additional portfolio templates and layouts
- [ ] PDF export functionality
- [ ] Portfolio analytics and visitor tracking
- [ ] Custom domain integration
- [ ] Team collaboration features
- [ ] Portfolio sharing and collaboration
- [ ] Advanced customization options
- [ ] Integration with popular CMS platforms
- [ ] SEO optimization tools
- [ ] Multi-language support

---

**Happy Portfolio Building! 🚀**

Built with ❤️ using React, TypeScript, and Tailwind CSS.
