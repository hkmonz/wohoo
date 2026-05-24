import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import type { CarouselRef } from 'antd/es/carousel';

export interface FeatureProduct {
  image?: string;
  title?: string;
  description?: string;
}

const isVideoMedia = (src?: string) =>
  !!src && /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

export function FeatureCarousel({ features }: { features: FeatureProduct[] }) {
  const carouselRef = useRef<CarouselRef>(null);

  if (features.length === 0) {
    return null;
  }

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="bg-[#ECECFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-sm sm:text-base md:text-2xl font-normal text-[#FF2A2D] tracking-widest uppercase">
              features
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl !font-medium text-[#140D2D] mb-3 sm:mb-4 leading-tight">
                More features to empower
                hospitality & health care industry
              </h1>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <MdChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#000000] !text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <MdChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          autoplaySpeed={5000}
          dots
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          pauseOnHover
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
          className="feature-carousel"
        >
          {features.map((feature, index) => (
            <div key={index}>
              <div className="group relative h-[420px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden bg-black">
                {feature.image && isVideoMedia(feature.image) ? (
                  <video
                    src={feature.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 "
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title ?? `Feature ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 "
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
            </div>
          ))}
        </Carousel>
      </div>

      <style>{`
        .feature-carousel .slick-slide {
          padding: 0 8px;
        }

        .feature-carousel .slick-list {
          margin: 0 -8px;
        }

        .feature-carousel .slick-dots {
          bottom: -40px;
        }

        .feature-carousel .slick-dots li button {
          background: #000;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }

        .feature-carousel .slick-dots li.slick-active button {
          background: #140D2D;
          width: 24px;
          border-radius: 4px;
        }

        .feature-carousel .slick-dots li button:before {
          display: none;
        }

        .feature-carousel .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 6px;
        }

        @media (min-width: 640px) {
          .feature-carousel .slick-slide {
            padding: 0 12px;
          }

          .feature-carousel .slick-list {
            margin: 0 -12px;
          }
        }

        @media (min-width: 1024px) {
          .feature-carousel .slick-slide {
            padding: 0 16px;
          }

          .feature-carousel .slick-list {
            margin: 0 -16px;
          }
        }
      `}</style>
    </div>
  );
}
