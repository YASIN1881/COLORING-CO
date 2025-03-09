import PageHeader from "../components/PageHeader/PageHeader";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WOW from 'wow.js';
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const contactInfo = [
        {
            icon: <MdLocationOn className="text-white text-2xl" />,
            title: "Mailing Address",
            details: ["Melbourne", "Australia"],
            link: "https://maps.google.com/?q=Melbourne,Australia",
            delay: 0.1
        },
        {
            icon: <MdPhone className="text-white text-2xl" />,
            title: "Quick Contact",
            details: ["0413709050", "+61402728444"],
            link: "tel:0413709050",
            delay: 0.2
        },
        {
            icon: <MdEmail className="text-white text-2xl" />,
            title: "Support Email",
            details: ["info@coloringco.com.au"],
            link: "mailto:quote@coloringco.com.au",
            delay: 0.3
        }
    ];

    return (
        <div className="bg-[#2E2A20] min-h-screen">
            <PageHeader title="Contact" currentPage="Contact" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={index}
                            href={info.link}
                            target={info.title === "Mailing Address" ? "_blank" : "_self"}
                            rel={info.title === "Mailing Address" ? "noopener noreferrer" : ""}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: info.delay }}
                            className="group bg-[#262219] rounded-[2rem] rounded-br-none p-6 sm:p-8 border border-amber-500/10
                                hover:border-amber-500/30 transition-all duration-500 transform hover:scale-105"
                        >
                            <div className="flex items-start gap-4 sm:gap-6">
                                <div className="relative flex-shrink-0">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center
                                        group-hover:bg-amber-500 transition-all duration-500">
                                        {info.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-sm sm:text-base text-gray-400 group-hover:text-amber-500 
                                            transition-colors duration-300">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="relative">
                    <div className="relative bg-[#262219] rounded-[2rem] sm:rounded-[2.5rem] rounded-br-none border border-amber-500/10
                        overflow-hidden p-6 sm:p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
                            {/* Left Side - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6 sm:space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 bg-amber-500/10 px-3 sm:px-4 py-2 rounded-full">
                                    <img src="/FIVEICON.png" alt="Coloring co" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                                    <span className="text-amber-500 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                                        GET IN TOUCH
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Let&apos;s Discuss Your Project
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#2E2A20] border border-amber-500/10
                                                focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                                transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#2E2A20] border border-amber-500/10
                                                focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                                transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                                        />
                                    </div>
                                    <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#2E2A20] border border-amber-500/10
                                                focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                                transition-all duration-300 text-white placeholder-gray-400 text-sm sm:text-base"
                                        />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#2E2A20] border border-amber-500/10
                                            focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                            transition-all duration-300 text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                                    />
                                    <button
                                        type="submit"
                                        className="group bg-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full 
                                            hover:bg-white hover:text-amber-500 transition-all duration-300 
                                            transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                            w-full sm:w-auto text-sm sm:text-base font-medium
                                            relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Send Message
                                            <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 
                                                group-hover:-translate-y-1 transition-transform duration-300" />
                                        </span>
                                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                            transition-transform duration-300 origin-left"></div>
                                    </button>
                                </form>
                            </motion.div>

                            {/* Right Side - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] rounded-br-none overflow-hidden group
                                    before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 
                                    before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 
                                    group-hover:before:opacity-100">
                                    <img 
                                        src="/img/contact-us.jpg"
                                        alt="Contact Us"
                                        className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transform transition-transform 
                                            duration-700 group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-10 -right-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 
                                    bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="mt-12 sm:mt-16 lg:mt-20 relative">
                    <div className="relative bg-[#262219] rounded-[2rem] sm:rounded-[2.5rem] rounded-br-none border border-amber-500/10
                        overflow-hidden">
                        {/* Section Title */}
                        <div className="absolute top-8 left-8 z-10 bg-[#262219]/90 p-4 rounded-2xl border border-amber-500/10
                            backdrop-blur-sm">
                            <div className="inline-flex items-center gap-2 bg-amber-500/10 px-3 sm:px-4 py-2 rounded-full mb-3">
                                <MdLocationOn className="text-amber-500 w-5 h-5" />
                                <span className="text-amber-500 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                                    FIND US ON MAP
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Our Location</h3>
                        </div>

                        {/* Map Container */}
                        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890375192!3d-37.97123689364846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1708531659840!5m2!1sen!2sau"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps - Our Location"
                            ></iframe>

                            {/* Overlay for consistent styling */}
                            <div className="absolute inset-0 pointer-events-none border border-amber-500/10 
                                rounded-[2rem] sm:rounded-[2.5rem] rounded-br-none"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 
                            bg-[url('/img/pattern-1-1.png')] bg-cover opacity-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
} 