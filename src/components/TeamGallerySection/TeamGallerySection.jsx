import { Facebook, Instagram, Linkedin } from 'lucide-react'
import PropTypes from 'prop-types'

function TeamGallerySection({ topGalleryImages, teamMembers }) {
  return (
    <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
        {/* Top Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {topGalleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square group cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                {/* Instagram Icon Container */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className="absolute -inset-1 rounded-full border border-[#F97316]/30"></div>
                    {/* Icon Circle */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section Header with gradient border */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

          <div className="py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F97316] rotate-45"></div>
                  <span className="text-[#F97316] text-xs sm:text-sm font-medium tracking-wide">OUR TEAM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white">Meet the Expert Team</h2>
              </div>
              <button className="px-4 sm:px-6 py-2 sm:py-2.5 border border-white/20 rounded-full text-white text-xs sm:text-sm hover:bg-[#F97316] hover:border-[#F97316] transition-colors">
                View All Team
              </button>
            </div>
          </div>

          {/* Bottom gradient border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        </div>

        {/* Team Members Grid */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden group"
              >
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                />

                {/* Default Info Box (Always Visible) */}
                <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 bg-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 shadow-lg">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
                </div>

                {/* Hover Overlay with Social Icons and Info */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Social Icons - Left Side */}
                  <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex flex-col gap-2 sm:gap-3">
                    {member.social?.facebook && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] group/icon transition-colors duration-200">
                        <Facebook 
                          size={16}
                          className="text-gray-600 group-hover/icon:text-white transition-colors duration-200"
                        />
                      </div>
                    )}
                    {member.social?.instagram && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] group/icon transition-colors duration-200">
                        <Instagram 
                          size={16}
                          className="text-gray-600 group-hover/icon:text-white transition-colors duration-200"
                        />
                      </div>
                    )}
                    {member.social?.linkedin && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#F97316] group/icon transition-colors duration-200">
                        <Linkedin 
                          size={16}
                          className="text-gray-600 group-hover/icon:text-white transition-colors duration-200"
                        />
                      </div>
                    )}
                  </div>

                  {/* Member Info - Right Bottom (On Hover) */}
                  <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 bg-[#F97316] rounded-lg py-2 sm:py-3 px-3 sm:px-4">
                    <h3 className="font-semibold text-base sm:text-lg text-white">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-white/80">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

TeamGallerySection.propTypes = {
  topGalleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
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