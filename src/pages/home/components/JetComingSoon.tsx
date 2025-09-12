import { useNavigate } from "react-router-dom";

export default function JetsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="https://readdy.ai/api/search-image?query=Luxury%20private%20jet%20coming%20soon%20premium%20hangar%20background%20sophisticated%20aviation%20photography%20business%20aircraft%20elegant%20composition%20professional%20lighting%20minimalist%20design&width=400&height=300&seq=jets-coming-soon&orientation=landscape"
            alt="Jets Coming Soon"
            className="w-96 h-64 object-cover object-top rounded-2xl mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Private Jets
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We're curating an exceptional fleet of business jets, charter aircraft, and helicopters. 
          Prepare for unparalleled luxury aviation.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Both buttons go home */}
          <button 
            onClick={() => navigate("/")}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Back to Home
          </button>
          <button 
            onClick={() => navigate("/")}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
