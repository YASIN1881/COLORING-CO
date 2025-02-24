import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FaPaintRoller, FaPalette, FaRulerCombined, FaHome, FaArrowRight, 
    FaPaintBrush, FaSprayCan, FaSwatchbook, FaTools, FaRuler, FaCompass, 
    FaDrawPolygon, FaHardHat, FaHammer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const serviceShape = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PaintingService.propTypes = {
    service: PropTypes.shape(serviceShape).isRequired,
};

DesignService.propTypes = {
    service: PropTypes.shape(serviceShape).isRequired,
};

ArchitecturalService.propTypes = {
    service: PropTypes.shape(serviceShape).isRequired,
};

RenovationService.propTypes = {
    service: PropTypes.shape(serviceShape).isRequired,
};

const serviceData = {
    painting: {
        title: "Professional Painting",
        subtitle: "Expert Painting Solutions",
        description: "Transform your space with our premium painting services. We combine artistic vision with technical expertise to deliver flawless finishes that stand the test of time.",
        icon: <FaPaintRoller className="w-12 h-12" />,
        features: [
            "Interior and exterior painting expertise",
            "Premium quality paints and materials",
            "Professional color consultation",
            "Surface preparation and repairs",
            "Eco-friendly paint options",
            "Detailed and clean service delivery"
        ],
        images: [
            "/img/service-3-1.jpg",
            "/img/service-3-2.jpg",
            "/img/service-3-3.jpg"
        ],
        bgPattern: "linear-gradient(45deg, #2E2A20 25%, transparent 25%) -50px 0, linear-gradient(-45deg, #2E2A20 25%, transparent 25%) -50px 0"
    },
    design: {
        title: "Interior & Exterior Design",
        subtitle: "Innovative Design Solutions",
        description: "Create stunning spaces that reflect your vision. Our design services blend aesthetics with functionality to craft environments that inspire and delight.",
        icon: <FaPalette className="w-12 h-12" />,
        features: [
            "Custom interior design planning",
            "Exterior facade design",
            "Color scheme consultation",
            "Space optimization",
            "Material and texture selection",
            "3D visualization services"
        ],
        images: [
            "/img/service-3-2.jpg",
            "/img/service-3-3.jpg",
            "/img/service-3-1.jpg"
        ],
        bgPattern: "radial-gradient(circle at 1px 1px, #2E2A20 1px, transparent 0) 0 0/40px 40px"
    },
    architectural: {
        title: "Architectural Design",
        subtitle: "Visionary Architecture",
        description: "Bringing architectural visions to life with innovative solutions that combine form and function. We create spaces that inspire and endure.",
        icon: <FaRulerCombined className="w-12 h-12" />,
        features: [
            "Custom architectural planning",
            "Structural design services",
            "Building permit assistance",
            "Sustainable design options",
            "Project documentation",
            "Construction supervision"
        ],
        images: [
            "/img/service-3-3.jpg",
            "/img/service-3-1.jpg",
            "/img/service-3-2.jpg"
        ],
        bgPattern: "linear-gradient(0deg, #2E2A20 1px, transparent 1px) 0 0/20px 20px"
    },
    renovation: {
        title: "Renovation",
        subtitle: "Complete Transformation",
        description: "Revitalize your space with our comprehensive renovation services. We turn your renovation dreams into reality with precision and expertise.",
        icon: <FaHome className="w-12 h-12" />,
        features: [
            "Full-scale home renovations",
            "Kitchen and bathroom remodeling",
            "Structural modifications",
            "Modern fixture installations",
            "Custom cabinetry and carpentry",
            "Project management services"
        ],
        images: [
            "/img/service-3-4.jpg",
            "/img/service-3-2.jpg",
            "/img/service-3-1.jpg"
        ],
        bgPattern: "repeating-linear-gradient(45deg, #2E2A20 0, #2E2A20 1px, transparent 0, transparent 50%) 0 0/20px 20px"
    }
};

