import React, { useState } from "react";
import digitally1 from "../../assets/Images/digitallyyaxis.png";
import digitally2 from "../../assets/Images/digitallysoundboard.png";
import digitally3 from "../../assets/Images/digitallylaptop.png";
import SpendspereLogo from "../../assets/Icons/Spendsphere.svg";
import SparklehazeLogo from "../../assets/Icons/logo.svg";
import X3niaLogo from "../../assets/Icons/x3nia.svg";
import BookDemo from "../../Components/Commons/BookDemo";

const cards = [
  {
    id: 1,
    logo: SpendspereLogo,
    title: "WooHoo(R) Personal Wellness Dashboard:",
    subTitle: "Your AI-Powered On-Demand and private booth for Employee/Visitor Recharge and Focus",
    img: digitally3,
    description: [
      "Dynamic AI-powered Wellness Solution",
      "Private, Soundproofed Cocoon with Smart Glass",
      "Automated UV-C Sterilization Cycle",
      "Immersive Sensory Environment",
      "Library of 2000+ Guided Sessions for Mental Health, Anxiety etc",
      "Seamless Cloud-Based Booking System",
      "Enterprise-Ready Content & Usage Management",
    ],
    btn: "Book A Demo",
  },
  {
    id: 2,
    logo: SparklehazeLogo,
    title: "WooHoo(R) SoundBoard:",
    subTitle: "Audio Hub for Your Daily Wellness Rituals by SparkleHaze",
    description: [
      "Expansive Sound Sanctuary with Virtual Surround",
      "Calming Bass Reflex Technology",
      "Crystal-Clear Vocal Clarity for Guided Mindfulness",
      "Effortless Bluetooth Mood Curation:",
      "Dedicated Wellness Media Hub",
      "Simplified Operation for Reduced 'Tech Stress'",
      "Shared Joy and Emotional Connection",
    ],
    img: digitally2,
    btn: "Book A Demo",
  },
  {
    id: 3,
    logo: X3niaLogo,
    img: digitally1,
    title: "WooHoo(R) Y Series For Senior Care:",
    subTitle: "The Proactive AI Companion Redefining Safety, Health, and Connection for Modern Ageing",
    description: [
      "Proactive AI Safety Net with 360° Fall Detection",
      "Predictive Health Analytics for Early Intervention",
      "Integrated 24/7 Telehealth and GP Network",
      "AI-Powered Companion to Combat Loneliness:",
      "Virtual Caregiver for Daily Routine Management",
      "Unified Caregiver and Administrative Dashboard",
      "Voice-First Smart Hub with Universal Accessibility",
    ],
    btn: "Book A Demo",
  },
];


const Digitally: React.FC = () => {
    const [open, setOpen] = useState(false);
  
  return (
    <section className="pb-22 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="bg-[#6366F1] cursor-pointer text-white font-inter px-6 py-3 rounded-full font-medium text-sm md:text-base mb-4">
            Healthcare 
          </span>
          <h2 className="text-center text-2xl md:text-[35px] !font-normal text-[#0F172A] font-inter ">
            Digital Transformation <br /> 
Today’s Healthcare Experience
          </h2>
        </div>
        <div className="flex flex-col space-y-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col md:flex-row items-center justify-between gap-8 `}
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-10 items-center gap-8 ">
                <div
                  className={`md:col-span-4  ${
                    card.id === 2 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-lg w-full object-cover p-10"
                  />
                </div>
                <div
                   className={`md:col-span-6 col-span-1 flex flex-col ${
                    card.id === 2 ? "md:items-end md:mx-10 " : "items-start md:mx-10"
                  }`}
                >
                  
                  <h3 className="text-[#6366F1] font-semibold text-lg font-inter md:text-xl">
                    {card.title}
                  </h3>
                  <h3
                   className={`text-black font-normal text-xl font-inter md:text-xl mb-5 max-w-md ${
                      card.id === 2 ? "md:text-end text-start" : "text-start"
                    }`}
                  >
                    {card.subTitle}
                  </h3>
                  <ul
                   className={`mb-4  text-[#606060] text-base font-inter font-normal space-y-2 ${
                        card.id === 2 ? "md:text-end " : "text-start"
                    }`}
                  >
                    {card.description.map((desc, i) => (
                      <li key={i} className="cursor-pointer hover:text-black">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div>
                  <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-full duration-500 hover:scale-105 my-6 bg-[#6366F1] !text-white font-inter font-medium text-base shadow  transition">
                    {card.btn}
                  </button>
                  </div>
                </div>
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