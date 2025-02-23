// import './NavBar.css';
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX, HiArrowNarrowRight } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ to, children, className = "", isActive = false }) => (
    <Link
        to={to}
        className={`relative text-white transition-colors duration-500 
        ${isActive ? 'text-amber-500' : 'hover:text-amber-500'}
        before:content-[''] before:absolute before:bottom-0 before:left-0 
        before:w-0 before:h-[2px] before:bg-amber-500 before:transition-all before:duration-500
        hover:before:w-full lg:hover:before:w-full 
        ${isActive ? 'before:w-full' : 'before:w-0'}
        ${className}`}
    >
        {children}
    </Link>
);

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isActive: PropTypes.bool
};

const AppointmentButton = () => (
    <div className="hidden sm:flex items-center relative group">
        <div className="relative w-[350px] h-[100px] overflow-visible">
            <div className="absolute inset-0 bg-[#df9e42] rounded-l-[50px]" style={{ clipPath: 'path("M50,0 H500 V100 H50 A50,50 0 0,1 0,50 A50,50 0 0,1 50,0 Z")' }}>
                <div className="absolute inset-0 bg-[url('/img/menu-bg.png')] bg-repeat opacity-30 mix-blend-multiply" />
            </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 sm:pl-6 md:pl-8 lg:pl-8">
            <Link
                to="/contact"
                className="group flex items-center bg-[#1B1D17] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full 
                    hover:bg-opacity-80 transition-all duration-300 
                    transform hover:scale-105 shadow-lg
                    whitespace-nowrap"
            >
                <span className="relative z-10 flex items-center">
                    Book Appointment
                </span>
            </Link>
        </div>
    </div>
);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [expandedMobileItems, setExpandedMobileItems] = useState([]);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (item) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setHoveredItem(null);
        }, 200); // Delay before hiding the submenu
        setTimeoutId(id);
    };

    const toggleMobileSubmenu = (itemText) => {
        setExpandedMobileItems(prev => 
            prev.includes(itemText) 
                ? prev.filter(item => item !== itemText)
                : [...prev, itemText]
        );
    };

    const isActiveLink = (href) => location.pathname === href;
    const isActiveParent = (subItems) => {
        return subItems?.some(item => location.pathname === item.href);
    };

    const menuItems = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about-us" },
        { 
            text: "Services", 
            href: "#",
            isDropdown: true,
            subItems: [
                { text: "Residential Painting", href: "/services/residential" },
                { text: "Commercial Painting", href: "/services/commercial" },
                { text: "House Renovation", href: "/services/renovation" },
                { text: "Spray Painting", href: "/services/spray" }
            ]
        },
        { text: "Blog", href: "/blog" },
        { text: "FAQ", href: "/faq" },
        { text: "Contact", href: "/contact" },
    ];

    return (
        <nav className="py-12 relative bg-[#2E2A20]">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center gap-12">
                    {/* LOGO */}
                    <Link to="/" className="relative group">
                        {/* Elegant Glow Effect */}
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 
                            opacity-0 group-hover:opacity-40 blur-md transition-all duration-700"></div>
                        
                        {/* Logo Container */}
                        <div className="relative p-2 rounded-full overflow-hidden animate-subtle-bounce">
                            <img 
                                src="/FIVEICON.png" 
                                alt="Coloring co" 
                                className="h-12 cursor-pointer transform transition-all duration-500 
                                group-hover:scale-110 group-hover:brightness-110
                                hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" 
                            />
                            
                            {/* Subtle Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 
                                group-hover:opacity-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                        </div>
                    </Link>

                    <div className="hidden xl:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative py-4 group"
                                onMouseEnter={() => handleMouseEnter(item.text)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.isDropdown ? (
                                    <div className={`relative text-white cursor-pointer transition-colors duration-500
                                        ${(isActiveParent(item.subItems) || hoveredItem === item.text) ? 'text-amber-500' : ''}
                                        group-hover:text-amber-500
                                        before:content-[''] before:absolute before:bottom-0 before:left-0 
                                        before:w-0 before:h-[2px] before:bg-amber-500 before:transition-all before:duration-500
                                        group-hover:before:w-full lg:group-hover:before:w-full
                                        ${isActiveParent(item.subItems) ? 'before:w-full' : 'before:w-0'}`}
                                    >
                                        {item.text}
                                    </div>
                                ) : (
                                    <NavLink to={item.href} isActive={isActiveLink(item.href)}>
                                        {item.text}
                                    </NavLink>
                                )}
                                {item.subItems && hoveredItem === item.text && (
                                    <div
                                        className="absolute left-0 mt-2 w-48 bg-[#2E2A20] shadow-lg z-10 p-3
                                        animate-slideDown origin-top"
                                        onMouseEnter={() => handleMouseEnter(item.text)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item.subItems.map((subItem, subIndex) => (
                                            <div
                                                key={subIndex}
                                                className="relative group/item flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 
                                                    group-hover/item:opacity-100 transition-opacity duration-300"
                                                />
                                                <NavLink
                                                    to={subItem.href}
                                                    isActive={isActiveLink(subItem.href)}
                                                    className="block px-4 py-2 text-sm hover:bg-[#F4EDE4] hover:text-[#2E2A20]
                                                    transition-all duration-300 rounded-sm flex-1"
                                                >
                                                    {subItem.text}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* AppointmentButton with hamburger menu for tablet and desktop */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden sm:flex items-center">
                    <AppointmentButton />
                    <button
                        className="p-2 xl:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
                        onClick={toggleMenu}
                    >
                        <HiMenu className="w-7 h-7 text-white" />
                    </button>
                </div>

                {/* Mobile-only hamburger menu */}
                <div className="flex items-center sm:hidden">
                    <button
                        className="p-2 z-10"
                        onClick={toggleMenu}
                    >
                        <HiMenu className="w-7 h-7 text-white" />
                    </button>
                </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
                    <div className="fixed left-0 top-0 w-64 h-full bg-zinc-800 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
                        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
                            {/* LOGO */}
                            <HiX className="text-white w-6 h-6 cursor-pointer" onClick={toggleMenu} />
                        </div>
                        <div className="flex flex-col">
                            {menuItems.map((item, index) => (
                                <div key={index} className="relative">
                                    {item.isDropdown ? (
                                        <>
                                            <div 
                                                className={`text-white py-3 px-4 border-b border-zinc-700 
                                                flex justify-between items-center cursor-pointer
                                                ${isActiveParent(item.subItems) ? 'text-amber-500' : ''}`}
                                                onClick={() => toggleMobileSubmenu(item.text)}
                                            >
                                                {item.text}
                                                <IoIosArrowForward 
                                                    className={`text-amber-500 transition-transform duration-300
                                                    ${expandedMobileItems.includes(item.text) ? 'rotate-90' : ''}`}
                                                />
                                            </div>
                                            <div 
                                                className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out
                                                ${expandedMobileItems.includes(item.text) 
                                                    ? 'max-h-[500px] opacity-100' 
                                                    : 'max-h-0 opacity-0'}`}
                                            >
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <NavLink
                                                        key={subIndex}
                                                        to={subItem.href}
                                                        isActive={isActiveLink(subItem.href)}
                                                        className="py-2 px-8 flex items-center gap-2"
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full bg-amber-500 
                                                            ${isActiveLink(subItem.href) ? 'opacity-100' : 'opacity-0'}`}
                                                        />
                                                        {subItem.text}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <NavLink 
                                            to={item.href}
                                            isActive={isActiveLink(item.href)}
                                            className="py-3 px-4 border-b border-zinc-700 flex justify-between items-center"
                                        >
                                            {item.text}
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 px-4">
                            <ContactInfo icon={<MdEmail />} text="needhelp@colorco.com" />
                            <ContactInfo icon={<MdPhone />} text="666 888 0000" />
                            <div className="flex gap-4 mt-4">
                                <SocialIcon icon={<FaFacebookF />} />
                                <SocialIcon icon={<FaTwitter />} />
                                <SocialIcon icon={<FaInstagram />} />
                                <SocialIcon icon={<FaYoutube />} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <style>
                {`
                @keyframes subtle-bounce {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-2px);
                    }
                }

                .animate-subtle-bounce {
                    animation: subtle-bounce 2s ease-in-out infinite;
                }
                `}
            </style>
            </div>
        </nav>
    );
}

const MenuLink = ({ to, text }) => (
    <Link
        to={to}
        className="text-white hover:text-amber-500 py-3 px-4 border-b border-zinc-700 flex justify-between items-center"
    >
        {text}
        <IoIosArrowForward className="text-amber-500" />
    </Link>
);

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-white mb-2">
        {icon}
        <span>{text}</span>
    </div>
);

ContactInfo.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired
};

const SocialIcon = ({ icon }) => (
    <a 
        href="#" 
        className="text-white hover:text-amber-500"
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
    </a>
);

SocialIcon.propTypes = {
    icon: PropTypes.element.isRequired
};