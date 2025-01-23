import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
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

const titleVariants = [
    {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        hover: { scale: 1.1, color: "#FCD34D" },
        style: "font-serif"
    },
    {
        initial: { x: -20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        hover: { scale: 1.05, rotateZ: 5 },
        style: "font-mono"
    },
    {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        hover: { scale: 1.15, color: "#F59E0B" },
        style: "font-sans"
    },
    {
        initial: { rotateX: 90, opacity: 0 },
        animate: { rotateX: 0, opacity: 1 },
        hover: { scale: 1.08, y: -5 },
        style: "italic"
    },
    {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        hover: { scale: 1.1, textShadow: "0 0 8px rgba(251, 191, 36, 0.6)" },
        style: "tracking-wider"
    }
];

const Services = () => {
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimationControls();
    const titles = ["Wallpapers", "Painting", "Brown", "Stickers", "Graham", "Wallpapers", "Painting", "Brown", "Stickers", "Graham"];

    useEffect(() => {
        const startAnimation = async () => {
            if (!isPaused) {
                await controls.start({
                    x: [0, -1920],
                    transition: {
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                });
            } else {
                controls.stop();
            }
        };

        startAnimation();
    }, [isPaused, controls]);

    return (
        <section className="relative text-white py-16 px-8 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:to-[#1a1a1a]/95 before:backdrop-blur-md before:z-0">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
                <img 
                    src="/img/service-bg-3-1.png" 
                    alt="background" 
                    className="w-full h-full object-cover opacity-60"
                />
            </div>
            
            {/* Content wrapper to ensure content stays above the overlay */}
            <div className="relative z-10">
                {/* Title Slider */}
                <div 
                    className="w-full overflow-hidden mb-8 relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div 
                        className="flex whitespace-nowrap"
                        animate={controls}
                        style={{ width: "fit-content" }}
                    >
                        {[...Array(2)].map((_, arrayIndex) => (
                            <div key={arrayIndex} className="flex">
                                {titles.map((title, index) => {
                                    const variant = titleVariants[index % titleVariants.length];
                                    return (
                                        <motion.div
                                            key={`${arrayIndex}-${index}`}
                                            className={`inline-flex items-center mx-6 text-4xl md:text-6xl font-bold ${variant.style}
                                                ${index % 2 === 0 ? 'text-white/30' : 'text-white'}`}
                                            initial={variant.initial}
                                            animate={variant.animate}
                                            whileHover={variant.hover}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut"
                                            }}
                                        >
                                            {title}
                                            <motion.span 
                                                className="text-amber-500 mx-3 text-2xl inline-block"
                                                animate={{ 
                                                    rotate: [0, 360],
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    times: [0, 0.5, 1]
                                                }}
                                            >
                                                {index % 3 === 0 ? '✦' : index % 3 === 1 ? '★' : '✴'}
                                            </motion.span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Header */}
                <div className="relative py-12 mb-12">
                    {/* Top Border Line with enhanced gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col">
                            {/* Badge similar to Slider */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="perspective-text"
                            >
                                <div className="border-2 border-amber-500 px-5 py-1.5 rounded-full mb-3 backdrop-blur-md bg-black/30
                                    transform hover:scale-105 transition-all duration-300 cursor-default inline-block">
                                    <p className="text-amber-500 font-semibold tracking-wider text-base">
                                        OUR BEST SERVICES
                                    </p>
                                </div>
                            </motion.div>
                            
                            {/* Main heading with gradient text */}
                            <motion.h2 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold mt-2 perspective-text"
                            >
                                <span className="block text-white transform hover:scale-105 transition-all duration-300">
                                    Services We are Offering
                                </span>
                            </motion.h2>
                        </div>

                        {/* Button styled like Slider buttons */}
                        <motion.button 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                                hover:bg-white hover:text-amber-500 transition-all duration-300 
                                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                relative overflow-hidden min-w-[200px]"
                        >
                            <span className="relative z-10">View All Services</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left"></div>
                        </motion.button>
                    </div>

                    {/* Bottom Border Line with enhanced gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                    {services.map((service) => (
                        <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative rounded-[2.5rem] rounded-br-none overflow-hidden h-[400px] transform transition-all duration-500
                                hover:shadow-2xl hover:shadow-amber-500/20 bg-[#1E1E1E]"
                        >
                            {/* Image Container with Zoom Effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] rounded-br-none">
                                <motion.img 
                                    src={service.image} 
                                    alt={service.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700
                                        group-hover:scale-110"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                {/* Subtle gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Service Number with Enhanced Design */}
                            <div className="absolute top-6 left-6 z-10">
                                <motion.span 
                                    className="bg-amber-500 text-white text-base font-medium px-4 py-1.5 rounded-full
                                        shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {service.id}
                                </motion.span>
                            </div>

                            {/* Content Container with Better Layout */}
                            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center">
                                {/* Title */}
                                <motion.h3 
                                    className="text-white text-2xl font-bold transform transition-all duration-300
                                        group-hover:translate-x-2 pl-6 pb-6"
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Corner with Inverted Border Radius */}
                                <div className="relative">
                                    <div className="absolute bottom-0 right-0">
                                        {/* Main Corner Shape */}
                                        <div className="relative w-[120px] h-[120px] bg-amber-500
                                            transition-all duration-300 group-hover:bg-white">
                                            {/* Left Curve */}
                                            <div className="absolute -left-6 bottom-0 w-6 h-6 bg-[#1E1E1E]">
                                                <div className="absolute bottom-0 right-0 w-full h-full rounded-br-3xl"></div>
                                            </div>
                                            {/* Top Curve */}
                                            <div className="absolute top-0 right-0 w-6 h-6">
                                                <div className="absolute bottom-0 right-0 w-full h-full bg-amber-500 rounded-br-3xl
                                                    transition-colors duration-300 group-hover:bg-white"></div>
                                            </div>

                                            {/* Button */}
                                            <Link 
                                                to={service.link}
                                                className="absolute bottom-4 right-4 z-20"
                                            >
                                                <motion.div 
                                                    className="bg-black text-white px-6 py-3 rounded-full
                                                        hover:bg-white hover:text-black transition-all duration-300
                                                        transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <span className="font-medium tracking-wide text-sm">
                                                        Details
                                                    </span>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;