
import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 500,
      suffix: '+',
      title: 'Premium Cars',
      description: 'Luxury vehicles in stock'
    },
    {
      number: 10000,
      suffix: '+',
      title: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      number: 25,
      suffix: '+',
      title: 'Luxury Brands',
      description: 'Premium automotive brands'
    },
    {
      number: 20,
      suffix: '+',
      title: 'Years Experience',
      description: 'In luxury car trading'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCurrentNumber(number);
            clearInterval(timer);
          } else {
            setCurrentNumber(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isVisible, number]);

    return (
      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        {currentNumber.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://readdy.ai/api/search-image?query=Luxury%20automotive%20background%20with%20premium%20cars%20in%20elegant%20showroom%20sophisticated%20lighting%20modern%20design%20professional%20photography%20dark%20atmosphere&width=1920&height=800&seq=stats-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Achievements
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence in luxury automotive
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <AnimatedNumber 
                  number={stat.number} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}