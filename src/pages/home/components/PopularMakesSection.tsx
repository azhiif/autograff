
export default function PopularMakesSection() {
  const makes = [
    {
      name: 'BMW',
      logo: 'https://readdy.ai/api/search-image?query=BMW%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=bmw-logo&orientation=landscape'
    },
    {
      name: 'Mercedes-Benz',
      logo: 'https://readdy.ai/api/search-image?query=Mercedes%20Benz%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=mercedes-logo&orientation=landscape'
    },
    {
      name: 'Audi',
      logo: 'https://readdy.ai/api/search-image?query=Audi%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=audi-logo&orientation=landscape'
    },
    {
      name: 'Porsche',
      logo: 'https://readdy.ai/api/search-image?query=Porsche%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=porsche-logo&orientation=landscape'
    },
    {
      name: 'Lexus',
      logo: 'https://readdy.ai/api/search-image?query=Lexus%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=lexus-logo&orientation=landscape'
    },
    {
      name: 'Jaguar',
      logo: 'https://readdy.ai/api/search-image?query=Jaguar%20luxury%20car%20brand%20logo%20modern%20clean%20design%20automotive%20emblem%20professional%20quality&width=120&height=80&seq=jaguar-logo&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Makes
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {makes.map((make, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-center justify-center h-16">
                <img
                  src={make.logo}
                  alt={make.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
