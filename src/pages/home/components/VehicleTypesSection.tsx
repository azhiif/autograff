
import { Link } from 'react-router-dom';

export default function VehicleTypesSection() {
  const vehicleTypes = [
    {
      title: 'Compact',
      count: '61',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20compact%20car%20BMW%203%20series%20Audi%20A3%20premium%20vehicle%20clean%20modern%20background%20sophisticated%20automotive%20photography%20professional%20lighting&width=300&height=200&seq=compact-cars&orientation=landscape'
    },
    {
      title: 'Sedan',
      count: '5',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20sedan%20car%20Mercedes%20E-Class%20BMW%205%20series%20premium%20vehicle%20clean%20modern%20background%20sophisticated%20automotive%20photography%20professional%20lighting&width=300&height=200&seq=sedan-cars&orientation=landscape'
    },
    {
      title: 'SUV',
      count: '4',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20SUV%20Range%20Rover%20BMW%20X7%20premium%20vehicle%20clean%20modern%20background%20sophisticated%20automotive%20photography%20professional%20lighting&width=300&height=200&seq=suv-cars&orientation=landscape'
    },
    {
      title: 'Convertible',
      count: '19',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20convertible%20car%20Porsche%20911%20BMW%20i8%20premium%20vehicle%20clean%20modern%20background%20sophisticated%20automotive%20photography%20professional%20lighting&width=300&height=200&seq=convertible-cars&orientation=landscape'
    },
    {
      title: 'Coupe',
      count: '4',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20coupe%20car%20Ferrari%20488%20Lamborghini%20premium%20vehicle%20clean%20modern%20background%20sophisticated%20automotive%20photography%20professional%20lighting&width=300&height=200&seq=coupe-cars&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {vehicleTypes.map((type, index) => (
            <Link
              key={index}
              to={`/listings?type=${type.title.toLowerCase()}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {type.count} Listings
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
