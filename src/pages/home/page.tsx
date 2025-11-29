import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Divorce', icon: 'ri-user-heart-line' },
    { id: 2, name: 'Property', icon: 'ri-home-4-line' },
    { id: 3, name: 'Criminal', icon: 'ri-shield-line' },
    { id: 4, name: 'Cyber Crime', icon: 'ri-computer-line' },
    { id: 5, name: 'Consumer', icon: 'ri-shopping-cart-line' },
    { id: 6, name: 'Family', icon: 'ri-team-line' }
  ];

  const legalGuides = [
    {
      id: 1,
      title: 'How to File a Police Complaint',
      description: 'Step-by-step guide for filing FIR',
      image: 'https://readdy.ai/api/search-image?query=Minimalist%20illustration%20of%20police%20station%20building%20with%20document%20and%20pen%2C%20soft%20blue%20and%20grey%20colors%2C%20clean%20simple%20flat%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20professional%20legal%20concept%2C%20modern%20style%2C%20geometric%20shapes%2C%20calming%20palette&width=280&height=160&seq=guide1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Steps for Property Verification',
      description: 'Verify property documents legally',
      image: 'https://readdy.ai/api/search-image?query=Simple%20illustration%20of%20house%20with%20magnifying%20glass%20and%20legal%20documents%2C%20soft%20blue%20tones%2C%20clean%20minimalist%20flat%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20professional%20property%20concept%2C%20modern%20geometric%20style%2C%20calming%20colors&width=280&height=160&seq=guide2&orientation=landscape'
    },
    {
      id: 3,
      title: 'What to Do If Someone Cheated You',
      description: 'Legal steps for fraud cases',
      image: 'https://readdy.ai/api/search-image?query=Minimalist%20illustration%20of%20shield%20protecting%20person%20with%20legal%20document%2C%20soft%20blue%20and%20grey%20palette%2C%20clean%20simple%20flat%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20professional%20fraud%20protection%20concept%2C%20modern%20style%2C%20geometric%20shapes&width=280&height=160&seq=guide3&orientation=landscape'
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold text-gray-900">AdvocateConnect</h1>
            <button 
              onClick={() => navigate('/notifications')}
              className="w-10 h-10 flex items-center justify-center text-gray-600"
            >
              <i className="ri-notification-3-line text-xl"></i>
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search by issue or location"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 px-4">
        {/* Quick Categories */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Quick Categories</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="flex flex-col items-center justify-center bg-blue-50 rounded-xl p-4 active:bg-blue-100"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-2">
                  <i className={`${category.icon} text-2xl text-blue-600`}></i>
                </div>
                <span className="text-xs text-gray-700 text-center font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Legal Guides */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">Legal Guides</h2>
            <button 
              onClick={() => navigate('/legal-guides')}
              className="text-sm text-blue-600 font-medium"
            >
              View All
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {legalGuides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => navigate(`/legal-guides/${guide.id}`)}
                className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-xl overflow-hidden active:shadow-md"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{guide.title}</h3>
                  <p className="text-xs text-gray-600">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <p className="text-xs text-gray-500 text-center mb-2">
          AdvocateConnect provides factual advocate information only.
        </p>
        <div className="flex justify-center gap-4">
          <button className="text-xs text-blue-600">Terms</button>
          <span className="text-xs text-gray-300">|</span>
          <button className="text-xs text-blue-600">Compliance</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 h-16">
          <button className="flex flex-col items-center justify-center gap-1">
            <i className="ri-home-5-fill text-xl text-blue-600"></i>
            <span className="text-[0.625rem] text-blue-600 font-medium">Home</span>
          </button>
          <button 
            onClick={() => navigate('/search')}
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="ri-search-line text-xl text-gray-400"></i>
            <span className="text-[0.625rem] text-gray-500">Search</span>
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="ri-file-list-3-line text-xl text-gray-400"></i>
            <span className="text-[0.625rem] text-gray-500">Enquiries</span>
          </button>
          <button 
            onClick={() => navigate('/settings')}
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="ri-settings-3-line text-xl text-gray-400"></i>
            <span className="text-[0.625rem] text-gray-500">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}