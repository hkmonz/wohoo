
import React, { useState } from "react";
import SoundBar from "../../assets/Images/soundbar.png";
import Tick from "../../assets/Icons/tick.svg";
import BookDemo from "../../Components/Commons/BookDemo";
import soundLogo from "../../assets/Icons/sound.svg";
import brandLogo from "../../assets/Icons/woohoo.svg";
const features = [
    "2 way soundbar for home theatre and music",
    "Bluetooth audio streaming (reception)",
    "USB interface with MP3/WMA playback and charging function",
    "Reflex & Optical port for connection with LED TVs",
    "HDMI™ with ARC",
    "Integrated DSP (Digital Signal Processor) – for improved sound",
];

const SoundBarHero: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="flex justify-center items-center px-4 sm:px-8  h-auto pt-36 md:pt-25 lg:h-screen xl:h-90vh py-10"
        >
            <div className="rounded-2xl  flex flex-col md:flex-row w-full max-w-5xl mx-auto p-6 md:p-8 gap-8">

                {/* Product Image */}
                <div className="flex-1 px-2 flex border border-[#BDBDBD] rounded-xl justify-center items-center">
                    <img
                        src={SoundBar}
                        alt="SoundBar product"
                        className="max-h-[300px] md:max-h-[400px] object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col relative">

                    <div className="rounded-[2rem] p-6 sm:p-8">
                        {soundLogo && (
                            <div className="flex items-center justify-end mb-6">
                                <img src={soundLogo} alt="Sound logo" className="h-10 w-auto" />
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
                            <div className="flex items-center gap-2">
                                {brandLogo && (
                                    <img src={brandLogo} alt="Brand logo" className="h-10 sm:h-12" />
                                )}
                                <span className="text-xl font-normal">SoundBoard</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 className="font-semibold text-xl font-inter text-[#0F172A] mb-4">
                                    Key Features
                                </h2>
                                <ul className="space-y-2">
                                    {features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 text-[#0F172A] text-base font-normal font-inter"
                                        >
                                            <img
                                                src={Tick}
                                                alt="tick icon"
                                                className="w-5 h-5 flex-shrink-0 mt-1"
                                            />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                    <BookDemo open={open} onClose={() => setOpen(false)} />
                </div>
            </div>
        </section>
    );
};

export default SoundBarHero;