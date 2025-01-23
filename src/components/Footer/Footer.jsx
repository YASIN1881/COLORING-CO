import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-[#2E2A20] pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 border-b border-gray-800 pb-16">
          {/* Logo */}
          {/* Your logo component here */}
          
          {/* Newsletter */}
          <div className="w-full lg:w-[600px] relative">
            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-36 py-4 rounded-full bg-white text-gray-800 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F97316] text-white px-6 py-3 rounded-full hover:bg-[#E65A00] transition-colors duration-300">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 lg:mt-0">
            <a href="#" className="social-icon w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#F97316] hover:border-[#F97316] transition-all duration-300">
              <SlSocialFacebook size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#F97316] hover:border-[#F97316] transition-all duration-300">
              <TfiTwitter size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#F97316] hover:border-[#F97316] transition-all duration-300">
              <SlSocialInstagram size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-[#F97316] hover:border-[#F97316] transition-all duration-300">
              <AiOutlineYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* About Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F97316]"></span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem Ipsum Dolor
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#F97316] hover:text-white border border-[#F97316] rounded-full px-6 py-3 transition-all duration-300 group"
            >
              Get Consultant
              <HiArrowNarrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Explore Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F97316]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Contact Us',
                'Our Team',
                'Our Services',
                'Latest Projects',
                'Latest News'
              ].map((item) => (
                <li key={item} className="text-gray-400">
                  <a href="#" className="hover:text-[#F97316] transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-[#F97316]">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F97316]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Room Wallpapers',
                'Wall Painting',
                'Wall Sheets',
                'Outdoor Design',
                'PVC Panels',
                'Interior Designing'
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  <a href="#" className="hover:text-[#F97316] transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-[#F97316]">•</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#F97316]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoLocationSharp size={20} className="text-[#F97316] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  901 N Pitt Str., Suite 170 Alexandria, USA
                </span>
              </li>
              <li>
                <a href="tel:(406)555-0120" className="flex items-center gap-3 text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                  <BiSolidPhoneCall size={20} className="text-[#F97316] flex-shrink-0" />
                  (406) 555-0120
                </a>
              </li>
              <li>
                <a href="mailto:info@colorco.com" className="flex items-center gap-3 text-gray-400 hover:text-[#F97316] transition-colors duration-300">
                  <MdEmail size={20} className="text-[#F97316] flex-shrink-0" />
                  info@colorco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-500">© Copyright 2024 By Colorco.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 