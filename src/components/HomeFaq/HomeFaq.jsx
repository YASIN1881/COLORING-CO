import { useState } from 'react';

const HomeFaq = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    const questions = [
        {
            id: 0,
            question: "What painting services does Coloring Co offer?",
            answer: "At Coloring Co, we offer a comprehensive range of painting services including interior and exterior residential painting, commercial painting, house renovation preparation, spray painting, and decorative finishes. Our expert team specializes in both traditional brush & roller techniques and modern spray applications."
        },
        {
            id: 1,
            question: "How do you prepare surfaces before painting?",
            answer: "Our preparation process at Coloring Co is thorough and professional. We begin with surface cleaning, repair any damages or cracks, sand and smooth surfaces, apply primer where necessary, and protect surrounding areas. For renovations, we ensure proper preparation of walls, trims, and other surfaces to guarantee the best possible finish."
        },
        {
            id: 2,
            question: "What types of commercial painting projects do you handle?",
            answer: "Coloring Co handles all types of commercial painting projects, from office spaces and retail stores to industrial facilities and warehouses. We work during off-hours when needed, use low-VOC paints for occupied spaces, and ensure minimal disruption to your business operations while maintaining the highest quality standards."
        },
        {
            id: 3,
            question: "Do you offer specialized decorative painting techniques?",
            answer: "Yes, Coloring Co offers a wide range of decorative painting services including textured finishes, faux finishes, accent walls, and custom murals. Our skilled artisans can create unique effects using specialized techniques and premium materials to achieve your desired aesthetic."
        },
        {
            id: 4,
            question: "What makes Coloring Co different from other painting companies?",
            answer: "Coloring Co stands out through our commitment to quality, professionalism, and customer satisfaction. We use premium materials, employ skilled painters, offer detailed quotes, maintain clear communication throughout projects, and provide a satisfaction guarantee on all our work."
        }
    ];

    return (
        <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {/* Left Side - FAQ Accordion */}
                    <div className="space-y-3 sm:space-y-4">
                        {questions.map((q) => (
                            <div 
                                key={q.id}
                                className={`transition-all duration-300 ${
                                    openQuestion === q.id 
                                        ? 'bg-amber-500' 
                                        : 'bg-[#F5F5F4]'
                                } rounded-xl sm:rounded-2xl overflow-hidden`}
                            >
                                <button
                                    onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
                                    className="w-full px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                            openQuestion === q.id 
                                                ? 'bg-white/20' 
                                                : 'bg-[#2E2A20]'
                                        }`}>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <span className="text-white text-xl sm:text-2xl font-normal select-none">
                                                    {openQuestion === q.id ? '−' : '+'}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`font-medium text-base sm:text-lg transition-colors duration-300 text-left ${
                                            openQuestion === q.id ? 'text-white' : 'text-[#2E2A20]'
                                        }`}>
                                            {q.question}
                                        </span>
                                    </div>
                                </button>
                                <div 
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        openQuestion === q.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 sm:px-8 pb-4 sm:pb-5 text-white ml-12 sm:ml-14 text-sm sm:text-base">
                                            {q.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Title Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <img 
                                    src="/FIVEICON.png" 
                                    alt="Coloring Co Logo" 
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                />
                                <span className="text-amber-500 uppercase tracking-wider text-xs sm:text-sm font-medium">
                                    Frequently Asked Questions
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                                Expert Painting Solutions by Coloring Co
                            </h2>

                            <p className="text-gray-400/90 text-sm sm:text-base md:text-lg">
                                Transform your space with Coloring Co's professional painting services. We bring expertise, quality materials, and attention to detail to every project, ensuring outstanding results that exceed your expectations.
                            </p>
                        </div>

                        {/* Features and Image Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                            {/* Left Side - Features List */}
                            <div className="space-y-4 sm:space-y-6 py-3 sm:py-4">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                        <span className="text-amber-500 text-lg sm:text-xl">✓</span>
                                    </div>
                                    <span className="text-gray-200 text-base sm:text-lg">Licensed & Insured Professionals</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                        <span className="text-amber-500 text-lg sm:text-xl">✓</span>
                                    </div>
                                    <span className="text-gray-200 text-base sm:text-lg">Premium Quality Materials</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                        <span className="text-amber-500 text-lg sm:text-xl">✓</span>
                                    </div>
                                    <span className="text-gray-200 text-base sm:text-lg">100% Customer Satisfaction</span>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                        <span className="text-amber-500 text-lg sm:text-xl">✓</span>
                                    </div>
                                    <span className="text-gray-200 text-base sm:text-lg">5-Year Warranty on Services</span>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative w-[220px] h-[82px] sm:w-[270px] sm:h-[102px] mx-auto">
                                <img 
                                    src="/img/faqs-s-bg.jpg" 
                                    alt="FAQ illustration" 
                                    className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
                                    style={{
                                        verticalAlign: 'middle',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFaq;
