import { useState, useEffect } from 'react';
import './Services.css';

const services = [
    {
        id: "01",
        title: "Room Wallpapers",
        image: "/img/service-3-1.webp",
    },
    {
        id: "02",
        title: "Wall Painting",
        image: "/img/service-3-2.webp",
    },
    {
        id: "03",
        title: "Interior Designing",
        image: "/img/service-3-3.webp",
    },
    {
        id: "04",
        title: "Wall Sheets",
        image: "/img/service-3-4.webp",
    }
];

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const titles = ["Wallpapers", "Painting", "Brown", "Stickers", "Graham", "Wallpapers", "Painting", "Brown", "Stickers", "Graham"];

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % titles.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    return (
        <section className="bg-[#1a1a1a] text-white py-16 px-8">
            {/* Title Slider */}
            <div 
                className="w-full overflow-hidden mb-8 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={`flex whitespace-nowrap ${!isPaused ? 'animate-scroll' : ''}`}>
                    {titles.map((title, index) => (
                        <span
                            key={index}
                            className={`inline-flex items-center mx-4 text-4xl md:text-5xl font-bold
                                ${index % 2 === 0 ? 'text-white/20' : 'text-white'}`}
                        >
                            {title}
                            <span className="text-amber-500 mx-2 text-2xl">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Header */}
            <div className="relative py-12 mb-12">
                {/* Top Border Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-amber-500 flex items-center gap-2">
                            {/* Icon placeholder */}
                            {/* <span className="inline-block w-5 h-5 rotate-45 border-2 border-amber-500"></span> */}
                            OUR BEST SERVICES
                        </span>
                        <h2 className="text-5xl font-bold mt-4 text-white">Services We are Offering</h2>
                    </div>
                    <button className="relative mt-6 md:mt-0 px-8 py-3 border border-amber-500 text-amber-500 rounded-full
                        hover:text-white transition-all duration-300 overflow-hidden group">
                        <span className="relative z-10">View All Service</span>
                        <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-300 origin-left"></div>
                    </button>
                </div>

                {/* Bottom Border Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="group relative rounded-2xl overflow-hidden h-[400px]">
                        {/* Image Container */}
                        <div className="absolute inset-0">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
                        </div>

                        {/* Service Number */}
                        <div className="absolute top-6 left-6">
                            <span className="bg-amber-500 text-white text-lg font-semibold px-4 py-2 rounded-full">
                                {service.id}
                            </span>
                        </div>

                        {/* Content - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                            <h3 className="text-white text-2xl font-bold">
                                {service.title}
                            </h3>
                            <button className="relative px-8 py-3 bg-black/60 backdrop-blur-sm text-white rounded-full
                                border border-white/20 transition-all duration-300 hover:bg-amber-500 hover:border-amber-500
                                shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;