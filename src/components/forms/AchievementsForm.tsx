import React from 'react';
import { Achievement } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface AchievementsFormProps {
  data: Achievement[];
  updateData: (data: Achievement[]) => void;
}

const achievementCategories = [
  { value: 'award', label: 'Award', icon: '🏆' },
  { value: 'recognition', label: 'Recognition', icon: '👏' },
  { value: 'milestone', label: 'Milestone', icon: '🎯' },
  { value: 'other', label: 'Other', icon: '⭐' },
];

const AchievementsForm: React.FC<AchievementsFormProps> = ({ data, updateData }) => {
  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: '',
      description: '',
      date: '',
      category: 'award',
      imageUrl: '',
    };
    updateData([...data, newAchievement]);
  };

  const updateAchievement = (id: string, field: keyof Achievement, value: string) => {
    const updatedAchievements = data.map(achievement =>
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    );
    updateData(updatedAchievements);
  };

  const removeAchievement = (id: string) => {
    const updatedAchievements = data.filter(achievement => achievement.id !== id);
    updateData(updatedAchievements);
  };

  const getCategoryIcon = (category: string) => {
    const cat = achievementCategories.find(c => c.value === category);
    return cat ? cat.icon : '⭐';
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
        <p className="text-sm text-gray-600 mb-6">Showcase your awards, recognitions, and professional milestones.</p>
      </div>

      <div className="space-y-6">
        {data.map((achievement) => (
          <div key={achievement.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getCategoryIcon(achievement.category)}</span>
                <h4 className="font-medium text-gray-900">
                  {achievement.title || 'New Achievement'}
                </h4>
              </div>
              <button
                onClick={() => removeAchievement(achievement.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Achievement Title *
                </label>
                <input
                  type="text"
                  value={achievement.title}
                  onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                  className="input-field"
                  placeholder="Employee of the Year"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={achievement.category}
                  onChange={(e) => updateAchievement(achievement.id, 'category', e.target.value)}
                  className="input-field"
                >
                  {achievementCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.icon} {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="month"
                  value={achievement.date}
                  onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={achievement.imageUrl || ''}
                  onChange={(e) => updateAchievement(achievement.id, 'imageUrl', e.target.value)}
                  className="input-field"
                  placeholder="https://example.com/achievement.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={achievement.description}
                onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Describe the achievement and its significance..."
              />
            </div>

            {/* Preview */}
            {achievement.title && achievement.description && (
              <div className="mt-4 p-4 bg-white rounded-lg border">
                <div className="flex items-start space-x-3">
                  {achievement.imageUrl && (
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl">{getCategoryIcon(achievement.category)}</span>
                      <h5 className="font-medium text-gray-900">{achievement.title}</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{achievement.date}</p>
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addAchievement}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Achievement</span>
        </button>
      </div>
    </div>
  );
};

export default AchievementsForm;
