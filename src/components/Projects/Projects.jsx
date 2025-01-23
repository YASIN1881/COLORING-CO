import { useState, useEffect } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/img/process-1-1.webp',
            category: 'INTERIOR',
            title: 'Ceiling Wallpaper',
            description: 'Duis nunc risus, suscipit efficitur enim non, egestas interdum'
        },
        {
            id: 2,
            image: '/img/process-1-1.webp',
            category: 'EXTERIOR',
            title: 'Modern Wall Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            id: 3,
            image: '/img/process-1-1.webp',
            category: 'INTERIOR',
            title: 'Classic Patterns',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore'
        },
        {
            id: 4,
            image: '/img/process-1-1.webp',
            category: 'DESIGN',
            title: 'Creative Solutions',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation'
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[#2E2A20] px-4 py-16 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="max-w-2xl mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-amber-500 text-lg">◆</span>
                        <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                            Our Complete Projects
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Recent Complete Projects
                    </h2>
                    <p className="text-gray-400">
                        There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                    </p>
                </div>

                {/* Slider Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Project Info */}
                    <div className="bg-white rounded-3xl p-8 relative">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl font-bold">
                                <span className="text-amber-500">{currentSlide + 1}</span>
                                <span className="text-gray-400">/{slides.length}</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-amber-500 font-medium">
                                {slides[currentSlide].category}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                {slides[currentSlide].title}
                            </h3>
                            <p className="text-gray-600">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
