import { useNavigate } from 'react-router-dom';

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'response',
      title: 'Advocate has responded to your enquiry',
      message: 'Adv. Rajesh Kumar has responded to your enquiry about cyber fraud complaint.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'forward',
      title: 'Your enquiry was forwarded',
      message: 'Your enquiry was forwarded to 3 additional advocates in your area.',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'response',
      title: 'New response received',
      message: 'Adv. Priya Sharma has responded to your family law enquiry.',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'Enquiry status update',
      message: 'Your property verification enquiry has been marked as resolved.',
      time: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'response',
      title: 'Advocate has responded',
      message: 'Adv. Anil Verma has responded to your property law enquiry.',
      time: '3 days ago',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'response':
        return 'ri-message-3-fill';
      case 'forward':
        return 'ri-share-forward-fill';
      case 'system':
        return 'ri-information-fill';
      default:
        return 'ri-notification-3-fill';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'response':
        return 'bg-blue-100 text-blue-600';
      case 'forward':
        return 'bg-green-100 text-green-600';
      case 'system':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center text-gray-900 -ml-2"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Notifications</h1>
          </div>
          <button className="text-sm text-blue-600 font-medium">
            Mark all read
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i className="ri-notification-3-line text-3xl text-gray-400"></i>
            </div>
            <p className="text-sm text-gray-600 text-center">
              No notifications yet
            </p>
          </div>
        ) : (
          <div>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-4 border-b border-gray-200 active:bg-gray-100 ${
                  !notification.read ? 'bg-blue-50' : 'bg-white'
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getIconColor(notification.type)}`}>
                    <i className={`${getIcon(notification.type)} text-lg`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 flex-1">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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