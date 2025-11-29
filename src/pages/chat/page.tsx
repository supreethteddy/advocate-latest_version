import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const advocateInfo = {
    name: 'Adv. Rajesh Kumar',
    practiceArea: 'Criminal Law'
  };

  const [messages] = useState([
    {
      id: 1,
      sender: 'advocate',
      text: 'Hello! I have reviewed your enquiry regarding the cyber fraud case. I can help you with this matter.',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Thank you for responding. I need guidance on filing an FIR for online fraud.',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'advocate',
      text: 'I understand. First, we need to gather all evidence including transaction details, screenshots, and communication records. Do you have these documents ready?',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'user',
      text: 'Yes, I have all the transaction screenshots and email communications saved.',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'advocate',
      text: 'Excellent. We can schedule a meeting to discuss the case in detail and proceed with filing the FIR. Are you available this week?',
      time: '10:40 AM'
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-gray-900 -ml-2"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <div className="flex-1">
            <h1 className="text-base font-semibold text-gray-900">{advocateInfo.name}</h1>
            <p className="text-xs text-gray-500">{advocateInfo.practiceArea}</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-gray-600">
            <i className="ri-more-2-fill text-xl"></i>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pt-20 pb-20 px-4">
        <div className="space-y-4 py-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-[0.625rem] text-gray-500 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-gray-400">
            <i className="ri-attachment-2 text-xl"></i>
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-gray-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              message.trim() ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}
          >
            <i className="ri-send-plane-fill text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}