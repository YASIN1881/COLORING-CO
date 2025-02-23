import { useState } from 'react';
import { ChevronLeft, ChevronRight, Paintbrush2, Camera, Eye } from 'lucide-react';

const SideBySide = () => {
    const projects = [
        {
            id: 1,
            type: 'comparison',
            before: '/img/side by side/1-before.jpg',
            after: '/img/side by side/1-after.jpg',
            title: 'Living Room Transformation',
            description: 'Modern makeover with elegant touches'
        },
        {
            id: 2,
            type: 'standalone',
            image: '/img/side by side/2-standalone.jpg',
            title: 'Modern Interior Design',
            description: 'Contemporary style with minimalist approach'
        },
        {
            id: 3,
            type: 'comparison',
            before: '/img/side by side/3-before.jpg',
            after: '/img/side by side/3-after.jpg',
            title: 'Kitchen Renovation',
            description: 'Complete kitchen transformation'
        },
        {
            id: 4,
            type: 'standalone',
            image: '/img/side by side/4-standalone.jpg',
            title: 'Contemporary Style'
        },
        {
            id: 5,
            type: 'comparison',
            before: '/img/side by side/5-before.jpg',
            after: '/img/side by side/5-after.jpg',
            title: 'Bedroom Makeover'
        },
        {
            id: 6,
            type: 'standalone',
            image: '/img/side by side/6-standalone.jpg',
            title: 'Elegant Design'
        }
    ];

    const [sliderPositions, setSliderPositions] = useState(
        projects.reduce((acc, project) => ({ ...acc, [project.id]: 50 }), {})
    );

    const handleSliderChange = (projectId, position) => {
        setSliderPositions(prev => ({
            ...prev,
            [projectId]: position
        }));
    };

    const handleInteraction = (e, projectId) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const position = ((('touches' in e ? e.touches[0].clientX : e.clientX) - bounds.left) / bounds.width) * 100;
        handleSliderChange(projectId, Math.min(Math.max(position, 0), 100));
    };

    return (
        <section className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/img/service-bg-3-1.png')] bg-repeat opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <img 
                            src="/FIVEICON.png" 
                            alt="Coloring Co Logo" 
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                        <span className="text-amber-500 uppercase tracking-wider text-xs sm:text-sm font-medium">
                            Before & After Gallery
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4 relative">
                        Transformation Showcase
                    </h2>

                    <p className="text-gray-400/90 text-sm sm:text-base md:text-lg">
                        Experience the power of professional painting through our before and after gallery.
                        We showcase our expertise, quality workmanship, and attention to detail in every project.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-[#1a1a1a]"
                        >
                            {project.type === 'comparison' ? (
                                <div 
                                    className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] cursor-ew-resize touch-pan-x"
                                    onMouseMove={(e) => handleInteraction(e, project.id)}
                                    onTouchMove={(e) => handleInteraction(e, project.id)}
                                >
                                    {/* After Image */}
                                    <div className="absolute inset-0 transition-transform duration-700 ease-out">
                                        <img 
                                            src={project.after} 
                                            alt="After"
                                            className="w-full h-full object-cover"
                                            draggable="false"
                                        />
                                    </div>

                                    {/* Before Image with Clip */}
                                    <div 
                                        className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out"
                                        style={{ width: `${sliderPositions[project.id]}%` }}
                                    >
                                        <img 
                                            src={project.before} 
                                            alt="Before"
                                            className="absolute h-full object-cover"
                                            style={{ 
                                                width: `${100 * (100/sliderPositions[project.id])}%`,
                                                maxWidth: 'none'
                                            }}
                                            draggable="false"
                                        />
                                    </div>

                                    {/* Slider Handle */}
                                    <div 
                                        className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white/80 backdrop-blur-sm"
                                        style={{ left: `${sliderPositions[project.id]}%` }}
                                    >
                                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg
                                            flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                                <div className="flex gap-0.5">
                                                    <ChevronLeft className="w-3 h-3 text-white" />
                                                    <ChevronRight className="w-3 h-3 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Labels */}
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1.5 sm:gap-2 bg-black/80 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm backdrop-blur-md shadow-lg border border-white/10 hover:bg-black/90 hover:border-white/20 transition-all duration-300 group">
                                        <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                                        <span className="font-medium tracking-wide group-hover:text-white transition-colors duration-300">Before</span>
                                    </div>
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm backdrop-blur-md shadow-lg border border-white/10 hover:bg-black/90 hover:border-white/20 hover:from-transparent hover:to-transparent transition-all duration-300 group">
                                        <Paintbrush2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                                        <span className="font-medium tracking-wide group-hover:text-white transition-colors duration-300">After</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            )}

                            {/* Project Info Overlay */}
                            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                                    {project.title}
                                </h3>
                                {project.description && (
                                    <p className="text-gray-300 text-xs sm:text-sm">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SideBySide;