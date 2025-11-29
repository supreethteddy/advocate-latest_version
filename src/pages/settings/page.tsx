import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  const settingsOptions = [
    {
      id: 'profile',
      icon: 'ri-user-line',
      title: 'Profile',
      description: 'Name, Phone, Email',
      action: () => navigate('/settings/profile')
    },
    {
      id: 'preferences',
      icon: 'ri-map-pin-line',
      title: 'Saved Preferences',
      description: 'Cities and practice areas',
      action: () => navigate('/settings/preferences')
    },
    {
      id: 'notifications',
      icon: 'ri-notification-3-line',
      title: 'Notification Settings',
      description: 'Manage your notifications',
      action: () => navigate('/settings/notifications')
    },
    {
      id: 'about',
      icon: 'ri-information-line',
      title: 'About AdvocateConnect',
      description: 'Learn more about us',
      action: () => navigate('/settings/about')
    },
    {
      id: 'compliance',
      icon: 'ri-shield-check-line',
      title: 'Compliance Rules',
      description: 'Legal guidelines and policies',
      action: () => navigate('/settings/compliance')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center px-4 py-4">
          <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-4 py-6">
        {/* User Info */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-2xl text-blue-600"></i>
            </div>
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900">User Name</h2>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
            <button 
              onClick={() => navigate('/settings/profile')}
              className="w-8 h-8 flex items-center justify-center text-gray-400"
            >
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* Settings Options */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {settingsOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={option.action}
              className={`w-full flex items-center gap-4 px-4 py-4 active:bg-gray-50 ${
                index !== settingsOptions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${option.icon} text-lg text-gray-600`}></i>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-semibold text-gray-900">{option.title}</h3>
                <p className="text-xs text-gray-500">{option.description}</p>
              </div>
              <i className="ri-arrow-right-s-line text-xl text-gray-400"></i>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className="w-full bg-white border border-red-200 text-red-600 py-4 rounded-xl font-semibold active:bg-red-50">
          Logout
        </button>

        {/* Version */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Version 1.0.0
        </p>
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
          <button className="flex flex-col items-center justify-center gap-1">
            <i className="ri-settings-3-fill text-xl text-blue-600"></i>
            <span className="text-[0.625rem] text-blue-600 font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}