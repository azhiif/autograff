
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://readdy.ai/api/search-image?query=Luxurious%20modern%20showroom%20with%20premium%20sports%20cars%2C%20elegant%20lighting%2C%20marble%20floors%2C%20sophisticated%20interior%20design%2C%20high-end%20automotive%20display%2C%20contemporary%20architecture%2C%20professional%20photography%2C%20clean%20minimalist%20aesthetic&width=1920&height=1080&seq=hero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Exclusive%20yacht%20marina%20with%20luxury%20mega%20yachts%2C%20pristine%20blue%20water%2C%20elegant%20harbor%20setting%2C%20premium%20boats%2C%20sophisticated%20nautical%20environment%2C%20golden%20hour%20lighting%2C%20upscale%20marina%20facilities%2C%20clean%20modern%20aesthetic&width=1920&height=1080&seq=hero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Private%20jet%20on%20tarmac%20at%20luxury%20airport%20terminal%2C%20sleek%20aircraft%20design%2C%20premium%20aviation%20setting%2C%20modern%20hangar%20background%2C%20sophisticated%20travel%20lifestyle%2C%20elegant%20lighting%2C%20professional%20aircraft%20photography%2C%20clean%20minimalist%20composition&width=1920&height=1080&seq=hero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Luxury%20watch%20collection%20display%20in%20premium%20boutique%2C%20elegant%20timepieces%20showcase%2C%20sophisticated%20jewelry%20store%20interior%2C%20high-end%20retail%20environment%2C%20refined%20lighting%2C%20modern%20display%20cases%2C%20premium%20shopping%20experience%2C%20clean%20aesthetic&width=1920&height=1080&seq=hero4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Exclusive%20luxury%20real%20estate%20mansion%20exterior%2C%20modern%20architectural%20design%2C%20pristine%20landscaping%2C%20elegant%20property%20facade%2C%20sophisticated%20residential%20setting%2C%20premium%20lifestyle%2C%20beautiful%20lighting%2C%20high-end%20home%20photography%2C%20clean%20composition&width=1920&height=1080&seq=hero5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Fine%20art%20gallery%20with%20premium%20artwork%20collection%2C%20sophisticated%20exhibition%20space%2C%20elegant%20museum%20interior%2C%20refined%20cultural%20environment%2C%20professional%20art%20display%2C%20modern%20gallery%20lighting%2C%20luxury%20artistic%20setting%2C%20clean%20minimalist%20design&width=1920&height=1080&seq=hero6&orientation=landscape'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 60000); // Change every 60 seconds (1 minute)

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleClick = () => {
    window.open('https://www.autograff.in', '_blank');
  };

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full px-6 py-32">
        <div className="max-w-4xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The World's
            <br />
            <span className="text-yellow-400">Luxury</span>
            <br />
            Marketplace
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            One unified platform for the finest cars, yachts, jets, watches, real estate, and art. Experience luxury without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              onClick={handleClick}
            >
              Explore Collection
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              onClick={handleClick}
            >
              Sell Your Item
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}