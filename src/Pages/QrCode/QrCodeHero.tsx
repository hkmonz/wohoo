import React, { useState } from "react";
import QrCodeImg from "../../assets/Images/qrcodes.webp";
import WoohooLogo from "../../assets/Icons/woohoo.svg";
import AppleLogo from "../../assets/Icons/apple.svg";
import AndroidLogo from "../../assets/Icons/android.svg";
import BookDemo from "../../Components/Commons/BookDemo";

const QrCodeHero: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="flex justify-center items-center px-4 sm:px-8 pt-35 md:pt-20 h-auto  lg:h-screen xl:h-90vh "
        >
            <div className="w-full max-w-7xl mx-auto rounded-2xl  px-4 sm:px-6 md:px-12 relative">
                <div className="flex justify-between gap-2 mb-6">
                    <div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={WoohooLogo}
                            alt="Woohoo Logo"
                            className="w-40 md:w-50  "
                        />
                        <span className="text-base md:text-lg lg:text-[28px] text-[#000000] font-normal">QR Code</span>
                    </div>
                    <div className="flex gap-2">
                        <img src={AppleLogo} alt="Apple Store" className="w-8 sm:w-10" />
                        <img src={AndroidLogo} alt="Google Play" className="w-8 sm:w-10" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row ">
                    <div className="flex-1 flex  mb-6 md:mb-0 relative">
                        <img src={QrCodeImg} alt="QR Code App" className="" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
                        <h3 className="font-inter font-normal text-xl sm:text-2xl md:text-[33px] text-black mb-5 max-w-md mx-auto md:mx-0 leading-snug">
                            <span className="font-bold">Redefining luxury</span> in Hospitality
                            with the power of technology
                        </h3>
                        <div className="flex justify-center md:justify-start w-full">
                            <button onClick={() => setOpen(true)} className="
        bg-gradient-to-r from-[#7D58EE] to-[#2B117E]  !text-[19.2px]
        duration-500 hover:scale-105 !text-white !font-normal 
        !px-6 !py-3 !rounded-[16px] shadow transition
    ">
                                Book A Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BookDemo open={open} onClose={() => setOpen(false)} />
        </section>
    );
};

export default QrCodeHero;