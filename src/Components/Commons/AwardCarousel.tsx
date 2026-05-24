import { Carousel } from 'antd';
import 'antd/dist/reset.css';

import Awardbg1 from "../../assets/BackgroundImages/awardbg1.webp";
import Awardbg2 from "../../assets/BackgroundImages/awardbg2.webp";
import Awardbg3 from "../../assets/BackgroundImages/awardbg3.webp";
import Awardbg4 from "../../assets/BackgroundImages/awardbg4.webp";
import Awardbg5 from "../../assets/BackgroundImages/awardbg5.webp";
import Awardbg6 from "../../assets/BackgroundImages/awardbg6.webp";

const AwardCarousel = () => {
  const slides = [
    { id: 1, background: Awardbg1, title: "Saudi Tourism Authority Award" },
    { id: 2, background: Awardbg2, title: "UAE Tourism Award" },
    { id: 3, background: Awardbg3, title: "Singapore Tourism Board" },
    { id: 4, background: Awardbg4, title: "United Nations Award" },
    { id: 5, background: Awardbg5, title: "Asian Arab Business Award 2025 Bahrain" },
    { id: 6, background: Awardbg6, title: "KPMG Tech Innovator Saudi Arabia 2025 Finalist" },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <Carousel
        autoplay
        autoplaySpeed={4000}
        dots
        dotPosition="bottom"
        className="relative"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-h-[110vh] "
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute left-0 right-0 bottom-10 ">
              <div className="text-center sm:text-left max-w-3xl px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl  text-white  font-normal mb-4 leading-tight">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AwardCarousel;