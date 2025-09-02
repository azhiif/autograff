
import { useState } from 'react';

export default function FeaturedCarsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const cars = [
    {
      id: 1,
      make: 'Ferrari',
      model: '488 GTB',
      year: 2023,
      price: '$285,000',
      mileage: '2,500 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Red%20Ferrari%20488%20GTB%20luxury%20sports%20car%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=ferrari-488&orientation=landscape',
      category: 'sports',
      featured: true
    },
    {
      id: 2,
      make: 'Lamborghini',
      model: 'Huracán',
      year: 2024,
      price: '$315,000',
      mileage: '1,200 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Yellow%20Lamborghini%20Huracan%20luxury%20sports%20car%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=lambo-huracan&orientation=landscape',
      category: 'sports',
      featured: true
    },
    {
      id: 3,
      make: 'Porsche',
      model: '911 Turbo S',
      year: 2023,
      price: '$225,000',
      mileage: '3,800 mi',
      fuel: 'Gasoline',
      transmission: 'PDK',
      image: 'https://readdy.ai/api/search-image?query=Silver%20Porsche%20911%20Turbo%20S%20luxury%20sports%20car%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=porsche-911&orientation=landscape',
      category: 'sports',
      featured: true
    },
    {
      id: 4,
      make: 'BMW',
      model: 'X7 M50i',
      year: 2023,
      price: '$125,000',
      mileage: '8,500 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Black%20BMW%20X7%20M50i%20luxury%20SUV%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=bmw-x7&orientation=landscape',
      category: 'suv',
      featured: false
    },
    {
      id: 5,
      make: 'Mercedes',
      model: 'S-Class AMG',
      year: 2024,
      price: '$165,000',
      mileage: '1,500 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=White%20Mercedes%20S-Class%20AMG%20luxury%20sedan%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=mercedes-s-class&orientation=landscape',
      category: 'luxury',
      featured: true
    },
    {
      id: 6,
      make: 'Audi',
      model: 'RS e-tron GT',
      year: 2023,
      price: '$145,000',
      mileage: '4,200 mi',
      fuel: 'Electric',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Blue%20Audi%20RS%20e-tron%20GT%20luxury%20electric%20car%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=audi-etron&orientation=landscape',
      category: 'electric',
      featured: false
    },
    {
      id: 7,
      make: 'Bentley',
      model: 'Continental GT',
      year: 2023,
      price: '$235,000',
      mileage: '2,800 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Dark%20green%20Bentley%20Continental%20GT%20luxury%20grand%20tourer%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=bentley-continental&orientation=landscape',
      category: 'luxury',
      featured: true
    },
    {
      id: 8,
      make: 'Tesla',
      model: 'Model S Plaid',
      year: 2024,
      price: '$135,000',
      mileage: '1,800 mi',
      fuel: 'Electric',
      transmission: 'Automatic',
      image: 'https://readdy.ai/api/search-image?query=Black%20Tesla%20Model%20S%20Plaid%20luxury%20electric%20sedan%20elegant%20modern%20design%20premium%20automotive%20photography%20professional%20lighting%20clean%20white%20background%20sophisticated%20vehicle&width=600&height=400&seq=tesla-model-s&orientation=landscape',
      category: 'electric',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Cars' },
    { id: 'sports', label: 'Sports Cars' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'suv', label: 'SUV' },
    { id: 'electric', label: 'Electric' }
  ];

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeFilter);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Featured Luxury Cars
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our handpicked collection of premium vehicles from the world's most prestigious brands
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 bg-white rounded-full p-2 shadow-lg max-w-full overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {filteredCars.map((car) => (
            <div key={car.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {car.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <i className="ri-heart-line text-gray-700 text-sm sm:text-base"></i>
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <i className="ri-share-line text-gray-700 text-sm sm:text-base"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {car.make} {car.model}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {car.year}
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">
                    {car.price}
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <i className="ri-road-map-line text-orange-500"></i>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <i className="ri-gas-station-line text-orange-500"></i>
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <i className="ri-settings-3-line text-orange-500"></i>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <i className="ri-calendar-line text-orange-500"></i>
                      <span>{car.year}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 inline-flex items-center space-x-2 sm:space-x-3 whitespace-nowrap cursor-pointer shadow-lg text-base sm:text-lg font-semibold">
            <span>View All Cars</span>
            <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
