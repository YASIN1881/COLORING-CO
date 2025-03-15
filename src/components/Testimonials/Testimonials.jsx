import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [trustpilotLoaded, setTrustpilotLoaded] = useState(false);
    const trustpilotContainerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "JAMES ANDERSON",
            position: "RESIDENTIAL CLIENT",
            image: "/img/test-m-2.jpg",
            quote: "Coloring Co completely transformed our home with their exceptional interior painting. Their color consultation was invaluable, and the attention to detail in every room was remarkable. The team's professionalism and cleanliness throughout the project impressed us greatly.",
            rating: 5
        },
        {
            id: 2,
            name: "EMILY RICHARDSON",
            position: "INTERIOR DESIGN STUDIO OWNER",
            image: "/img/test-w-1.jpg",
            quote: "As an interior design studio, we've partnered with Coloring Co on numerous projects. Their expertise in color matching and ability to execute complex painting techniques has made them our go-to painting contractor. They consistently deliver outstanding results.",
            rating: 5
        },
        {
            id: 3,
            name: "DAVID THOMPSON",
            position: "COMMERCIAL PROPERTY OWNER",
            image: "/img/test-m-3.jpg",
            quote: "Coloring Co expertly handled our multi-story office building renovation. Their team worked efficiently during off-hours, used low-VOC paints, and delivered a flawless finish. The new color scheme has completely modernized our property's appearance.",
            rating: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    // Add Trustpilot widget script
    useEffect(() => {
        // Load the Trustpilot widget script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        
        // Set up event listener to detect when Trustpilot widgets are loaded
        window.addEventListener('load', function() {
            // Check if Trustpilot iframe exists after a small delay
            setTimeout(() => {
                const tpIframe = document.querySelector('.trustpilot-widget iframe');
                if (tpIframe) {
                    setTrustpilotLoaded(true);
                }
            }, 1500);
        });
        
        document.head.appendChild(script);

        // Clean up the script when component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, index) => (
            <span key={index} className="text-amber-500">★</span>
        ));
    };

    return (
        <div className="w-full bg-[#2E2A20] py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img 
                            src="/FIVEICON.png" 
                            alt="Coloring Co Logo" 
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                        <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                            Our Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300">
                        What They Talked About Coloring Co
                    </h2>
                    <p className="text-amber-100/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto hover:text-amber-50/90 transition-colors duration-300">
                        Discover what our satisfied clients have to say about their experience with our professional painting services and exceptional results.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-amber-500 rounded-[40px] p-8 md:p-12 relative transform hover:scale-[1.02] transition-all duration-500">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/img/service-bg-3-1.png')] bg-cover bg-center opacity-10 rounded-[40px]"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                            {/* Left Side - Quote Circle */}
                            <div className="relative">
                                <div className="bg-white rounded-full p-12 relative group hover:shadow-2xl transition-all duration-500">
                                    {/* Quote marks - Centered */}
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex">
                                        <span className="text-amber-500 text-[80px] leading-none font-serif group-hover:scale-110 transition-transform duration-300">&ldquo;</span>
                                        <span className="text-amber-500 text-[80px] leading-none font-serif group-hover:scale-110 transition-transform duration-300">&rdquo;</span>
                                    </div>
                                    
                                    {/* Quote content */}
                                    <div className="text-center pt-24 space-y-6">
                                        <div className="relative overflow-hidden">
                                            <p className="text-gray-800 text-xl md:text-2xl italic leading-relaxed transform transition-all duration-[1500ms] hover:text-amber-500">
                                                {testimonials[currentSlide].quote}
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-3 relative">
                                            <div className="transform transition-all duration-500 hover:-translate-y-1">
                                                <h4 className="text-gray-900 font-bold text-xl group-hover:text-amber-500 transition-colors duration-300">
                                                    {testimonials[currentSlide].name}
                                                </h4>
                                                <p className="text-gray-600 uppercase text-sm tracking-wider">
                                                    {testimonials[currentSlide].position}
                                                </p>
                                            </div>
                                            <div className="flex gap-1 justify-center">
                                                {renderStars(testimonials[currentSlide].rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative">
                                <div className="relative aspect-square">
                                    {/* Rotating border */}
                                    <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full animate-spin-slow"></div>
                                    {/* Static content container */}
                                    <div className="absolute inset-4">
                                        <div className="relative rounded-full overflow-hidden aspect-square">
                                            {testimonials.map((testimonial, index) => (
                                                <div
                                                    key={testimonial.id}
                                                    className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out transform
                                                        ${index === currentSlide 
                                                            ? 'opacity-100 scale-100 translate-x-0' 
                                                            : index < currentSlide 
                                                                ? 'opacity-0 scale-105 -translate-x-full' 
                                                                : 'opacity-0 scale-105 translate-x-full'}`}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Navigation Buttons */}
                                <button 
                                    onClick={prevSlide}
                                    className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trustpilot Section */}
                <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <img 
                                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" 
                                alt="Trustpilot 5 Stars" 
                                className="w-20 h-5 sm:w-24 sm:h-6 object-contain"
                            />
                            <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                                Trustpilot Reviews
                            </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300">
                            See What Clients Say on Trustpilot
                        </h3>
                    </div>

                    {/* Trustpilot Widget Container */}
                    <div 
                        ref={trustpilotContainerRef} 
                        className="bg-amber-500/10 rounded-3xl p-5 sm:p-6 backdrop-blur-sm relative overflow-hidden hover:bg-amber-500/15 transition-all duration-500"
                    >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-[url('/img/service-bg-3-1.png')] bg-cover bg-center opacity-5"></div>
                        
                        {/* Border glow effect */}
                        <div className="absolute inset-0 border border-amber-500/30 rounded-3xl"></div>
                        
                        {/* Trustpilot Widget (hidden if fallback is shown) */}
                        <div 
                            className={`trustpilot-widget relative z-10 ${trustpilotLoaded ? 'block' : 'hidden'}`}
                            data-locale="en-AU" 
                            data-template-id="5419b6ffb0d04a076446a9af" 
                            data-businessunit-id="65e15e2ffb3af3a4e53a3fa0" 
                            data-style-height="150px" 
                            data-style-width="100%" 
                            data-theme="dark" 
                            data-stars="1,2,3,4,5" 
                            data-no-reviews="show"
                        >
                            <a href="https://www.trustpilot.com/review/coloringco.com.au" target="_blank" rel="noopener">
                                <span className="text-amber-100 hover:text-amber-300 transition-colors duration-300">
                                    Check our Trustpilot reviews
                                </span>
                            </a>
                        </div>
                        
                        {/* Fallback content if widget doesn't load properly */}
                        <div className={`${trustpilotLoaded ? 'hidden' : 'block'} bg-amber-500/20 p-5 rounded-2xl relative z-10 border border-amber-500/30`}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-amber-500 text-lg">★★★★★</div>
                                <span className="text-amber-100 font-semibold text-sm">5.0 / 5.0</span>
                            </div>
                            
                            <div className="relative pl-5">
                                <span className="absolute left-0 top-0 text-amber-500 text-xl font-serif">&ldquo;</span>
                                <p className="text-amber-100 italic text-base mb-2">
                                    I had the pleasure of hiring Peter to paint my house, and I couldn&apos;t be more satisfied with the results. This was the second time I&apos;ve worked with him; the first was in 2016 for my previous house. His work is exceptional - very clean, high-quality, and done with great attention to detail.
                                </p>
                                <div className="text-amber-300 font-medium text-sm">
                                    - Reza Rasuli Gandomani
                                    <span className="text-amber-100/70 text-xs ml-2 font-normal">
                                        (December 2024)
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* View more link - made more compact */}
                        <div className="mt-4 text-center">
                            <a 
                                href="https://www.trustpilot.com/review/coloringco.com.au" 
                                target="_blank" 
                                rel="noopener" 
                                className="inline-block px-6 py-2 bg-amber-500 text-gray-900 font-semibold rounded-full text-sm hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                View on Trustpilot
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