const PaintingService = ({ service }) => (
    <div className="bg-[#2E2A20]">
        {/* Color Palette Header */}
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="grid grid-cols-5 h-full opacity-20">
                    <div className="bg-amber-500"></div>
                    <div className="bg-red-500"></div>
                    <div className="bg-blue-500"></div>
                    <div className="bg-green-500"></div>
                    <div className="bg-purple-500"></div>
                </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <FaPaintRoller className="w-12 h-12 text-amber-500" />
                            <FaPaintBrush className="w-10 h-10 text-amber-400" />
                            <FaSprayCan className="w-8 h-8 text-amber-300" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {service.title}
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            {service.description}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                                    rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
                            >
                                <span>Get Quote</span>
                                <FaArrowRight />
                            </Link>
                            <button className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-full
                                hover:bg-amber-500 hover:text-white transition-all duration-300">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 
                                rounded-[2.5rem] rounded-br-none blur-lg opacity-20"></div>
                            <img 
                                src={service.images[0]}
                                alt={service.title}
                                className="relative z-10 w-full h-[400px] object-cover rounded-[2.5rem] rounded-br-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Color Swatches Features */}
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-red-500 opacity-0 
                                group-hover:opacity-10 transition-opacity duration-500"></div>
                            <div className="relative bg-[#262219] p-8 rounded-[2rem] rounded-br-none border-l-4 
                                border-amber-500 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-start gap-4">
                                    <FaSwatchbook className="w-8 h-8 text-amber-500" />
                                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {feature}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Paint Drip Gallery */}
        <section className="pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.images.slice(1).map((image, index) => (
                        <div 
                            key={index}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-amber-500 to-red-500 
                                rounded-[2.5rem] rounded-br-none opacity-0 group-hover:opacity-20 
                                transition-opacity duration-500"></div>
                            <img 
                                src={image}
                                alt={`${service.title} ${index + 2}`}
                                className="w-full h-[300px] object-cover rounded-[2.5rem] rounded-br-none 
                                    transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t 
                                from-black to-transparent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const DesignService = ({ service }) => (
    <div className="bg-[#2E2A20]">
        {/* Modern Grid Header */}
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="grid grid-cols-8 grid-rows-8 gap-4 p-4 opacity-10">
                    {Array(64).fill().map((_, i) => (
                        <div key={i} className="border border-amber-500"></div>
                    ))}
                </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
                                <FaPalette className="w-8 h-8 text-amber-500" />
                            </div>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Transforming Spaces<br/>Through Design
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            {service.description}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                                rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
                        >
                            <span>Start Your Project</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {service.images.map((image, index) => (
                            <div 
                                key={index}
                                className={`relative rounded-[2rem] rounded-br-none overflow-hidden
                                    ${index === 0 ? 'col-span-2' : ''}`}
                            >
                                <img 
                                    src={image}
                                    alt={`Design ${index + 1}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Design Process */}
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.features.map((feature, index) => (
                        <div 
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-amber-500/5 rounded-[2rem] rounded-br-none 
                                transform group-hover:scale-95 transition-transform duration-500"></div>
                            <div className="relative bg-[#262219] p-8 rounded-[2rem] rounded-br-none">
                                <div className="flex flex-col gap-4">
                                    <span className="text-6xl font-light text-amber-500/20">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <h3 className="text-white text-xl font-semibold">
                                        {feature}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const ArchitecturalService = ({ service }) => (
    <div className="bg-[#2E2A20]">
        {/* Blueprint Style Header */}
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23df9e42' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.1
                }} />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-8">
                            <FaRulerCombined className="w-12 h-12 text-amber-500" />
                            <FaCompass className="w-10 h-10 text-amber-400" />
                            <FaDrawPolygon className="w-8 h-8 text-amber-300" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Architectural Excellence
                        </h1>
                        <div className="h-1 w-24 bg-amber-500 mb-8"></div>
                        <p className="text-gray-400 text-lg mb-8">
                            {service.description}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                                rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
                        >
                            <span>Discuss Your Project</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                    
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-[2.5rem] rounded-br-none 
                                transform translate-x-4 translate-y-4"></div>
                            <img 
                                src={service.images[0]}
                                alt={service.title}
                                className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] rounded-br-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.features.map((feature, index) => (
                        <div 
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-amber-500/5 rounded-[2rem] rounded-br-none"></div>
                            <div className="relative bg-[#262219] p-8 rounded-[2rem] rounded-br-none border-2 
                                border-amber-500/10 group-hover:border-amber-500/30 transition-colors duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center 
                                        justify-center text-amber-500">
                                        <FaRuler className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-2">
                                            Technical Aspect {index + 1}
                                        </h3>
                                        <p className="text-gray-400">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const RenovationService = ({ service }) => (
    <div className="bg-[#2E2A20]">
        {/* Construction Style Header */}
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23df9e42' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.1
                }} />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <FaHome className="w-12 h-12 text-amber-500" />
                        <FaHardHat className="w-10 h-10 text-amber-400" />
                        <FaHammer className="w-8 h-8 text-amber-300" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Complete Home Transformation
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                        {service.description}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                            rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
                    >
                        <span>Start Your Renovation</span>
                        <FaArrowRight />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.images.map((image, index) => (
                        <div 
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                rounded-[2.5rem] rounded-br-none"></div>
                            <img 
                                src={image}
                                alt={`Renovation ${index + 1}`}
                                className="w-full h-[300px] object-cover rounded-[2.5rem] rounded-br-none 
                                    transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Renovation Process */}
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.features.map((feature, index) => (
                        <div 
                            key={index}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-amber-500/5 rounded-[2rem] rounded-br-none"></div>
                            <div className="relative bg-[#262219] p-8 rounded-[2rem] rounded-br-none">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center 
                                        justify-center border-2 border-amber-500/30">
                                        <FaTools className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <div className="text-amber-500 text-sm font-semibold mb-1">
                                            Phase {index + 1}
                                        </div>
                                        <h3 className="text-white text-xl font-semibold">
                                            {feature}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default function ServicePage() {
    const { serviceType } = useParams();
    const service = serviceData[serviceType] || serviceData.painting;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ServiceComponent = {
        painting: PaintingService,
        design: DesignService,
        architectural: ArchitecturalService,
        renovation: RenovationService
    }[serviceType] || PaintingService;

    return <ServiceComponent service={service} />;
} 