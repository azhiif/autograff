
export default function WhyChooseSection() {
  const features = [
    {
      icon: 'ri-price-tag-3-line',
      title: 'Best Price',
      description: 'Our stress-free finance department that can find financial solutions to save you money.'
    },
    {
      icon: 'ri-verified-badge-line',
      title: 'Trusted By Thousands',
      description: 'Our stress-free finance department that can find financial solutions to save you money.'
    },
    {
      icon: 'ri-car-line',
      title: 'Wide Range of Brands',
      description: 'Our stress-free finance department that can find financial solutions to save you money.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${feature.icon} text-orange-500 text-xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
