import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import WOW from 'wow.js';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const progressRef = useRef(null);
    const [count, setCount] = useState(0);
    const targetNumber = 80;

    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let animationFrame;
        let startTime;
        const duration = 2000; // 2 seconds

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            setCount(Math.floor(percentage * targetNumber));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        if (isVisible) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible]);

    return (
        <section className="relative overflow-hidden bg-[#FFFAF5] py-20 lg:py-28">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <img 
                    src="/img/why-chose-us.png" 
                    alt="background pattern" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 wow fadeInUp" data-wow-delay="0.2s">
                        {/* Section Title */}
                        <div className="flex items-center gap-2">
                            <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                            <h3 className="text-amber-500 font-semibold tracking-wider uppercase">
                                WHY CHOOSE US?
                            </h3>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Leading Provider Of <br />
                            Interior Service In Melbourne
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The 
                            Majority Have Suffered Alteration In Some Form, By Injected Humour, Or
                        </p>

                        {/* Features Box */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6 
                            transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-amber-500" />
                                        </div>
                                    </div>
                                    <span className="font-medium text-gray-800">We&apos;re Professional</span>
                                </div>
                                <div className="flex items-center gap-3 wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-amber-500" />
                                        </div>
                                    </div>
                                    <span className="font-medium text-gray-800">We Use Quality Material</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="space-y-4 wow fadeInUp" data-wow-delay="0.5s" ref={progressRef}>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-800 font-medium">Interior Wall Design</span>
                                    <div className="progress-box__number relative">
                                        <span className={`text-2xl font-bold text-amber-500 transition-all duration-300
                                            ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                                            {count}
                                            <span className="text-lg ml-0.5">%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                                    {/* Background Pulse Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 
                                        animate-pulse opacity-30"></div>
                                    
                                    {/* Progress Bar */}
                                    <div 
                                        className={`h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full 
                                            transition-all duration-1000 ease-out relative
                                            ${isVisible ? 'w-[80%]' : 'w-0'}`}
                                    >
                                        {/* Animated Particles */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-0 left-1/4 w-1 h-full bg-white/20 
                                                transform -skew-x-45 animate-[shimmer_2s_infinite]"></div>
                                            <div className="absolute top-0 left-2/4 w-1 h-full bg-white/20 
                                                transform -skew-x-45 animate-[shimmer_2s_infinite_0.5s]"></div>
                                        </div>

                                        {/* Progress Indicator */}
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2
                                            w-4 h-4 bg-white rounded-full border-2 border-amber-500 shadow-lg
                                            flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative wow fadeInRight" data-wow-delay="0.4s">
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img 
                                src="/img/service-3-2.jpg" 
                                alt="Interior Design Expert" 
                                className="w-full h-[600px] object-cover transform transition-transform duration-700 
                                    group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-amber-500/50 
                                rounded-tl-3xl transition-all duration-500 group-hover:scale-110"></div>
                            <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-amber-500/50 
                                rounded-br-3xl transition-all duration-500 group-hover:scale-110"></div>
                        </div>

                        {/* Floating Pattern */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 
                            bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs; 