import { useNavigate } from 'react-router-dom';

export default function LegalGuides() {
  const navigate = useNavigate();

  const guides = [
    {
      id: 1,
      title: 'How to File a Police Complaint',
      description: 'Complete guide on filing FIR and understanding your rights during the process',
      category: 'Criminal Law'
    },
    {
      id: 2,
      title: 'Steps for Property Verification',
      description: 'Learn how to verify property documents and check for legal encumbrances',
      category: 'Property Law'
    },
    {
      id: 3,
      title: 'What to Do If Someone Cheated You',
      description: 'Legal remedies and steps to take when you are a victim of fraud or cheating',
      category: 'Consumer Law'
    },
    {
      id: 4,
      title: 'Understanding Divorce Procedures',
      description: 'Know the legal process, documentation, and timeline for divorce proceedings',
      category: 'Family Law'
    },
    {
      id: 5,
      title: 'Consumer Rights and Complaints',
      description: 'How to file consumer complaints and protect your rights as a buyer',
      category: 'Consumer Law'
    },
    {
      id: 6,
      title: 'Cyber Crime Reporting Guide',
      description: 'Steps to report online fraud, hacking, and other cyber crimes',
      category: 'Cyber Law'
    },
    {
      id: 7,
      title: 'Property Registration Process',
      description: 'Complete guide to registering property and understanding stamp duty',
      category: 'Property Law'
    },
    {
      id: 8,
      title: 'Child Custody Laws',
      description: 'Understanding custody rights and legal procedures in family disputes',
      category: 'Family Law'
    }
  ];

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
          <h1 className="text-lg font-semibold text-gray-900">Legal Guides</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4">
        <p className="text-sm text-gray-600 mb-6 mt-4">
          Browse our collection of legal guides to understand your rights and legal procedures.
        </p>

        <div className="space-y-3">
          {guides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => navigate(`/legal-guides/${guide.id}`)}
              className="bg-white border border-gray-200 rounded-xl p-4 active:shadow-md"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900 flex-1 pr-2">
                  {guide.title}
                </h3>
                <i className="ri-arrow-right-s-line text-lg text-gray-400 flex-shrink-0"></i>
              </div>
              <p className="text-xs text-gray-600 mb-2">{guide.description}</p>
              <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-[0.625rem] font-medium rounded">
                {guide.category}
              </span>
            </div>
          ))}
        </div>
      </div>

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