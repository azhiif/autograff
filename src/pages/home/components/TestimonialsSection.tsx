
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Brooklyn Simmons',
      position: 'Marketing',
      content: 'I believe in lifelong learning and Autograff is a great place to learn from experts. I\'ve learned a lot and recommend it to all my friends.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20person%20portrait%20smiling%20confident%20marketing%20executive%20clean%20background%20professional%20headshot&width=80&height=80&seq=testimonial-1&orientation=squarish'
    },
    {
      name: 'John Doe',
      position: 'Designer',
      content: 'I believe in lifelong learning and Autograff is a great place to learn from experts. I\'ve learned a lot and recommend it to all my friends.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20person%20portrait%20smiling%20confident%20designer%20male%20clean%20background%20professional%20headshot&width=80&height=80&seq=testimonial-2&orientation=squarish'
    },
    {
      name: 'Augusta Silva',
      position: 'Sales Manager',
      content: 'I believe in lifelong learning and Autograff is a great place to learn from experts. I\'ve learned a lot and recommend it to all my friends.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20portrait%20smiling%20confident%20sales%20manager%20clean%20background%20professional%20headshot&width=80&height=80&seq=testimonial-3&orientation=squarish'
    },
    {
      name: 'Jack Graham',
      position: 'Telemarketer',
      content: 'I believe in lifelong learning and Autograff is a great place to learn from experts. I\'ve learned a lot and recommend it to all my friends.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20person%20portrait%20smiling%20confident%20telemarketer%20male%20clean%20background%20professional%20headshot&width=80&height=80&seq=testimonial-4&orientation=squarish'
    },
    {
      name: 'Lori Ramos',
      position: 'Sales Manager',
      content: 'I believe in lifelong learning and Autograff is a great place to learn from experts. I\'ve learned a lot and recommend it to all my friends.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20portrait%20smiling%20confident%20sales%20manager%20female%20clean%20background%20professional%20headshot&width=80&height=80&seq=testimonial-5&orientation=squarish'
    }
  ];

  const visibleTestimonials = 2;
  const totalSlides = Math.ceil(testimonials.length / visibleTestimonials);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials
                      .slice(slideIndex * visibleTestimonials, (slideIndex + 1) * visibleTestimonials)
                      .map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                          <div className="flex items-start space-x-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="mb-4">
                                <h4 className="font-semibold text-gray-900 text-lg">
                                  {testimonial.name}
                                </h4>
                                <p className="text-orange-500 text-sm">
                                  {testimonial.position}
                                </p>
                              </div>
                              <p className="text-gray-600 leading-relaxed">
                                {testimonial.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
