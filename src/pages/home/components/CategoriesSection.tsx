// import { Link } from "react-router-dom";

const categories = [
  {
    title: 'Luxury Cars',
    description: 'Supercars, classics, and exotic vehicles',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20supercar%20collection%20featuring%20Ferrari%2C%20Lamborghini%2C%20McLaren%20in%20pristine%20showroom%20with%20elegant%20lighting%2C%20clean%20modern%20background%2C%20premium%20automotive%20photography%2C%20sophisticated%20composition&width=400&height=300&seq=luxury-cars-category&orientation=landscape',
    href: 'https://www.autograff.in',
    external: true
  },
  {
    title: 'Superyachts',
    description: 'Motor yachts, sailing yachts, and megayachts',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20superyacht%20in%20pristine%20marina%20with%20elegant%20design%2C%20premium%20yacht%20photography%2C%20sophisticated%20maritime%20setting%2C%20clean%20modern%20composition%2C%20professional%20lighting&width=400&height=300&seq=luxury-yachts-category&orientation=landscape',
    href: '/coming-soon/yachts',
  },
  {
    title: 'Private Jets',
    //count: '1,200+',
    description: 'Business jets, charter aircraft, and helicopters',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20private%20jet%20business%20aircraft%20in%20premium%20hangar%20with%20elegant%20lighting%2C%20sophisticated%20aviation%20photography%2C%20clean%20modern%20composition%2C%20professional%20aircraft%20display&width=400&height=300&seq=luxury-jets-category&orientation=landscape',
    href: '/coming-soon/jets',
  },
  {
    title: 'Luxury Watches',
    //count: '8,500+',
    description: 'Swiss timepieces, vintage watches, and collectibles',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20watch%20collection%20Rolex%20Patek%20Philippe%20premium%20timepieces%20elegant%20display%20sophisticated%20watch%20photography%20clean%20modern%20background%20professional%20lighting&width=400&height=300&seq=luxury-watches-category&orientation=landscape',
    href: '/coming-soon/watches',
  },
  {
    title: 'Real Estate',
    //count: '2,800+',
    description: 'Estates, penthouses, and exclusive properties',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20real%20estate%20modern%20mansion%20Beverly%20Hills%20contemporary%20architecture%20premium%20property%20photography%20sophisticated%20composition%20elegant%20design%20clean%20background&width=400&height=300&seq=luxury-realestate-category&orientation=landscape',
    href: '/coming-soon/real-estate',
  },
  {
    title: 'Fine Art',
    //count: '5,200+',
    description: 'Paintings, sculptures, and collectible artwork',
    image: 'https://readdy.ai/api/search-image?query=Fine%20art%20gallery%20masterpieces%20Picasso%20Monet%20contemporary%20art%20museum%20quality%20artwork%20sophisticated%20art%20photography%20elegant%20display%20premium%20composition%20clean%20background&width=400&height=300&seq=luxury-art-category&orientation=landscape',
    href: '/coming-soon/art',
  }
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Luxury Categories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's finest luxury items across multiple categories, all in one unified marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer h-full flex"
              onClick={() => {
                if (category.external) {
                  window.open(category.href, "_blank");
                } else {
                  window.location.href = category.href;
                }
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col flex-1 ">
                  <div>
                    <div className="flex items-center  mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-900 font-medium mt-auto">
                    <span>Explore Collection</span>
                    <div className="w-4 h-4 flex items-center justify-center ml-2">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
