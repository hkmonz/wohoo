import React from "react";
import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = (ReactMultiCarousel as any).default ?? ReactMultiCarousel;

const features = [
  {
    title: <div>Omniscient City <br /> Oversight</div>,
    desc: "Integrates all city data for real-time monitoring, analysis, and dynamic optimization of traffic, energy, resources, and emergency response.",
  },
  {
    title: <div>Proactive Predictive <br /> Analytics</div>,
    desc: "Anticipates issues, minimizes disruptions, and enhances safety through intelligent forecasting.",
  },
  {
    title: "Hyper-Personalized Resident Services",
    desc: "Acts as a conversational, multilingual AI assistant for citizens, providing information, managing environments, and facilitating city service access via WooHoo®.",
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

const Verdent: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#222] !font-bold text-2xl font-inter md:text-[51px] mb-2 max-w-lg">
          Verdant™: Your City's Central AI Officer
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
            itemClass="verdent-carousel-item"
          >
            {features.map((feature, idx) => (
              <div key={idx}>
                <div className="rounded-xl shadow-sm border border-[#f3f3f3] p-6 flex flex-col min-h-[280px] mb-5">
                  <h3 className="text-[#222] font-medium  text-[23px] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5A6476]  font-normal text-[17px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style>{`
        .verdent-carousel-item {
          padding: 0 8px;
        }
      `}</style>
    </section>
  );
};

export default Verdent;