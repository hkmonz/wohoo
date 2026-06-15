
import React, { useState } from "react";
import digitally1 from "../../assets/Images/digitally1.png";
import digitally2 from "../../assets/Images/digitally2.png";
import digitally3 from "../../assets/Images/digitally3.png";
import SpendspereLogo from "../../assets/Icons/Spendsphere.svg";
import SparklehazeLogo from "../../assets/Icons/SmartBeings.svg";
import X3niaLogo from "../../assets/Icons/x3nia.svg";
import BookDemo from "../../Components/Commons/BookDemo";

const cards = [
  {
    id: 1,
    logo: SpendspereLogo,
    title: "The 360-Degree Guest Spending Intelligence",
    subTitle: "Platform for Modern Hotels",
    description: [
     " AI-powered analysis of guest spend patterns.",
     "Identify upsell and cross-sell opportunities.",
     "Personalized offers for high-value guests.",
     "Real-time dashboards and insights.",
     "Easy PMS/POS/CRM integration.",
     "Boost revenue and guest loyalty.",
    ],
    img: digitally1,
    btn: "Book A Demo",
  },
  {
    id: 2,
    logo: SparklehazeLogo,
    title: "The Ultimate Content Management System",
    subTitle:
      "for the Modern Restaurant — Powering Every Digital Menu, Order, and Promotion",
    description: [
      "Contactless food service that’s safe and efficient.",
      "Digital ordering with no reprint costs.",
      "Multilingual support for diverse guests.",
      "Seamless POS for smooth staff coordination.",
      "Easy sign-up, loyalty, and rewards.",
      "Smart analytics to boost sales and service.",
    ],
    img: digitally2,
    btn: "Book A Demo",
  },
  {
    id: 3,
    logo: X3niaLogo,
    title: "X3NIA Complaint & Incident Management",
    subTitle: "Transforming Guest Feedback into Operational Excellence",
    description: [
      "Log and track guest complaints or incidents instantly.",
      "Manage guest compensation with ease.",
      "Real-time alerts for faster resolution.",
      "Daily summaries and trend analytics.",
      "Seamless OPERA PMS integration.",
      "Mobile access for staff on-the-go.",
    ],
    img: digitally3,
    btn: "Book A Demo",
  },
];

const Digitally: React.FC = () => {
    const [open, setOpen] = useState(false);
  
  return (
    <section className="pb-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="bg-[#1e7e5a] text-white font-inter cursor-pointer px-6 py-2 rounded-full font-medium text-sm md:text-base mb-4">
            Hospitality
          </span>
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#222] leading-snug">
            Digital Transformation <br className="hidden md:block" />
            Today's Luxury Hospitality in Style
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col space-y-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`grid grid-cols-1 md:grid-cols-10 items-center gap-10`}
            >
              <div
                className={`md:col-span-4 ${
                  card.id === 2 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div
               
                className={`md:col-span-6 col-span-1 flex flex-col ${
                    card.id === 2 ? "md:items-end md:mx-10 " : "items-start md:mx-10"
                  }`}
              >
                <img
                  src={card.logo}
                  alt={`${card.title} logo`}
                  className="mb-5 w-28 md:w-36"
                />
                <h3 className="text-[#1D6748] font-semibold text-lg md:text-xl mb-2">
                  {card.title}
                </h3>
                <p 
                 className={`text-black font-normal text-xl font-inter md:text-xl mb-5 max-w-md ${
                      card.id === 2 ? "md:text-end text-start" : "text-start"
                    }`}
                >
                  {card.subTitle}
                </p>
                <ul className={`mb-4  text-[#606060] text-base font-inter font-normal space-y-2 ${
                        card.id === 2 ? "md:text-end " : "text-start"
                    }`}>
                  {card.description.map((desc, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-black transition"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setOpen(true)}>
                  <button className="self-start duration-500 font-inter hover:scale-105 md:self-auto px-6 py-3 rounded-full bg-[#1e7e5a] !text-white font-medium text-sm md:text-base shadow hover:bg-[#155c41] transition">
                    {card.btn}
                  </button>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
                <BookDemo open={open} onClose={() => setOpen(false)} />

    </section>
  );
};

export default Digitally;