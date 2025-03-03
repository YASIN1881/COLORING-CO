import PageHeader from '../components/PageHeader/PageHeader';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaPaintRoller, FaHome, FaPalette, FaRulerCombined, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "painting",
        icon: <FaPaintRoller className="w-8 h-8" />,
        title: "Professional Painting",
        description: "Expert painting services for residential and commercial properties.",
        features: [
            "Interior House Painting",
            "Exterior House Painting",
            "Commercial Painting",
            "Industrial Painting",
            "Special Finishes",
        ],
        images: [
            "/img/service-3-1.jpg",
            "/img/service-3-2.jpg",
            "/img/service-3-3.jpg"
        ],
        link: "/services/painting"
    },
    {
        id: "design",
        icon: <FaPalette className="w-8 h-8" />,
        title: "Interior & Exterior Design",
        description: "Transform your space with our expert design services.",
        features: [
            "Interior Design Consultation",
            "Exterior Design Planning",
            "Color Scheme Selection",
            "Material Selection",
            "Lighting Design",
            "Space Planning"
        ],
        images: [
            "/img/services/design/1.avif",
            "/img/services/design/2.jpeg",
            "/img/services/design/3.avif"
        ],
        link: "/services/design"
    },
    {
        id: "architectural",
        icon: <FaRulerCombined className="w-8 h-8" />,
        title: "Architectural Design",
        description: "Professional architectural design and planning services.",
        features: [
            "Architectural Planning",
            "3D Visualization",
            "Construction Documents",
            "Building Permits",
            "Site Analysis",
            "Sustainable Design"
        ],
        images: [
            "/img/services/Architectural/1.avif",
            "/img/services/Architectural/2.webp",
            "/img/services/Architectural/3.webp"
        ],
        link: "/services/architectural"
    },
    {
        id: "renovation",
        icon: <FaHome className="w-8 h-8" />,
        title: "Renovation",
        description: "Complete home renovation and remodeling services.",
        features: [
            "Kitchen Renovation",
            "Bathroom Remodeling",
            "Room Additions",
            "Basement Finishing",
            "Deck Construction",
            "General Remodeling"
        ],
        images: [
            "/img/services/renovation/1.jpg",
            "/img/services/renovation/2.jpg",
            "/img/services/renovation/3.jpg"
        ],
        link: "/services/renovation"
    }
];

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(services[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#2E2A20]">
            <PageHeader title="Our Services" currentPage="Services" />
            
            {/* Services Section */}
            <section className="relative py-20">
                <div className="absolute inset-0">
                    <img 
                        src="/img/service-bg-3-1.png" 
                        alt="background pattern" 
                        className="w-full h-full object-cover opacity-10"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full mb-4">
                            <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                                OUR EXPERTISE
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Comprehensive Services
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            From professional painting to complete renovations, we offer a full range of services 
                            to transform your space with expertise and precision.
                        </p>
                    </div>

                    {/* Service Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service)}
                                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-3
                                    ${activeService.id === service.id 
                                        ? 'bg-amber-500 text-white' 
                                        : 'bg-[#262219] text-gray-400 hover:text-white'}`}
                            >
                                {service.icon}
                                <span>{service.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active Service Display */}
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                    >
                        {/* Service Details */}
                        <div className="bg-[#262219] p-8 rounded-[2.5rem] rounded-br-none">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center
                                    text-amber-500">
                                    {activeService.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{activeService.title}</h3>
                                    <p className="text-gray-400">{activeService.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {activeService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link 
                                to={activeService.link}
                                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 
                                    rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
                            >
                                <span>View Details</span>
                                <FaArrowRight />
                            </Link>
                        </div>

                        {/* Service Images */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <div className="relative h-[300px] rounded-[2.5rem] rounded-br-none overflow-hidden">
                                    <img 
                                        src={activeService.images[0]}
                                        alt={activeService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                            </div>
                            {activeService.images.slice(1).map((image, idx) => (
                                <div key={idx} className="relative h-[200px] rounded-[2rem] rounded-br-none overflow-hidden">
                                    <img 
                                        src={image}
                                        alt={`${activeService.title} ${idx + 2}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-[2.5rem] rounded-br-none overflow-hidden">
                        <div className="absolute inset-0">
                            <img 
                                src="/img/service-3-2.jpg" 
                                alt="Get Started" 
                                className="w-full h-full object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#262219] to-transparent" />
                        </div>
                        
                        <div className="relative z-10 p-12 md:p-20 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Transform Your Space?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Contact us today for a free consultation and quote. Let&apos;s bring your vision to life.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                                    rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300
                                    transform hover:scale-105"
                            >
                                <span>Get Started</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 