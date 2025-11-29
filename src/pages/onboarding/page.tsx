import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: 'Welcome to AdvocateConnect',
      description: 'Your trusted platform for finding verified legal advocates',
      image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20illustration%20of%20legal%20justice%20scales%20and%20gavel%20in%20soft%20blue%20tones%2C%20clean%20simple%20design%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20professional%20legal%20concept%2C%20flat%20design%20style%2C%20geometric%20shapes%2C%20calming%20colors&width=300&height=300&seq=onboard1&orientation=squarish'
    },
    {
      title: 'Find Legal Help Easily',
      description: 'Search advocates by practice area, location, and language preferences',
      image: 'https://readdy.ai/api/search-image?query=Minimalist%20illustration%20of%20magnifying%20glass%20searching%20through%20legal%20documents%20and%20profiles%2C%20soft%20blue%20and%20grey%20colors%2C%20clean%20simple%20design%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20modern%20flat%20style%2C%20professional%20look%2C%20geometric%20shapes&width=300&height=300&seq=onboard2&orientation=squarish'
    },
    {
      title: 'Stay Updated',
      description: 'Enable notifications to receive updates on your enquiry responses',
      image: 'https://readdy.ai/api/search-image?query=Simple%20illustration%20of%20notification%20bell%20with%20message%20alerts%2C%20soft%20blue%20accent%20color%2C%20clean%20minimalist%20design%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20modern%20flat%20style%2C%20professional%20appearance%2C%20geometric%20shapes%2C%20calming%20palette&width=300&height=300&seq=onboard3&orientation=squarish'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('onboarding_completed', 'true');
      navigate('/home');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('onboarding_completed', 'true');
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <img 
              src={steps[currentStep].image} 
              alt={steps[currentStep].title}
              className="w-64 h-64 object-contain"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
            {steps[currentStep].title}
          </h1>
          
          <p className="text-base text-gray-600 text-center mb-8">
            {steps[currentStep].description}
          </p>

          <div className="flex justify-center gap-2 mb-12">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold mb-3 active:bg-blue-700"
        >
          {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
        </button>
        
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleSkip}
            className="w-full text-gray-600 py-3 font-medium"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}