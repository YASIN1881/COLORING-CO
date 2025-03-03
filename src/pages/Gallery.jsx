import { useState, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaThLarge, FaTh, FaPlay } from "react-icons/fa";
import PropTypes from 'prop-types';
import WOW from 'wow.js';

// Custom hook for window resize
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
};

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function Gallery() {
  // State management
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [columnMode, setColumnMode] = useState("four"); // "three" or "four" columns
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Refs
  const modalRef = useRef(null);
  const size = useWindowSize();
  
  // Initialize animations
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
    
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      } else if (e.key === "ArrowLeft" && selectedImage) {
        navigateGallery(-1);
      } else if (e.key === "ArrowRight" && selectedImage) {
        navigateGallery(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedImage]);

  // Gallery categories
  const categories = [
    { id: "all", label: "All" },
    { id: "painting", label: "Painting" },
    { id: "design", label: "Design" },
    { id: "architectural", label: "Architectural" },
    { id: "renovation", label: "Renovation" }
  ];

  // Generate gallery items from 1 to 22
  const generateGalleryItems = () => {
    const items = [];
    for (let i = 1; i <= 22; i++) {
      // Determine if it's a video based on the file number
      // Files 4-9 and 22 are videos (.mp4)
      // Files 1-3 and 10-21 are images (.jpg)
      const isVideo = (i >= 4 && i <= 9) || i === 22;
      
      // Create the file path based on the file type
      const filePath = `/img/Gallery/${i}${isVideo ? '.mp4' : '.jpg'}`;
      // Fallback image for when loading fails
      const fallbackImagePath = `/img/placeholder.jpg`;
      
      items.push({
        id: i,
        // Assign categories randomly for demonstration
        category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
        image: filePath,
        isVideo: isVideo,
        fallbackImage: fallbackImagePath
      });
    }
    return items;
  };

  // Gallery images
  const galleryImages = generateGalleryItems();

  // Filter gallery images based on current filter
  const filteredImages = currentFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === currentFilter);

  // Open modal with selected image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    // Pause any videos that might be playing
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
      video.pause();
    });
    
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate between images in modal
  const navigateGallery = (direction) => {
    const currentImages = filteredImages;
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) {
      newIndex = currentImages.length - 1;
    } else if (newIndex >= currentImages.length) {
      newIndex = 0;
    }
    
    // Pause any videos that might be playing
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
      video.pause();
    });
    
    setCurrentIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  // Toggle column mode function
  const toggleColumnMode = (mode) => {
    setColumnMode(mode);
  };

  // Grid layout component
  const GridLayout = ({ images }) => {
    // Determine column count based on columnMode and screen size
    const getColumnsClass = () => {
      if (size.width < 640) {
        return 'grid-cols-1'; // Mobile: 1 column
      } else if (size.width < 1024) {
        return 'grid-cols-2'; // Tablet: 2 columns
      } else {
        return columnMode === 'three' ? 'grid-cols-3' : 'grid-cols-4';
      }
    };

    return (
      <div className={`grid ${getColumnsClass()} gap-4`}>
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-lg cursor-pointer bg-[#3D3A2D] shadow-md transform transition-transform duration-300 relative group"
            onClick={() => openModal(image, filteredImages.findIndex(img => img.id === image.id))}
          >
            <div className="aspect-w-1 aspect-h-1 group relative">
              {image.isVideo ? (
                <div className="w-full h-full relative bg-[#2A2520]">
                  {/* Video element for thumbnails */}
                  <video
                    src={image.image}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop={false}
                    controls={false}
                    preload="metadata"
                    onError={(e) => {
                      console.error(`Error loading video: ${image.image}`);
                      e.target.style.display = "none";
                    }}
                    onLoadedMetadata={(e) => {
                      // Set to first frame
                      e.target.currentTime = 0.1;
                    }}
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <FaPlay className="text-white ml-1" size={24} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-[#2A2520] flex items-center justify-center">
                  <img 
                    src={image.image} 
                    alt={`Gallery item ${image.id}`} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Error loading image: ${image.image}`);
                      e.target.src = image.fallbackImage;
                    }}
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            {/* Category badge */}
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              {categories.find(cat => cat.id === image.category)?.label || 'Uncategorized'}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  GridLayout.propTypes = {
    images: PropTypes.array.isRequired
  };

  return (
    <div className="min-h-screen bg-[#2E2A20]">
      <PageHeader title="Gallery" currentPage="Gallery" />
      
      {/* Main Gallery Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/img/page-header-bg-1-1.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="w-12 h-12 rounded-full border-4 border-[#3D3A2D] border-t-amber-500 animate-spin"></div>
            </div>
          )}
          
          {/* Gallery content */}
          {!isLoading && (
            <>
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setCurrentFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${currentFilter === category.id 
                          ? 'bg-amber-500 text-[#2E2A20]' 
                          : 'bg-[#3D3A2D] text-[#F4EDE4] hover:bg-[#4A4636]'
                        }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                
                {/* Column mode toggle */}
                <div className="bg-[#3D3A2D] rounded-full p-1 flex">
                  <button 
                    className={`p-2 rounded-full transition-all duration-300 ${columnMode === 'three' ? 'bg-amber-500 text-[#2E2A20]' : 'text-[#F4EDE4]'}`}
                    onClick={() => toggleColumnMode('three')}
                    aria-label="3 columns view"
                  >
                    <FaThLarge size={18} />
                  </button>
                  <button 
                    className={`p-2 rounded-full transition-all duration-300 ${columnMode === 'four' ? 'bg-amber-500 text-[#2E2A20]' : 'text-[#F4EDE4]'}`}
                    onClick={() => toggleColumnMode('four')}
                    aria-label="4 columns view"
                  >
                    <FaTh size={18} />
                  </button>
                </div>
              </div>
              
              {/* Gallery display */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filteredImages.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-[#F4EDE4]/70 text-lg">No images found for this category.</p>
                  </div>
                ) : (
                  <GridLayout images={filteredImages} />
                )}
              </motion.div>
            </>
          )}
        </div>
      </section>
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeModal}
            ref={modalRef}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors duration-300 z-30"
              onClick={closeModal}
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-amber-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none z-30"
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery(-1);
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft size={16} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-amber-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none z-30"
              onClick={(e) => {
                e.stopPropagation();
                navigateGallery(1);
              }}
              aria-label="Next image"
            >
              <FaChevronRight size={16} />
            </button>
            
            {/* Image/Video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center p-4 bg-[#1A1A1A]/40"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.isVideo ? (
                <video
                  key={`modal-video-${selectedImage.id}`}
                  src={selectedImage.image}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-full rounded-lg"
                  onError={(e) => {
                    console.error(`Error loading video in modal: ${selectedImage.image}`);
                    e.target.parentNode.innerHTML = `<div class="flex flex-col items-center justify-center text-white">
                      <p>Video could not be loaded</p>
                    </div>`;
                  }}
                />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={`Gallery item ${selectedImage.id}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onError={(e) => {
                    console.error(`Error loading image in modal: ${selectedImage.image}`);
                    e.target.src = selectedImage.fallbackImage;
                  }}
                />
              )}
            </motion.div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full">
              <span>{categories.find(cat => cat.id === selectedImage.category)?.label || 'Uncategorized'}</span>
            </div>
            
            {/* Counter indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom styles for aspect ratio support */}
      <style>{`
        .aspect-w-1 {
          position: relative;
          padding-bottom: 100%;
        }
        
        .aspect-w-1 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
} 