import { useEffect, useRef } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousel = (ReactMultiCarousel as any).default ?? ReactMultiCarousel;

export interface FeatureProduct {
  image?: string;
  title?: string;
  description?: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {    breakpoint: { max: 1024, min: 640 }, // Changed from 768 to 640
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 }, // Changed from 768 to 640
    items: 1,
    slidesToSlide: 1,
  },
};

const isVideoMedia = (src?: string) =>
  !!src && /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile && videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      videoRef.current?.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500"
    />
  );
}

export function FeatureCarousel({ features }: { features: FeatureProduct[] }) {
  const carouselRef = useRef<any>(null);

  if (features.length === 0) return null;

  return (
    <div className="bg-[#ECECFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-sm sm:text-base md:text-2xl font-normal text-[#FF2A2D] tracking-widest uppercase">
              features
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl !font-medium text-[#140D2D] mb-3 sm:mb-4 leading-tight">
                More features to empower hospitality & health care industry
              </h1>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => carouselRef.current?.previous()}
                className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <MdChevronLeft size={24} />
              </button>
              <button
                onClick={() => carouselRef.current?.next()}
                className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <MdChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="pb-12">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            pauseOnHover
            showDots
            arrows={false}
            itemClass="feature-carousel-item"
            dotListClass="feature-dot-list"
            partialVisible={false} // Add this to prevent partial items

          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative h-[600px] sm:h-[500px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden bg-black"
              >
                {feature.image && isVideoMedia(feature.image) ? (
                  <VideoCard src={feature.image} />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title ?? `Feature ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {feature.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="max-w-3xl">
                      <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-2">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-sm sm:text-base text-white/90">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style>{`
        .feature-carousel-item {
          padding: 0 8px;
        }

        @media (min-width: 640px) {
          .feature-carousel-item {
            padding: 0 12px;
          }
        }

        @media (min-width: 1024px) {
          .feature-carousel-item {
            padding: 0 16px;
          }
        }

        .feature-dot-list {
          bottom: -40px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .feature-dot-list li button {
          background: #000 !important;
          border-radius: 50%;
          width: 8px !important;
          height: 8px !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .feature-dot-list li.react-multi-carousel-dot--active button {
          background: #140D2D !important;
          width: 24px !important;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}