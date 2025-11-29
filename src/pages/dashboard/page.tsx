import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  const activeEnquiries = [
    {
      id: 1,
      title: 'Property Verification Issue',
      category: 'Property Law',
      date: '2024-01-15',
      status: 'Responded',
      responses: 3
    },
    {
      id: 2,
      title: 'Cyber Fraud Complaint',
      category: 'Cyber Crime',
      date: '2024-01-14',
      status: 'Pending',
      responses: 0
    },
    {
      id: 3,
      title: 'Divorce Consultation',
      category: 'Family Law',
      date: '2024-01-13',
      status: 'Responded',
      responses: 2
    }
  ];

  const pastEnquiries = [
    {
      id: 4,
      title: 'Consumer Complaint Resolution',
      category: 'Consumer Law',
      date: '2023-12-20',
      status: 'Closed',
      responses: 5
    },
    {
      id: 5,
      title: 'Criminal Case Consultation',
      category: 'Criminal Law',
      date: '2023-12-10',
      status: 'Closed',
      responses: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Responded':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Closed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  const enquiries = activeTab === 'active' ? activeEnquiries : pastEnquiries;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-4">
          <h1 className="text-lg font-semibold text-gray-900 mb-4">My Enquiries</h1>
          
          {/* Tabs */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'active'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Active Enquiries
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'past'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Past Enquiries
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-32 px-4">
        {enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-file-list-3-line text-3xl text-gray-400"></i>
            </div>
            <p className="text-sm text-gray-600 text-center mb-6">
              No {activeTab} enquiries yet
            </p>
            <button
              onClick={() => navigate('/search')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold"
            >
              Find Advocates
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                onClick={() => navigate(`/enquiry/${enquiry.id}`)}
                className="bg-white border border-gray-200 rounded-xl p-4 active:shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {enquiry.title}
                    </h3>
                    <p className="text-xs text-gray-500">{enquiry.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-[0.625rem] font-medium ${getStatusColor(enquiry.status)}`}>
                    {enquiry.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      <span>{new Date(enquiry.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    {enquiry.responses > 0 && (
                      <div className="flex items-center gap-1">
                        <i className="ri-message-3-line"></i>
                        <span>{enquiry.responses} responses</span>
                      </div>
                    )}
                  </div>
                  <i className="ri-arrow-right-s-line text-lg text-gray-400"></i>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => navigate('/enquiry')}
        className="fixed bottom-24 right-4 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center active:bg-blue-700 z-10"
      >
        <i className="ri-add-line text-2xl"></i>
      </button>

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
          <button className="flex flex-col items-center justify-center gap-1">
            <i className="ri-file-list-3-fill text-xl text-blue-600"></i>
            <span className="text-[0.625rem] text-blue-600 font-medium">Enquiries</span>
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