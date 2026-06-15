import React, { useState } from "react";
import woohooLogo from '../../assets/Icons/logo.svg';
import YSeriesImg from '../../assets/Images/healthcareyseries.webp';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.webp';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.webp';
import BookDemo from "../../Components/Commons/BookDemo";
import Cards from "../../Components/Commons/Cards";

const HospitalityHero: React.FC = () => {
    const [open, setOpen] = useState(false)

    const products = [
        {
          image: YSeriesImg,
          logo: woohooLogo,
          title: 'Y-Series',
          route: '/y-series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WellnessDashboardImg,
          logo: woohooLogo,
          title: 'Wellness Dashboard',
          route: '/wellness-dashboard',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: SoundbarImg,
          logo: woohooLogo,
          title: 'Soundboard',
          route: '/soundboard',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
    ]
    return (
        <div>
            <section
                className="pt-40 px-4 sm:px-8 min-h-[80vh] md:min-h-screen bg-[#6366F1]"

            >
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal uppercase tracking-wider text-white `}>
              Healthcare
            </p>
                    <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-normal leading-tight text-white">
                        The Future of Connected Healthcare is an AI-Powered Experience.
                    </h1>

                    <button
                        aria-label="Book a demo for digital AI voice assistants in hospitality"
                        onClick={() => setOpen(true)}
                        className="mt-6 sm:mt-8 md:mt-10 duration-500 px-7 py-3 rounded-full bg-white font-inter !text-black !font-normal text-lg shadow  transition hover:scale-105"
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