import { useNavigate, useParams } from 'react-router-dom';

export default function AdvocateProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const advocateData = {
    '1': {
      name: 'Adv. Rajesh Kumar',
      enrollmentNumber: 'BAR/2015/12345',
      practiceAreas: ['Criminal Law', 'Cyber Crime', 'Consumer Law'],
      courts: ['District Court', 'High Court'],
      city: 'Mumbai',
      address: '3rd Floor, Advocate Chambers, Court Road, Andheri West, Mumbai - 400058',
      languages: ['Hindi', 'English', 'Marathi'],
      availability: 'Monday to Friday: 10:00 AM - 6:00 PM'
    },
    '2': {
      name: 'Adv. Priya Sharma',
      enrollmentNumber: 'BAR/2018/23456',
      practiceAreas: ['Family Law', 'Divorce', 'Child Custody'],
      courts: ['District Court', 'High Court'],
      city: 'Delhi',
      address: 'Chamber No. 205, Lawyers Complex, Tis Hazari Courts, Delhi - 110054',
      languages: ['Hindi', 'English', 'Punjabi'],
      availability: 'Monday to Saturday: 9:00 AM - 5:00 PM'
    },
    '3': {
      name: 'Adv. Anil Verma',
      enrollmentNumber: 'BAR/2012/34567',
      practiceAreas: ['Property Law', 'Civil Law', 'Real Estate'],
      courts: ['District Court', 'High Court', 'Supreme Court'],
      city: 'Bangalore',
      address: 'Office No. 12, Legal Plaza, MG Road, Bangalore - 560001',
      languages: ['English', 'Kannada', 'Hindi'],
      availability: 'Monday to Friday: 10:30 AM - 6:30 PM'
    }
  };

  const advocate = advocateData[id as keyof typeof advocateData] || advocateData['1'];

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-gray-900 -ml-2"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Advocate Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 py-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <i className="ri-user-line text-3xl text-white"></i>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{advocate.name}</h2>
          <p className="text-sm text-gray-600">Enrollment: {advocate.enrollmentNumber}</p>
        </div>

        {/* Information Sections */}
        <div className="space-y-4">
          {/* Practice Areas */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-briefcase-line text-lg text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Practice Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {advocate.practiceAreas.map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courts */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-government-line text-lg text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Courts</h3>
                <p className="text-sm text-gray-700">{advocate.courts.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-lg text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Office Address</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{advocate.address}</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-translate text-lg text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Languages Spoken</h3>
                <p className="text-sm text-gray-700">{advocate.languages.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-lg text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Availability Hours</h3>
                <p className="text-sm text-gray-700">{advocate.availability}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            This profile displays factual information only. AdvocateConnect does not promote any advocate.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <button
          onClick={() => navigate('/enquiry', { state: { advocateId: id, advocateName: advocate.name } })}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold active:bg-blue-700"
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
}