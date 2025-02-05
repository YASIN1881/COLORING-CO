import { Play, Check } from 'lucide-react';
import { useState } from 'react';

const WallDesignHero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="about-one relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Image Section */}
          <div className="relative">
            <div className="about-one__thumb group">
              <div className="rounded-2xl overflow-hidden relative">
                <img 
                  src="/img/hero-2-1.jpeg" 
                  alt="Wall Design" 
                  className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-black/50 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 
                  rounded-2xl transition-all duration-700"></div>
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 
                  group-hover:border-amber-500/50 transition-all duration-700 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 
                  group-hover:border-amber-500/50 transition-all duration-700 rounded-br-lg"></div>
              </div>
              
              {/* Years of Experience Counter */}
              <div className="absolute left-8 bottom-8 group/counter z-20">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-amber-500/20 rounded-lg blur-xl opacity-0 
                  group-hover/counter:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-amber-500 text-white p-6 rounded-lg shadow-lg transform 
                  transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl 
                  hover:shadow-amber-500/50 overflow-hidden group-hover:bg-amber-600">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 to-transparent opacity-0 
                    group-hover/counter:opacity-100 transition-all duration-700 animate-gradient"></div>
                  
                  {/* Counter Content */}
                  <div className="relative z-20">
                    <h3 className="text-4xl font-bold flex items-center">
                      <span className="animate-count inline-block transform group-hover/counter:scale-110 
                        transition-transform duration-300">25</span>
                      <span className="ml-1 inline-block transform group-hover/counter:rotate-12 
                        transition-transform duration-300">+</span>
                    </h3>
                    <p className="text-sm mt-1 group-hover/counter:tracking-wider transition-all duration-300">
                      years of <br /> experience
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-2 -top-2 w-8 h-8 border-2 border-white/20 rounded-full 
                    transform rotate-45 group-hover/counter:rotate-90 transition-transform duration-500"></div>
                  <div className="absolute -left-2 -bottom-2 w-6 h-6 border-2 border-white/20 rounded-full 
                    transform -rotate-45 group-hover/counter:rotate-90 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text Section */}
          <div className="space-y-6">
            <div className="sec-title">
              <div className="flex items-center gap-2">
                <img src="/FIVEICON.png" alt="Wallox icon" className="w-6 h-6 object-contain" />
                <h3 className="text-orange-500 font-semibold uppercase tracking-wider">welcome to Coloring Co</h3>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                We&apos;re Providing Quality Wall Designs
              </h1>
            </div>
            
            <p className="text-gray-600">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don&apos;t Look Even Slightly Believable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Video Section */}
              <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                <img 
                  src="/img/video-bg.jpg" 
                  alt="Video thumbnail" 
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20 flex items-center justify-center">
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                    <Play className="w-6 h-6 text-orange-500 transition-colors duration-300 group-hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">We&apos;re Professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">We Use Quality Material</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">100% Customers Satisfaction</span>
                </div>
              </div>
            </div>

              {/* Top Border Line with enhanced gradient */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

            {/* Client Reviews and CTA */}
            <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <img
                      key={index}
                      src={`/img/testi-3-${(index % 3) + 1}.webp`}
                      alt={`Client ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Satisfied Client Ratings</p>
                </div>
              </div>

              <a 
                href="/about-us"
                className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                    hover:bg-white hover:text-amber-500 transition-all duration-300 
                    transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                    relative overflow-hidden min-w-[200px] text-center"
              >
                <span className="relative z-10">More About Us</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute right-0 bottom-0 -z-10">
        <img src="/img/about-2-1.png" alt="" className="w-full h-auto" />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/h9MbznbxlLc?autoplay=1"
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900"
              onClick={() => setIsVideoOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WallDesignHero; 