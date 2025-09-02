
export default function CTASection() {
  const handleRedirect = () => {
    window.open('https://www.autograff.in', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
          Ready to Find Your
          <span className="block">Dream Car?</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90">
          Join thousands of satisfied customers who found their perfect luxury vehicle with us
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <button 
            onClick={handleRedirect}
            className="w-full sm:w-auto bg-white text-orange-500 px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 sm:space-x-3 whitespace-nowrap cursor-pointer shadow-xl font-bold text-base sm:text-lg"
          >
            <i className="ri-car-line text-lg sm:text-xl"></i>
            <span>Browse Cars</span>
          </button>
          <button 
            onClick={handleRedirect}
            className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 inline-flex items-center justify-center space-x-2 sm:space-x-3 whitespace-nowrap cursor-pointer font-bold text-base sm:text-lg"
          >
            <i className="ri-phone-line text-lg sm:text-xl"></i>
            <span>Contact Us</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Quality Guarantee</h3>
            <p className="opacity-90 text-sm sm:text-base">All vehicles are thoroughly inspected</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-money-dollar-circle-line text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Best Financing</h3>
            <p className="opacity-90 text-sm sm:text-base">Competitive rates and flexible terms</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-customer-service-2-line text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Support</h3>
            <p className="opacity-90 text-sm sm:text-base">Professional guidance every step</p>
          </div>
        </div>
      </div>
    </section>
  );
}