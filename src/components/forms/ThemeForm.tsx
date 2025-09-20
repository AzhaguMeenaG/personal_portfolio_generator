import React from 'react';
import { Theme } from '../../types/portfolio';
import { templates } from '../../data/templates';

interface ThemeFormProps {
  data: Theme;
  updateData: (data: Theme) => void;
}

const colorOptions = [
  { name: 'Blue', value: '#3b82f6', class: 'bg-blue-500' },
  { name: 'Purple', value: '#8b5cf6', class: 'bg-purple-500' },
  { name: 'Green', value: '#10b981', class: 'bg-green-500' },
  { name: 'Red', value: '#ef4444', class: 'bg-red-500' },
  { name: 'Orange', value: '#f97316', class: 'bg-orange-500' },
  { name: 'Pink', value: '#ec4899', class: 'bg-pink-500' },
  { name: 'Indigo', value: '#6366f1', class: 'bg-indigo-500' },
  { name: 'Teal', value: '#14b8a6', class: 'bg-teal-500' },
];

const fontOptions = [
  { name: 'Inter', value: 'Inter', class: 'font-sans' },
  { name: 'Roboto', value: 'Roboto', class: 'font-sans' },
  { name: 'Open Sans', value: 'Open Sans', class: 'font-sans' },
  { name: 'Lato', value: 'Lato', class: 'font-sans' },
  { name: 'Poppins', value: 'Poppins', class: 'font-sans' },
  { name: 'Montserrat', value: 'Montserrat', class: 'font-sans' },
];

const layoutOptions = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, contemporary design with cards and gradients',
    preview: '🆕'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout with clean typography',
    preview: '📄'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple, focused design with lots of whitespace',
    preview: '⚪'
  },
];

const ThemeForm: React.FC<ThemeFormProps> = ({ data, updateData }) => {
  const handleChange = (field: keyof Theme, value: string) => {
    updateData({
      ...data,
      [field]: value,
    });
  };

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      updateData({
        ...data,
        template: templateId,
        primaryColor: template.colors.primary,
        secondaryColor: template.colors.secondary,
        accentColor: template.colors.accent,
        backgroundColor: template.colors.background,
        textColor: template.colors.text,
        layout: template.layout,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Theme & Styling</h3>
        <p className="text-sm text-gray-600 mb-6">Choose from pre-designed templates or customize your own theme.</p>
      </div>

      {/* Template Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Choose a Template
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                data.template === template.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{template.preview}</span>
                <div>
                  <div className="font-medium text-gray-900">{template.name}</div>
                  <div className="text-sm text-gray-600">{template.description}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: template.colors.primary }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: template.colors.secondary }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: template.colors.accent }}
                ></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Primary Color */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Primary Color
        </label>
        <div className="grid grid-cols-4 gap-3">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              onClick={() => handleChange('primaryColor', color.value)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                data.primaryColor === color.value
                  ? 'border-gray-400 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-full h-8 rounded ${color.class} mb-2`}></div>
              <div className="text-xs text-gray-600">{color.name}</div>
            </button>
          ))}
        </div>
        <div className="mt-3">
          <input
            type="color"
            value={data.primaryColor}
            onChange={(e) => handleChange('primaryColor', e.target.value)}
            className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
          />
          <span className="ml-2 text-sm text-gray-600">Custom color</span>
        </div>
      </div>

      {/* Secondary Color */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Secondary Color
        </label>
        <div className="grid grid-cols-4 gap-3">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              onClick={() => handleChange('secondaryColor', color.value)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                data.secondaryColor === color.value
                  ? 'border-gray-400 ring-2 ring-primary-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-full h-8 rounded ${color.class} mb-2`}></div>
              <div className="text-xs text-gray-600">{color.name}</div>
            </button>
          ))}
        </div>
        <div className="mt-3">
          <input
            type="color"
            value={data.secondaryColor}
            onChange={(e) => handleChange('secondaryColor', e.target.value)}
            className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
          />
          <span className="ml-2 text-sm text-gray-600">Custom color</span>
        </div>
      </div>

      {/* Font Family */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Font Family
        </label>
        <div className="grid grid-cols-2 gap-3">
          {fontOptions.map((font) => (
            <button
              key={font.value}
              onClick={() => handleChange('fontFamily', font.value)}
              className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                data.fontFamily === font.value
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`text-lg ${font.class}`} style={{ fontFamily: font.value }}>
                {font.name}
              </div>
              <div className="text-sm text-gray-600">Aa Bb Cc</div>
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Layout Style
        </label>
        <div className="space-y-3">
          {layoutOptions.map((layout) => (
            <button
              key={layout.id}
              onClick={() => handleChange('layout', layout.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                data.layout === layout.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{layout.preview}</span>
                <div>
                  <div className="font-medium text-gray-900">{layout.name}</div>
                  <div className="text-sm text-gray-600">{layout.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Preview</h4>
        <div 
          className="p-4 rounded-lg text-white"
          style={{ 
            backgroundColor: data.primaryColor,
            fontFamily: data.fontFamily 
          }}
        >
          <div className="text-lg font-semibold">Sample Text</div>
          <div className="text-sm opacity-90">This is how your portfolio will look</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeForm;
