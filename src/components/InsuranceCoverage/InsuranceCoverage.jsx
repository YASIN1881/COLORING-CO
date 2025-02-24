import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheckCircle, FaBuilding, FaHandshake } from 'react-icons/fa';

const coverageAreas = [
    {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Professional Painting Coverage",
        description: "Comprehensive coverage for all painting services, protecting both interior and exterior projects.",
        coverage: "$10M"
    },
    {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Design & Architecture Protection",
        description: "Full insurance coverage for interior, exterior, and architectural design services.",
        coverage: "$10M"
    },
    {
        icon: <FaHandshake className="w-8 h-8" />,
        title: "Renovation Security",
        description: "Complete protection for all renovation and remodeling projects, ensuring peace of mind.",
        coverage: "$10M"
    }
];

const benefits = [
    "Fully licensed and insured company",
    "Professional indemnity coverage",
    "Public liability protection",
    "Workers compensation insurance",
    "Property damage coverage",
    "Contract works insurance"
];

export default function InsuranceCoverage() {
    return (
        <section className="relative py-20 bg-[#2E2A20]">
            <div className="absolute inset-0">
                <img 
                    src="/img/pattern-dark.png" 
                    alt="background pattern" 
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
                        <img src="/FIVEICON.png" alt="Coloring co" className="w-6 h-6 object-contain" />
                        <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                            INSURANCE & PROTECTION
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Your Peace of Mind is Our Priority
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        We maintain comprehensive insurance coverage to protect our clients and deliver 
                        services with complete confidence and professionalism.
                    </p>
                </div>

                {/* Coverage Areas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {coverageAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#262219] p-8 rounded-[2.5rem] rounded-br-none"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center
                                text-amber-500 mb-6">
                                {area.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                            <p className="text-gray-400 mb-4">{area.description}</p>
                            <div className="text-amber-500 text-2xl font-bold">
                                Coverage up to {area.coverage}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits List */}
                <div className="bg-[#262219] p-8 md:p-12 rounded-[2.5rem] rounded-br-none">
                    <h3 className="text-2xl font-bold text-white mb-8">Our Insurance Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4 text-gray-400">
                                <FaCheckCircle className="text-amber-500 flex-shrink-0" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 