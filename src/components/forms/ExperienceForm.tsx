import React from 'react';
import { Experience } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  updateData: (data: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, updateData }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [],
    };
    updateData([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    const updatedExperiences = data.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    updateData(updatedExperiences);
  };

  const removeExperience = (id: string) => {
    const updatedExperiences = data.filter(exp => exp.id !== id);
    updateData(updatedExperiences);
  };

  const addAchievement = (experienceId: string) => {
    const updatedExperiences = data.map(exp =>
      exp.id === experienceId
        ? { ...exp, achievements: [...exp.achievements, ''] }
        : exp
    );
    updateData(updatedExperiences);
  };

  const updateAchievement = (experienceId: string, achievementIndex: number, value: string) => {
    const updatedExperiences = data.map(exp =>
      exp.id === experienceId
        ? {
            ...exp,
            achievements: exp.achievements.map((ach, idx) =>
              idx === achievementIndex ? value : ach
            ),
          }
        : exp
    );
    updateData(updatedExperiences);
  };

  const removeAchievement = (experienceId: string, achievementIndex: number) => {
    const updatedExperiences = data.map(exp =>
      exp.id === experienceId
        ? {
            ...exp,
            achievements: exp.achievements.filter((_, idx) => idx !== achievementIndex),
          }
        : exp
    );
    updateData(updatedExperiences);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Experience</h3>
        <p className="text-sm text-gray-600 mb-6">Add your professional work experience and achievements.</p>
      </div>

      <div className="space-y-6">
        {data.map((experience) => (
          <div key={experience.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">
                {experience.position || 'New Experience'}
              </h4>
              <button
                onClick={() => removeExperience(experience.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  className="input-field"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                  className="input-field"
                  placeholder="Senior Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="month"
                  value={experience.endDate || ''}
                  onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                  className="input-field"
                  disabled={experience.current}
                />
                <div className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={experience.current}
                      onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Currently working here</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={experience.description}
                onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Describe your role and responsibilities..."
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Key Achievements
                </label>
                <button
                  onClick={() => addAchievement(experience.id)}
                  className="text-primary-600 hover:text-primary-800 text-sm flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Achievement</span>
                </button>
              </div>
              <div className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={achievement}
                      onChange={(e) => updateAchievement(experience.id, idx, e.target.value)}
                      className="input-field flex-1"
                      placeholder="Achievement description..."
                    />
                    <button
                      onClick={() => removeAchievement(experience.id, idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addExperience}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Experience</span>
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
