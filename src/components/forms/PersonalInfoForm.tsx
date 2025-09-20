import React from 'react';
import { PersonalInfo } from '../../types/portfolio';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  updateData: (data: PersonalInfo) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, updateData }) => {
  const handleChange = (field: keyof PersonalInfo, value: string | string[]) => {
    updateData({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <p className="text-sm text-gray-600 mb-6">Tell us about yourself and your professional background.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input-field"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title *</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="input-field"
            placeholder="Software Developer"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input-field"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="input-field"
            placeholder="San Francisco, CA"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
          <textarea
            value={data.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="input-field"
            rows={4}
            placeholder="Write a brief professional summary about yourself..."
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
          <input
            type="url"
            value={data.profileImage || ''}
            onChange={(e) => handleChange('profileImage', e.target.value)}
            className="input-field"
            placeholder="https://example.com/profile.jpg"
          />
          <p className="text-xs text-gray-500 mt-1">Optional: Add a URL to your profile image</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
          <input
            type="url"
            value={data.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            className="input-field"
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <input
            type="date"
            value={data.dateOfBirth || ''}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
          <input
            type="text"
            value={data.nationality || ''}
            onChange={(e) => handleChange('nationality', e.target.value)}
            className="input-field"
            placeholder="American"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <select
            value={data.availability || ''}
            onChange={(e) => handleChange('availability', e.target.value)}
            className="input-field"
          >
            <option value="">Select availability</option>
            <option value="available">Available for work</option>
            <option value="freelance">Available for freelance</option>
            <option value="consulting">Available for consulting</option>
            <option value="not-available">Not currently available</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Resume URL</label>
          <input
            type="url"
            value={data.resumeUrl || ''}
            onChange={(e) => handleChange('resumeUrl', e.target.value)}
            className="input-field"
            placeholder="https://example.com/resume.pdf"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
          <input
            type="text"
            value={data.languages?.join(', ') || ''}
            onChange={(e) =>
              handleChange(
                'languages',
                e.target.value
                  .split(',')
                  .map(lang => lang.trim())
                  .filter(lang => lang)
              )
            }
            className="input-field"
            placeholder="English, Spanish, French"
          />
          <p className="text-xs text-gray-500 mt-1">Separate multiple languages with commas</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;