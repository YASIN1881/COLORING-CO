import { motion } from 'framer-motion'
import { User2, MessageSquare } from 'lucide-react'

function BlogSection({ blogs }) {
  return (
    <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px]">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-[#F97316] rotate-45"></div>
            <span className="text-[#F97316] text-xs sm:text-sm font-medium tracking-wide">LATEST BLOG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white">Our Latest Blog & News</h2>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {blogs.slice(0, 2).map((blog, index) => (
            <div key={index} className="w-full md:w-1/2 max-w-[500px] bg-white rounded-xl sm:rounded-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#F97316] text-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                  <div className="text-lg sm:text-xl font-bold">{blog.date.day}</div>
                  <div className="text-xs sm:text-sm uppercase">{blog.date.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-[#2E2A20] text-lg sm:text-xl font-semibold mb-3 sm:mb-4 hover:text-[#F97316] transition-colors duration-300 cursor-pointer">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-center gap-6 sm:gap-8 text-gray-600 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 group">
                    <User2 size={16} className="text-[#F97316] stroke-[2.5]" />
                    <span>by</span>
                    <span className="group-hover:text-[#F97316] transition-colors duration-300 cursor-pointer font-medium">
                      {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 group hover:text-[#F97316] transition-colors duration-300 cursor-pointer">
                    <MessageSquare size={16} className="text-[#F97316] stroke-[2.5]" />
                    <span className="font-medium">{blog.comments}</span>
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

export default BlogSection; 