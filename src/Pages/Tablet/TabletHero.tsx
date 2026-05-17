import React, { useState } from "react";
// import HospitalityHeroBg from "/assets/BackgroundImages/hospitalityberobg.webp";
import TabletHeroImg from "../../assets/Images/tablethero.png";
import SamsungLogo from "../../assets/Icons/samsung.svg";
import WoohooLogo from "../../assets/Icons/woohoo.svg";
import BookDemo from "../../Components/Commons/BookDemo";

const TabletHero: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <section
                className="flex justify-center items-center px-4 pt-35 md:pt-30 sm:px-8 h-auto lg:h-[80vh] xl:h-[90vh]"            >
                <div className="w-full max-w-7xl mx-auto  rounded-2xl flex flex-col items-center  px-4 md:px-10 relative">
                    <div className="w-full flex items-center justify-center mb-6">
                        <img src={WoohooLogo} alt="Woohoo Logo" className="w-40 md:w-60 " />
                        <span className="text-lg sm:text-3xl text-[#0F172A] font-inter font-normal">
                            Tablet
                        </span>
                    </div>
                    <div className="absolute right-6 pt-5">
                        <img src={SamsungLogo} alt="Samsung Logo" className="w-20 md:h-8 md:w-auto hidden md:block" />
                    </div>
                    <div className="w-full flex justify-center mb-8">
                        <img
                            src={TabletHeroImg}
                            alt="Tablet Hero"
                            className="relative z-10 "
                        />
                    </div>
                    <button onClick={() => setOpen(true)} className="px-6 py-2 duration-500 hover:scale-105 sm:px-8 sm:py-3 rounded-full bg-[#1e7e5a] !text-white font-inter font-medium text-sm sm:text-base lg:text-lg shadow hover:bg-[#155c41] transition">
                        Book A Demo
                    </button>
                </div>
            </section>
            <BookDemo open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default TabletHero;