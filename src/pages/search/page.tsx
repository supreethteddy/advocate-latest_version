import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    practiceArea: searchParams.get('category') || '',
    courtLevel: '',
    language: '',
    gender: ''
  });

  const advocates = [
    {
      id: 1,
      name: 'Adv. Rajesh Kumar',
      enrollmentNumber: 'BAR/2015/12345',
      practiceAreas: ['Criminal Law', 'Cyber Crime'],
      city: 'Mumbai',
      languages: ['Hindi', 'English', 'Marathi']
    },
    {
      id: 2,
      name: 'Adv. Priya Sharma',
      enrollmentNumber: 'BAR/2018/23456',
      practiceAreas: ['Family Law', 'Divorce'],
      city: 'Delhi',
      languages: ['Hindi', 'English', 'Punjabi']
    },
    {
      id: 3,
      name: 'Adv. Anil Verma',
      enrollmentNumber: 'BAR/2012/34567',
      practiceAreas: ['Property Law', 'Civil Law'],
      city: 'Bangalore',
      languages: ['English', 'Kannada', 'Hindi']
    },
    {
      id: 4,
      name: 'Adv. Meera Patel',
      enrollmentNumber: 'BAR/2016/45678',
      practiceAreas: ['Consumer Law', 'Civil Law'],
      city: 'Ahmedabad',
      languages: ['Gujarati', 'Hindi', 'English']
    },
    {
      id: 5,
      name: 'Adv. Suresh Reddy',
      enrollmentNumber: 'BAR/2014/56789',
      practiceAreas: ['Criminal Law', 'Property Law'],
      city: 'Hyderabad',
      languages: ['Telugu', 'English', 'Hindi']
    },
    {
      id: 6,
      name: 'Adv. Kavita Singh',
      enrollmentNumber: 'BAR/2019/67890',
      practiceAreas: ['Cyber Crime', 'Consumer Law'],
      city: 'Pune',
      languages: ['Marathi', 'Hindi', 'English']
    }
  ];

  const practiceAreas = ['Criminal Law', 'Family Law', 'Property Law', 'Cyber Crime', 'Consumer Law', 'Civil Law'];
  const courtLevels = ['District Court', 'High Court', 'Supreme Court'];
  const languages = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Gujarati', 'Kannada', 'Punjabi'];
  const genders = ['Male', 'Female', 'Any'];

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, practiceArea: category }));
    }
  }, [searchParams]);

  const filteredAdvocates = advocates.filter(advocate => {
    if (filters.practiceArea && !advocate.practiceAreas.some(area => 
      area.toLowerCase().includes(filters.practiceArea.toLowerCase())
    )) return false;
    if (filters.location && !advocate.city.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.language && !advocate.languages.some(lang => 
      lang.toLowerCase().includes(filters.language.toLowerCase())
    )) return false;
    if (searchQuery && !advocate.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !advocate.city.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-20">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center text-gray-900 -ml-2"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search advocates"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
          >
            <i className="ri-filter-3-line"></i>
            <span>Filters</span>
            {(filters.location || filters.practiceArea || filters.courtLevel || filters.language) && (
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            )}
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="pt-32 px-4">
        <p className="text-sm text-gray-600 mb-4">
          {filteredAdvocates.length} advocates found
        </p>

        <div className="space-y-3">
          {filteredAdvocates.map((advocate) => (
            <div
              key={advocate.id}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{advocate.name}</h3>
                  <p className="text-xs text-gray-500">Enrollment: {advocate.enrollmentNumber}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <i className="ri-briefcase-line text-sm text-gray-400 mt-0.5"></i>
                  <p className="text-xs text-gray-700 flex-1">
                    {advocate.practiceAreas.join(', ')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-map-pin-line text-sm text-gray-400"></i>
                  <p className="text-xs text-gray-700">{advocate.city}</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-translate text-sm text-gray-400 mt-0.5"></i>
                  <p className="text-xs text-gray-700 flex-1">
                    {advocate.languages.join(', ')}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate(`/advocate/${advocate.id}`)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold active:bg-blue-700"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setShowFilters(false)}>
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            <div className="px-4 py-6 space-y-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Location</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  placeholder="Enter city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Practice Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Practice Area</label>
                <div className="grid grid-cols-2 gap-2">
                  {practiceAreas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setFilters({ ...filters, practiceArea: filters.practiceArea === area ? '' : area })}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border ${
                        filters.practiceArea === area
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Court Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Court Level</label>
                <div className="space-y-2">
                  {courtLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setFilters({ ...filters, courtLevel: filters.courtLevel === level ? '' : level })}
                      className={`w-full px-4 py-3 rounded-lg text-sm font-medium border text-left ${
                        filters.courtLevel === level
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Language</label>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setFilters({ ...filters, language: filters.language === lang ? '' : lang })}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border ${
                        filters.language === lang
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Gender (Optional)</label>
                <div className="grid grid-cols-3 gap-2">
                  {genders.map((gender) => (
                    <button
                      key={gender}
                      onClick={() => setFilters({ ...filters, gender: filters.gender === gender ? '' : gender })}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border ${
                        filters.gender === gender
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-4 flex gap-3">
              <button
                onClick={() => setFilters({ location: '', practiceArea: '', courtLevel: '', language: '', gender: '' })}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-4 h-16">
          <button 
            onClick={() => navigate('/home')}
            className="flex flex-col items-center justify-center gap-1"
          >
            <i className="ri-home-5-line text-xl text-gray-400"></i>
            <span className="text-[0.625rem] text-gray-500">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1">
            <i className="ri-search-fill text-xl text-blue-600"></i>
            <span className="text-[0.625rem] text-blue-600 font-medium">Search</span>
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