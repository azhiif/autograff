
export default function AboutSection() {
  const handleRedirect = () => {
    window.open('https://www.autograff.in', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxury%20car%20showroom%20interior%20with%20premium%20vehicles%20elegant%20modern%20lighting%20sophisticated%20automotive%20dealership%20professional%20photography%20abstract%20pattern%20background&width=1920&height=1080&seq=about-bg-pattern&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              Redefining Luxury
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Car Experience
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              For over two decades, we've been the trusted destination for discerning automotive enthusiasts. 
              Our curated collection features the finest luxury vehicles from prestigious brands worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm sm:text-base">Premium Cars</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm sm:text-base">Luxury Brands</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">10K+</div>
                <div className="text-gray-300 text-sm sm:text-base">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <button 
                onClick={handleRedirect}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 inline-flex items-center space-x-2 sm:space-x-3 whitespace-nowrap cursor-pointer shadow-lg font-semibold text-sm sm:text-base"
              >
                <span>Learn More About Us</span>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Luxury%20car%20dealership%20showroom%20interior%20with%20premium%20vehicles%20Ferrari%20Lamborghini%20Porsche%20elegant%20modern%20design%20sophisticated%20lighting%20professional%20automotive%20photography&width=800&height=600&seq=about-showroom&orientation=landscape"
                alt="Luxury Car Showroom"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20"></div>
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}