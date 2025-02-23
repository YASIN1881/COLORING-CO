import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, EffectCreative } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

// Import custom styles
import './Slider.css';

const slides = [
    {
        image: '/img/slider-1-1.jpg',
        text: 'Professional Painting Solutions',
        subText: 'For Commercial & Residential Properties',
        buttonText1: 'Our Services',
        buttonText2: 'Get Quote',
    },
    {
        image: '/img/slider-1-2.jpg',
        text: 'Premium Quality Finishes',
        subText: 'Transforming Spaces with Excellence',
        buttonText1: 'Our Services',
        buttonText2: 'Get Quote',
    },
    {
        image: '/img/slider-1-3.jpg',
        text: 'Expert Color Consultation',
        subText: 'Bringing Your Vision to Life',
        buttonText1: 'Our Services',
        buttonText2: 'Get Quote',
    },
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = slides.length;

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleQuoteRequest = (e) => {
        e.preventDefault();
        
        const emailContent = `
Dear Coloring Co Team,

I would like to request a quote for the following services:
- Residential & Commercial Painting
- House Renovation
- Spray Painting
- Interior Decoration

Please provide me with detailed pricing information for your services.

Best regards,
Prospective Client
        `.trim();

        const mailtoLink = `mailto:info@coloringco.com.au?subject=Quote Request&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="slider-container">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade, EffectCreative]}
                effect="creative"
                creativeEffect={{
                    prev: {
                        translate: ['-20%', 0, -200],
                        scale: 1,
                        opacity: 0.5
                    },
                    next: {
                        translate: ['100%', 0, 0],
                        scale: 1,
                        opacity: 0.5
                    }
                }}
                speed={1000}
                autoplay={{ 
                    delay: 10000,
                    disableOnInteraction: false 
                }}
                pagination={{ 
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}">
                            <span class="bullet-text">${index + 1}</span>
                        </span>`;
                    }
                }}
                loop={true}
                slidesPerView={1}
                className="h-screen custom-swiper"
                onSlideChange={handleSlideChange}
                watchSlidesProgress={true}
                grabCursor={true}
                preventInteractionOnTransition={true}
                style={{ background: '#2E2A20' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="relative h-full w-full bg-cover bg-center transition-transform duration-1000"
                            style={{backgroundImage: `url(${slide.image})`}}
                        >
                            {/* Gradient Overlay with enhanced blur effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm transition-all duration-500"></div>
                            
                            {/* Content Container */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                                {/* Slide Counter */}
                                <div className="absolute top-8 left-8 font-mono text-2xl text-amber-500">
                                    <span className="text-4xl font-bold">{(activeIndex + 1).toString().padStart(2, '0')}</span>
                                    <span className="text-white/50 mx-2">/</span>
                                    <span className="text-white/50">{totalSlides.toString().padStart(2, '0')}</span>
                                </div>

                                {/* Top Badge with enhanced animation */}
                                <div className="animate-slideDown perspective-text">
                                    <div className="border-2 border-amber-500 px-6 py-2 rounded-full mb-4 backdrop-blur-md bg-black/30
                                        transform hover:scale-105 transition-all duration-300 cursor-default">
                                        <p className="text-amber-500 font-semibold tracking-wider text-lg">
                                            Professional Painting Services
                                        </p>
                                    </div>
                                </div>

                                {/* Main Text with 3D effect */}
                                <h1 className="text-4xl md:text-7xl font-bold mb-2 perspective-text leading-tight">
                                    <div className="block animate-title bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 
                                        bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300 py-1">
                                        {slide.text}
                                    </div>
                                </h1>

                                {/* Sub Text with typing effect */}
                                <h2 className="text-xl md:text-3xl font-light mb-8 typing-text animation-delay-200 leading-tight">
                                    {slide.subText}
                                </h2>

                                {/* Buttons with enhanced hover effects */}
                                <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
                                    <button className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                                        hover:bg-white hover:text-amber-500 transition-all duration-300 
                                        transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                        relative overflow-hidden">
                                        <span className="relative z-10">{slide.buttonText1}</span>
                                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                            transition-transform duration-300 origin-left"></div>
                                    </button>
                                    <button 
                                        onClick={handleQuoteRequest}
                                        className="group border-2 border-white/70 bg-transparent text-white px-10 py-4 rounded-full 
                                            hover:bg-white hover:text-amber-500 transition-all duration-300 
                                            backdrop-blur-sm
                                            relative overflow-hidden">
                                        <span className="relative z-10 text-[15px] font-medium">{slide.buttonText2}</span>
                                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                            transition-transform duration-300 origin-left"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;