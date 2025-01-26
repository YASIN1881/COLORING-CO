import { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "ANTHONY B. CASTILLO",
            position: "MANAGING DIRECTOR",
            image: "/img/testi-3-1.webp",
            quote: "Ienet Internet Company Also Impressed Us With Their Transparency Regarding Costs. The Initial Quote Was Accurate",
            rating: 5
        },
        {
            id: 2,
            name: "SARAH JOHNSON",
            position: "CEO",
            image: "/img/testi-3-2.webp",
            quote: "Outstanding service and professional team. The wallpaper installation exceeded our expectations.",
            rating: 5
        },
        {
            id: 3,
            name: "MICHAEL CHEN",
            position: "PROJECT MANAGER",
            image: "/img/testi-3-3.webp",
            quote: "Their attention to detail and customer service made the entire process smooth and enjoyable.",
            rating: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
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
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-amber-500 text-lg">◆</span>
                        <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                            Our Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                        What They Talked About Colorco
                    </h2>
                </div>

                {/* Testimonial Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-amber-500 rounded-[40px] p-8 md:p-12 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Quote Circle */}
                            <div className="relative">
                                <div className="bg-white rounded-full p-12 relative">
                                    {/* Quote marks - Centered */}
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex">
                                        <span className="text-amber-500 text-[80px] leading-none font-serif">"</span>
                                        <span className="text-amber-500 text-[80px] leading-none font-serif">"</span>
                                    </div>
                                    
                                    {/* Quote content */}
                                    <div className="text-center pt-24 space-y-6">
                                        <p className="text-gray-800 text-xl md:text-2xl italic leading-relaxed">
                                            {testimonials[currentSlide].quote}
                                        </p>
                                        
                                        <div className="space-y-2">
                                            <h4 className="text-gray-900 font-bold text-xl">
                                                {testimonials[currentSlide].name}
                                            </h4>
                                            <p className="text-gray-600 uppercase text-sm tracking-wider">
                                                {testimonials[currentSlide].position}
                                            </p>
                                            <div className="flex gap-1 justify-center">
                                                {renderStars(testimonials[currentSlide].rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative">
                                <div className="aspect-square rounded-full border-4 border-dashed border-white/30 p-4">
                                    <div className="relative rounded-full overflow-hidden aspect-square">
                                        {testimonials.map((testimonial, index) => (
                                            <div
                                                key={testimonial.id}
                                                className={`absolute inset-0 transition-opacity duration-500 ${
                                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            >
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Navigation Buttons */}
                                <button 
                                    onClick={prevSlide}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 hover:bg-white/90 transition-colors"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-500 hover:bg-white/90 transition-colors"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
