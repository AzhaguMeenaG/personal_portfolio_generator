import { Template } from '../types/portfolio';

export const templates: Template[] = [
  {
    id: 'modern-light',
    name: 'Modern Light',
    description: 'Clean and contemporary design with light colors',
    preview: '✨',
    layout: 'modern',
    category: 'business',
    colors: {
      primary: '#3b82f6',
      secondary: '#1e40af',
      accent: '#06b6d4',
      background: '#ffffff',
      text: '#1f2937'
    }
  },
  {
    id: 'modern-dark',
    name: 'Modern Dark',
    description: 'Sleek dark theme with vibrant accents',
    preview: '🌙',
    layout: 'dark',
    category: 'tech',
    colors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#f59e0b',
      background: '#111827',
      text: '#f9fafb'
    }
  },
  {
    id: 'creative-vibrant',
    name: 'Creative Vibrant',
    description: 'Bold and colorful design for creative professionals',
    preview: '🎨',
    layout: 'creative',
    category: 'creative',
    colors: {
      primary: '#ec4899',
      secondary: '#be185d',
      accent: '#f59e0b',
      background: '#fefefe',
      text: '#1f2937'
    }
  },
  {
    id: 'professional-blue',
    name: 'Professional Blue',
    description: 'Corporate and trustworthy design',
    preview: '💼',
    layout: 'professional',
    category: 'business',
    colors: {
      primary: '#1e40af',
      secondary: '#1e3a8a',
      accent: '#059669',
      background: '#ffffff',
      text: '#374151'
    }
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'Simple and elegant with focus on content',
    preview: '⚪',
    layout: 'minimal',
    category: 'minimal',
    colors: {
      primary: '#374151',
      secondary: '#6b7280',
      accent: '#10b981',
      background: '#ffffff',
      text: '#111827'
    }
  },
  {
    id: 'tech-gradient',
    name: 'Tech Gradient',
    description: 'Modern gradient design for tech professionals',
    preview: '🚀',
    layout: 'modern',
    category: 'tech',
    colors: {
      primary: '#6366f1',
      secondary: '#4f46e5',
      accent: '#06b6d4',
      background: '#ffffff',
      text: '#1f2937'
    }
  },
  {
    id: 'warm-sunset',
    name: 'Warm Sunset',
    description: 'Warm and inviting colors for personal brands',
    preview: '🌅',
    layout: 'creative',
    category: 'creative',
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#eab308',
      background: '#fefefe',
      text: '#1f2937'
    }
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Calm and professional with ocean-inspired colors',
    preview: '🌊',
    layout: 'professional',
    category: 'business',
    colors: {
      primary: '#0891b2',
      secondary: '#0e7490',
      accent: '#059669',
      background: '#ffffff',
      text: '#1f2937'
    }
  }
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): Template[] => {
  return templates.filter(template => template.category === category);
};
