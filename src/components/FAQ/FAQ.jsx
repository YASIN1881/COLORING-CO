import { useState } from 'react';
import PropTypes from 'prop-types';

// FAQ Data
const faqData = [
    {
        id: 1,
        question: "What Types Of Wallpaper Materials Are Available?",
        answer: "Bring To The Table Win-Win Survival Strategies To Ensure Proactive Domination. At The End Of The Day, Going Forward, A New Normal That Has Evolved From Generation X Is On The"
    },
    {
        id: 2,
        question: "How Do I Choose The Right Wallpaper For My Room?",
        answer: "We offer a wide variety of wallpaper materials including vinyl, non-woven, paper-backed vinyl, fabric-backed vinyl, and natural materials. Each type has its unique characteristics and benefits suitable for different spaces and requirements."
    },
    {
        id: 3,
        question: "How Do I Clean And Maintain Wallpaper?",
        answer: "Regular maintenance includes gentle dusting with a soft cloth or vacuum brush attachment. For specific cleaning methods, it depends on the wallpaper type. We provide detailed care instructions for each wallpaper material we install."
    },
    {
        id: 4,
        question: "Do You Offer Custom Wallpaper Designs?",
        answer: "Yes, we offer custom wallpaper design services. Our team can help create unique patterns and designs tailored to your specific preferences and interior design needs."
    }
];

// Feature Card Component
const FeatureCard = ({ title, description }) => (
    <div className="flex items-start gap-6 mb-8 group">
        <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 
                opacity-0 group-hover:opacity-20 blur-md transition-all duration-700 rounded-full"></div>
            <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0
                group-hover:bg-amber-500 transition-all duration-500 shadow-lg">
                <span className="text-amber-500 text-2xl transition-all duration-300
                    hover:text-amber-500 transform group-hover:text-white
                    group-hover:rotate-[360deg] group-hover:scale-110">✓</span>
            </div>
        </div>
        <div className="transform transition-all duration-500 group-hover:translate-x-2">
            <h3 className="text-[#2E2A20] text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        </div>
    </div>
);

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

// FAQ Item Component
const FAQItem = ({ item, isOpen, onToggle }) => (
    <div className="transition-all duration-300">
        <div className={`transition-all duration-500 ${
            isOpen 
                ? 'bg-amber-500 border-amber-500' 
                : 'bg-white hover:bg-white/80'
            } rounded-xl border border-[#2E2A20]/10 shadow-[0_4px_20px_0px_rgba(0,0,0,0.05)]
            hover:shadow-[0_6px_24px_0px_rgba(234,179,8,0.12)] hover:border-amber-500/30`}
        >
            <button
                onClick={onToggle}
                className="w-full px-8 py-5 flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center 
                        transition-colors duration-300 ${isOpen ? 'bg-white/20' : 'bg-[#2E2A20]'}`}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="text-white text-xl sm:text-2xl font-normal select-none">
                                {isOpen ? '−' : '+'}
                            </span>
                        </div>
                    </div>
                    <span className={`font-medium text-base sm:text-lg transition-colors duration-300 text-left
                        ${isOpen ? 'text-white' : 'text-[#2E2A20] group-hover:text-amber-500'}`}>
                        {item.question}
                    </span>
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}>
                <div className="overflow-hidden">
                    <div className="px-8 pb-5 text-white ml-14 sm:ml-16 text-sm sm:text-base">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

FAQItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
};

// Features Section Component
const FeaturesSection = () => (
    <div className="space-y-8">
        <div className="rounded-[2.5rem] rounded-br-none overflow-hidden h-[300px] mb-12 group">
            <img 
                src="/img/service-3-1.jpg" 
                alt="Wallpaper Service" 
                className="w-full h-full object-cover transform transition-transform duration-700
                    group-hover:scale-110"
            />
        </div>
        <FeatureCard 
            title="Beautiful Clean Result"
            description="Embarrassing hidden in the middle All the Lorem Ipsum generators on the Internet repeat predefined chunks"
        />
        <FeatureCard 
            title="We're Professional"
            description="Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum lacus risus"
        />
    </div>
);

// FAQ Section Component
const FAQSection = ({ openQuestion, setOpenQuestion }) => (
    <div className="space-y-3 sm:space-y-4">
        {faqData.map((item) => (
            <FAQItem 
                key={item.id}
                item={item}
                isOpen={openQuestion === item.id}
                onToggle={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
            />
        ))}
    </div>
);

FAQSection.propTypes = {
    openQuestion: PropTypes.number,
    setOpenQuestion: PropTypes.func.isRequired
};

// Main FAQ Component
const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    return (
        <div className="w-full bg-[#F4EDE4] py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    <FeaturesSection />
                    <FAQSection 
                        openQuestion={openQuestion}
                        setOpenQuestion={setOpenQuestion}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ; 