import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Enquiry() {
  const navigate = useNavigate();
  const location = useLocation();
  const advocateInfo = location.state as { advocateId?: string; advocateName?: string } | null;

  const [formData, setFormData] = useState({
    category: '',
    description: '',
    city: '',
    language: '',
    contact: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    'Criminal Law',
    'Family Law',
    'Property Law',
    'Cyber Crime',
    'Consumer Law',
    'Civil Law',
    'Divorce',
    'Child Custody'
  ];

  const languages = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Gujarati', 'Kannada', 'Punjabi'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.description || !formData.city || !formData.language) {
      alert('Please fill all required fields');
      return;
    }
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-gray-900 -ml-2"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Send Enquiry</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 py-6">
        {advocateInfo?.advocateName && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Sending enquiry to:</p>
            <p className="text-base font-semibold text-gray-900">{advocateInfo.advocateName}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Issue Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Issue Category <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFormData({ ...formData, category })}
                  className={`px-4 py-3 rounded-lg text-sm font-medium border ${
                    formData.category === category
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => {
                if (e.target.value.length <= 500) {
                  setFormData({ ...formData, description: e.target.value });
                }
              }}
              placeholder="Briefly describe your legal issue..."
              rows={5}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-2 text-right">
              {formData.description.length}/500 characters
            </p>
          </div>

          {/* Preferred City */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Preferred City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Enter city name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Preferred Language <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => setFormData({ ...formData, language })}
                  className={`px-4 py-3 rounded-lg text-sm font-medium border ${
                    formData.language === language
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Phone or Email (Optional)
            </label>
            <input
              type="text"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="Enter phone number or email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold active:bg-blue-700 mt-6"
          >
            Submit Enquiry
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
              Enquiry Sent Successfully
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Your enquiry has been sent to verified advocates. You will be notified when they respond.
            </p>
            <button
              onClick={handleSuccessClose}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              View My Enquiries
            </button>
          </div>
        </div>
      )}
    </div>
  );
}