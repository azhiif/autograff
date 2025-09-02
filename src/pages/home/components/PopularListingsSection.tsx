
import { useState, useEffect } from 'react';

export default function PopularListingsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const listings = [
    {
      id: 1,
      title: 'Audi Q7 quattro technology pack / kerala / 2022 /single ownership',
      price: '₹7,800,000',
      mileage: '23,000',
      fuel: 'Petrol',
      transmission: 'CVT',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/IMG-20241219-WA0012-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    },
    {
      id: 2,
      title: 'Porsche boxster S 718/ kerala / 2018 / third ownership',
      price: '₹9,500,000',
      mileage: '33,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/IMG-20241219-WA0067-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    },
    {
      id: 3,
      title: 'AUDI eletric Etron 55 /KERALA/2022/SINGLE',
      price: null,
      mileage: '5,500',
      fuel: 'Electric',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-03-at-10.22.58_1f1e301a-621x396.jpg',
      featured: true,
      photos: 2
    },
    {
      id: 4,
      title: 'BMW 530D/KERALA/2ND OWNERSHIP/',
      price: '₹5,700,000',
      mileage: '28,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-30-at-16.04.45_cac9a050-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, listings.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, listings.length - 3)) % Math.max(1, listings.length - 3));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30,58,138,0.9), rgba(30,58,138,0.9)), url('https://readdy.ai/api/search-image?query=Dark%20blue%20luxury%20automotive%20background%20elegant%20pattern%20sophisticated%20design%20premium%20car%20dealership%20atmosphere%20professional%20lighting&width=1920&height=600&seq=popular-listings-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Popular Listings
          </h2>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10 cursor-pointer"
            onClick={prevSlide}
          >
            <i className="ri-arrow-left-line text-white text-xl"></i>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10 cursor-pointer"
            onClick={nextSlide}
          >
            <i className="ri-arrow-right-line text-white text-xl"></i>
          </button>
          
          {/* Listings Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 4)}%)` }}
            >
              {listings.map((listing) => (
                <div key={listing.id} className="w-1/4 flex-shrink-0 px-3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      {listing.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                        <div className="bg-black/70 text-white px-2 py-1 text-xs rounded flex items-center space-x-1">
                          <i className="ri-camera-line"></i>
                          <span>{listing.photos}</span>
                        </div>
                        {listing.hasVideo && (
                          <div className="bg-black/70 text-white px-2 py-1 text-xs rounded">
                            <i className="ri-play-line"></i>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3 flex space-x-2">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <i className="ri-heart-line text-gray-600"></i>
                        </button>
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <i className="ri-shuffle-line text-gray-600"></i>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      {listing.price && (
                        <div className="text-xl font-bold text-gray-900 mb-2">
                          {listing.price}
                        </div>
                      )}
                      <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                        {listing.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <i className="ri-road-map-line"></i>
                          <span>{listing.mileage}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="ri-gas-station-line"></i>
                          <span>{listing.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="ri-settings-3-line"></i>
                          <span>{listing.transmission}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
