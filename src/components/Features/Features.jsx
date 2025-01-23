import { useEffect } from 'react';
import WOW from 'wow.js';
import { HiOutlineLightBulb, HiCurrencyDollar } from 'react-icons/hi';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { RiTeamLine } from 'react-icons/ri';

const Features = () => {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    }, []);

    const features = [
        { 
            id: 1, 
            title: 'Smart Work',
            icon: <HiOutlineLightBulb className="w-10 h-10" />
        },
        { 
            id: 2, 
            title: 'Unique Design',
            icon: <IoColorPaletteSharp className="w-9 h-9" />
        },
        { 
            id: 3, 
            title: 'Skilled Team',
            icon: <RiTeamLine className="w-9 h-9" />
        },
        { 
            id: 4, 
            title: 'Best Pricing',
            icon: <HiCurrencyDollar className="w-9 h-9" />
        },
    ];

    return (
        <div className="bg-[#2E2A20] py-20 px-4 md:py-24 lg:py-32 md:px-6 lg:px-8">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-12 lg:gap-16 max-w-[1400px] mx-auto">
                {features.map((feature) => (
                    <div 
                        key={feature.id} 
                        className="wow fadeInUp group flex flex-col items-center gap-8 hover:scale-105 transition-transform duration-300"
                        data-wow-delay={`${feature.id * 0.2}s`}
                    >
                        <div className="w-[220px] h-[220px] bg-[#1a1a1a] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r from-amber-400 to-amber-600 relative overflow-hidden shadow-lg">
                            {/* Background Overlay */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-400/80 to-amber-600/80"
                                style={{ 
                                    backgroundImage: 'url("/img/about-bg-2-1.png")',
                                    backgroundBlendMode: 'soft-light'
                                }}>
                            </div>
                            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center relative z-10 shadow-md transform group-hover:rotate-12 transition-all duration-300">
                                <div className="text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-white text-xl font-medium text-center group-hover:text-amber-400 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 delay-150 group-hover:w-full"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;