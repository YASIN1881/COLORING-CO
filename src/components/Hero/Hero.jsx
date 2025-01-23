import { FaPhone } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <img 
                    src="/img/service-bg-3-1.png" 
                    alt="Background pattern" 
                    className="w-full h-full object-cover opacity-10"
                />
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm"></div>
            </div>
            
            {/* Main Content Container */}
            <div className="relative container mx-auto px-4 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side - Creative Image Section */}
                    <div className="relative w-full lg:w-1/2 py-10">
                        <div className="relative flex justify-center items-center">
                            {/* Images Grid with Professional Layout */}
                            <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] 
                                h-[460px] xs:h-[500px] sm:h-[550px] md:h-[600px] flex items-center perspective-3d mx-auto">
                                {/* Background Glow Effects */}
                                <div className="absolute left-[20%] top-[30%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] 
                                    bg-amber-500/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse"></div>
                                <div className="absolute right-[10%] bottom-[20%] w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] 
                                    bg-amber-500/10 rounded-full blur-[60px] sm:blur-[90px] animate-pulse delay-700"></div>
                                
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute left-[10%] top-[20%] w-[40px] h-[40px] border border-amber-500/50 rotate-45"></div>
                                    <div className="absolute right-[15%] bottom-[25%] w-[30px] h-[30px] border border-amber-500/30 rotate-12"></div>
                                    <div className="absolute right-[25%] top-[15%] w-[25px] h-[25px] border border-amber-500/40 -rotate-12"></div>
                                </div>

                                {/* Left Image - Commercial */}
                                <div className="absolute left-0 xs:left-[5%] sm:left-[10%] top-[45%] xs:top-[50%] translate-y-[-50%] 
                                    w-[160px] xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] 
                                    h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] z-20 
                                    transform hover:translate-x-4 hover:translate-y-[-52%] transition-all duration-700">
                                    <div className="relative group w-full h-full rounded-[30px] overflow-hidden shadow-2xl 
                                        shadow-amber-500/20 transition-all duration-700
                                        hover:shadow-amber-500/40 hover:scale-105">
                                        {/* Animated Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 animate-gradient"></div>
                                        
                                        <img 
                                            src="/img/hero-2-1.jpeg" 
                                            alt="Commercial painting" 
                                            className="w-full h-full object-cover transform scale-110 
                                                group-hover:scale-125 transition-all duration-1000"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-black/50 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-700"></div>
                                        {/* Animated Border */}
                                        <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 
                                            rounded-[30px] transition-all duration-700"></div>
                                        {/* Image Label */}
                                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-sm rounded-2xl
                                            transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                            transition-all duration-500">
                                            <p className="text-amber-500 font-medium text-sm">Commercial Project</p>
                                            <p className="text-white/80 text-xs mt-1">Professional Painting Solutions</p>
                                        </div>
                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 
                                            group-hover:border-amber-500/50 transition-all duration-700 rounded-tl-lg"></div>
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 
                                            group-hover:border-amber-500/50 transition-all duration-700 rounded-br-lg"></div>
                                    </div>
                                </div>
                                
                                {/* Right Image - Residential */}
                                <div className="absolute right-0 xs:right-[5%] sm:right-[10%] top-[55%] xs:top-[50%] translate-y-[-50%] 
                                    w-[160px] xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] 
                                    h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] z-10
                                    transform hover:-translate-x-4 hover:translate-y-[-48%] transition-all duration-700">
                                    <div className="relative group w-full h-full rounded-[30px] overflow-hidden shadow-xl 
                                        shadow-amber-500/10 transition-all duration-700
                                        hover:shadow-amber-500/30 hover:scale-105">
                                        {/* Animated Background */}
                                        <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/10 to-transparent opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 animate-gradient"></div>
                                        
                                        <img 
                                            src="/img/hero-2-2.jpeg" 
                                            alt="Residential painting" 
                                            className="w-full h-full object-cover transform 
                                                group-hover:scale-125 transition-all duration-1000"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 via-transparent to-black/50 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-700"></div>
                                        {/* Animated Border */}
                                        <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 
                                            rounded-[30px] transition-all duration-700"></div>
                                        {/* Image Label */}
                                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-sm rounded-2xl
                                            transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                            transition-all duration-500">
                                            <p className="text-amber-500 font-medium text-sm">Residential Project</p>
                                            <p className="text-white/80 text-xs mt-1">Premium Quality Finishes</p>
                                        </div>
                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 
                                            group-hover:border-amber-500/50 transition-all duration-700 rounded-tl-lg"></div>
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 
                                            group-hover:border-amber-500/50 transition-all duration-700 rounded-br-lg"></div>
                                    </div>
                                </div>

                                {/* Decorative Elements - Responsive Positioning */}
                                <div className="absolute left-[15%] top-[15%] w-[30px] xs:w-[40px] sm:w-[50px] lg:w-[60px] 
                                    h-[30px] xs:h-[40px] sm:h-[50px] lg:h-[60px] border-2 border-amber-500/30 
                                    rounded-full transform rotate-45 animate-[spin_15s_linear_infinite]"></div>
                                <div className="absolute right-[20%] bottom-[10%] w-[20px] xs:w-[25px] sm:w-[35px] lg:w-[40px] 
                                    h-[20px] xs:h-[25px] sm:h-[35px] lg:h-[40px] border-2 border-amber-500/20 
                                    rounded-full transform -rotate-12 animate-[ping_3s_ease-in-out_infinite]"></div>
                                
                                {/* Additional Floating Elements - Responsive Positioning */}
                                <div className="absolute left-[30%] bottom-[25%] w-[4px] xs:w-[5px] sm:w-[6px] lg:w-[8px] 
                                    h-[4px] xs:h-[5px] sm:h-[6px] lg:h-[8px] bg-amber-500/50 
                                    rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
                                <div className="absolute right-[35%] top-[30%] w-[3px] xs:w-[4px] sm:w-[5px] lg:w-[6px] 
                                    h-[3px] xs:h-[4px] sm:h-[5px] lg:h-[6px] bg-amber-500/40 
                                    rounded-full animate-[float_5s_ease-in-out_infinite_reverse]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="w-full lg:w-1/2 text-white space-y-6 sm:space-y-8">
                        {/* Welcome Text */}
                        <div className="flex items-center gap-2">
                            <img 
                                src="/FIVEICON.png" 
                                alt="Coloring co" 
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-amber-500 tracking-wider font-medium">
                                WELCOME TO COLORING CO
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            Transforming Spaces with Expert Painting in Melbourne
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-400">
                            Your trusted partner for stunning exterior and interior painting solutions, 
                            tailored for both homes and businesses across Melbourne, Australia.
                        </p>

                        {/* Features with divider line */}
                        <div className="bg-[#262219]/50 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-6 sm:py-8 space-y-6 border border-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-amber-500">Commercial Painting</h3>
                                    <p className="text-sm sm:text-base text-gray-300">Revitalizing commercial spaces with precision and professionalism</p>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-amber-500">Residential Painting</h3>
                                    <p className="text-sm sm:text-base text-gray-300">Turn your house into a home with our expert painting services</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                            {/* Free Consultation Button */}
                            <button className="group bg-amber-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full 
                                hover:bg-white hover:text-amber-500 transition-all duration-300 
                                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                relative overflow-hidden text-sm sm:text-base">
                                <span className="relative z-10">Free Consultation</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-300 origin-left"></div>
                            </button>

                            {/* Call Us Now Section */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <button className="group border-2 border-white text-white w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] rounded-full 
                                    hover:bg-white hover:text-black transition-all duration-300 
                                    transform hover:scale-105 backdrop-blur-sm
                                    relative overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center h-full">
                                        <FaPhone className="text-base sm:text-lg" />
                                    </span>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                        transition-transform duration-300 origin-left"></div>
                                </button>
                                
                                <div className="flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-400">Call Us Now</span>
                                    <span className="text-sm sm:text-base text-white font-medium">0413 709 050</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;