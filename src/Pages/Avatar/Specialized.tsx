import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

const features = [
  {
    title: <div>Room AI <br /> (WooHoo)</div>,
    desc: "Manages individual space comfort, energy, and convenience.",
  },
  {
    title: <div>BuildingAI <br /> (BMS) </div>,
    desc: "Optimizes entire building systems for efficiency, security, and occupant experience.",
  },
  {
    title: <div>Operational <br /> Agents</div>,
    desc: "Automate city functions like traffic flow, energy grid balancing, waste management, security monitoring, and predictive maintenance.",
  },
];

const Specialized: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#222] !font-bold text-2xl font-inter md:text-[51px] mb-2 max-w-lg">
          Specialized AI Agents Distributed Intelligence
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

export default Specialized;