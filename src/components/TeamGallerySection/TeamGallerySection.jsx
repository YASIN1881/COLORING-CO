import { Facebook, Instagram, Linkedin } from 'lucide-react'
import PropTypes from 'prop-types'
import './TeamGallerySection.css'

function TeamGallerySection({ teamMembers }) {
  return (
    <div className="w-full bg-[#2e2a20] py-16 md:py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/img/service-bg-3-1.png" 
          alt="background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block perspective-text">
            <div className="border-2 border-amber-500 px-6 py-2 rounded-full mb-4 backdrop-blur-md bg-black/30
              transform hover:scale-105 transition-all duration-300 cursor-default">
              <p className="text-amber-500 font-semibold tracking-wider text-sm sm:text-base uppercase">
                Leadership Team
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 perspective-text">
            <span className="block text-white mb-2 transform hover:scale-105 transition-all duration-300">
              Meet The Experts Behind
            </span>
            <span className="block bg-gradient-to-r from-amber-500 to-amber-600 text-transparent bg-clip-text transform hover:scale-105 transition-all duration-300">
              Our Success Story
            </span>
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="team-member-card group relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  {/* Role Badge */}
                  <div className="inline-block mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      {member.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-lg">
                    {member.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm sm:text-base mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 drop-shadow-md">
                    {index === 0 ? 
                      "Leading our vision with expertise in both commercial and residential painting services." :
                      "Bringing creative excellence to every residential and commercial painting project."}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {member.social?.facebook && (
                      <div className="social-icon w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border border-white/20 hover:bg-amber-500 transition-all duration-300">
                        <Facebook size={18} className="text-white" />
                      </div>
                    )}
                    {member.social?.instagram && (
                      <div className="social-icon w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border border-white/20 hover:bg-amber-500 transition-all duration-300">
                        <Instagram size={18} className="text-white" />
                      </div>
                    )}
                    {member.social?.linkedin && (
                      <div className="social-icon w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border border-white/20 hover:bg-amber-500 transition-all duration-300">
                        <Linkedin size={18} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

TeamGallerySection.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      social: PropTypes.shape({
        facebook: PropTypes.bool,
        instagram: PropTypes.bool,
        linkedin: PropTypes.bool
      })
    })
  ).isRequired
}

export default TeamGallerySection;