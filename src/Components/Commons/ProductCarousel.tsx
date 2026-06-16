import { useRef, useState, useEffect } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { SliderCard } from './SliderCard';

const Carousel = (ReactMultiCarousel as any).default ?? ReactMultiCarousel;

export interface CarouselProduct {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  video?: string;
  poster?: string; // Add poster image
}

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export function ProductCarousel({ products }: { products: CarouselProduct[] }) {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayPaused, setAutoPlayPaused] = useState(false);

  if (products.length === 0) {
    return null;
  }

  // Pause autoplay on user interaction
  const handlePrevious = () => {
    setAutoPlayPaused(true);
    carouselRef.current?.previous();
    setTimeout(() => setAutoPlayPaused(false), 8000); // Resume after 8s
  };

  const handleNext = () => {
    setAutoPlayPaused(true);
    carouselRef.current?.next();
    setTimeout(() => setAutoPlayPaused(false), 8000);
  };

  const handleSlideChanged = (state: any) => {
    setCurrentSlide(state.currentSlide);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="text-sm sm:text-base md:text-lg font-normal text-[#FF2A2D] tracking-widest uppercase">
            Hardware that earns its place in every room
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#140D2D] mb-3 sm:mb-4 leading-tight">
              Designed in California. Trusted by the world.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#141417BF] max-w-3xl leading-relaxed">
              Reliable performance engineered for modern spaces. Built with precision materials and intelligent technology to deliver seamless experiences in homes, offices, and commercial environments.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg active:scale-95"
              aria-label="Previous slide"
            >
              <MdChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg active:scale-95"
              aria-label="Next slide"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto pb-12">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={!autoPlayPaused}
          autoPlaySpeed={5000}
          infinite
          pauseOnHover
          showDots
          arrows={false}
          itemClass="product-carousel-item"
          dotListClass="product-dot-list"
          onStateChange={handleSlideChanged}
          shouldResetAutoplay={false}
          draggable
          swipeable
        >
          {products.map((product, index) => (
            <div key={product.id} className="h-full">
              <SliderCard
                image={product?.image ?? ''}
                video={product?.video}
                poster={product?.poster || product?.image} // Use poster or fallback to image
                title={product?.title ?? ''}
                description={product?.description ?? ''}
                isActive={currentSlide === index} // Only load when active
              />
            </div>
          ))}
        </Carousel>
      </div>

      <style>{`
        .product-carousel-item {
          padding: 0 8px;
          display: flex;
        }

        @media (min-width: 640px) {
          .product-carousel-item {
            padding: 0 12px;
          }
        }

        @media (min-width: 1024px) {
          .product-carousel-item {
            padding: 0 16px;
          }
        }

        /* Carousel dots styling */
        .product-dot-list {
          bottom: -40px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .product-dot-list li {
          margin: 0 !important;
        }

        .product-dot-list li button {
          background: #D1D5DB !important;
          border-radius: 50%;
          width: 8px !important;
          height: 8px !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none !important;
        }

        .product-dot-list li button:hover {
          background: #9CA3AF !important;
          transform: scale(1.2);
        }

        .product-dot-list li.react-multi-carousel-dot--active button {
          background: #140D2D !important;
          width: 24px !important;
          border-radius: 4px;
        }

        /* Smooth carousel transitions */
        .react-multi-carousel-track {
          gap: 0;
        }
      `}</style>
    </div>
  );
}