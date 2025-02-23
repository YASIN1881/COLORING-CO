import { useEffect, useState } from 'react';
import WOW from 'wow.js';
import { HiHome, HiTemplate, HiCube } from 'react-icons/hi';
import { MdArchitecture, MdDesignServices, MdConstruction, MdOutlineHomeWork } from 'react-icons/md';

const Features = () => {
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();
    }, []);

    const features = [
        { 
            id: 1, 
            title: 'Architectural Design',
            description: 'Creating innovative and sustainable architectural solutions tailored to your lifestyle',
            icon: <MdArchitecture className="w-12 h-12" />,
            color: 'amber',
            stats: ['100+ Projects', '15+ Awards', '10+ Years']
        },
        { 
            id: 2, 
            title: 'Interior Excellence',
            description: 'Transform your space with modern interior design and premium materials',
            icon: <MdDesignServices className="w-12 h-12" />,
            color: 'amber',
            stats: ['200+ Designs', 'Premium Materials', 'Custom Solutions']
        },
        { 
            id: 3, 
            title: 'Renovation Mastery',
            description: 'Expert renovation services with guaranteed quality and timely execution',
            icon: <MdConstruction className="w-12 h-12" />,
            color: 'amber',
            stats: ['500+ Renovations', 'Quality Guarantee', 'On-Time Delivery']
        },
        { 
            id: 4, 
            title: 'Project Development',
            description: 'Full-scale construction project management from concept to completion',
            icon: <MdOutlineHomeWork className="w-12 h-12" />,
            color: 'amber',
            stats: ['50+ Developments', 'Expert Team', 'Turn-key Solutions']
        },
    ];

    return (
        <section className="bg-[#1a1814] w-full py-24 md:py-32 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-5" 
                    style={{ 
                        backgroundImage: 'linear-gradient(30deg, #2E2A20 12%, transparent 12.5%, transparent 87%, #2E2A20 87.5%, #2E2A20), linear-gradient(150deg, #2E2A20 12%, transparent 12.5%, transparent 87%, #2E2A20 87.5%, #2E2A20), linear-gradient(30deg, #2E2A20 12%, transparent 12.5%, transparent 87%, #2E2A20 87.5%, #2E2A20), linear-gradient(150deg, #2E2A20 12%, transparent 12.5%, transparent 87%, #2E2A20 87.5%, #2E2A20), linear-gradient(60deg, #2E2A2077 25%, transparent 25.5%, transparent 75%, #2E2A2077 75%, #2E2A2077), linear-gradient(60deg, #2E2A2077 25%, transparent 25.5%, transparent 75%, #2E2A2077 75%, #2E2A2077)',
                        backgroundSize: '80px 140px',
                        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
                        animation: 'patternMove 30s linear infinite'
                    }}>
                </div>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="wow fadeIn inline-block mb-8" data-wow-duration="1.5s">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative flex items-center justify-center p-8 space-x-4">
                                <HiCube className="w-16 h-16 text-amber-500 transform -rotate-12" />
                                <HiHome className="w-20 h-20 text-amber-400" />
                                <HiTemplate className="w-16 h-16 text-amber-500 transform rotate-12" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Our Works
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        Elevating spaces through innovative design and exceptional craftsmanship
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {features.map((feature) => (
                        <div 
                            key={feature.id}
                            className="wow fadeInUp relative"
                            data-wow-delay={`${feature.id * 0.2}s`}
                            onMouseEnter={() => setHoveredId(feature.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={`
                                relative p-8 rounded-3xl
                                bg-gradient-to-br from-[#2a2620]/90 to-[#1d1b17]/90
                                backdrop-blur-xl
                                transition-all duration-500
                                ${hoveredId === feature.id ? 'transform scale-[1.02]' : ''}
                                group
                            `}>
                                {/* Glowing Effect */}
                                <div className={`
                                    absolute inset-0 rounded-3xl opacity-0 
                                    bg-gradient-to-r from-amber-600/20 to-amber-400/20 
                                    blur-xl -z-10 transition-opacity duration-500
                                    ${hoveredId === feature.id ? 'opacity-100' : ''}
                                `}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 transform transition-transform duration-500 group-hover:rotate-6">
                                            <div className="w-full h-full bg-[#1a1814] rounded-2xl flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg mb-8 group-hover:text-gray-300 transition-colors duration-300 max-w-lg">
                                        {feature.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {feature.stats.map((stat, index) => (
                                            <div 
                                                key={index}
                                                className="text-center px-3 py-4 rounded-xl bg-black/20 backdrop-blur-lg
                                                transform transition-transform duration-300
                                                group-hover:scale-105 flex items-center justify-center
                                                min-h-[70px] sm:min-h-[80px] overflow-hidden"
                                            >
                                                <span className="text-amber-400 text-sm font-medium 
                                                    break-words whitespace-normal overflow-wrap-anywhere
                                                    leading-tight px-1 w-full">
                                                    {stat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Decorative Line */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Add required CSS */}
            <style>{`
                @keyframes patternMove {
                    0% { background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px; }
                    100% { background-position: 1000px 0, 1000px 0, 1040px 70px, 1040px 70px, 1000px 0, 1040px 70px; }
                }
            `}</style>
        </section>
    );
};

export default Features;