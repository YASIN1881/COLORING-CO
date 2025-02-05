import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: "01",
        title: "Residential Painting",
        subtitle: "Professional Home Painting",
        image: "/img/service-3-1.jpg",
        link: "/services/residential"
    },
    {
        id: "02",
        title: "Commercial Painting",
        subtitle: "Business Space Solutions",
        image: "/img/service-3-2.jpg",
        link: "/services/commercial"
    },
    {
        id: "03",
        title: "House Renovation",
        subtitle: "Complete Home Makeover",
        image: "/img/service-3-3.jpg",
        link: "/services/renovation"
    },
    {
        id: "04",
        title: "Spray Painting",
        subtitle: "Advanced Paint Technology",
        image: "/img/service-3-4.jpg",
        link: "/services/spray"
    }
];

const Services = () => {
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);
    const lastPositionRef = useRef(0);
    const lastTimeRef = useRef(null);
    const animationFrameRef = useRef(null);
    const animateRef = useRef(null);
    const titles = ["Wallpapers", "Painting", "Brown", "Stickers", "Graham", "Wallpapers", "Painting", "Brown", "Stickers", "Graham"];

    useEffect(() => {
        const slider = sliderRef.current;
        const duration = 30000; // 30 seconds
        const distance = 1920;

        const animate = (timestamp) => {
            if (!lastTimeRef.current) {
                lastTimeRef.current = timestamp;
            }

            const deltaTime = timestamp - lastTimeRef.current;
            
            if (!isPaused) {
                lastPositionRef.current = (lastPositionRef.current + (deltaTime / duration) * distance) % distance;
                slider.style.transform = `translateX(-${lastPositionRef.current}px)`;
            }

            lastTimeRef.current = timestamp;
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animateRef.current = animate;
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
        lastTimeRef.current = null;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame((timestamp) => {
            lastTimeRef.current = timestamp;
            animateRef.current(timestamp);
        });
    };

    return (
        // <section className="w-full bg-[#2E2A20]/1 py-16 md:py-20 relative">
        <section className="w-full bg-[#2e2a20] py-16 md:py-20 relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    src="/img/service-bg-3-1.png" 
                    alt="background" 
                    className="w-full h-full object-cover opacity-10"
                />
            </div>
            
            <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px] relative z-10">
                {/* Title Slider */}
                <div 
                    className="w-full overflow-hidden mb-8 relative py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        ref={sliderRef}
                        className="flex whitespace-nowrap slider-container"
                        style={{ width: "fit-content" }}
                    >
                        {[...Array(2)].map((_, arrayIndex) => (
                            <div key={arrayIndex} className="flex">
                                {titles.map((title, index) => (
                                    <div
                                        key={`${arrayIndex}-${index}`}
                                        className={`inline-flex items-center mx-6 text-4xl md:text-6xl font-bold title-item
                                            ${index % 2 === 0 ? 'text-white/30' : 'text-white'} 
                                            ${index % 5 === 0 ? 'font-serif' : 
                                              index % 5 === 1 ? 'font-mono' : 
                                              index % 5 === 2 ? 'font-sans' : 
                                              index % 5 === 3 ? 'italic' : 
                                              'tracking-wider'}`}
                                    >
                                        {title}
                                        <span className="text-amber-500 mx-3 text-2xl inline-block star-rotate">
                                            {index % 3 === 0 ? '✦' : index % 3 === 1 ? '★' : '✴'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Header */}
                <div className="relative py-12 mb-12">
                    {/* Top Border Line with enhanced gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col">
                            {/* Badge similar to Slider */}
                            <div
                                className="perspective-text"
                            >
                                <div className="border-2 border-amber-500 px-5 py-1.5 rounded-full mb-3 backdrop-blur-md bg-black/30
                                    transform hover:scale-105 transition-all duration-300 cursor-default inline-block">
                                    <p className="text-amber-500 font-semibold tracking-wider text-base">
                                        OUR BEST SERVICES
                                    </p>
                                </div>
                            </div>
                            
                            {/* Main heading with gradient text */}
                            <h2 
                                className="text-4xl md:text-5xl font-bold mt-2 perspective-text"
                            >
                                <span className="block text-white transform hover:scale-105 transition-all duration-300">
                                    Services We are Offering
                                </span>
                            </h2>
                        </div>

                        {/* Button styled like Slider buttons */}
                        <button 
                            className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                                hover:bg-white hover:text-amber-500 transition-all duration-300 
                                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                relative overflow-hidden min-w-[200px]"
                        >
                            <span className="relative z-10">View All Services</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left"></div>
                        </button>
                    </div>

                    {/* Bottom Border Line with enhanced gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            className="group relative overflow-hidden h-[400px] transform transition-all duration-500
                                [border-radius:2.5rem] [border-bottom-right-radius:0]
                                hover:shadow-xl hover:shadow-amber-500/20"
                        >
                            {/* Image Container with Zoom Effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                {/* Main rounded corners for image box */}
                                <div className="absolute inset-0 [border-radius:2.5rem] [border-bottom-right-radius:0] overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700
                                            group-hover:scale-110"
                                    />
                                    {/* Subtle gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                {/* Curved cutout with outward borders */}
                                <div className="absolute bottom-0 right-16 hidden md:block">
                                    <div className="relative w-[120px] h-[80px] ">
                                        {/* Main curved shape */}
                                        <div className="absolute inset-0 bg-[#2E2A20] rounded-t-[25px]"></div>
                                        {/* Outward curved borders */}
                                        <div className="absolute -left-12 bottom-0 w-12 h-16 overflow-hidden ">
                                            <div className="absolute right-0 bottom-0 w-[48px] h-[48px] bg-transparent
                                                rounded-br-[25px] shadow-[12px_12px_0_0_#2E2A20]" />
                                        </div>
                                        <div className="absolute -right-12 bottom-0 w-12 h-16 overflow-hidden">
                                            <div className="absolute left-0 bottom-0 w-[48px] h-[48px] bg-transparent
                                                rounded-bl-[25px] shadow-[-12px_12px_0_0_#2E2A20]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Number with Enhanced Design */}
                            <div className="absolute top-6 left-6 z-10">
                                <span 
                                    className="bg-amber-500 text-white text-base font-medium px-4 py-1.5 rounded-full
                                        shadow-lg hover:scale-105 transition-all duration-300
                                        group-hover:bg-white group-hover:text-amber-500 group-hover:shadow-amber-500/50"
                                >
                                    {service.id}
                                </span>
                            </div>

                            {/* Content Container with Better Layout */}
                            <div className="absolute inset-x-0 bottom-0 flex justify-between items-end pr-4 md:pr-16">
                                {/* Title */}
                                <h3 
                                    className="text-white text-2xl font-bold transform transition-all duration-300
                                        group-hover:translate-x-2 pl-6 pb-6"
                                >
                                    {service.title}
                                </h3>

                                {/* Button Container */}
                                <div className="w-[120px] h-[80px] relative hidden md:block">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Link 
                                            to={service.link}
                                            className="z-20"
                                        >
                                            <div 
                                                className="text-white/90 px-4 py-3.5 rounded-[15px]
                                                    border border-white/20 hover:border-white/40
                                                    hover:text-white transition-all duration-300
                                                    transform hover:scale-105 backdrop-blur-[2px]
                                                    whitespace-nowrap text-base"
                                            >
                                                <span className="font-medium tracking-wide">
                                                    Details
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Mobile Button */}
                                <div className="md:hidden">
                                    <Link 
                                        to={service.link}
                                        className="px-4 py-2 mr-4 mb-6"
                                    >
                                        <div 
                                            className="text-white/90 px-4 py-2 rounded-full
                                                border border-white/20
                                                whitespace-nowrap"
                                        >
                                            <span className="font-medium tracking-wide text-sm">
                                                Details
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;