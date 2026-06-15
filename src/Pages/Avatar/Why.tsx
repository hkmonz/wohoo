import React from "react";
import WhyImg from "../../assets/Images/why.webp";
import Tick from "../../assets/Icons/tick.svg";

const reasons = [
  {
    title: "Proven Living Lab:",
    desc: "Technologies refined in ELISIUM, ready for global deployment.",
  },
  {
    title: "End-to-End Integration:",
    desc: "Seamless platform synergy from room to city scale.",
  },
  {
    title: "Scalable & Adaptable:",
    desc: "Solutions designed for diverse urban environments.",
  },
  {
    title: "Ethical & Secure:",
    desc: "Prioritizing responsible AI and robust data protection.",
  },
  {
    title: "Future-Ready:",
    desc: "Investing in the next generation of urban intelligence.",
  },
];

const Why: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0">
          <img
            src={WhyImg}
            alt="Why SparkleHaze"
            className=""
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <h2 className="text-black font-bold text-xl md:text-[32px] mb-4">
            Why SmartBeings with <br /> Verdant AI & Agents?
          </h2>
          <ul className="space-y-5">
            {reasons.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[#222] text-base md:text-lg font-normal font-inter"
              >
                <img
                  src={Tick}
                  alt="tick"
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <span>
                  <span className="font-semibold">{item.title}</span>{" "}
                  <span className="text-[#606060]">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;