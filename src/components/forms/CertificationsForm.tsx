import React from 'react';
import { Certification } from '../../types/portfolio';
import { Plus, Trash2 } from 'lucide-react';

interface CertificationsFormProps {
  data: Certification[];
  updateData: (data: Certification[]) => void;
}

const CertificationsForm: React.FC<CertificationsFormProps> = ({ data, updateData }) => {
  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      credentialId: '',
      credentialUrl: '',
      description: '',
    };
    updateData([...data, newCertification]);
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    const updatedCertifications = data.map(cert =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    updateData(updatedCertifications);
  };

  const removeCertification = (id: string) => {
    const updatedCertifications = data.filter(cert => cert.id !== id);
    updateData(updatedCertifications);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
        <p className="text-sm text-gray-600 mb-6">Add your professional certifications and credentials.</p>
      </div>

      <div className="space-y-6">
        {data.map((certification) => (
          <div key={certification.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">
                {certification.name || 'New Certification'}
              </h4>
              <button
                onClick={() => removeCertification(certification.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certification Name *
                </label>
                <input
                  type="text"
                  value={certification.name}
                  onChange={(e) => updateCertification(certification.id, 'name', e.target.value)}
                  className="input-field"
                  placeholder="AWS Certified Solutions Architect"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issuing Organization *
                </label>
                <input
                  type="text"
                  value={certification.issuer}
                  onChange={(e) => updateCertification(certification.id, 'issuer', e.target.value)}
                  className="input-field"
                  placeholder="Amazon Web Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Date *
                </label>
                <input
                  type="month"
                  value={certification.date}
                  onChange={(e) => updateCertification(certification.id, 'date', e.target.value)}
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credential ID
                </label>
                <input
                  type="text"
                  value={certification.credentialId || ''}
                  onChange={(e) => updateCertification(certification.id, 'credentialId', e.target.value)}
                  className="input-field"
                  placeholder="AWS-123456789"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credential URL
              </label>
              <input
                type="url"
                value={certification.credentialUrl || ''}
                onChange={(e) => updateCertification(certification.id, 'credentialUrl', e.target.value)}
                className="input-field"
                placeholder="https://www.credly.com/badges/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={certification.description || ''}
                onChange={(e) => updateCertification(certification.id, 'description', e.target.value)}
                className="input-field"
                rows={3}
                placeholder="Brief description of the certification and its relevance..."
              />
            </div>
          </div>
        ))}

        <button
          onClick={addCertification}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Certification</span>
        </button>
      </div>
    </div>
  );
};

export default CertificationsForm;
