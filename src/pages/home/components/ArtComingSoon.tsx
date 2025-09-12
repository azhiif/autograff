import { useNavigate } from "react-router-dom";

export default function ArtPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="https://readdy.ai/api/search-image?query=Fine%20art%20gallery%20masterpieces%20Picasso%20Monet%20contemporary%20art%20museum%20quality%20artwork%20sophisticated%20art%20photography%20elegant%20display%20premium%20composition%20clean%20background&width=400&height=300&seq=luxury-art-category&orientation=landscape"
            alt="Art Coming Soon"
            className="w-96 h-64 object-cover object-top rounded-2xl mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Fine Art
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We're curating an extraordinary collection of paintings, sculptures, and collectible artworks from renowned artists and emerging talents worldwide.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Back to Home */}
          <button 
            onClick={() => navigate("/")}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Back to Home
          </button>

          {/* Notify Me */}
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
