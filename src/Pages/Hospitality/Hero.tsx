import React, { useState } from "react";
import woohooLogo from '../../assets/Icons/logo.svg';
import xSeriesImg from '../../assets/Images/x-series.webp';
import tabletImg from '../../assets/Images/tablet.webp';
import qrcodeImg from '../../assets/Images/qrcode.webp';
import BookDemo from "../../Components/Commons/BookDemo";
import Cards from "../../Components/Commons/Cards";

const HospitalityHero: React.FC = () => {
    const [open, setOpen] = useState(false)

    const products = [
        {
            image: xSeriesImg,
            logo: woohooLogo,
            title: 'X-Series',
            route: '/x-series',
        },
        {
            image: tabletImg,
            logo: woohooLogo,
            title: 'Tablets',
            route: '/tablet',
        },
        {
            image: qrcodeImg,
            logo: woohooLogo,
            title: 'QR Code',
            route: '/qrcode',
        },
    ]
    return (
        <div>
            <section
                className="pt-40 px-4 sm:px-8 min-h-[80vh] md:min-h-screen bg-[#C0D9CF]"

            >
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal uppercase tracking-wider text-[#1D6748] `}>
              Hospitality
            </p>
                    <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-normal leading-tight text-[#222]">
                        Now experience 
                        the world of{" "}
                        Digital Voice AI
                        Assistants in
                        <span className="text-[#1D6748] "> {" "}
                        hospitality.
                        </span>
                            
                    </h1>

                    <button
                        aria-label="Book a demo for digital AI voice assistants in hospitality"
                        onClick={() => setOpen(true)}
                        className="mt-6 sm:mt-8 md:mt-10 duration-500 px-7 py-3 rounded-full bg-[#1D6748] font-inter !text-white font-medium text-lg shadow hover:bg-[#155c41] transition hover:scale-105"
                    >
                        Book A Demo
                    </button>
                </div>
            </section>

            <BookDemo open={open} onClose={() => setOpen(false)} />
            <div className="max-w-6xl mx-auto relative mt-5 sm:-mt-28 md:-mt-36 lg:-mt-66 px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                            <Cards
                                image={product.image}
                                title={product.title}
                                description=""
                                logoUrl={product.logo}
                                route={product.route}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HospitalityHero;