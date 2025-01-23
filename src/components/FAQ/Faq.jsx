import { useState } from 'react';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(3);

    const questions = [
        {
            id: 0,
            question: "What Types Of Wallpaper Do You Offer?",
            answer: "Bring To The Table Win-Win Survival Strategies To Ensure Proactive Domination. At The End Of The Day, Going Forward, A New Normal That Has Evolved From Generation X Is On The"
        },
        {
            id: 1,
            question: "How Do I Measure The Amount Of Wallpaper I Need?",
            answer: "Bring To The Table Win-Win Survival Strategies To Ensure Proactive Domination. At The End Of The Day, Going Forward, A New Normal That Has Evolved From Generation X Is On The"
        },
        {
            id: 2,
            question: "How Do I Install Wallpaper?",
            answer: "Bring To The Table Win-Win Survival Strategies To Ensure Proactive Domination. At The End Of The Day, Going Forward, A New Normal That Has Evolved From Generation X Is On The"
        },
        {
            id: 3,
            question: "Can I Remove The Wallpaper Easily?",
            answer: "Bring To The Table Win-Win Survival Strategies To Ensure Proactive Domination. At The End Of The Day, Going Forward, A New Normal That Has Evolved From Generation X Is On The"
        }
    ];

    return (
        <div className="bg-[#2E2A20] px-4 py-16 md:px-8 lg:px-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - FAQ Accordion */}
                <div className="space-y-4">
                    {questions.map((q) => (
                        <div 
                            key={q.id}
                            className={`transition-all duration-300 ${
                                openQuestion === q.id 
                                    ? 'bg-amber-500' 
                                    : 'bg-[#F5F5F4]'
                            } rounded-2xl overflow-hidden`}
                        >
                            <button
                                onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
                                className="w-full px-8 py-5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                                        openQuestion === q.id 
                                            ? 'bg-white/20' 
                                            : 'bg-[#2E2A20]'
                                    }`}>
                                        <span className="text-white text-xl">
                                            {openQuestion === q.id ? '−' : '+'}
                                        </span>
                                    </div>
                                    <span className={`font-medium text-lg ${
                                        openQuestion === q.id ? 'text-white' : 'text-[#2E2A20]'
                                    }`}>
                                        {q.question}
                                    </span>
                                </div>
                            </button>
                            {openQuestion === q.id && (
                                <div className="px-8 pb-5 text-white ml-14">
                                    {q.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8">
                    {/* Title Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-amber-500 text-lg">◆</span>
                            <span className="text-amber-500 uppercase tracking-wider text-sm font-medium">
                                Freequently Asked Question
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            Ultimately, quality work is judged by the extent
                        </h2>

                        <p className="text-gray-400/90 text-lg">
                            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                        </p>
                    </div>

                    {/* Features and Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Left Side - Features List */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-amber-500">✓</span>
                                <span className="text-gray-200">We're Professional</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-amber-500">✓</span>
                                <span className="text-gray-200">We Use Quality Material</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-amber-500">✓</span>
                                <span className="text-gray-200">100% Customers Satisfaction</span>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px]">
                            <img 
                                src="/img/faqs-s-bg.webp" 
                                alt="FAQ illustration" 
                                className="w-full h-full object-cover rounded-[51px]"
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
    );
};

export default FAQ;
