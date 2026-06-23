import React, { useState } from "react";
import TabletHeroImg from "../../assets/Images/genai.webp";
import WoohooLogo from "../../assets/Icons/woohoo.svg";
import BookDemo from "../../Components/Commons/BookDemo";

const AvatarHero: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <section
                className="flex justify-center items-center px-4 mb-10 md:mb-20 lg:mb-30 sm:px-8 h-auto pt-35 md:pt-25 lg:pt-35 xl:pt-5 lg:h-screen xl:h-[120vh]"            >
                <div className="w-full max-w-7xl mx-auto  rounded-2xl flex flex-col items-center  px-4 md:px-10 relative">
                    <div className="w-full flex items-center justify-center mb-5">
                        <img src={WoohooLogo} alt="Woohoo Logo" className="w-40 md:w-60 " />
                        <span className="text-lg sm:text-3xl text-[#0F172A] font-inter font-normal">
                            Avatar
                        </span>
                    </div>
                    <div className="absolute right-6">
                    </div>
                    <div className="w-full flex justify-center mb-8">
                        <img
                            src={TabletHeroImg}
                            alt="Tablet Hero"
                            className="w-170 relative -z-10 "
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

export default AvatarHero;