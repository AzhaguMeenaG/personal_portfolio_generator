import React from 'react';
import { SocialLink } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface SocialLinksFormProps {
  data: SocialLink[];
  updateData: (data: SocialLink[]) => void;
}

const socialPlatforms = [
  { name: 'LinkedIn', icon: '💼', placeholder: 'https://linkedin.com/in/username' },
  { name: 'GitHub', icon: '🐙', placeholder: 'https://github.com/username' },
  { name: 'Twitter', icon: '🐦', placeholder: 'https://twitter.com/username' },
  { name: 'Instagram', icon: '📷', placeholder: 'https://instagram.com/username' },
  { name: 'Facebook', icon: '👥', placeholder: 'https://facebook.com/username' },
  { name: 'YouTube', icon: '📺', placeholder: 'https://youtube.com/c/username' },
  { name: 'Portfolio', icon: '🌐', placeholder: 'https://yourwebsite.com' },
  { name: 'Email', icon: '✉️', placeholder: 'mailto:your@email.com' },
  { name: 'Other', icon: '🔗', placeholder: 'https://example.com' },
];

const SocialLinksForm: React.FC<SocialLinksFormProps> = ({ data, updateData }) => {
  const addSocialLink = () => {
    const newSocialLink: SocialLink = {
      platform: socialPlatforms[0].name,
      url: '',
      icon: socialPlatforms[0].icon,
    };
    updateData([...data, newSocialLink]);
  };

  const updateSocialLink = (index: number, field: keyof SocialLink, value: string) => {
    const updatedLinks = [...data];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value,
    };
    
    // Update icon when platform changes
    if (field === 'platform') {
      const platform = socialPlatforms.find(p => p.name === value);
      if (platform) {
        updatedLinks[index].icon = platform.icon;
      }
    }
    
    updateData(updatedLinks);
  };

  const removeSocialLink = (index: number) => {
    const updatedLinks = data.filter((_, i) => i !== index);
    updateData(updatedLinks);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
        <p className="text-sm text-gray-600 mb-6">Add your social media profiles and contact information.</p>
      </div>

      <div className="space-y-4">
        {data.map((link, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">Social Link {index + 1}</h4>
              <button
                onClick={() => removeSocialLink(index)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <select
                  value={link.platform}
                  onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                  className="input-field"
                >
                  {socialPlatforms.map((platform) => (
                    <option key={platform.name} value={platform.name}>
                      {platform.icon} {platform.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                  className="input-field"
                  placeholder={socialPlatforms.find(p => p.name === link.platform)?.placeholder || 'https://example.com'}
                />
              </div>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.platform}</span>
                {link.url && (
                  <>
                    <span>•</span>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 truncate"
                    >
                      {link.url}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addSocialLink}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Social Link</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLinksForm;
