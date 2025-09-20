import React from 'react';
import { PersonalInfo } from '../../types/portfolio';
import { User, Mail, Phone, MapPin, Globe, Calendar, Flag, Clock, FileText, Languages, Briefcase } from 'lucide-react';

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
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 floating-animation">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold gradient-text mb-2">Personal Information</h3>
        <p className="text-gray-600">Tell us about yourself and your professional background.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <User className="w-4 h-4 text-white" />
            </div>
            <span>Full Name</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="input-field"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span>Professional Title</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="input-field"
            placeholder="Software Developer"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span>Email Address</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input-field"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span>Phone Number</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span>Location</span>
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="input-field"
            placeholder="San Francisco, CA"
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span>Bio</span>
            <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="input-field resize-none"
            rows={4}
            placeholder="Write a brief professional summary about yourself..."
            required
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
              <User className="w-4 h-4 text-white" />
            </div>
            <span>Profile Image URL</span>
          </label>
          <input
            type="url"
            value={data.profileImage || ''}
            onChange={(e) => handleChange('profileImage', e.target.value)}
            className="input-field"
            placeholder="https://example.com/profile.jpg"
          />
          <p className="text-xs text-gray-500 mt-2 flex items-center space-x-1">
            <span className="text-yellow-500">💡</span>
            <span>Optional: Add a URL to your profile image</span>
          </p>
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span>Website URL</span>
          </label>
          <input
            type="url"
            value={data.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            className="input-field"
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span>Date of Birth</span>
          </label>
          <input
            type="date"
            value={data.dateOfBirth || ''}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
              <Flag className="w-4 h-4 text-white" />
            </div>
            <span>Nationality</span>
          </label>
          <input
            type="text"
            value={data.nationality || ''}
            onChange={(e) => handleChange('nationality', e.target.value)}
            className="input-field"
            placeholder="American"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span>Availability</span>
          </label>
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

        <div className="form-group">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span>Resume URL</span>
          </label>
          <input
            type="url"
            value={data.resumeUrl || ''}
            onChange={(e) => handleChange('resumeUrl', e.target.value)}
            className="input-field"
            placeholder="https://example.com/resume.pdf"
          />
        </div>

        <div className="form-group md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
            <div className="p-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-lg">
              <Languages className="w-4 h-4 text-white" />
            </div>
            <span>Languages</span>
          </label>
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
          <p className="text-xs text-gray-500 mt-2 flex items-center space-x-1">
            <span className="text-yellow-500">💡</span>
            <span>Separate multiple languages with commas</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;