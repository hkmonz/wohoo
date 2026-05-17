import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

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
    desc: "Acts as a conversational, multilingual AI assistant for citizens, providing information, managing environments, and facilitating city service access via WooHoo.",
  },
];

const Verdent: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#222] !font-bold text-2xl font-inter md:text-[51px] mb-2 max-w-lg">
          Verdant™: Your City's Central AI Officer
        </h2>
        <div className="mt-8">
          <Carousel
            autoplay
            autoplaySpeed={3000}
            dots={false}
            infinite
            draggable
            slidesToShow={3}
            slidesToScroll={1}
            pauseOnHover
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            className="specialized-carousel"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="px-2">
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
    </section>
  );
};

export default Verdent;