
import { useState } from 'react';

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Luxury%20car%20showroom%20modern%20automotive%20dealership%20interior%20with%20premium%20vehicles%20elegant%20lighting%20professional%20business%20environment%20sophisticated%20design&width=1920&height=600&seq=video-section-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Make Finding The Right Car Simple
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              At Autograff what matters to us is making your car search and buying experience as simple as possible, so you can find the right car quickly and get on with making it yours.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <button 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <i className="ri-play-fill text-white text-3xl ml-1 group-hover:scale-110 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
      
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button 
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
              onClick={() => setShowVideo(false)}
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/7e90gBu4pas"
                title="Autograff Video"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
