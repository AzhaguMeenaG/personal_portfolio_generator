import React from 'react';
import { Skill } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  data: Skill[];
  updateData: (data: Skill[]) => void;
}

const skillCategories = [
  'Programming Languages',
  'Frameworks & Libraries',
  'Tools & Technologies',
  'Design',
  'Databases',
  'Cloud & DevOps',
  'Other'
];

const SkillsForm: React.FC<SkillsFormProps> = ({ data, updateData }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      name: '',
      level: 3,
      category: skillCategories[0],
    };
    updateData([...data, newSkill]);
  };

  const updateSkill = (index: number, field: keyof Skill, value: string | number) => {
    const updatedSkills = [...data];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: value,
    };
    updateData(updatedSkills);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = data.filter((_, i) => i !== index);
    updateData(updatedSkills);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
        <p className="text-sm text-gray-600 mb-6">Add your technical skills and rate your proficiency level.</p>
      </div>

      <div className="space-y-4">
        {data.map((skill, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">Skill {index + 1}</h4>
              <button
                onClick={() => removeSkill(index)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                  className="input-field"
                  placeholder="React, JavaScript, Python..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                  className="input-field"
                >
                  {skillCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proficiency Level: {skill.level}/5
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={skill.level}
                  onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                  className="flex-1"
                />
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-full ${
                        level <= skill.level ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addSkill}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Skill</span>
        </button>
      </div>
    </div>
  );
};

export default SkillsForm;
