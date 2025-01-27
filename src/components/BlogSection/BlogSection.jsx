import { motion } from 'framer-motion'
import { User2, MessageSquare } from 'lucide-react'
import PropTypes from 'prop-types'

function BlogSection({ blogs }) {
  return (
    <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <img 
              src="/FIVEICON.png" 
              alt="section icon" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-amber-500 text-sm sm:text-base font-medium tracking-wide uppercase">Latest Blog</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Our Latest Blog & News
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Stay updated with our latest insights, industry trends, and expert tips through our blog posts
          </p>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {blogs.slice(0, 2).map((blog, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} 
              className="w-full md:w-1/2 max-w-[500px] bg-white rounded-xl sm:rounded-2xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-amber-500 text-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                  <div className="text-lg sm:text-xl font-bold">{blog.date.day}</div>
                  <div className="text-xs sm:text-sm uppercase">{blog.date.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="relative text-[#2E2A20] text-lg sm:text-xl font-semibold mb-3 sm:mb-4 cursor-pointer group">
                  <div className="relative inline-block transition-colors duration-500 group-hover:text-amber-500">
                    {blog.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6 sm:gap-8 text-gray-600 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 group/author cursor-pointer">
                    <User2 size={16} className="text-amber-500 stroke-[2.5] transition-transform duration-300 group-hover/author:scale-110" />
                    <span>by</span>
                    <span className="relative font-medium">
                      <span className="relative z-10 transition-colors duration-300 group-hover/author:text-amber-500">{blog.author}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/author:w-full"></span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 group/comments cursor-pointer">
                    <MessageSquare size={16} className="text-amber-500 stroke-[2.5] transition-transform duration-300 group-hover/comments:scale-110" />
                    <span className="relative font-medium">
                      <span className="relative z-10 transition-colors duration-300 group-hover/comments:text-amber-500">{blog.comments}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover/comments:w-full"></span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

BlogSection.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.shape({
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired
      }).isRequired,
      author: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired
    })
  ).isRequired
}

export default BlogSection; 