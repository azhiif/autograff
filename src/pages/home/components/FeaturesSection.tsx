
import { useState } from 'react';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const listings = [
    {
      id: 1,
      title: 'AMG LINE',
      price: null,
      mileage: '4,500',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-26-at-4.19.19-PM-621x396.jpeg',
      featured: true,
      photos: 1
    },
    {
      id: 2,
      title: 'Audi Q8 quattro /2023/12000 /kerala / Single ownership',
      price: '₹11,000,000',
      mileage: '12,000',
      fuel: 'Petrol',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/IMG-20241219-WA0065-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      title: 'BMW 530D/KERALA/2ND OWNERSHIP/',
      price: '₹5,700,000',
      mileage: '28,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-30-at-16.04.45_cac9a050-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    },
    {
      id: 7,
      title: 'Mercedes Benz E class | 2019 | 33000km | Single ownership0km |',
      price: '₹5,500,000',
      mileage: '33,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/08/IMG-20240823-WA0010-621x396.jpg',
      featured: true,
      photos: 2,
      hasVideo: true
    },
    {
      id: 8,
      title: 'AUDI Q5 | 40000KM | SINGLE OWNERSHIP | KERALA',
      price: '₹4,500,000',
      mileage: '40,000',
      fuel: 'Diesel',
      transmission: 'Automatic',
      image: 'https://www.autograff.in/wp-content/uploads/2024/08/IMG-20240823-WA0080-621x396.jpg',
      featured: true,
      photos: 5,
      hasVideo: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Status' },
    { id: 'cars', label: 'Cars' },
    { id: 'sports', label: 'Sports Bike' },
    { id: 'vintage', label: 'Vintage & Classic' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Listings
          </h2>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {listings.map((listing) => (
            <div key={listing.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
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
        
        {/* Show All Button */}
        <div className="text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors inline-flex items-center space-x-2 whitespace-nowrap cursor-pointer">
            <span>Show All Cars</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
