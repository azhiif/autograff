
export default function ServicesSection() {
  const handleClick = () => {
    window.open('https://www.autograff.in', '_blank');
  };

  const features = [
    {
      icon: 'ri-global-line',
      title: 'Global Marketplace',
      description: 'Access luxury items from dealers and collectors worldwide in one unified platform'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Verified Authenticity',
      description: 'Every listing is verified by our team of luxury experts for authenticity and quality'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Concierge Service',
      description: 'Personal luxury advisors to help you find the perfect item or sell yours'
    },
    {
      icon: 'ri-lock-line',
      title: 'Secure Transactions',
      description: 'Protected payments and secure escrow services for high-value transactions'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Advanced Search',
      description: 'Find exactly what you want with our sophisticated filtering and search tools'
    },
    {
      icon: 'ri-truck-line',
      title: 'White Glove Delivery',
      description: 'Premium logistics and delivery services for your luxury purchases'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Platform Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most sophisticated luxury marketplace with features designed for discerning collectors and enthusiasts
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center"
              onClick={handleClick}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-xl mb-6">
                <i className={`${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
