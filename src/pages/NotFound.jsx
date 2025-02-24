import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPaintRoller, FaPalette, FaRulerCombined, FaHome, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  const [activeService, setActiveService] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const services = [
    {
      icon: <FaPaintRoller className="w-full h-full" />,
      name: "Professional Painting",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaPalette className="w-full h-full" />,
      name: "Interior & Exterior Design",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaRulerCombined className="w-full h-full" />,
      name: "Architectural Design",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaHome className="w-full h-full" />,
      name: "Renovation",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  // Animation on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#2E2A20] flex flex-col items-center justify-center relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23df9e42' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 404 Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none">
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-transparent bg-clip-text">4</span>
              <span className="relative inline-block">
                <span className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5,
                      ease: "easeInOut" 
                    }}
                    className="w-3/4 h-3/4"
                  >
                    {services[activeService].icon}
                  </motion.div>
                </span>
                <span className="opacity-0">0</span>
              </span>
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-transparent bg-clip-text">4</span>
            </h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4"
            >
              Oops! Page Not Found
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            >
              It seems you&apos;ve ventured into uncharted territory. Let us guide you back to our professional services.
            </motion.p>
          </motion.div>

          {/* Animated Service Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl overflow-hidden group ${
                  index === activeService ? 'ring-2 ring-amber-500 ring-offset-4 ring-offset-[#2E2A20]' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 aspect-square`}>
                  <div className="relative h-full w-full">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center text-white"
                      animate={index === activeService ? { 
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ 
                        repeat: index === activeService ? Infinity : 0, 
                        duration: 2,
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16">
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-center text-sm font-medium">{service.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Paint Drips Animation */}
          <div className="relative h-20 mb-12 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 bg-gradient-to-b from-amber-500 to-amber-600 w-2 md:w-3 rounded-b-full"
                style={{
                  left: `${10 + (i * 10)}%`,
                  height: `${Math.random() * 60 + 40}%`,
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.8,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 
                rounded-full hover:bg-white hover:text-amber-500 transition-all duration-300"
            >
              <span>Back to Home</span>
              <FaArrowRight />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#262219] text-white px-8 py-4 
                rounded-full hover:bg-amber-500 transition-all duration-300 border border-amber-500/30"
            >
              <span>Explore Our Services</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[url('/img/pattern-1-1.png')] bg-cover"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[url('/img/pattern-1-1.png')] bg-cover"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default NotFound; 