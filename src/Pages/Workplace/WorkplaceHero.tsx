import React, { useState } from "react";
import woohooLogo from '../../assets/Icons/logo.svg';
import KingdomImg from '../../assets/Images/workplacekingdom.webp';
import AvatarImg from '../../assets/Images/workplaceavatar.webp';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.webp';
import BookDemo from "../../Components/Commons/BookDemo";
import Cards from "../../Components/Commons/Cards";

const WorkplaceHero: React.FC = () => {
    const [open, setOpen] = useState(false)

    const products = [
        {
            image: KingdomImg,
            logo: woohooLogo,
            title: 'Z Series',
            route: '/z-series',
            // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
            image: WorkplaceMeetingTabletImg,
            logo: woohooLogo,
            title: 'Meeting Room Tablet',
            route: '/meeting-room-tablet',
            // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
            image: AvatarImg,
            logo: woohooLogo,
            title: 'Avatar',
            route: '/avatar',
            // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
    ]
    return (
        <div>
            <section
                className="pt-40 px-4 sm:px-8 min-h-[80vh] md:min-h-screen bg-[#06413F] mb-10"

            >
                <div className="min-w-3xl mx-auto text-center">
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal uppercase tracking-wider text-white `}>
                        Workplace
                    </p>
                    <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-normal leading-tight text-white">
                        Designing Smarter Workplace for Smarter Cities
                    </h1>

                    <button
                        aria-label="Book a demo for digital AI voice assistants in hospitality"
                        onClick={() => setOpen(true)}
                        className="mt-6 sm:mt-8 md:mt-10 duration-500 px-7 py-3 rounded-full bg-white font-inter !text-black font-medium text-lg shadow hover:bg-[#155c41] transition hover:scale-105"
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

export default WorkplaceHero;