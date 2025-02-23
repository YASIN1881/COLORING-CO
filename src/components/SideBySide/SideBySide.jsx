import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SideBySide = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            id: 1,
            type: 'comparison',
            before: '/img/side by side/1-before.jpg',
            after: '/img/side by side/1-after.jpg',
            title: 'Living Room Transformation'
        },
        {
            id: 2,
            type: 'standalone',
            image: '/img/side by side/2-standalone.jpg',
            title: 'Modern Interior Design'
        },
        {
            id: 3,
            type: 'comparison',
            before: '/img/side by side/3-before.jpg',
            after: '/img/side by side/3-after.jpg',
            title: 'Kitchen Renovation'
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

    const handleMouseMove = (e, projectId) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const position = ((e.clientX - bounds.left) / bounds.width) * 100;
        handleSliderChange(projectId, Math.min(Math.max(position, 0), 100));
    };

    const handleKeyDown = (e, projectId) => {
        const currentPosition = sliderPositions[projectId];
        const step = 5;

        if (e.key === 'ArrowLeft') {
            handleSliderChange(projectId, Math.max(currentPosition - step, 0));
        } else if (e.key === 'ArrowRight') {
            handleSliderChange(projectId, Math.min(currentPosition + step, 100));
        }
    };

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <section className="w-full bg-[#2E2A20] py-16 md:py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <img 
                    src="/img/service-bg-3-1.png" 
                    alt="background pattern" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img 
                            src="/FIVEICON.png" 
                            alt="Coloring Co Logo" 
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                        <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                            Before & After
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our Transformation Gallery
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Witness the dramatic transformations we've achieved. Each project showcases our commitment to excellence and attention to detail.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl shadow-xl"
                        >
                            {project.type === 'comparison' ? (
                                // Comparison View
                                <div 
                                    className="relative h-[400px] cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl transition-all duration-300 transform hover:shadow-2xl"
                                    onMouseMove={(e) => handleMouseMove(e, project.id)}
                                    onTouchMove={(e) => {
                                        const touch = e.touches[0];
                                        handleMouseMove(touch, project.id);
                                    }}
                                    onKeyDown={(e) => handleKeyDown(e, project.id)}
                                    onDragStart={handleDragStart}
                                    tabIndex={0}
                                    role="slider"
                                    aria-label="Image comparison slider"
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-valuenow={sliderPositions[project.id]}
                                >
                                    {/* After Image (Full) */}
                                    <div className="absolute inset-0">
                                        <img 
                                            src={project.after} 
                                            alt="After"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Before Image (Clipped) */}
                                    <div 
                                        className="absolute inset-0 overflow-hidden"
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
                                        />
                                    </div>

                                    {/* Slider Control */}
                                    <div 
                                        className="absolute top-0 bottom-0 w-0.5 bg-white/80 cursor-ew-resize backdrop-blur-sm transition-all duration-300 group-hover:w-1"
                                        style={{ left: `${sliderPositions[project.id]}%` }}
                                    >
                                        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center
                                            transform transition-all duration-300 group-hover:scale-110 hover:shadow-amber-500/50 bg-gradient-to-br from-white to-gray-100">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 transform transition-all duration-300
                                                flex items-center justify-center shadow-inner group-hover:from-amber-500 group-hover:to-amber-700">
                                                <div className="flex gap-1">
                                                    <ChevronLeft className="w-3 h-3 text-white/80" />
                                                    <ChevronRight className="w-3 h-3 text-white/80" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Labels */}
                                    <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md
                                        transform transition-all duration-300 group-hover:bg-black/80 group-hover:scale-105 shadow-lg">
                                        Before
                                    </div>
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm
                                        transform transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-amber-500/50">
                                        After
                                    </div>
                                </div>
                            ) : (
                                // Standalone View
                                <div className="relative h-[400px] overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            )}

                            {/* Project Title */}
                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                                <h3 className="text-white text-xl font-semibold group-hover:text-amber-500 transition-colors duration-300">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SideBySide;