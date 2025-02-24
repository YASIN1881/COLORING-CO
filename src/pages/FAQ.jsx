import PageHeader from "../components/PageHeader/PageHeader";
import FAQ from "../components/FAQ/FAQ";
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#2E2A20]">
            <PageHeader title="FAQ" currentPage="FAQ" />
            
            {/* Quote Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-10" 
                        style={{ 
                            backgroundImage: 'linear-gradient(30deg, #F4EDE4 12%, transparent 12.5%, transparent 87%, #F4EDE4 87.5%, #F4EDE4), linear-gradient(150deg, #F4EDE4 12%, transparent 12.5%, transparent 87%, #F4EDE4 87.5%, #F4EDE4), linear-gradient(30deg, #F4EDE4 12%, transparent 12.5%, transparent 87%, #F4EDE4 87.5%, #F4EDE4), linear-gradient(150deg, #F4EDE4 12%, transparent 12.5%, transparent 87%, #F4EDE4 87.5%, #F4EDE4), linear-gradient(60deg, #F4EDE477 25%, transparent 25.5%, transparent 75%, #F4EDE477 75%, #F4EDE477), linear-gradient(60deg, #F4EDE477 25%, transparent 25.5%, transparent 75%, #F4EDE477 75%, #F4EDE477)',
                            backgroundSize: '80px 140px',
                            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
                        }}>
                </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container mx-auto px-4 relative z-10"
                >
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FaQuoteRight className="w-16 h-16 text-amber-500/20 mx-auto" />
                        </motion.div>
                        <motion.blockquote 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed"
                        >
                            &ldquo;We believe in transforming spaces with precision and creativity. Our comprehensive 
                            services are designed to bring your vision to life while exceeding your expectations.&rdquo;
                        </motion.blockquote>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center justify-center gap-4"
                        >
                            <span className="w-12 h-0.5 bg-amber-500/30"></span>
                            <p className="text-amber-500 font-semibold">COLORING CO TEAM</p>
                            <span className="w-12 h-0.5 bg-amber-500/30"></span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 
                    bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
            </section>

            {/* FAQ Section with Background Pattern */}
            <div className="relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-5" 
                        style={{ 
                            backgroundImage: 'radial-gradient(#F4EDE4 2px, transparent 2px)',
                            backgroundSize: '30px 30px'
                        }}>
                    </div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <FAQ />
                </motion.div>
            </div>

            {/* Bottom Decorative Pattern */}
            <div className="relative h-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #F4EDE4 25%, transparent 25%), linear-gradient(225deg, #F4EDE4 25%, transparent 25%), linear-gradient(45deg, #F4EDE4 25%, transparent 25%), linear-gradient(315deg, #F4EDE4 25%, transparent 25%)',
                        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                        backgroundSize: '20px 20px',
                        backgroundRepeat: 'repeat'
                    }}>
                </div>
            </div>
        </div>
    );
} 