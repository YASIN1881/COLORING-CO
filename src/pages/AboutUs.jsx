import PageHeader from '../components/PageHeader/PageHeader';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintRoller, FaHome, FaSprayCan, FaPalette, FaQuoteRight, FaTimes } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, Paintbrush2, Camera } from 'lucide-react';
import WOW from 'wow.js';

const services = [
    {
        icon: <FaPaintRoller className="w-8 h-8" />,
        title: "Residential & Commercial Painting",
        description: "Professional painting services for homes and businesses, delivering flawless finishes with premium materials.",
    },
    {
        icon: <FaHome className="w-8 h-8" />,
        title: "House Renovation",
        description: "Complete home renovation services to transform your living spaces with modern designs and expert craftsmanship.",
    },
    {
        icon: <FaSprayCan className="w-8 h-8" />,
        title: "Spray Painting",
        description: "Advanced spray painting techniques for smooth, even coverage and professional results on any surface.",
    },
    {
        icon: <FaPalette className="w-8 h-8" />,
        title: "Interior Decoration",
        description: "Creative interior decoration services to enhance your space with modern design elements and perfect color harmony.",
    }
];

const achievements = [
    { number: "15+", label: "Years of Experience" },
    { number: "2500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" }
];

export default function AboutUs() {
    const [activeService, setActiveService] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);
    const videoRef = useRef(null);
    const intervalRef = useRef(null);

    // Services Interval Effect
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();

        // Start interval only if video is not playing
        if (!isVideoPlaying) {
            intervalRef.current = setInterval(() => {
                setActiveService(prev => (prev + 1) % services.length);
            }, 3000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isVideoPlaying]); // Add isVideoPlaying to dependencies

    // Video Cleanup Effect
    useEffect(() => {
        if (!isVideoPlaying && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isVideoPlaying]);

    // Video Modal Component
    const VideoModal = () => (
        <AnimatePresence>
            {isVideoPlaying && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setIsVideoPlaying(false)}
                >
                    <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setIsVideoPlaying(false)}
                            className="absolute -top-12 right-0 text-white hover:text-amber-500 
                                transition-colors duration-300"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                        <div className="relative rounded-2xl overflow-hidden bg-black">
                            <video
                                ref={videoRef}
                                className="w-full aspect-video"
                                src="/img/aboutmovie.mp4"
                                controls
                                autoPlay
                                playsInline
                                preload="auto"
                                controlsList="nodownload"
                                onEnded={() => setIsVideoPlaying(false)}
                                onClick={e => e.stopPropagation()}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    const handleSliderInteraction = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const position = ((('touches' in e ? e.touches[0].clientX : e.clientX) - bounds.left) / bounds.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    return (
        <div className="bg-[#2E2A20]">
            <VideoModal />
            <PageHeader title="About Us" currentPage="About" />
            
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <img 
                        src="/img/service-bg-3-1.png" 
                        alt="background pattern" 
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 wow fadeInLeft">
                            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full">
                                <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                                <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                                    ABOUT COLORING CO
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Transform Your Space with Expert Touch
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                With over 15 years of experience, we&apos;ve established ourselves as Melbourne&apos;s 
                                premier painting and renovation service provider. Our commitment to excellence 
                                and attention to detail sets us apart.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {achievements.map((stat, index) => (
                                    <motion.div 
                                        key={index}
                                        className="text-center p-6 rounded-2xl bg-[#262219] border border-amber-500/10
                                            transform transition-all duration-300 hover:border-amber-500/30
                                            hover:bg-[#2A2620]"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h3 className="text-3xl font-bold text-amber-500 mb-2">{stat.number}</h3>
                                        <p className="text-gray-400">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative wow fadeInRight">
                            <div className="relative rounded-[2.5rem] rounded-br-none overflow-hidden group
                                before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent
                                before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100">
                                <img 
                                    src="/img/service-3-2.jpg" 
                                    alt="Professional Painting Team" 
                                    className="w-full h-[600px] object-cover transform transition-transform duration-700 
                                        group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 
                                bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 wow fadeInUp">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Professional Services
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We offer comprehensive painting and renovation solutions tailored to your needs,
                            ensuring exceptional results for every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`group p-8 rounded-[2rem] rounded-br-none border transition-all duration-500
                                    ${index === activeService 
                                        ? 'bg-amber-500 border-amber-500' 
                                        : 'bg-[#262219] border-amber-500/10 hover:border-amber-500/30'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl 
                                        flex items-center justify-center transition-colors duration-500
                                        ${index === activeService 
                                            ? 'bg-white text-amber-500' 
                                            : 'bg-amber-500/10 text-amber-500'}`}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-500
                                            ${index === activeService ? 'text-white' : 'text-white'}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`transition-colors duration-500
                                            ${index === activeService ? 'text-white/90' : 'text-gray-400'}`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Video Content */}
                        <div className="relative wow fadeInLeft">
                            <div className="relative rounded-[2.5rem] rounded-br-none overflow-hidden group
                                before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent
                                before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100">
                                {/* Video Thumbnail */}
                                <img 
                                    src="/img/coverOfMovie.jpg" 
                                    alt="Watch Our Process" 
                                    className="w-full aspect-video object-cover"
                                />
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center
                                            text-white transition-transform group-hover:scale-110 relative"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg 
                                            className="w-8 h-8 fill-current ml-1" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        {/* Ripple Effect */}
                                        <span className="absolute inset-0 rounded-full animate-ping 
                                            bg-amber-500 opacity-25"></span>
                                    </motion.button>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm
                                    px-3 py-1 rounded-full text-white text-sm">
                                    0:15
                                </div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 
                                bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8 wow fadeInRight">
                            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full">
                                <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                                <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                                    WATCH OUR PROCESS
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                See How We Transform Spaces
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Watch our expert team in action as we demonstrate our professional painting and 
                                renovation process. From preparation to the final touches, we ensure every detail 
                                is handled with precision and care.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                        <FaPaintRoller className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <span>Professional Tools</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                        <FaHome className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <span>Expert Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 bg-[#262219]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <FaQuoteRight className="w-16 h-16 text-amber-500/20 mx-auto" />
                        <blockquote className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed">
                            &ldquo;Our passion for perfection and dedication to customer satisfaction drives us to deliver
                            exceptional painting and renovation services that transform spaces and exceed expectations.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <span className="w-12 h-0.5 bg-amber-500/30"></span>
                            <p className="text-amber-500 font-semibold">COLORING CO TEAM</p>
                            <span className="w-12 h-0.5 bg-amber-500/30"></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[2rem] overflow-hidden bg-[#262219] border border-amber-500/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left Side - Interactive Before/After Slider */}
                            <div 
                                className="relative h-[400px] lg:h-[500px] cursor-ew-resize touch-pan-x"
                                onMouseMove={handleSliderInteraction}
                                onTouchMove={handleSliderInteraction}
                            >
                                {/* After Image */}
                                <div className="absolute inset-0 transition-transform duration-700 ease-out">
                                    <img 
                                        src="/img/sidebyside/project/5_after.jpeg"
                                        alt="After Renovation"
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />
                                </div>

                                {/* Before Image with Clip */}
                                <div 
                                    className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out"
                                    style={{ width: `${sliderPosition}%` }}
                                >
                                    <img 
                                        src="/img/sidebyside/project/5_before.jpeg"
                                        alt="Before Renovation"
                                        className="absolute h-full object-cover"
                                        style={{ 
                                            width: `${100 * (100/sliderPosition)}%`,
                                            maxWidth: 'none'
                                        }}
                                        draggable="false"
                                    />
                                </div>

                                {/* Slider Handle */}
                                <div 
                                    className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white/80 backdrop-blur-sm"
                                    style={{ left: `${sliderPosition}%` }}
                                >
                                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                                        rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center 
                                        transform transition-all duration-300 hover:scale-110">
                                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full 
                                            bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                            <div className="flex gap-0.5">
                                                <ChevronLeft className="w-3 h-3 text-white" />
                                                <ChevronRight className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Labels */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 text-white 
                                    px-3 py-2 rounded-full text-sm backdrop-blur-md shadow-lg border border-white/10 
                                    hover:bg-black/90 hover:border-white/20 transition-all duration-300">
                                    <Camera className="w-4 h-4" />
                                    <span className="font-medium tracking-wide">Before</span>
                                </div>
                                <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r 
                                    from-amber-500 to-amber-600 text-white px-3 py-2 rounded-full text-sm 
                                    backdrop-blur-md shadow-lg border border-white/10">
                                    <Paintbrush2 className="w-4 h-4" />
                                    <span className="font-medium tracking-wide">After</span>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="relative p-12 lg:p-16">
                                <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full mb-8">
                                    <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                                    <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                                        Transform Your Space
                                    </span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                    Ready to See the Difference?
                                </h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex-shrink-0
                                            flex items-center justify-center">
                                            <FaPaintRoller className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">Professional Painting</h3>
                                            <p className="text-gray-400">Expert painters using premium materials</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex-shrink-0
                                            flex items-center justify-center">
                                            <FaHome className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">Complete Renovation</h3>
                                            <p className="text-gray-400">Full-service home transformation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 