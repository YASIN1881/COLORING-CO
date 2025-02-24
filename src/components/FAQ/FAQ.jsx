import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPaintRoller, FaPalette, FaRulerCombined, FaTools, FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Categories and Data
const faqCategories = [
    {
        id: 'painting',
        icon: <FaPaintRoller className="w-6 h-6" />,
        title: "Professional Painting",
        questions: [
            {
                id: 1,
                question: "What types of painting services do you offer?",
                answer: "We offer comprehensive painting services including interior and exterior painting for both residential and commercial properties, specialty finishes, color consulting, wallpaper installation, and decorative painting techniques. Our team is equipped to handle projects of any size."
            },
            {
                id: 2,
                question: "What paint brands and materials do you use?",
                answer: "We exclusively use premium quality paints from trusted brands to ensure durability and superior finish. Our selection includes low-VOC and environmentally friendly options. We customize our paint selection based on the specific requirements of each project."
            },
            {
                id: 3,
                question: "How do you ensure quality in your painting work?",
                answer: "Our quality assurance process includes thorough surface preparation, proper priming, multiple coats as needed, and detailed finishing. We conduct regular inspections during the project and a final walkthrough with clients to ensure complete satisfaction."
            }
        ]
    },
    {
        id: 'design',
        icon: <FaPalette className="w-6 h-6" />,
        title: "Interior & Exterior Design",
        questions: [
            {
                id: 1,
                question: "What design services do you provide?",
                answer: "Our design services encompass both interior and exterior spaces, including color scheme selection, space planning, material selection, lighting design, and custom architectural elements. We create cohesive designs that reflect your style and functional needs."
            },
            {
                id: 2,
                question: "How do you approach the design process?",
                answer: "We begin with a thorough consultation to understand your vision, lifestyle, and requirements. Our team then develops concept boards, 3D visualizations, and detailed plans. We work closely with you throughout the process to ensure the final design exceeds your expectations."
            },
            {
                id: 3,
                question: "Can you help with both residential and commercial design projects?",
                answer: "Yes, we have extensive experience in both residential and commercial design. Our team understands the unique requirements of each sector and can create designs that enhance functionality while maintaining aesthetic appeal."
            }
        ]
    },
    {
        id: 'architectural',
        icon: <FaRulerCombined className="w-6 h-6" />,
        title: "Architectural Design",
        questions: [
            {
                id: 1,
                question: "What architectural design services do you offer?",
                answer: "We provide comprehensive architectural design services including concept development, space planning, technical drawings, 3D modeling, and construction documentation. Our team can handle both new construction and renovation projects."
            },
            {
                id: 2,
                question: "How do you ensure designs meet building codes and regulations?",
                answer: "Our architectural team stays up-to-date with local building codes and regulations. We work closely with regulatory bodies during the design process and ensure all plans meet or exceed required standards before submission."
            },
            {
                id: 3,
                question: "Can you handle sustainable and eco-friendly design requests?",
                answer: "Absolutely! We specialize in sustainable architecture and can incorporate eco-friendly features such as energy-efficient systems, sustainable materials, and passive design principles into your project."
            }
        ]
    },
    {
        id: 'renovation',
        icon: <FaTools className="w-6 h-6" />,
        title: "Renovation",
        questions: [
            {
                id: 1,
                question: "What types of renovation projects do you handle?",
                answer: "We manage all types of renovation projects from simple room updates to complete home transformations. This includes kitchen and bathroom remodels, structural modifications, additions, and whole-house renovations."
            },
            {
                id: 2,
                question: "How do you manage renovation timelines and budgets?",
                answer: "We create detailed project schedules and budgets at the outset, with regular updates throughout the process. Our team uses project management software to track progress and communicate effectively with clients about timelines and costs."
            },
            {
                id: 3,
                question: "What measures do you take to minimize disruption during renovation?",
                answer: "We implement strict dust control measures, maintain clean work areas, and coordinate work schedules to minimize impact on occupied spaces. Our team also provides detailed plans for temporary arrangements if needed during renovation."
            }
        ]
    }
];

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
    <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 
            blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 rounded-[2rem]"></div>
        <div className="relative flex items-start gap-6 p-8 rounded-[2rem] rounded-br-none bg-[#262219] 
            border border-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500
            hover:shadow-[0_4px_20px_0px_rgba(234,179,8,0.12)]">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 
                    opacity-0 group-hover:opacity-20 blur-md transition-all duration-700 rounded-2xl"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center
                    group-hover:bg-amber-500 transition-all duration-500">
                    <div className="text-amber-500 group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    </motion.div>
);

FeatureCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

// FAQ Category Component
const FAQCategory = ({ category, activeQuestionId, setActiveQuestionId }) => (
    <div className="space-y-4">
        <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-6 flex items-center gap-4"
        >
            <span className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                {category.icon}
            </span>
            {category.title}
        </motion.h2>
        <div className="space-y-3">
            {category.questions.map((item, index) => (
                <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="transition-all duration-300"
                >
                    <div className={`transition-all duration-500 ${
                        activeQuestionId === item.id 
                            ? 'bg-amber-500 border-amber-500' 
                            : 'bg-[#262219] hover:bg-[#2A2620]'
                        } rounded-xl border border-amber-500/10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)]
                        hover:shadow-[0_6px_24px_0px_rgba(234,179,8,0.12)] hover:border-amber-500/30`}
                    >
                        <button
                            onClick={() => setActiveQuestionId(activeQuestionId === item.id ? null : item.id)}
                            className="w-full px-8 py-5 flex items-center justify-between group"
                        >
                            <span className={`font-medium text-lg transition-colors duration-300 text-left
                                ${activeQuestionId === item.id ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                                {item.question}
                            </span>
                            <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300
                                ${activeQuestionId === item.id ? 'rotate-180' : ''}`}>
                                <span className={`text-2xl font-normal select-none
                                    ${activeQuestionId === item.id ? 'text-white' : 'text-amber-500'}`}>
                                    {activeQuestionId === item.id ? '−' : '+'}
                                </span>
                            </div>
                        </button>
                        <AnimatePresence>
                            {activeQuestionId === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-5 text-white">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

FAQCategory.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    activeQuestionId: PropTypes.number,
    setActiveQuestionId: PropTypes.func.isRequired
};

// Main FAQ Component
const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('painting');
    const [activeQuestionId, setActiveQuestionId] = useState(null);

    return (
        <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <FeatureCard 
                        icon={<FaPaintRoller className="w-8 h-8" />}
                        title="Expert Craftsmanship"
                        description="Our team of skilled professionals brings years of experience and attention to detail to every project."
                    />
                    <FeatureCard 
                        icon={<FaShieldAlt className="w-8 h-8" />}
                        title="Quality Guarantee"
                        description="We stand behind our work with comprehensive warranties and ensure your complete satisfaction."
                    />
                </div>

                {/* FAQ Categories Navigation */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {faqCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveCategory(category.id);
                                setActiveQuestionId(null);
                            }}
                            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                                ${activeCategory === category.id 
                                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' 
                                    : 'bg-[#262219] text-gray-200 hover:text-white hover:bg-[#2A2620]'}`}
                        >
                            {category.icon}
                            <span className="font-medium">{category.title}</span>
                        </motion.button>
                    ))}
                </div>

                {/* FAQ Content */}
                <div className="bg-[#262219] rounded-[2rem] rounded-br-none p-8 sm:p-10 md:p-12 border border-amber-500/10
                    shadow-[0_4px_20px_0px_rgba(0,0,0,0.2)]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FAQCategory 
                                category={faqCategories.find(cat => cat.id === activeCategory)}
                                activeQuestionId={activeQuestionId}
                                setActiveQuestionId={setActiveQuestionId}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default FAQ; 