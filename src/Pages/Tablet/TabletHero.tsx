import React, { useState } from "react";
import TabletHeroImg from "../../assets/Images/tablethero.webp";
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
                    <button onClick={() => setOpen(true)} className="
        bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
        duration-500 hover:scale-105 !text-white !font-normal 
        !px-6 !py-3 !rounded-[16px] shadow transition
    ">
                        Book A Demo
                    </button>
                </div>
            </section>
            <BookDemo open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default TabletHero;