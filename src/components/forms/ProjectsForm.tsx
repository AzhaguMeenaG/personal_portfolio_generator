import React from 'react';
import { Project } from '../../types/portfolio';
import { Plus, Trash2, Star } from 'lucide-react';

interface ProjectsFormProps {
  data: Project[];
  updateData: (data: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ data, updateData }) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      imageUrl: '',
      liveUrl: '',
      githubUrl: '',
      featured: false,
    };
    updateData([...data, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    const updatedProjects = data.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    );
    updateData(updatedProjects);
  };

  const removeProject = (id: string) => {
    const updatedProjects = data.filter(project => project.id !== id);
    updateData(updatedProjects);
  };

  const addTechnology = (projectId: string) => {
    const updatedProjects = data.map(project =>
      project.id === projectId
        ? { ...project, technologies: [...project.technologies, ''] }
        : project
    );
    updateData(updatedProjects);
  };

  const updateTechnology = (projectId: string, techIndex: number, value: string) => {
    const updatedProjects = data.map(project =>
      project.id === projectId
        ? {
            ...project,
            technologies: project.technologies.map((tech, idx) =>
              idx === techIndex ? value : tech
            ),
          }
        : project
    );
    updateData(updatedProjects);
  };

  const removeTechnology = (projectId: string, techIndex: number) => {
    const updatedProjects = data.map(project =>
      project.id === projectId
        ? {
            ...project,
            technologies: project.technologies.filter((_, idx) => idx !== techIndex),
          }
        : project
    );
    updateData(updatedProjects);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects</h3>
        <p className="text-sm text-gray-600 mb-6">Showcase your work and side projects.</p>
      </div>

      <div className="space-y-6">
        {data.map((project) => (
          <div key={project.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">
                  {project.name || 'New Project'}
                </h4>
                <button
                  onClick={() => updateProject(project.id, 'featured', !project.featured)}
                  className={`p-1 rounded ${
                    project.featured
                      ? 'text-yellow-500 bg-yellow-100'
                      : 'text-gray-400 hover:text-yellow-500'
                  }`}
                  title="Mark as featured"
                >
                  <Star className={`w-4 h-4 ${project.featured ? 'fill-current' : ''}`} />
                </button>
              </div>
              <button
                onClick={() => removeProject(project.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                  className="input-field"
                  placeholder="E-commerce Website"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={project.imageUrl || ''}
                  onChange={(e) => updateProject(project.id, 'imageUrl', e.target.value)}
                  className="input-field"
                  placeholder="https://example.com/project.jpg"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Describe what this project does and its key features..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Live URL
                </label>
                <input
                  type="url"
                  value={project.liveUrl || ''}
                  onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                  className="input-field"
                  placeholder="https://myproject.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={project.githubUrl || ''}
                  onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                  className="input-field"
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Technologies Used
                </label>
                <button
                  onClick={() => addTechnology(project.id)}
                  className="text-primary-600 hover:text-primary-800 text-sm flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Technology</span>
                </button>
              </div>
              <div className="space-y-2">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => updateTechnology(project.id, idx, e.target.value)}
                      className="input-field flex-1"
                      placeholder="React, Node.js, MongoDB..."
                    />
                    <button
                      onClick={() => removeTechnology(project.id, idx)}
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
          onClick={addProject}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Project</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectsForm;
