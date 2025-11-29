import { useNavigate, useParams } from 'react-router-dom';

export default function GuideDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const guideContent = {
    '1': {
      title: 'How to File a Police Complaint',
      category: 'Criminal Law',
      image: 'https://readdy.ai/api/search-image?query=Professional%20illustration%20of%20police%20station%20with%20legal%20documents%20and%20officer%2C%20soft%20blue%20and%20grey%20tones%2C%20clean%20minimalist%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20modern%20flat%20style%2C%20trustworthy%20appearance%2C%20geometric%20shapes%2C%20calming%20colors&width=375&height=200&seq=guidedetail1&orientation=landscape',
      steps: [
        {
          title: 'Step 1: Visit the Police Station',
          content: 'Go to the nearest police station in whose jurisdiction the incident occurred. You can file a complaint at any time, day or night.'
        },
        {
          title: 'Step 2: Provide Details',
          content: 'Clearly explain what happened, when it happened, where it happened, and who was involved. Provide as many details as possible including dates, times, and locations.'
        },
        {
          title: 'Step 3: Request FIR Registration',
          content: 'Ask the police officer to register an FIR (First Information Report). The police are legally obligated to register an FIR for cognizable offenses.'
        },
        {
          title: 'Step 4: Get FIR Copy',
          content: 'Once the FIR is registered, you are entitled to receive a free copy of the FIR. Make sure to collect this copy for your records.'
        },
        {
          title: 'Step 5: Follow Up',
          content: 'Keep track of your complaint by noting down the FIR number. You can follow up with the investigating officer for updates on your case.'
        }
      ],
      practiceArea: 'Criminal'
    },
    '2': {
      title: 'Steps for Property Verification',
      category: 'Property Law',
      image: 'https://readdy.ai/api/search-image?query=Clean%20illustration%20of%20house%20with%20legal%20documents%20and%20verification%20checkmark%2C%20soft%20blue%20tones%2C%20minimalist%20flat%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20professional%20property%20concept%2C%20modern%20style%2C%20geometric%20shapes%2C%20trustworthy%20appearance&width=375&height=200&seq=guidedetail2&orientation=landscape',
      steps: [
        {
          title: 'Step 1: Check Title Deed',
          content: 'Verify the title deed to ensure the seller is the rightful owner. Check for any discrepancies in names, property details, or boundaries.'
        },
        {
          title: 'Step 2: Encumbrance Certificate',
          content: 'Obtain an Encumbrance Certificate from the Sub-Registrar office. This shows all transactions related to the property for the past 13-30 years.'
        },
        {
          title: 'Step 3: Property Tax Records',
          content: 'Check property tax receipts to ensure all taxes are paid up to date. Verify the property details match with municipal records.'
        },
        {
          title: 'Step 4: Physical Inspection',
          content: 'Visit the property and verify boundaries match the documents. Check for any unauthorized constructions or encroachments.'
        },
        {
          title: 'Step 5: Legal Opinion',
          content: 'Consult a property lawyer to review all documents and provide a legal opinion on the property\'s clear title status.'
        }
      ],
      practiceArea: 'Property'
    },
    '3': {
      title: 'What to Do If Someone Cheated You',
      category: 'Consumer Law',
      image: 'https://readdy.ai/api/search-image?query=Minimalist%20illustration%20of%20shield%20protecting%20person%20with%20legal%20documents%20and%20justice%20scales%2C%20soft%20blue%20and%20grey%20palette%2C%20clean%20simple%20design%2C%20centered%20composition%2C%20isolated%20on%20light%20background%2C%20professional%20fraud%20protection%20concept%2C%20modern%20flat%20style%2C%20geometric%20shapes&width=375&height=200&seq=guidedetail3&orientation=landscape',
      steps: [
        {
          title: 'Step 1: Gather Evidence',
          content: 'Collect all documents, messages, emails, receipts, and any other proof of the transaction or agreement. Take screenshots of digital communications.'
        },
        {
          title: 'Step 2: Send Legal Notice',
          content: 'Send a legal notice to the person who cheated you, demanding return of money or fulfillment of obligations. Keep proof of delivery.'
        },
        {
          title: 'Step 3: File Police Complaint',
          content: 'If the matter involves fraud or cheating, file an FIR under Section 420 IPC at your local police station with all supporting documents.'
        },
        {
          title: 'Step 4: Civil Suit Option',
          content: 'You can file a civil suit for recovery of money or damages. This is done in the appropriate civil court based on the amount involved.'
        },
        {
          title: 'Step 5: Consult a Lawyer',
          content: 'Seek legal advice to understand your options and the best course of action. A lawyer can guide you through criminal or civil proceedings.'
        }
      ],
      practiceArea: 'Consumer'
    }
  };

  const guide = guideContent[id as keyof typeof guideContent] || guideContent['1'];

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
          <h1 className="text-lg font-semibold text-gray-900 flex-1 pr-4">{guide.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16">
        {/* Header Image */}
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-48 object-cover"
        />

        <div className="px-4 py-6">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-4">
            {guide.category}
          </span>

          {/* Steps */}
          <div className="space-y-6">
            {guide.steps.map((step, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <button
          onClick={() => navigate(`/search?category=${guide.practiceArea}`)}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold active:bg-blue-700"
        >
          Find Advocates for This Issue
        </button>
      </div>
    </div>
  );
}