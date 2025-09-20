import React from 'react';
import { Testimonial } from '../../types/portfolio';
import { Plus, Trash2, Star } from 'lucide-react';

interface TestimonialsFormProps {
  data: Testimonial[];
  updateData: (data: Testimonial[]) => void;
}

const TestimonialsForm: React.FC<TestimonialsFormProps> = ({ data, updateData }) => {
  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: '',
      position: '',
      company: '',
      content: '',
      avatar: '',
      rating: 5,
    };
    updateData([...data, newTestimonial]);
  };

  const updateTestimonial = (id: string, field: keyof Testimonial, value: string | number) => {
    const updatedTestimonials = data.map(testimonial =>
      testimonial.id === id ? { ...testimonial, [field]: value } : testimonial
    );
    updateData(updatedTestimonials);
  };

  const removeTestimonial = (id: string) => {
    const updatedTestimonials = data.filter(testimonial => testimonial.id !== id);
    updateData(updatedTestimonials);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonials</h3>
        <p className="text-sm text-gray-600 mb-6">Add testimonials and recommendations from colleagues, clients, or supervisors.</p>
      </div>

      <div className="space-y-6">
        {data.map((testimonial) => (
          <div key={testimonial.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">
                {testimonial.name || 'New Testimonial'}
              </h4>
              <button
                onClick={() => removeTestimonial(testimonial.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                  className="input-field"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={testimonial.position}
                  onChange={(e) => updateTestimonial(testimonial.id, 'position', e.target.value)}
                  className="input-field"
                  placeholder="Senior Manager"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={testimonial.company}
                  onChange={(e) => updateTestimonial(testimonial.id, 'company', e.target.value)}
                  className="input-field"
                  placeholder="Tech Corp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avatar URL
                </label>
                <input
                  type="url"
                  value={testimonial.avatar || ''}
                  onChange={(e) => updateTestimonial(testimonial.id, 'avatar', e.target.value)}
                  className="input-field"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => updateTestimonial(testimonial.id, 'rating', rating)}
                    className={`p-1 rounded ${
                      rating <= (testimonial.rating || 5)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    <Star className={`w-5 h-5 ${
                      rating <= (testimonial.rating || 5) ? 'fill-current' : ''
                    }`} />
                  </button>
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {testimonial.rating || 5}/5
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial Content *
              </label>
              <textarea
                value={testimonial.content}
                onChange={(e) => updateTestimonial(testimonial.id, 'content', e.target.value)}
                className="input-field"
                rows={4}
                placeholder="Write the testimonial content here..."
              />
            </div>

            {/* Preview */}
            {testimonial.name && testimonial.company && testimonial.content && (
              <div className="mt-4 p-4 bg-white rounded-lg border">
                <div className="flex items-center space-x-3 mb-3">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position && `${testimonial.position} at `}
                      {testimonial.company}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {renderStars(testimonial.rating || 5)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addTestimonial}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Testimonial</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsForm;
