import { useState, useRef } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { SliderCard } from './SliderCard';
import type { CarouselRef } from 'antd/es/carousel';

export interface CarouselProduct {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
}

export function ProductCarousel({ products }: { products: CarouselProduct[] }) {
  const carouselRef = useRef<CarouselRef>(null);

  if (products.length === 0) {
    return null;
  }

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="inline-block mb-4 sm:mb-6">
          <span className="text-sm sm:text-base md:text-lg font-normal text-[#FF2A2D] tracking-widest uppercase">
            Structure
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#140D2D] mb-3 sm:mb-4 leading-tight">
              Designed & Engineered Just Perfect
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#141417BF] max-w-3xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed molestie urna etiam eget adipiscing. Adipiscing eleifend vitae imperdiet massa volutpat morbi mi ultrices. Id congue sed lacus scelerisque bibendum placerat integer.
            </p>
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

      <div className="max-w-7xl mx-auto">
        <Carousel
          ref={carouselRef}
          autoplay
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
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          className="product-carousel"
        >
          {products.map((product) => (
            <div key={product.id}>
              <div className="px-2 sm:px-3 lg:px-4">
                <SliderCard
                  image={product?.image ?? ''}
                  title={product?.title ?? ''}
                  description={product?.description ?? ''}
                  isActive={true}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style>{`
        .product-carousel .slick-slide {
          padding: 0 8px;
        }

        .product-carousel .slick-list {
          margin: 0 -8px;
        }

        .product-carousel .slick-dots {
          bottom: -40px;
        }

        .product-carousel .slick-dots li button {
          background: #D1D5DB;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }

        .product-carousel .slick-dots li.slick-active button {
          background: #140D2D;
          width: 24px;
          border-radius: 4px;
        }

        .product-carousel .slick-dots li button:before {
          display: none;
        }

        .product-carousel .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 6px;
        }

        @media (min-width: 640px) {
          .product-carousel .slick-slide {
            padding: 0 12px;
          }

          .product-carousel .slick-list {
            margin: 0 -12px;
          }
        }

        @media (min-width: 1024px) {
          .product-carousel .slick-slide {
            padding: 0 16px;
          }

          .product-carousel .slick-list {
            margin: 0 -16px;
          }
        }
      `}</style>
    </div>
  );
}