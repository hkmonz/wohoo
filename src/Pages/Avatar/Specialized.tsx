import React from "react";
import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = (ReactMultiCarousel as any).default ?? ReactMultiCarousel;

const features = [
  {
    title: <div>Room AI <br /> (WooHoo®)</div>,
    desc: "Manages individual space comfort, energy, and convenience.",
  },
  {
    title: <div>BuildingAI <br /> (BMS)</div>,
    desc: "Optimizes entire building systems for efficiency, security, and occupant experience.",
  },
  {
    title: <div>Operational <br /> Agents</div>,
    desc: "Automate city functions like traffic flow, energy grid balancing, waste management, security monitoring, and predictive maintenance.",
  },
];

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 900 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Specialized: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#222] !font-bold text-2xl font-inter md:text-[51px] mb-2 max-w-lg">
          Specialized AI Agents Distributed Intelligence
        </h2>
        <div className="mt-8 pb-4">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            draggable
            pauseOnHover
            showDots={false}
            arrows={false}
            itemClass="specialized-carousel-item"
          >
            {features.map((feature, idx) => (
              <div key={idx}>
                <div className="rounded-xl shadow-sm border border-[#f3f3f3] p-6 flex flex-col min-h-[280px] mb-5">
                  <h3 className="text-[#222] font-medium font-inter text-[23px] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5A6476] font-inter font-normal text-[17px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style>{`
        .specialized-carousel-item {
          padding: 0 8px;
        }
      `}</style>
    </section>
  );
};

export default Specialized;