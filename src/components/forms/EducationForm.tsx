import React from 'react';
import { Education } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  data: Education[];
  updateData: (data: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, updateData }) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: '',
    };
    updateData([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    const updatedEducation = data.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    updateData(updatedEducation);
  };

  const removeEducation = (id: string) => {
    const updatedEducation = data.filter(edu => edu.id !== id);
    updateData(updatedEducation);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
        <p className="text-sm text-gray-600 mb-6">Add your educational background and achievements.</p>
      </div>

      <div className="space-y-6">
        {data.map((education) => (
          <div key={education.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">
                {education.degree || 'New Education'}
              </h4>
              <button
                onClick={() => removeEducation(education.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institution *
                </label>
                <input
                  type="text"
                  value={education.institution}
                  onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                  className="input-field"
                  placeholder="University of California"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Degree *
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                  className="input-field"
                  placeholder="Bachelor of Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Field of Study *
                </label>
                <input
                  type="text"
                  value={education.field}
                  onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                  className="input-field"
                  placeholder="Computer Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GPA
                </label>
                <input
                  type="text"
                  value={education.gpa || ''}
                  onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                  className="input-field"
                  placeholder="3.8/4.0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="month"
                  value={education.startDate}
                  onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="month"
                  value={education.endDate || ''}
                  onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={education.description || ''}
                onChange={(e) => updateEducation(education.id, 'description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Relevant coursework, honors, activities, or achievements..."
              />
            </div>
          </div>
        ))}

        <button
          onClick={addEducation}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Education</span>
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
