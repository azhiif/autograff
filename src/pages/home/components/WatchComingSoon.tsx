
export default function WatchesPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://readdy.ai/api/search-image?query=Luxury%20watch%20collection%20coming%20soon%20Rolex%20Patek%20Philippe%20premium%20timepieces%20elegant%20display%20sophisticated%20watch%20photography%20clean%20modern%20background%20professional%20lighting%20minimalist%20design&width=400&height=300&seq=watches-coming-soon&orientation=landscape"
              alt="Watches Coming Soon"
              className="w-96 h-64 object-cover object-top rounded-2xl mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Luxury Watches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're assembling the world's finest collection of Swiss timepieces, vintage watches, and horological masterpieces for discerning collectors.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => window.open('https://www.autograff.in', '_blank')}
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Home
            </button>
            <button 
              onClick={() => window.open('https://www.autograff.in', '_blank')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    );
  }
  