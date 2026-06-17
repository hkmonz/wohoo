import React from "react";
import { Card } from "antd";
import ecosystemCardBg from "../../assets/Images/ecosystemcardbg.png";

const items = [
  "Information Technology",
  "Artificial Intelligence",
  "Architectural Design",
  "Hardware Manufacturing",
  "Real Estate",
  "Healthcare",
  "Hospitality",
  "Government",
];

const Industries: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-[#1e7e5a] text-white font-inter cursor-pointer px-6 py-2 rounded-full font-medium text-sm md:text-base mb-4">
            Workplace
          </span>
        <h2 className="text-center text-2xl md:text-3xl pb-6 !mt-5   font-semibold text-[#222] mb-2 max-w-xl mx-auto">
          Worplace industries we power
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="rounded-lg shadow-lg border-0 flex items-center justify-center min-h-[180px] text-center"
              style={{
                backgroundImage: `url(${ecosystemCardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              bodyStyle={{
                padding: "24px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "120px",
              }}
            >
              <span className="text-white text-base md:text-xl font-medium max-w-44 font-inter leading-tight ">
                {item}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;