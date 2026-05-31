import { useRef } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Awardbg1 from "../../assets/BackgroundImages/awardbg1.webp";
import Awardbg2 from "../../assets/BackgroundImages/awardbg2.webp";
import Awardbg3 from "../../assets/BackgroundImages/awardbg3.webp";
import Awardbg4 from "../../assets/BackgroundImages/awardbg4.webp";
import Awardbg5 from "../../assets/BackgroundImages/awardbg5.webp";
import Awardbg6 from "../../assets/BackgroundImages/awardbg6.webp";

const Carousel = (ReactMultiCarousel as any).default ?? ReactMultiCarousel;

const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const slides = [
  { id: 1, background: Awardbg1, title: "Saudi Tourism Authority Award" },
  { id: 2, background: Awardbg2, title: "UAE Tourism Award" },
  { id: 3, background: Awardbg3, title: "Singapore Tourism Board" },
  { id: 4, background: Awardbg4, title: "United Nations Award" },
  { id: 5, background: Awardbg5, title: "Asian Arab Business Award 2025 Bahrain" },
  { id: 6, background: Awardbg6, title: "KPMG Tech Innovator Saudi Arabia 2025 Finalist" },
];

const AwardCarousel = () => {
  const carouselRef = useRef<any>(null);

  return (
    <div className="bg-[#FAFAFA] relative">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={4000}
        infinite
        pauseOnHover
        showDots
        arrows={false}
        dotListClass="award-dot-list"
        itemClass="award-carousel-item"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-h-[110vh]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Title */}
            <div className="absolute left-0 right-0 bottom-10">
              <div className="text-center sm:text-left max-w-3xl px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-4 leading-tight">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

     

      <style>{`
        .award-carousel-item {
          position: relative;
        }

        .award-dot-list {
          bottom: 24px !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 0;
          margin: 0;
          list-style: none;
          z-index: 10;
        }

        .award-dot-list li button {
          background: rgba(255, 255, 255, 0.6) !important;
          border-radius: 50%;
          width: 8px !important;
          height: 8px !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .award-dot-list li.react-multi-carousel-dot--active button {
          background: #ffffff !important;
          width: 24px !important;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default AwardCarousel;