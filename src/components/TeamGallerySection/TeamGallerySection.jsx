import { Facebook, Instagram, Linkedin } from 'lucide-react'
import PropTypes from 'prop-types'
import './TeamGallerySection.css'

function TeamGallerySection({ topGalleryImages, teamMembers }) {
  return (
    <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
        {/* Top Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {topGalleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square group cursor-pointer gallery-image"
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
                  <div className="social-icon w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section Header with gradient border */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

          <div className="py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col">
                {/* Badge similar to Services */}
                <div className="perspective-text">
                  <div className="border-2 border-amber-500 px-5 py-1.5 rounded-full mb-3 backdrop-blur-md bg-black/30
                    transform hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    <p className="text-amber-500 font-semibold tracking-wider text-base">
                      OUR EXPERT TEAM
                    </p>
                  </div>
                </div>
                
                {/* Main heading with gradient text */}
                <h2 className="text-4xl md:text-5xl font-bold mt-2 perspective-text">
                  <span className="block text-white transform hover:scale-105 transition-all duration-300">
                    Meet Our Team Members
                  </span>
                </h2>
              </div>

              {/* Button styled like Services buttons */}
              <button className="group bg-amber-500 text-white px-10 py-4 rounded-full 
                hover:bg-white hover:text-amber-500 transition-all duration-300 
                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                relative overflow-hidden min-w-[200px]">
                <span className="relative z-10">View All Team</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Bottom gradient border */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        </div>

        {/* Team Members Grid */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member-card relative rounded-xl sm:rounded-2xl overflow-hidden group transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#F97316]/20"
              >
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default Info Box (Always Visible) */}
                <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 bg-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 shadow-lg transform group-hover:translate-x-[200%] transition-transform duration-500">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
                </div>

                {/* Hover Overlay with Social Icons and Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Social Icons - Left Side */}
                  <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex flex-col gap-2 sm:gap-3 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 delay-100">
                    {member.social?.facebook && (
                      <div className="social-icon w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border-white/20">
                        <Facebook 
                          size={16}
                          className="text-white"
                        />
                      </div>
                    )}
                    {member.social?.instagram && (
                      <div className="social-icon w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border-white/20">
                        <Instagram 
                          size={16}
                          className="text-white"
                        />
                      </div>
                    )}
                    {member.social?.linkedin && (
                      <div className="social-icon w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer border-white/20">
                        <Linkedin 
                          size={16}
                          className="text-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Member Info - Right Bottom (On Hover) */}
                  <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg py-2 sm:py-3 px-3 sm:px-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200 shadow-lg shadow-amber-500/20">
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