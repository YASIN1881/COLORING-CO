import PageHeader from "../components/PageHeader/PageHeader";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

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

    return (
        <div className="min-h-screen bg-[#F4EDE4]">
            <PageHeader title="Contact" currentPage="Contact" />
            
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Mailing Address Card */}
                        <a 
                            href="https://maps.google.com/?q=Melbourne,Australia" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#E4DACC] rounded-xl p-8 shadow-lg hover:bg-white transition-all duration-500 group
                                transform hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-start gap-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center
                                            group-hover:scale-110 transition-all duration-500">
                                            <MdLocationOn className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#2E2A20]">Mailing Address</h3>
                                    <p className="text-gray-600 group-hover:text-amber-500 transition-colors duration-300">Melbourne</p>
                                    <p className="text-gray-600 group-hover:text-amber-500 transition-colors duration-300">Australia</p>
                                </div>
                            </div>
                        </a>

                        {/* Quick Contact Card */}
                        <a 
                            href="tel:0413709050" 
                            className="block bg-[#E4DACC] rounded-xl p-8 shadow-lg hover:bg-white transition-all duration-500 group
                                transform hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-start gap-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center
                                            group-hover:scale-110 transition-all duration-500">
                                            <MdPhone className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#2E2A20]">Quick Contact</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-gray-600 group-hover:text-amber-500 transition-colors duration-300">0413709050</p>
                                        <p className="text-gray-600 group-hover:text-amber-500 transition-colors duration-300">+61402728444</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Support Email Card */}
                        <a 
                            href="mailto:info@coloringco.com.au"
                            className="block bg-[#E4DACC] rounded-xl p-8 shadow-lg hover:bg-white transition-all duration-500 group
                                transform hover:scale-105 cursor-pointer"
                        >
                            <div className="flex items-start gap-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center
                                            group-hover:scale-110 transition-all duration-500">
                                            <MdEmail className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#2E2A20]">Support Email</h3>
                                    <p className="text-gray-600 group-hover:text-amber-500 transition-colors duration-300">info@coloringco.com.au</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:col-span-9 bg-[#E4DACC] relative overflow-hidden rounded-xl">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-20"
                            style={{ backgroundImage: 'url(/img/why-chose-us.png)' }}
                        />

                        {/* Form Content */}
                        <div className="relative p-10">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Contact Image */}
                                <div className="relative h-full">
                                    <img 
                                        src="/img/testi-3-1.webp" 
                                        alt="Contact Us" 
                                        className="rounded-xl w-full h-full object-cover shadow-lg"
                                    />
                                </div>

                                {/* Contact Form */}
                                <div>
                                    <h2 className="text-3xl font-bold text-[#2E2A20] mb-8">Send Us Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-lg border border-[#2E2A20]/20 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                            transition-all duration-300 bg-white/80 text-[#2E2A20] placeholder-[#2E2A20]/70"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-lg border border-[#2E2A20]/20 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                            transition-all duration-300 bg-white/80 text-[#2E2A20] placeholder-[#2E2A20]/70"
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Select Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-lg border border-[#2E2A20]/20 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                            transition-all duration-300 bg-white/80 text-[#2E2A20] placeholder-[#2E2A20]/70"
                                        />
                                        <textarea
                                            name="message"
                                            placeholder="Write A Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-6 py-4 rounded-lg border border-[#2E2A20]/20 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 
                                            transition-all duration-300 bg-white/80 text-[#2E2A20] placeholder-[#2E2A20]/70 resize-none"
                                        />
                                        <button
                                            type="submit"
                                            className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                                                hover:bg-white hover:text-amber-500 transition-all duration-300 
                                                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                                                w-full justify-center text-lg font-medium
                                                relative overflow-hidden"
                                        >
                                            <span className="relative z-10">Get In Touch</span>
                                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                                                transition-transform duration-300 origin-left"></div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 